---
sidebar_position: 3
---
# Class Diagrams

## Hub Class Diagram

![system_block_diagram](/img/hub.png)

This sequence diagram describes the code package that will be run on the Garden Sensor Array's hub device. Here we have the Broker class that acts as the main class for the hub, 
and it is responsible for controlling the flow of data from the sensors to the database as well as for connecting the hub device to WiFi. It connects to WiFi by having users
enter WiFi credentials while the device is plugged into a computer. These credentials are then written to the Raspberry Pi's config file to allow it to connect to the internet
wirelessly. Broker also has the search_devices() function that scans nearby Bluetooth devices, determines which are unused Garden Sensors, and returns a list of them. The Sensors
are represented by the Sensor class, which stores their id and name. The Sensor class' connect() method then uses that id to connect to its respective sensor. The listen() method will
then be used to recieve data from that sensor and return it as an array of integers representing temperature, moisture, and sunlight. Another class we have is Database, which stores 
credentials that will be used by the Database class' connect() to connect the device to a given user's database table where their plant's data will be written using write_data(). 

## Sensor Array Class Diagram
```mermaid
classDiagram
    SensorMain --> BluetoothBLE
    SensorMain o-- BLECharacteristic 
    SensorMain o-- AdafruitSeesaw
    SensorMain o-- BH1750
    SensorMain --> Wire
    
    class SensorMain{
        -AdafruitSeesaw soilSensor
        -BH1750 lightSensor
        -BLECharacteristic soilCharacteristic
        -BLECharacteristic lightCharacteristic
        setup() void
        loop() void
    }

    class BluetoothBLE{
        +begin() bool
        +end() void
        +advertise() bool
        +stopAdvertise() void
        +setEventHandler(eventType, callback) void
    }

    class BLECharacteristic{
        +BLECharacteristic(uuid, properties, value, valueSize) BLECharacteristic
    }

    class AdafruitSeesaw{
        +begin(address) bool
        +getTemp() float
        +touchRead() uint16_t
    }

    class BH1750{
        +begin(address) bool
        +readLightLevel() float
    }

    class Wire{
        +begin() void
    }
```
This Diagram outlines the basic architecture of the sensor units. SensorMain is the program ran by the sensor units, and it has relationships to several important classes: Adafruit_Seesaw (the soil moisture and temperature sensor), BH1750 (the ambient light sensor), BluetoothBLE (the library for finding and connecting to other Bluetooth BLE devices), and BLECharacteristic (the library for managing BLECharacteristics and how they change). Importantly, SensorMain contains objects of type Adafruit_Seesaw, for representing the soil sensor; BH1750, for representing the light sensor; and BLECharacteristic, which will track the data recorded by the sensors and send data to the hub when there is new information to report. SensorMain does not directly contain any objects of type BluetoothBLE, but it will access functions from that library to initiate the BLE connection.


## Web API Class Diagram

![system_block_diagram](/img/webAPI.png)

The goal of this UML class diagram is to portray the basic architecture of the Garden Sensor Array's Web API. Starting with the first class titled: "Gardeners", this class represents people who have plants and are interested in using the GSA as a tool to aid in their plant health. The class has a constructor function to create more instances as we expect many gardeners to use the GSA product. It is directly connected to the Account class as the gardeners need to create an account in order to use the website and sensor units. This also means that the Account class where user information is created and stored is completely dependent on the gardener. Without a gardener there can not be an account. The Account class has a constructor method to create more instances and also a createAccount() method to trigger the "Create Account Page" for the user on the website. The next class is the SensorUnit class which deals with information such as the sensor id, name, and more. One account can have multiple sensor units but each sensor unit can only have one account. The methods for this class include the constructor and the fetch() method - which requests data from the server. The Server Class is directly related to the Sensor Unit, they communicate with each other to request and send data from the database. It has attributes app:Express because the application will be using Express.js library framework, and PORT: int which signifies the server will be listening at the address we choose. The server does not need a sensor unit to function, but the sensor unit needs a server. Lastly, the server is connected to the class Database which has attributes and methods to connect and write the data the GSA user will view. 