import asyncio
import time
import contextlib

from bleak import BleakScanner, BleakClient

SLEEP_INTERVAL_ADV  = 1
SLEEP_INTERVAL_POLL = 10

async def main():
    async with BleakScanner() as scanner:
        
        n = 5 # number of packets to reach each sleep interval
        async for bd, ad in scanner.advertisement_data():
            print(f"{bd!r} with {ad!r}")
            if bd.name == 'SCU':
                client = BleakClient(bd)
                client.connect()
                await contextlib.AsyncExitStack.enter_async_context(client)
                print('connected!')
                break
            n -= 1
            if n == 0:
                n = 5
                time.sleep(SLEEP_INTERVAL_ADV)

    characteristics = client.services.characteristics
    for char in characteristics:
        print(characteristics[char])
            

if __name__ == "__main__":
    asyncio.run(main())