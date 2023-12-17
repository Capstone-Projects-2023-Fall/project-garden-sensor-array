"""This module is the main loop of the hub that facilitates transfer of data from SCUs to the database 

Attributes: 
    HUB_ID (int): Unique number representing the physical hub device
    SENSORS (sensor[]): Array with the Bluetooth id of every connected sensor
"""
import firebase_admin
import time
import requests
import random
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin.firestore import SERVER_TIMESTAMP
from HUB_Class import HUB
from firebase_admin import db
import asyncio
import time
from bleak import BleakScanner, BleakClient
from Bluetooth import read_bt
import threading

from camCheck import exists
import camScript

HUB_ID = 'HUB_1'

def check_connection():
    """This function pings firebase to check if the site is down or (more likely) the hub is offline
    

    Returns:
        Boolean: True if connection successful, False if not
    """
    try:
        response = requests.get("https://firebase.google.com/", timeout=5)
        return True
    except requests.ConnectionError:
        return False 

async def main():
    while(not check_connection()):
        print("hub offline")
        time.sleep(5)

    cred = credentials.Certificate('cred.json')
    app = firebase_admin.initialize_app(cred)

    fs = firestore.client()

    hub_ref = fs.collection(HUB_ID)

    SLEEP_INTERVAL_ADV  = 1
    SLEEP_INTERVAL_POLL = 10

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
        string_list = ['Canary','Junco']
        async_strings = AsyncStringIterator(string_list)

        return async_strings
        # Using async for loop with the asynchronous string iterator
    
    if(exists):

        t1 = threading.Thread(target=camScript.imgCap, args=(HUB_ID, ))
        
        t1.start()

    while(True):
        while(not check_connection()):
            print('hub offline')
            time.sleep(5)

        birds = await get_birds()
        async for bird in birds:

            try:
                sensor_data = await read_bt(bird)
                data = sensor_data.decode().split(',')
            
                temp = data[1] 
                moist = data[0]
                sun = data[2]
                print(f'Temp: {temp}, Moisture: {moist}, Sun: {sun}')
                sens_ref = fs.collection(HUB_ID, bird, "data")
                hub_ref.add(
                        HUB(bird, HUB_ID, temp, moist, sun, SERVER_TIMESTAMP).to_fb()
                )
                sens_ref.add(
                        HUB(bird, HUB_ID, temp, moist, sun, SERVER_TIMESTAMP).to_fb()
                )

                print("updating...")
            except:
                print("No Bird")
    
        #time.sleep(10)
        
if __name__ == "__main__":
    asyncio.run(main())
