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

* The Garden Sensor and its website are highly available for use.
  * The sensors that are connected must have about 99% uptime no matter the time of day. There is not a limited window of time where users can activate the sensors – nor is there a limit to the number of times they can activate the sensors. The sensors are ready for use at nearly anytime. 
  * The sensors must function accurately in any weather condition as well. Achieving 5% or less in percentage error. The sensors are protected by cases, this allows for them to read the plant’s vitals properly, but without getting damaged from inclement weather.   
  * The website is also available 24/7 for users to login into and use under any circumstance. Weather or timing should not affect the performance or usability of the site and its functions.   

* The Garden Sensor Website must have a very clear and easy to use interface.   
  * Important aspects such as the settings page, the user’s monitored plant(s) page, and more must be clearly presented and easily accessible from all pages.   
  * The website makes it easy for the user to add more monitored plants. The site is carefully organized to minimize confusion on which plant belongs to which garden.
  * The data-table that showcases the plant’s recorded info on the user’s end is easy to use and operate – with clear markings of what the data means. There should be convenient and simple dropdown list buttons to control the preference options allowing the user to pick which data they want to be shown. This boosts the usability and experience for the user.
  * Understandable descriptions and explanations must be supplied on all pages to help ensure the sensors and the website are straightforward.   

* The Garden Sensors and the Website have to be connected to a scalable and secure database.  
  * Rather than having the sensors send updates automatically multiple times per day, the sensors should only send the database data when prompted to/activated by the user. This allows for only necessary info to be held in the database – freeing up its capacity from irrelevant data and maintaining high performance and response time. 
  * The database for our backend holds all the user information from the website as well. Doing so guarantees security. 

