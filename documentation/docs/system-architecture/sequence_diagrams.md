---
sidebar_position: 2
---
# Use Case Diagrams

## Use Case #1: Browsing Plant Data
```mermaid
sequenceDiagram
    Actor User

    User -->>+ Dashboard: Logs into website
    Dashboard-->>-HUB Page: presses on a specific HUB

   activate HUB Page

    HUB Page-->-SCU Page: presses on a specific SCU

    activate SCU Page
    
    SCU Page-->>+Firebase: Requests for information


    Firebase-->>-SCU Page: Sends Information of specific SCU

    SCU Page-->>SCU Page: Updates Graph/Icons/Averages according to new data given

    SCU Page -->>-User: SCU Page displays information about their plant to User
    
    
```

In an event where the user wants to know more about the condition and health of their plant, they can do so by using Garden Sensor Array's dedicated website. Upon logging in successfully, the website will then gather all HUBS that are associated with the user and have them visible to the user as a list form. All HUBS listed are clickable items and once they are clicked, the user is taken to the specialized HUB page for that specific HUB they have chosen. The HUB Page will then gather all SCU's associated with the HUB and have them shown as list form, akin to the main dashboard. Upon clicking a specific SCU, the user will be taken to the specialized SCU page for that specific SCU they have chosen. The SCU page will then request information about the specific SCU from Firebase, which stores all the information gathered from our sensors. Firebase will then send all the required information to the SCU page and the SCU page responds by updating graphs, averages, and icons according to the new data it has received. After all updates are finalized and fixed visibly within the SCU page, the user is able to see all the information they need about their plant.


## Use Case #2: Monitoring Long Term Plant Growth
```mermaid
sequenceDiagram
    Actor User
    participant Login Page
    participant Database 
    participant My Hubs Page
    participant Specific HubPage
    participant Specific ScuPage

    User->>+Login Page: Clicks login button
    Login Page-->>User: Login prompt
    User->>Login Page: Enters login info
    Login Page->>+Database: Sends info entered
    deactivate Login Page

    Database-->>Database: Verifies login info
    Database-->>User: Successfully logged in
    User->>+My Hubs Page: Sent to My Hubs Page once logged in
    My Hubs Page-->>Database: Requests users registered hubs
    Database->>My Hubs Page: Sends Hubs
    My Hubs Page-->>User: Prompts to choose specific Hub Card
    My Hubs Page->>Specific HubPage: Sent to HubPage according to Hub Chosen
    deactivate My Hubs Page

    Specific HubPage-->>+Database: Requests users registered sensors
    Database->>Specific HubPage: returns Sensors

    Specific HubPage-->>User: Prompts to choose specific Sensor Card
    User->>Specific HubPage: Chooses Sensor Card they want to know about
    Specific HubPage-->>Specific ScuPage: User sent to ScuPage according to Sensor Chosen
    Specific ScuPage-->>User: Return
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
