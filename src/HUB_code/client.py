"""
Scan/Discovery Async Iterator
--------------

Example showing how to scan for BLE devices using async iterator instead of callback function

Created on 2023-07-07 by bojanpotocnik <info@bojanpotocnik.com>

"""
import asyncio
import time

from bleak import BleakScanner


async def main():
    async with BleakScanner() as scanner:
        print("Scanning...")

        print(f"\nadvertisement packets:")
        n = 5
        async for bd, ad in scanner.advertisement_data():
            print(f"{bd!r} with {ad!r}")
            n -= 1
            if n == 0:
                n = 5
                time.sleep(1)
            

if __name__ == "__main__":
    asyncio.run(main())