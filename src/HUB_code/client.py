import asyncio
import time
import threading
import contextlib

from bleak import BleakScanner, BleakClient

SLEEP_INTERVAL_ADV  = 1
SLEEP_INTERVAL_POLL = 10

SENSOR_INFO_CHAR_UUID = '0000181b-0000-1000-8000-00805f9b34fb'
clients = []
mutex = threading.Lock()
sensor_info_chars = []

class AsyncStringIterator:
        def __init__(self, strings):
            self.strings = strings
            self.index = 0

        def __aiter__(self):
            return self

        async def __anext__(self):
            if self.index < len(self.strings):
                result = self.strings[self.index]
                self.index += 1
                return result
            else:
                raise StopAsyncIteration

async def get_birds():
    string_list = ['Canary', 'Junco']
    async_strings = AsyncStringIterator(string_list)

    return async_strings

async def safe_device_connect(device, lock: asyncio.Lock):
    try:
        async with contextlib.AsyncExitStack as stack:

            async with lock:
                client = BleakClient(device, timeout=100.0)
                await client.connect(timeout=10.0)
                print(f'connected {device}')

                return client
            
    except Exception:
        print(f'Couldn\'t connect {device}')
        return None

async def device_scan():
    lock = asyncio.Lock()

    while True:
        birds = await get_birds()
        async with BleakScanner() as scanner:
            
            #n = 100 # number of packets to reach each sleep interval
            async for bd, ad in scanner.advertisement_data():
                if ad.local_name in birds:
                    print(ad.local_name)
                    client = await safe_device_connect(bd, lock)
                    if client is None:
                        break
                    print('connected!')
                    
                    
                    characteristics = client.services.characteristics
                    for char in characteristics:
                        if characteristics[char].uuid == SENSOR_INFO_CHAR_UUID:
                            sensor_info_char = characteristics[char]

                    client_info = (client, sensor_info_char)
                    # need locks to add client to the list because it is also accessed by the main thread 
                    mutex.acquire()
                    clients.append(client_info)
                    mutex.release()
                    
                    break

async def main():
    

    connection_thread = threading.Thread(device_scan)
    connection_thread.start()

    while True:
        mutex.acquire()
        for client, char in clients:
            if not client.is_connected:
                # list comprehension because you cant remove elements from a list while iterating over it
                clients = [(new_client, new_char) for new_client, new_char in clients if (new_client, new_char) != (client, char)]
                mutex.release()
                break

            sensor_data = await client.read_gatt_char(char)
            mutex.release()
            print(sensor_data.decode())
        time.sleep(SLEEP_INTERVAL_POLL)
    


if __name__ == "__main__":
    asyncio.run(main())
