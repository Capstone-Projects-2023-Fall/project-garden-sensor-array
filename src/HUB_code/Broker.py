"""This module is the main loop of the hub that facilitates transfer of data from SCUs to the database 

Attributes: 
    HUB_ID (int): Unique number representing the physical hub device
    SENSORS (sensor[]): Array with the Bluetooth id of every connected sensor
"""
import firebase_admin
import time
import requests
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin.firestore import SERVER_TIMESTAMP
from HUB_Class import HUB

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

if __name__ == "__main__":
    while(not check_connection()):
        print("hub offline")
        
    cred = credentials.Certificate('cred.json')
    app = firebase_admin.initialize_app(cred)

    db = firestore.client()

    doc_ref = db.collection("HUBS_ONLINE").document(HUB_ID)

    doc_ref.update({"Temperature": 0, "Moisture": 0, "Sunlight": 0, "SensorID": 0 })
    
    while(True):
        while(not check_connection()):
            print('hub offline')
            time.sleep(5)
            
        doc_ref.update({"Time" : SERVER_TIMESTAMP})
        print("updating...")
        time.sleep(15)
