---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements

* Sensors must be able to track a plant’s sunlight exposure, temperature, and soil moisture
  *	Users must be able to track sunlight so that they can properly ensure the plant's UV intake.
  *	Users must be able to track temperature so that they can properly ensure the plant's ambient temperature is survivable.
  *	Users must be able to track soil moisture so that they can properly ensure the plant's water intake is sustainable.

* System must be able to show info to user while user is far away from the plants
  * Users must be able to provide login credentials to the system to connect it to the internet
  * Users must be able to view all relevant data (sun, moisture, temperature) from the sensors remotely

* Sensors must be able to withstand harsh outdoor conditions
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

