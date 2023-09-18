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


## Non-functional Requirements 

* On the user’s end there will be a very easy to understand and interactive data table to present the user’s plant history that has been collected so far.  
  * The table will have clear markings and indications of what data it’s showcasing. There will be columns for everything that is being tracked by the sensors, so: sunlight, soil moisture, and ambient temperature.   
  * The user will be able to filter the data entries to facilitate the search for specific information.  
    * The data table will have options to show all of its collected data, data from the past 4 weeks, data from the past week, and data from the past 24 hours.  
    * The data table will also allow the user to filter which columns it’s showing. This gives the user the option to see only what they want to see. If the user only wants to see data collected about soil moisture, then they can filter the data table to do so.  
  * The user will not have to input any query language like SQL in order to filter out and find the specific data that they are looking for. Optimizing user experience is a key aspect of the website. The data table will provide drop down lists where the user can select what columns they want to see and the time frame they want it in.

* The Garden Sensor Website will include a page titled: Plant Encyclopedia. This page will supply the users with basic information about native/local plants in the Philadelphia area.
  * For each plant listed, there will be an accompanying picture, as well as basic instructions on how to take care of it.
    * What type of soil it grows best/worst in, the best/worst temperature for the plant, common pests and vermin, and more.  
  * The plants listed on the page will be organized by skill level. Garden Sensor encourages people of all experience levels to participate in gardening. This feature will list the plants in either: Amateur/Beginner, Moderate, and Expert.
    * For example, the plants that are the easiest to take care of (the least amount of care needed) will be listed under the “Beginner” category.  
