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

    User --)+ Web API: clicks "Add New Sensor"
    Web API->>+Hub: Request nearby BT devices

    Hub->>+Sensor Control Unit 1: lookup_name()
    Sensor Control Unit 1 -->>-Hub: Returns device name
    Hub->>+Sensor Control Unit 2: lookup_name()
    Sensor Control Unit 2 -->>-Hub: Returns device name

    Hub-->>-Web API: list_bt_devices()
    Web API-->>-User: Displays nearby BT device names

    User--)Web API: Selects "Sensor 1" from list
    Web API->>+Hub: Sends "Sensor 1"
    Hub ->>+ Sensor Control Unit 1: connect()
    Sensor Control Unit 1 -->>-Hub: confirm_connect()

    Hub-->>-Web API: Confirm Sensor 1 connection
    Web API-->>User: "Sensor 1 Connected Successfully!"
```

When users want to monitor a new plant or garden, they can do so by pairing a new sensor control unit to one of their hubs.
To start, they can select "add new sensors" on the web app that will send a request to the hub to begin sending requests to 
all nearby Bluetooth devices to ask for their names. After recieving a list of all nearby devices, the hub will return that 
list to the web app that will then prompt the user to select the sensor contol unit they wish to add. The web app then returns
the users selection to the hub that will then initiate a connection with the respective sensor control unit. Upon successful 
connection, the hub returns that the connection was sucessful and the web app will display "Sensor 1 Connected Successfully!"

## Use Case #8: Resetting Password

```mermaid

sequenceDiagram

    Actor User

    User->>+Login Page: Navigates to GSA Login Page

    activate Login Page

    Login Page -->> User: Login Prompt
    User ->> Login Page: Selects "Trouble Logging in?" button
    Login Page -->>+ Account Recovery Page: Redirects to

    Account Recovery Page ->> User: Prompts for Recovery Credentials
    User -->> Account Recovery Page: Enters Credentials
    Account Recovery Page ->>+ User Database: Relays Credentials

    User Database -->> User Database: Validates Credentials
    User Database -->> Account Recovery Page: Confirms Identity
    Account Recovery Page -->>+ Password Change Page: Redirects to

    deactivate Account Recovery Page

    Password Change Page ->> User: Prompts for new Password
    User -->> Password Change Page: Enters New Password
    Password Change Page -->> User Database: Updates User Password
    User Database --) Password Change Page: Confirms Update
    deactivate User Database
    Password Change Page -->> User: Confirmation Message

    Password Change Page -->>- Login Page: Redirects to
    Login Page -->> User: Login Prompt

    User ->> Login Page: Enters Credentials
    Login Page -->>- Account Page: Redirects to
```

If the user finds themselves in a position where they need to reset their password, they are able to do so by navigating to the login page, and selecting the "Trouble Loggin In?" button. This will redirect them to an account recovery page, which prompts them to enter their recovery credentials (Email and secret questioon). After the user enters their credentials, they will be checked against the information stored in the user database. Upon confirmation, the user will be redirected to a page which prompts for an updated password. Once the new password is entered, it is updated in the user database, and the user is again redirected to the login page. Here, the user is able to enter their newly reestablished credentials, and log in, taking them to the account page.
