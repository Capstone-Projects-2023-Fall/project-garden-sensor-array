---
sidebar_position: 1
description: Descriptions of the frontend classes, data-fields, and methods.
---

Frontend API
=============================

## App

**Description:**  

The App file is what holds all of the react components of this application. 

**Data Fields** 
- N/A

**Methods** 

`triggerLandingPage(): void` 
- triggers the landing page of the website. The landing page will have a description of what Garden Sensor Array is and it will also include buttons that will trigger the login and resgister pages.

`triggerLoginPage(): void`
- Triggers the login page. 

`triggerRegiserPage(): void` 
- Triggers the sign-up page. 


## NavBar 

**Description:**  

The NavBar class represents the navigation bar that will be located at the top of the website (once logged in) and will allow for the user to navigate between differnt pages. 

**Data Fields** 
- page_id: int 
    - The page_id attribute lets the application know which page it's on/wants to be shown. 
    

**Methods**  
`triggerNextPage(page_id: int): void`
- triggerNextPage takes in the page_id and then triggers the next page chosen (which is decided by the page_id).


## Tabs 

**Description:** 

The tabs will be buttons on the navigation bar. There will be a tab for each page, this includes: home page, my sensors page, account page, and the help page. 

**Data Fields** 
- page_id: int 
    - The page_id attribute lets the application know which page it's on/wants to be shown. 


**Methods**  
`setPage_id(): void`
- changes the page_id value so the correct page chosen can be accessed.


## Main_Content 

**Description:** 

The main content class will focus on what is displayed in the screen underneath the navigaton bar (header) and above the footer. 

**Data Fields** 
- page_id: int 
    - The page_id attribute lets the application know which page it's on/wants to be shown. 
- username: String() 
    - string attribute for the user's username 
- password: String() 
    - string attribute for the user's password
- name: String() 
    - string attrubute for the user's name
- email: String()
    - string attribute for the email the user is linking to the account
- account_id: int
    - the numerical identfication for the user's account
- sensor_id: int
    - the numerical identification for that specifc sensor unit
- sensorCount: int
    - the amount of sensors that is linked to the account
- garden_name: String()
    - the name the user has assigned to the sensor unit
- sensors_linked[]: int 
    - an array of sensor ids, in case the user wants/has more than one sensor unit


**Methods**   
`fetch(): void`
- The fetch function will be used to fetch data about the user and their sensor(s) so it's sub classes can use them.


## HomePage 

**Description:** 

The home page will be the page that the user is immedieately taken to once they have logged in or completed registration. It will show the current weather status and some general tips on plant care. 

**Data Fields**  
- page_id: int 
    - The page_id attribute lets the application know which page it's on/wants to be shown.
- account_id: int
    - the numerical identfication for the user's account
- generalTips[]: Object 
    - an object that has key/value pairs. Each tip will have a paired value

**Methods**  
`random(): void`
- picks random numbers out of a given range. The numbers returned will be used to pick which tip object is displayed 


`displayGeneralTips(): void`
- displays the specific pairs chosen from the generalTips object.


## WeatherCard

**Descriptio:** 

The weather card component will be the weather portion mentioned on the HomePage. The card will constantly be updating, as the weather will reflect the current condions occuring. 

**Data Fields**  
- cardTemp: int 
    - the temperature showing on the weather card 
- condition_descrip: String() 
    - string variable that describes the weather condtions - ex: sunny, raining, cloudy, etc. 


**Methods**   
`refreshWeather(): void` 
- refreshes the weather card so that the card is always reflecting real time api data


## Weather 

**Description:** 

This component works with the weather card, and specifically aims at providing the weather api for the card. 

**Data Fields**   
- cardTemp: int 
    - the temperature showing on the weather card 
- condition_descrip: String() 
    - string variable that describes the weather condtions - ex: sunny, raining, cloudy, etc. 


**Methods**   
`fetch(): void`
- The fetch function will be used to fetch data from the weather api


## MySensorsPage 

**Description:** 

This will the page that users will click on in order to get information about their connected sensors. The page will consits of cards - one for each sensor. 

**Data Fields**  
- lastUpdated: int 
    - holds the calendar date of the last time the user requested a sensor update
- account_id: int
    - the numerical identfication for the user's account
- sensor_id: int
    - the numerical identification for that specifc sensor unit
- sensorCount: int
    - the amount of sensors that is linked to the account
- garden_name: String()
    - the name the user has assigned to the sensor unit
- sensors_linked[]: int 
    - an array of sensor ids, in case the user wants/has more than one sensor unit



**Methods**  
`fetch(): void` 
- calling another fectch function to get the last calendar date that user requested a sensor update. 


## SensorSelection_Card 

**Description:** 

Each card located on the MySensorsPage will have brief info for identification purposes (like sensor id, sensor name, etc). The cards will be clickable and once they are clicked, they lead to their specifc sensor page. 

**Data Fields**   
- account_id: int
    - the numerical identfication for the user's account
- sensor_id: int
    - the numerical identification for that specifc sensor unit
