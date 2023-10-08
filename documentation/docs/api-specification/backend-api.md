---
sidebar_position: 1
description: Descriptions of the backend classes, data-fields, and methods.
---

Backend API
=============================

## Gardener Class

**Class Purpose:**
- Represents the people that wish to register for Garden Sensor Array to monitor their plants through the website via sensors

**Data Fields:**

- *username: String*   -- Username needed to log in
- *email: String*  --  A valid email is needed to register

**Methods:**

- `Constructor(name:String(), email:String())`
  - *Method Purpose:* A constructor function added to the Gardener class to create more instances as more people will likely join GSA.
 
## Account Class

**Class Purpose:**  
- Holds all information about an account stored in the Database

**Data Fields:**

- *username: String()*  --  username needed to log in
- *password: String()*  --  password is needed to log in
- *name: String()*  --  name of the user 
- *email: String()*  --  a valid email is needed to register/log in
- *sensor_id: int*  --  sensor id specific to an account id
- *account_id: int*  --  unique id to easily identify different account/security reasons as well

**Methods:**

- `Constructor(username: String()
password: int
name: String()
email: String()
sensor_id: int
account_id: int)`

  - *Method Purpose:* A constructor function added to Account class to create more instances as more accounts will be made in result of more people joining the GSA website

- `getUsername()`
- `setUsername()`
  - *Method Purpose:* Get and set functions for the username

- `getPassword() ` 
- `setPassword()`
  - *Method Purpose:* Get and set functions for the password

- `getName()`   
- `setName()`
  - *Method Purpose:* Get and set functions for the name

- `getEmail()`
- `setEmail()`
  - *Method Purpose:* Get and set functions for the email

- `getSensorId()`   
- `setSensorId()`
  - *Method Purpose:* Get and set functions for the sensor id

- `getAccountId()`   
- `setAccountId()`
  - *Method Purpose:* Get and set functions for the account id

## AccountLog Class

**Class Purpose:**  
- Handles Account creation, log in, and log off

**Data Fields:**

- *username: String()*  --  needed to log in
- *password: String()*  --  needed to log in
- *email: String()* --  needed to register/make account
- *name: String()*  --  needed to identify the user
- *account_id: int*  --  unique id for each account created

**Methods:**

- `createAccount()`

  - *Method Purpose:* Create an account with the following information and store it in the database to be used for verification, to get, etc

  - *Pre condition:* Valid Email

  - *Parameters*
    - *username: String()*   --  log in username
    - *password: String()*   --  log in password
    - *name: String()*    --  name of user
    - *account_id: int*    --  unique id for ease of identification

  - *Return Values:* None (or a message saying Sign Up has been completed)
  - *Exceptions Thrown:* NullPointerException


- `signIn()`

  - *Method Purpose:* Registered users are able to log in with their username and password

  - *Pre Condition:* Account is made and in the database

  - *Parameters:* 
    - *username: String()*   --  log in username
    - *password: String()*   --  log in password

  - *Return Values:* None (user is taken to dashboard)
  - *Exceptions Thrown:* NullPointException

- `signOut()`

  - *Method Purpose:* Registered users are able to log out of their account

  - *Pre Condition:* Account is made, stored in the database, and is currently logged out

  - *Parameters:* 
    - None

  - *Return Values:* None (user is logged off and sent to the sign in screen)
  - *Exceptions Thrown:* NullPointException

## AccountSettings Class

**Class Purpose:** 
- Handles Account settings, in an event where the user wants to change their credentials

**Data Fields:**

- *username: String()*   --  changeable username
- *password: String()*  --  changeable password
- *name: String()*  --  changeable name

**Methods:**

- `changeUsername()`

  - *Method Purpose:* Change Username of Account

  - *Pre Condition:* An Existing Account

  - *Parameters:*
    - *username: String()* -- username needed for it to be changed

  - *Return Values:* None
  - *Exceptions Thrown:* NullPointerException

- `changePassword()`

  - *Method Purpose:* Change password of Account

  - *Pre Condition:* An Existing Account

  - *Parameters:*
    - *password: String()*  -- password needed for it to be changed

  - *Return Values:* None
  - *Exceptions Thrown:* NullPointerException

- `changeName()`

  - *Method Purpose:* Change name of Account

  - *Pre Condition:* An Existing Account

  - *Parameters:*
    - *name: String()* -- name needed for it to be changed

  - *Return Values:* None
  - *Exceptions Thrown:* NullPointerException

## Garden Class

**Class Purpose:**
- Stores all information gathered from sensors and be able to send information out to the GSA website

**Data Fields:**

- *sensor_id: int*    -   a unique id for every sensor available
- *garden_name: String()*  -  a name for the sensor
- *account_id: int*   -  a unique id for every account
- *soil_moisture: int*    -   soil moisture level gathered by the sensors 
- *temp: int*   -   ambient temperature gathered by the sensors
- *light_level: int*  -  sunlight levels gathered by the sensors

**Methods:**

- `Constructor(sensor_id: int, garden_name: String())`
  - *Method Purpose:* A constructor added to the class as more sensors can possibly be added to a single Account 


- `fetch()`

  - *Method Purpose:* Requests Sensor data from the database

  - *Parameters:*
    - *Url: String()*   --  A URL provided to requests data from

  - *Return Values:* Promise
  - *Exceptions Thrown:* NullPointerException

