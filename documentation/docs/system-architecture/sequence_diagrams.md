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
    participant My Plants Page 
    participant Specific Plant Page

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
    User->>+My Plants Page: Clicks My Plants Tab
    My Plants Page-->>User: Prompts to choose specific plant

    deactivate My Plants Page
    User->>+Specific Plant Page: Chooses plant they want to know about
    Specific Plant Page-->>User: Return
    User->>Specific Plant Page: Clicks "Show History"
    Specific Plant Page-->>Database: Requests all recorded data 
    Database->>Specific Plant Page: Sends data
    deactivate Database 
    Specific Plant Page-->>User: Return

    deactivate Specific Plant Page
    User-->>User: Looking for trends in plant history

```

Not only does the Garden Sensor Array allow for users to get real-time information about thier plant, but it also allows for users to check previously recorded data as well. This becomes useful in events where the user wants to find trends or patterns in their plant's history, epspecially if the plant in question is growing much slower than expected. The User can go to the GSA website and login. Once the credentials that were entered in by the user are verifed with the database, the user will be succesfully logged in. Now, they can select the "My Plants Tab" located at the top of the page. At this point the user will be presented with all the plants(sensor units) they have monitored and can pick the one they specifically want to know more about. When the specifc plant is chosen, the user will be redirected to that specific plant's page. Here, the user will have the option to view all the plant's recorded data by clicking "Show History". This button requests all the appropriate data from the database; and once returned, the page will be able to show the full recorded history of the plant. The user will be able to check for any trends to solve the growth problem.

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

## Use Case #4: Monitoring Garden Conditions
```mermaid
sequenceDiagram
    title Reading Sensor Data From GSA Website

    actor user
    participant GSA Website
    participant GSA Database

    activate user
    user->>GSA Website: Enter Credentials
    activate GSA Website

    GSA Website-->>user: Log in Status

    alt Log in Sucess
        
        GSA Website->>GSA Database: Fetch User Garden Information
        activate GSA Database
        GSA Database-->>GSA Website: User Plant Data
        deactivate GSA Database

        GSA Website->>user: Redirect to User Garden Information Page
        user->>GSA Website: Get Sensor Data from Specified Sensor Module
        GSA Website-->>user: Display Sensor Data for Plants Around Specified Sensor Module

        user->>user: Know What to do for Plants
        
    else Bad Credentials Supplied
        GSA Website->>user: Log in Failure
    end

    deactivate user
    deactivate GSA Website

```
If the user is unable to physically access their garden (maybe they are at work of on vacation) they will want to check the conditions in their garden so they can know what they need to do when they get home or what to tell the person caring for their garden. First, the user will log into the GSA website with their user credentials. If the log in succeeds, the website will fetch the relevant data from a database so that it is ready to be displayed for the user, then redirect them to the page where they can access their garden information. If the log in fails, the user will simply be met with a log in failure message. Assuming the log in succeeded, The user will select the sensor module(s) that they want to read data from and it will be displayed on the webpage. From this, the user will know the conditions of the plants located around each sensor module and can figure out what steps they would like to take to care for their garden.

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
