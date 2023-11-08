import asyncio
import time
# import contextlib  --  might need later

from bleak import BleakScanner, BleakClient

SLEEP_INTERVAL_ADV  = 1
SLEEP_INTERVAL_POLL = 10

SENSOR_INFO_CHAR_UUID = '0000181b-0000-1000-8000-00805f9b34fb'

async def main():
    async with BleakScanner() as scanner:
        
#        n = 100 # number of packets to reach each sleep interval
        async for bd, ad in scanner.advertisement_data():
            if ad.local_name == 'SCU':
                print('SCU')
                client = BleakClient(bd)
                await client.connect()
                print('connected!')
                break

    characteristics = client.services.characteristics
    for char in characteristics:
        if characteristics[char].uuid == SENSOR_INFO_CHAR_UUID:
            sensor_info_char = characteristics[char] 
        # do some sort of checking here later to only connect to SCUs with a certain
        # char uuid 
    
    while True:
        sensor_data = await client.read_gatt_char(sensor_info_char)
        print(sensor_data.decode())
        time.sleep(SLEEP_INTERVAL_POLL)


if __name__ == "__main__":
    asyncio.run(main())
