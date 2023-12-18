---
title: Frontend Functions
sidebar_position: 1
description: Descriptions of the frontend classes, data-fields, and methods.
---


Frontend API
=============================


## App

**Description:** 
The App file holds all of the react components of the application that are accessible through React Router.


**Data Fields**
- N/A
**Methods**
- N/A



## Register


**Description:**
This is the registration page, where the user can create their account.


**Data Fields:**
- email: String
   - String variable that holds the email address entered in by the user

- password: int
   - Int variable that holds the password entered in by the user. 

- passwordConfirm: int
   - Int variable that needs to match the password entered above to continue. Ensures that the user knows what password they put.

- displayName: String
   - The display name that users get to pick to go by, instead of their email address. 

**Methods** 
`signUp()`
- Takes in the credentials entered in by the user and creates an account for the user in firebase. Once completed, it automatically sends you to the MySensorsPage.






## Login


**Description:**
This is the login page, the first page the user is sent to when typing the url of the website.


**Data Fields**
- email: String
   - String variable that holds the email address entered in by the user

- password: int
   - Int variable that holds the password entered in by the user

**Methods** 
`signIn()`
- Method that signs the user in using the credentials entered in. Also sends you to the MySensorsPage once method is complete.






## NavBar


**Description:** 
The NavBar class represents the navigation bar that will be located at the top of the website (once logged in) and will allow for the user to navigate between differnt pages.


**Data Fields**
- mobileOpen: boolean
   - Variable for mobile adaption of application. Moves navigation bar to the side when screen is a smaller size.


**Methods** 
`logOut:()`
- Function connected to the "Log Out" option located onn the navigation bar. Logs the user out and sends them back to the login page. 

`handleClick:()`
- Function to set the anchor variable to the option that the user clicks on. In this case the only option available is logging out.

`handleClose:()`
- Function to set the anchor varibale, it closes the drawer that is openend when clicking the user icon.






## CardData


**Description:**
Card Data is not a page, but a component that is used on the MySensorsPage. CardData shows the averages of the Hub that is being called. It displays the date, temperature, sunlight, and moisture levels.


**Data Fields** 
- currentHub: String
   - The current hub that CardData is focusing on. This variable is initially sent by MySensorsPage to CardData as a prop.

- sun: int
   - Stores the average sunlight level

- moi: int
   - Stores the average moisture level

- temp: int
   - Stores the average temperature level


**Methods** 
`fetchData()`
- Fetches the data stores in the database, and calculates the averages, and finally setting the correct average to the respective variable.






## IconBox1


**Description:**
IconBox1 is also not a page, but rather a component - similar to CardData. It is placed onto a a card located on MySensorsPage. The purpose of the component is to supply 3 icons that signify the status of how the hub is doing. So if the levels are low - the icons will reflect that. Same with it being in a good range and it being too high.


**Data Fields** 
- currentHub: String
   - The current hub that CardData is focusing on. This variable is initially sent by MySensorsPage to CardData as a prop.
  
- sun: int
   - Stores the average sunlight level

- moi: int
   - Stores the average moisture level

- temp: int
   - Stores the average temperature level 

- readMoistureIcon: 
   - Displays the correct icon depending on the Moisture levels

- readTempIcon: 
   - Displays the correct Icon depending on the Tempearature levels

- readSunlightIcon: 
   - Displays the correct icon depending on the Sunlight levels.
     

**Methods**   
`fetchData()`
- Fetches the data stores in the database, and calculates the averages, and finally setting the correct average to the respective variable. 

`TempLogic()`
- Reads the Temperature level reported by fetchData, and calculates which icon appropriately matches.

`SunlightLogic()`
- Reads the Sunlight level reported by fetchData, and calculates which icon appropriately matches.

`MoistureLogic()`
- Reads the Moisture level reported by fetchData, and calculates which icon appropriately matches. 

`moi_data()`
- Takes the appropriate dataset that was fetched and creates a line graph representing it. This specfic method focusing on moisture.

`tem_data()`
- Takes the appropriate dataset that was fetched and creates a line graph representing it. This specfic method focusing on temperature.

`sun_data()`
- Takes the appropriate dataset that was fetched and creates a line graph representing it. This specfic method focusing on sunlight.



## HubPhoto


**Description:**
Similar to CardData and IconBox1, HubPhoto is not seperate page, but rather a component reliant on the cards of MySensorsPage. Located on the left side of each card, the HubPhoto componenet shows an AI generated Image that matches the name of the card it's on.


**Data Fields**  
- url: String
   - This string field holds the url of the image generated. Once the image is ready for use, the url is set.


**Methods**  
`fetchImageUrl()`
- This method fetches the correct image created, and sets it to the correct card.



## MySensorsPage


**Description:**
This will the page that users will click on in order to get information about their connected hubs. The page will consist of cards - one for each Hub.


**Data Fields** 
- hubname:String
   - The hubname string holds the name enetered in by the user when adding a hub to their account

- sensorName: String
   - The sensorname string holds the name entered in by the user when adding a sensor to an already registered hub of thiers.

- hubCardAmount:int
   - The hubCardAmount is an int variable that counts the amount of hubs are registered to a user's account, this determines how many cards will appear on the page for that user. 

