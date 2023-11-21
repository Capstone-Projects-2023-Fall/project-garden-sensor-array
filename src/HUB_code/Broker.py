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

HUB_ID = 'HUB_1'

def search_devices():
    """This function searches for nearby bluetooth devices, gets their names, and determines which are SCUs.
    It then returns a list of available SCUs.

    
    Returns:
        sensor[]: an array of all nearby available SCU devices
    """
    devices = []
    return devices

def connect_wifi(name, password):
    """This function edits the hub's config file to pass the user's wifi credentials to it and grant the hub internet access
    

    Returns:
        Boolean: True if connection successful, False if not
    """
    return True

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

    cred = credentials.Certificate('/home/garden/hub_code/cred.json')
    app = firebase_admin.initialize_app(cred)

    fs = firestore.client()

    doc_ref = fs.collection("HUBS_ONLINE").document(HUB_ID)

    doc_ref.set(
        HUB(1, HUB_ID, 3, 4, 5, SERVER_TIMESTAMP).to_fb()
    )

    SLEEP_INTERVAL_ADV  = 1
    SLEEP_INTERVAL_POLL = 10

    SENSOR_INFO_CHAR_UUID = '0000181b-0000-1000-8000-00805f9b34fb'

    async with BleakScanner() as scanner:
        async for bd, ad in scanner.advertisement_data():
            if ad.local_name == 'SCU':
                client = BleakClient(bd)
                print('SCU')
                await client.connect(timeout=100)
                print('connected!')
                break

    characteristics = client.services.characteristics
    for char in characteristics:
        if characteristics[char].uuid == SENSOR_INFO_CHAR_UUID:
            sensor_info_char = characteristics[char] 

    while(True):
        while(not check_connection()):
            print('hub offline')
            time.sleep(5)

        sensor_data = await client.read_gatt_char(sensor_info_char)
        data = sensor_data.decode().split(',')
        
        temp = data[1] 
        moist = data[0]
        sun = data[2]
        doc_ref.update(
                HUB(1, HUB_ID, temp, moist, sun, SERVER_TIMESTAMP).to_fb()
        )

        print("updating...")
        time.sleep(10)
        
if __name__ == "__main__":
    asyncio.run(main())
    
