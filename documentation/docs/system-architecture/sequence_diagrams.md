---
sidebar_position: 2
---
# Use Case Diagrams

## Use Case #1: Browsing Plant Data
```mermaid
sequenceDiagram
    Actor User

    User -->>+ GSA Website: clicks "Plant Data" dropdown list
    GSA Website->>+Plant Database: requests for Plant Information
   
    Plant Database-->>-GSA Website: sends Plant Information
    
    GSA Website->>-Plant Data (Dropdown List): Updates Plant Data Dropdown List according to Database
    activate GSA Website
    activate Plant Data (Dropdown List)
    Plant Data (Dropdown List)-->>-User: Plant Data Dropdown List is shown to the User after update
    
    
```

In an event where the user wants to browse through their Plant data, they can do so by using Garden Sensor Array's dedicated website. In the GSA Website, the user will be given the option to press the "Plant Data" button. By selecting this button, the GSA Website will then request for the current Plant information stored within the Plant Databse. The Plant Database, upon receiving the request, will send out the current Plant information collected from the sensors to the GSA Website. The website will then take this information and update the Plant Data Dropdown list with its corresponding data field. Once the update has been completed, the newly updated Plant Data Dropdown list will be shown to the user for viewing within the GSA Website.


## Use Case #2: Monitoring Long Term Plant Growth
```mermaid
sequenceDiagram
    Actor User
    participant GSA Home Page
    participant Login Page
    participant Database 
    participant My Sensors Page 
    participant Specific Sensor Page

    User->>+GSA Home Page: Accesses Website 
    activate GSA Home Page
    GSA Home Page->>+Login Page: Clicks login button
    Login Page-->>User: Login prompt
    User->>Login Page: Enters login info 
    Login Page->>+Database: Sends info entered 
    deactivate Login Page 
    Database-->>Database: Verifies login info
    Database-->>GSA Home Page: Succesfully logged in
    GSA Home Page-->>User: Return
    deactivate GSA Home Page
    User->>+My Sensors Page: Clicks My Sensors Tab
    My Sensors Page-->>User: Prompts to choose specific sensor

    deactivate My Sensors Page
    User->>+Specific Sensor Page: Chooses sensor they want to know about
    Specific Sensor Page-->>User: Return
    User->>Specific Sensor Page: Clicks "Show History"
    Specific Sensor Page-->>Database: Requests all recorded data 
    Database->>Specific Sensor Page: Sends data
    deactivate Database 
    Specific Sensor Page-->>User: Return

    deactivate Specific Sensor Page
    User-->>User: Looking for trends in plant/sensor history

```

Not only does the Garden Sensor Array allow for users to get real-time information about thier plant, but it also allows for users to check previously recorded data as well. This becomes useful in events where the user wants to find trends or patterns in their plant's history, epspecially if the plant in question is growing much slower than expected. The User can go to the GSA website and login. Once the credentials that were entered in by the user are verifed with the database, the user will be succesfully logged in. Now, they can select the "My Sensors Tab" located at the top of the page. At this point the user will be presented with all the sensor units they have connected and can pick the one they specifically want to know more about. When the specifc sensor is chosen, the user will be redirected to that specific sensor's page. Here, the user will have the option to view all the sensor's recorded data by clicking "Show History". This button requests all the appropriate data from the database; and once returned, the page will be able to show the full recorded history that the sensor took of the plant. The user will be able to check for any trends to solve the growth problem.

## Use Case #3: Accessing Sensor Data in Person
```mermaid
sequenceDiagram

    title Accessing Sensor Data

    actor user
    participant plant
    participant SCU
    participant GSA Database
    participant GSA Website

activate plant


user --> plant: Waters

plant -->+ SCU: Reads condition

SCU --> SCU: Toggles LED on/off

SCU --)+ GSA Database: Writes Data
deactivate SCU

user --> SCU: Observes

GSA Database --)+ GSA Website: Updates
deactivate GSA Database

deactivate plant

```

It isn't always convinient for a user to access their devices while in their garden so, for convenience, the sensor cluster unit is equipped with a LED that changes state based on measured data. When sensor data is read, the unit will decide whether or not to update the LED, and the user need only to look upon its visage to determine whether sufficient gardening has been done. 


## Use Case #4,5,6 : Monitoring Soil Moisture, Light Levels, Temperature

```mermaid
sequenceDiagram
    Actor User
    participant GSA Home Page
    participant Login Page
    participant Database 
    participant My Sensors Page 
    participant Specific Sensor Page

    User->>+GSA Home Page: Accesses Website 
    activate GSA Home Page
    GSA Home Page->>+Login Page: Clicks login button
    Login Page-->>User: Login prompt
    User->>Login Page: Enters login info 
    Login Page->>+Database: Sends info entered 
    deactivate Login Page 
    Database-->>Database: Verifies login info
    Database-->>GSA Home Page: Succesfully logged in
    GSA Home Page-->>User: Return
    deactivate GSA Home Page
    activate My Sensors Page
    User->>+My Sensors Page: Clicks My Sensors Tab
    My Sensors Page-->>User: Prompts to choose specific sensor

    deactivate My Sensors Page
    User->>+Specific Sensor Page: Chooses sensor they want to know about
    Specific Sensor Page-->>User: Return
    User->>Specific Sensor Page: Clicks "Show Daily Recap or Show Weekly Recap"
    Specific Sensor Page-->>Database: Requests last hours/ last weeks data 
    Database->>Specific Sensor Page: Sends data
    deactivate Database 
    Specific Sensor Page-->>User: Return

    deactivate Specific Sensor Page
    User-->>User: Looking for current light levels, soil moisture, and temperature. 

```

The gardener seeks for their daily or weekly data on their sensors page. The database mantains three averages. The weekly, daily, or hourly average of their sensor's readings of light levels, soil moisture, or temperature. Once the gardener reaches the site's page on their sensors, the home page of that sensor will display one of the requested averages from the user in a drop down menu underneath that sensors readings. On default the home page of the sensor will display the daily monitoring. If the user wishes to be able to see the levels locally at the sensor, the sensor will display on their metric otherwise a green or red LED on the sensors status. The threshold of whether its red or green can be set by the user under sensor settings page. 


## Use Case #7: Adding Additional Sensor Clusters
```mermaid
sequenceDiagram

    Actor User
    participant GSA Website
    participant Firebase
    participant Hub
    participant SCU
    
    User -)+ GSA Website: clicks "Add New Sensor"
    GSA Website ->>+ Firebase: Sends sensor registration info
    Firebase->>+Firebase: Associates Sensor with account
    Firebase->>+GSA Website: Sensor Page added
    
    loop
        SCU--)Hub: Sends raw sensor data
        Hub--)Firebase: Organizes sensor data
        Firebase--)GSA Website: Sends processed data
        GSA Website -->> User: Displays relevant plant data
    end
```

When users want to monitor a new plant or garden, they can do so by pairing a new sensor control unit to o their account. First, they type the sensor's serial number and desired name they want to give the sensor (any plant name or identifier). That information goes to Firebase where that sensor is associated with that user's account, at which point a page will be created on the website and sensor data will begin populating it and will update continuously in real time. This sensor data is transmitted from sensors via a Hub device that the user paired beforehand. 