- registerdHubs: Array
   - A string array of the names of all the hubs registered to a user's account. Each name being the title of a card on the page. 

- userHubNames: String
   - This variable tracks which card is which, and lets other components such as CardData and IconBox1, which Hub to focus on. 

- authUser: String
   - This reperesents the currently signed in user. This varaible is necessary as it determines who's account the methods are fetching from.


**Methods** 
`handleAddHubCard()`
- Adds the name entered into the "Add Hub" modal to the list of registeredHubs, also increases the hubCardAmount by 1.

`AddingHub()`
- Method that adds the hub information entered in by the user through the "Add Hub" modal, and creates said hub in firebase real-time database.

`AddingSensor()`
- Method that adds the sensor infromation entered in by the user through the "Add Sensor" modal, and creates said sensor in firebase firestore and real-time database.

`handleClickCard()`
- Method that sends you to the hubPage after clicking on the middle portion of any HubCard. Also sends the correct hubCard name to the hubPage.

`FetchHubs()`
- Method that reads from the firebase real-time database and collects the names of all the hubs under the specfic user's account.

`LoadCards()`
- Loads the cards on MySensorsPage. Each card represents a hub registered on the logged in user's account.




## HubPage


**Description:**
This page holds and displays all the sensors that are connected to the hub selected. It supplies general information, and instructions on how to read and understand the data presenteed on the website.


**Data Fields**  
- currentHub: String
   - Represents the currentHub that the Page is focusing on when trying to collect data from firebase. The value was sent by the MySensorsPage 

- sensCardAmount: int
   - The amount of sensors that are registered to that specfic hub.

- time: int
   - Time variable that is initially set to 0. When the user clicks a different date - the value changes accordingly. 

- authUser: String
   - This reperesents the currently signed in user. This varaible is necessary as it determines who's account the methods are fetching from.

**Methods**  
`today()`
- Sets the time varibale to 1

`week()`
- Sets the time variable to 7

`month()`
- Sets the time variable to 31

`year()`
- Sets the time variable to 365

`FetchSens()`
- Uses the currentHub supplied, and searches the realtime database for all the names of the Sensors under that specifc hub.

`handleClickCard()`
- Method that sends you to the ScuPage after clicking on any SensorCard shown. Also sends the correct SensorCard name to the ScuPage.

`LoadCards()`
- Loads the cards on HubPage. Each card represents a sensor registered on that hub.




## ScuPage


**Description:**
This page shows real time statistics of the specifc sensor chosen. It supplies graphs that show the progression of the temperature, moisture, and sunlight levels. It also has its own IconBox that give a visual sense of how the plants health might be according to the ranges set.


**Data Fields**  
- authUser: String
   - This reperesents the currently signed in user. This varaible is necessary as it determines who's account the methods are fetching from.

- hubSens: String
   - Represents the current sensor that was selected from the HubPage. This sensor is what all the methods will be focusing on, as all the data being pulled is based of this specific sensor. 

- time: int
   - Time variable that is initially set to 0. When the user clicks a different date - the value changes accordingly.  

- sun: int
   - Stores the average sunlight level

- moi: int
   - Stores the average moisture level

- temp: int
   - Stores the average temperature level 

- readMoistureIcon: 
   - Displays the correct icon depending on the Moisture levels

- readTempIcon: 
   - Displays the correct Icon depending on the Tempearature levels

- readSunlightIcon: 
   - Displays the correct icon depending on the Sunlight levels.


**Methods**  
`today()`
- Sets the time varibale to 1

`week()`
- Sets the time variable to 7

`month()`
- Sets the time variable to 31

`year()`
- Sets the time variable to 365  

`fetchData()`
- Fetches the data stores in the database, and calculates the averages, and finally setting the correct average to the respective variable. 

`TempLogic()`
- Reads the Temperature level reported by fetchData, and calculates which icon appropriately matches.

`SunlightLogic()`
- Reads the Sunlight level reported by fetchData, and calculates which icon appropriately matches.

`MoistureLogic()`
- Reads the Moisture level reported by fetchData, and calculates which icon appropriately matches. 

`moi_data()`
- Takes the appropriate dataset that was fetched and creates a line graph representing it. This specfic method focusing on moisture.

`tem_data()`
- Takes the appropriate dataset that was fetched and creates a line graph representing it. This specfic method focusing on temperature.

`sun_data()`
- Takes the appropriate dataset that was fetched and creates a line graph representing it. This specfic method focusing on sunlight.



## Authenticate

**Description:**
Not an accessible component for the user, but necessary for the other components and pages to function properly. The Authenticate component works with firebase to fetch the appropriate user that is currently logged in.


**Data Fields**  
- authUser: String
   - A string variable that is null at first but has it's value set later, once the user is officially logged in with a registered account. The value being their userID from firebase.

**Methods** 
`useEffect()`
- Immediately applies an if statement to check if the user is correctly loggged in, and a userID can be found - if so - return the userID



## Footer


**Description:**
The footer that will be located at the very bottom of the page. Does not serve a function but will be on every page.

**Data Fields**
- N/A
**Methods** 
- N/A



## Layout

**Description:**
The Layout commponent returns both the Navbar and the footer, and leaves space in the middle for other pages to show thier content.

**Data Fields**
- N/A
**Methods** 
- N/A