- sensorCount: int
    - the amount of sensors that is linked to the account
- garden_name: String()
    - the name the user has assigned to the sensor unit
- sensors_linked[]: int 
    - an array of sensor ids, in case the user wants/has more than one sensor unit


**Methods**   
`handleClick(): void` 
- Makes the card component clickable and leads to the specific sensor's page


## SpecificSensorPage 

**Description:** 

SpecifcSensorPage component will be the page where the users will see detailed information about the specifc sensor they have selected. The page is broken into 3 sections. The top half will show the last updated stats for water and sunlgiht levels, as well as a button to activate the sensors and get current/realtime statistics. The bottom left will a "show history" button that opens up a datatable. Lastly, the bottom right will have a helpful figure to aid in understanding the data prodcued by the sensors. 

**Data Fields**  
- account_id: int
    - the numerical identfication for the user's account
- sensor_id: int
    - the numerical identification for that specifc sensor unit
- sensorCount: int
    - the amount of sensors that is linked to the account
- garden_name: String()
    - the name the user has assigned to the sensor unit
- sensors_linked[]: int 
    - an array of sensor ids, in case the user wants/has more than one sensor unit
- temp: int 
    - int variable representing the most recent temperature recorded by the sensor
- soil_moisture: int 
    - int variable representing the most recent soil moisture level rercorded by the sensor
- light_level: int 
    - int variable representing the most recent light level recroded by the sensor


**Methods**  
`fetch(): void`
- sends request to the backend to fetch new readings from the sensor

`updateTemp(): int` 

- takes data gathered from fetch and updates the int temp variable

`updateSoil(): int` 
- takes data gathered from fetch and updates the int soil_moisture variable

`updateLight(): int`
- takes data gathered from fetch and updates teh int light_level variable 




## DataTable 

**Description:** 

Activated by the "Show History" Button, this datatable will provide the user with all recorded data from the sensor. The table will be easy to understand and will have content prefrences features to facilitate the process for the user. 

**Data Fields**   
- account_id: int
    - the numerical identfication for the user's account
- sensor_id: int
    - the numerical identification for that specifc sensor unit
- sensorCount: int
    - the amount of sensors that is linked to the account
- garden_name: String()
    - the name the user has assigned to the sensor unit
- sensors_linked[]: int 
    - an array of sensor ids, in case the user wants/has more than one sensor unit
- temp: int 
    - int variable representing the most recent temperature recorded by the sensor
- soil_moisture: int 
    - int variable representing the most recent soil moisture level rercorded by the sensor
- light_level: int 
    - int variable representing the most recent light level recroded by the sensor
- past_temps[]: int 
    - int array that holds previously recorded temperatures 
- past_soil_moistures[]: int 
    - int array that holds previously recorded soil moisture levels
- past_light_levels[]: int
    - int array that holds previously recorded sun light levels


**Methods**  
`Datatable(): void`
- creates a datatable component 

## PlantFigure

**Description:** 

This component will provide a figure paired with a small explanation. The figure will show a diagram that helps explain what the data for water and sunlgiht levels mean, and how they would look when applied to an average plant. The purpose of this figure is to help the user understand what the data we are giving them means. 

**Data Fields:** 
- plant_description: string() 
    - string that describes the purpose of the figure

**Methods** 


## AccountPage 

**Description:** 

The AccountPage is another page that can be accessed through the navigation bar. It will display the user's account information. The page will also have a section where the user can add or delete sensors. 

**Data Fields** 
- username: String() 
    - string attribute for the user's username 
- password: String() 
    - string attribute for the user's password
- name: String() 
    - string attrubute for the user's name
- email: String()
    - string attribute for the email the user is linking to the account
- account_id: int
    - the numerical identfication for the user's account
- sensor_id: int
    - the numerical identification for that specifc sensor unit
- sensorCount: int
    - the amount of sensors that is linked to the account
- garden_name: String()
    - the name the user has assigned to the sensor unit
- sensors_linked[]: int 
    - an array of sensor ids, in case the user wants/has more than one sensor unit


**Methods** 
`fetch(): void`
- fetches any account info saved in the database 


## AddorDelSensor 

**Description:** 

This component will allow for the user to add or delete another sensor to their account. The component will make sure that the user will always have at least one sensor linked to the account at all times. As of right now, there is a max of 3 sensors per account. 

**Data Fields** 
- account_id: int
    - the numerical identfication for the user's account
- sensor_id: int
    - the numerical identification for that specifc sensor unit
- sensorCount: int
    - the amount of sensors that is linked to the account
- sensors_linked[]: int 
    - an array of sensor ids, in case the user wants/has more than one sensor unit


**Methods**  
`addSensor(): void`
- Prompts user to fill out form to create new Garden Class object, also updates sensorCount variable
`delSensor(): void`
- Updates sensorCount and deletes the chosen Garden Class object


## Footer

**Description:** 

The footer that will be located at the very bottom of the page. Does not serve a function but will be on every page. 

**Data Fields** 
- N/A
**Methods**  
- N/A





