"""
Scan/Discovery Async Iterator
--------------

Example showing how to scan for BLE devices using async iterator instead of callback function

Created on 2023-07-07 by bojanpotocnik <info@bojanpotocnik.com>

"""
import asyncio
import time

from bleak import BleakScanner

SLEEP_INTERVAL_S = 1

async def main():
    async with BleakScanner() as scanner:
        
        n = 5 # number of packets to reach each sleep interval
        async for bd, ad in scanner.advertisement_data():
            print(f"{bd!r} with {ad!r}")
            n -= 1
            if n == 0:
                n = 5
                time.sleep(SLEEP_INTERVAL_S)
            

if __name__ == "__main__":
    asyncio.run(main())