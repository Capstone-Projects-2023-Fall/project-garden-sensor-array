---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements

* Users will be able to connect one or more sensors to the hub device using bluetooth
  * Users will be able to pair sensors to a hub by pressing buttons on each device simultaneously
  * The device will provide some kind of LED confirmation of successful pairing
  * Alternatively, sensors could come pre-paired to the hub

* The hub will be able to recieve and interpret signals from the sensors
  * Sensors will periodically turn on and send readings to the hub device
  * Hub will interpret the signals and prepare them to be sent as readable information to the database

* There will be a database that can store user credentials and plant data sent from the hub device
  * The database will include authentication information like user names and passwords
  * It will also store historical light and moisture data collected by the user's sensors

* Users will be able to log in to a front-end web app that provides various utilities
  * Upon logging in, users can connect the hub to their PC to provide network credentials
  * The hub will then be able to connect to the user's WiFi to transmit data from sensors to the database
  * The web app will also display the user's plants' recent light and moisture data from the database
 
* Sensor will be able to withstand harsh outdoor conditions
  * Sensors must be waterproof, as well as be able to operate under a wide range of temperatures
  * The sensors must also be secured in some way to prevent various critters from displacing it
