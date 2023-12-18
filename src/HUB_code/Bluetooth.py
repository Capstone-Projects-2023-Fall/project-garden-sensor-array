import asyncio
import bleak
from bleak import BleakScanner, BleakClient

async def read_bt(scu):
    """This function turns a list of sensors that are linked to the hub into an asyncronously iterable list
        
        Parameters:	
            scu (String): Unique name used to specify what SCU to listen to

        Returns:
            Boolean: AsyncStringIterator version of list of sensors
    """

    SENSOR_INFO_CHAR_UUID = '0000181b-0000-1000-8000-00805f9b34fb' # The characteristic id for the sensor data as advertised by SCU
    
    try:
        async with BleakScanner() as scanner:
            async for bd, ad in scanner.advertisement_data(): # loop over all nearby bluetooth devices 
                if ad.local_name == scu: # if name advertised is same as SCU name specified
                    client = BleakClient(bd)
                    print(scu)
                    await client.connect(timeout=100) #connects to the client SCU
                    print(f'connected {scu}!')
                    break
        
        characteristics = client.services.characteristics
        for char in characteristics:
            if characteristics[char].uuid == SENSOR_INFO_CHAR_UUID: # looks for chracteristic that advertises sensor data
                sensor_info_char = characteristics[char] 
        
        sensor_data = await client.read_gatt_char(sensor_info_char) # reads data from characteristic
        await client.disconnect() # disconnects to allow connection to a new SCU
        print(f'disconnected {scu}! Data: {sensor_data}')
    except Exception as e: # fails if unable to connect for whatever reason
        print(f"An error occurred: {e}")

    return sensor_data
