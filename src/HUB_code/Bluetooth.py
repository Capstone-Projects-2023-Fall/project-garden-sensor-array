import asyncio
import bleak
from bleak import BleakScanner, BleakClient

async def read_bt(scu):
    SENSOR_INFO_CHAR_UUID = '0000181b-0000-1000-8000-00805f9b34fb'
    
    try:
        async with BleakScanner() as scanner:
            async for bd, ad in scanner.advertisement_data():
                if ad.local_name == scu:
                    client = BleakClient(bd)
                    print(scu)
                    await client.connect(timeout=100)
                    print(f'connected {scu}!')
                    break
        
        characteristics = client.services.characteristics
        for char in characteristics:
            if characteristics[char].uuid == SENSOR_INFO_CHAR_UUID:
                sensor_info_char = characteristics[char] 
        
        sensor_data = await client.read_gatt_char(sensor_info_char)
        await client.disconnect()
        print(f'disconnected {scu}! Data: {sensor_data}')
    except Exception as e:
        print(f"An error occurred: {e}")

    return sensor_data
