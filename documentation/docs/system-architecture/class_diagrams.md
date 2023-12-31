---
sidebar_position: 3
---
# Class Diagrams

## Hub Class Diagram

```mermaid
classDiagram
    Broker --> Bluetooth
    Broker --> HUB_Class
    Broker ..> cred
    
    Broker : +int HUB_ID
   
    Broker: +check_connection()
    Broker: +get_birds()

    class Bluetooth{
      +read_bt()
    }
    class HUB_Class{
      +String SensorID
      +String AccountID
      +Double Temperature
      +Double Moisture
      +Double Sunlight
      +Timestamp Time
      +to_fb()
    }
    class cred{
      -Dict credentials
    }
```

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
    Server --> btstack 
    Server --> seesaw
    Server --> bh1750
    
    class Server{
        +uint16_t soil_moisture
        +float tempC
        +float lux
        -le_setup() void
        -heartbeat_handler(timer_source) void
        -packet_handler(packet_type, channel, packet, size) void
        -att_read_callback(connection_handle, att_handle, offset, buffer, buffer_size)
        -att_write_callback(att_handle, buffer, buffer_size)
        -getASSMsoilmoisture() void
        -getASSMtempC() void
        -getBH1750lux() void
        -write_sensor_data() void
        
        main() int
    }

    class btstack{
        
    }

    class seesaw{
        -int SEESAW_ADDR
        -seesaw_read(reghigh, reglow, buffer, num, delay) bool
        +seesaw_begin() bool
        +seesaw_get_temp() float
        +seesaw_touch_read(pin) uint16_t
    }

    class bh1750{
        -int BH1750_ADDR
        -uint8_t BH1750_MODE
        -uint8_t BH1750_MTREG
        +uint8_t BH1750_DEFAULT_MTREG
        +enum Mode
        +bh1750_begin(mode) bool
        +bh1750_setMTreg(MTreg)
        +bh1750_read_lux() float
    }
```
This Diagram outlines the basic architecture of the program ran by the Sensor Contrul Units. Server is the main entry point for the program, and it is primarily responsible for reading the connected sensors and sending the data to a client. Server has relationships to several important libraries: seesaw (for interacting with the soil moisture and temperature sensor), bh1750 (for interacting with the the ambient light sensor), and btstack (the library for implementing Bluetooth Low Energy Functionality). Notably, the btstack library provides the funtionality implemented by the functions le_setup (configures advertisements and enables BLE), heartbeat_handler (called on a set interval to check the status of the BLE server), packet_handler (receives Bluetooth packets and decides what actions to take), and att_read/write_callback (triggered when a client issues a read or write request to the BLE server). Importantly, Server has association relationships with the libraries seesaw and bh1750 because it does not actually contain objects of type seesaw or bh1750, as the functions provided by the libraries allow direct access to reading the sensors without the explicit use of a datatype to represent them. Similarly, Server does not directly contain any objects of type btstack, but it will access functions from that library to initiate the BLE connection and handle BLE events.

## Web API Class Diagram

```mermaid
classDiagram

App o-- Login
App o-- Register
Login o-- Authenticate
Register o-- Authenticate
Authenticate o-- Navbar
Authenticate o-- MySensorsPage

MySensorsPage o-- HubPage
MySensorsPage o-- CardData
MySensorsPage o-- HubPhoto
MySensorsPage o-- IconBox1

MySensorsPage o-- HubPage
HubPage o-- ScuPage 



class App { 
}

class Register {
    +String: email
    -Int: password
    -Int: passwordConfirm
    +String: displayName
    +signUp() 
}

class Login {
    +String: email
    -Int: password
    +signIn() 
}

class Authenticate {
    +String: authUser
    +useEffect() 
}

class Navbar {
    +Boolean: mobileOpen
    +logOut()
    +handleClick()
    +handleClose()
}

class MySensorsPage {
    +String: hubName
    +String: sensorName
    +String: userHubNames
    +String: authUser
    +Int: hubCardAmount
    +handleAddHubCard()
    +AddingHub()
    +AddingSensor()
    +handleClickCard()
    +FetchHubs()
    +LoadCards() 
  
}


class CardData {
    +String: currentHub
    +Int: sun
    +Int: moi
    +Int: temp
    +FetchData()
    +TempLogic()
    +SunlightLogic()
    +MositureLogic()
    +moi_data()
    +sun_data()
    +temp_data() 
}


class IconBox1 {
    +String: currentHub
    +Int: sun
    +Int: moi
    +Int: temp
    +String: readMoistureIcon
    +String: readTempIcon
    +String: readSunlightIcon
    +FetchData() 
}


class HubPhoto {
    +String: url
    +fetchImageUrl() 
}


class HubPage {
    +String: currentHub
    +String: authUser
    +Int: sensCardAmount
    +Int: time
    +today()
    +week()
    +month()
    +year()
    +FetchSens()
    +handleClickCard()
    +LoadCards()

} 

class ScuPage {
    +String: authUser
    +String: hubSens
    +Int: sun
    +Int: moi
    +Int: temp
    +String: readMoistureIcon
    +String: readTempIcon
    +String: readSunlightIcon
    +FetchData()
    +TempLogic()
    +SunlightLogic()
    +MoistureLogic()
    +moi_data()
    +sun_data()
    +temp_data()

}


```

Pictured above is the UML Class Diagram for the frontend portion of the website. These are all the components that the user will directly view and interact with. The diagram is component focused as the website itself is written using React.js - which is component based. The first component at the very top is "App.js". This file is what holds all the components of the entire website, it is necessary in all react applications. This is the reason why the components underneath all eventually flow towards App.js - as it all the components are stated there. Once the user is officially logged in or registered they will be directed to the fundamental part of the website. It then leads to Authenticate, which gives the rest of the components the correct user to fetch and write data to. The next component titled My Hubs Page (refered to as My SensorsPage in the code) will cover the most important feature of the website. This page will showcase at the users's hub cards - each of which use the components: CardData, HubPhoto, and IconBox1. Each hub linked to thier account will have their own card. When any hubcard is clicked it brings the user to that specific HubPage. The HubPage acts as a portal and displays all the sensors registered to that hub, all of their sensor cards being clickable as well. The specific sensor page shows the last updated statistics that were recorded. A section with 3 dynamic icons that represent the status of the sensors moisture, temperature, and sunlight levels will be present at the top right. It gives a visual representation of the data progression as well by showcasing 3 line graphs - one for each category. The navigation bar and the footer stay the same no matter what, but the main component is what will change. When viewing this class diagram the relationships between the components are visible, and they all use aggregation. This is because without the parent the child is non- existent. For example, you can only get to a specific sensor's data table by accessing the "My Sensors Page" first, otherwise it is inaccessible/ unattainable.

