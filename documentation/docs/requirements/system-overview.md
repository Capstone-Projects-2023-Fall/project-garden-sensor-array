---
sidebar_position: 1
---

# System Overview

## Project Abstract
The purpose of this project is to provide the average community gardener with little to no technical knowledge the ability to place sensors in their garden that will provide them with access to valuable information about their garden's conditions i.e., sunlight, soil moisture, and ambient temperature. This will reduce the demands on community gardeners in food-desert areas in Philadelphia by allowing them to work fewer hours while still maintaining proper garden conditions. Ultimately, this will help reduce the fresh food shortage in areas that have less common access to nutrition. We will do this by accomplishing three things, making the sensors cost-effective, reliable, and with high levels of UX design.

## High Level Requirement
To meet this goal, we will focus on having the sensors simply require the user to power them on and install them into the soil where they desire to collect data. The sensors will utilize wireless Bluetooth communication to a central module, which will then utilize a WiFi to a server to transmite the data. When the user logs into the our Web App using their central module’s login credentials, it will display the sensor’s collected information in an easy to understand way.

## Conceptual Design
A microcontroller (Raspberry Pi Pico W) will be used to collect data from a light sensor (BH1750) and a soil moisture sensor (Stemma Soil Sensor) and send it to a central module that will be in charge of relaying this data to a server so that it can be displayed on a webpage for the user. This data will be sent over Bluetooth and will consist of: an integer representing the amount of sunlight received, an integer representing the soil moisture level, and a float representing the temperature of the soil. The code for the microcontrollers in charge of reading from the sensors will be written in either MicroPython or C, and the code for the central module will be written in Python or C.

In order for the central module to be able to send the data to a server where the webpage will ultimately retrieve the data an display it in a convenient way for the user, we will use MQTT(Message Query Telemetry Transport) that will send the packets as they are retrieved in real time.

Once the server receives the information it will store it using a Web API. When queried from an outside source, the webpage will verify the credentials requesting the information to ensure that it displays the correct central module’s sensor information.

## Background
There are already several companies that make garden sensors, but when looking at options for smaller community gardens there is no cost-effective sensor that allows users to easily collect data from their garden and view it through a web page. Instead of having community gardeners take time out of their day to confirm whether their garden requires certain levels of maintenance, with our project they will be able to reduce their working hours while simulataneously being more productive in the hours they to spend working. Another future functionality for this project is to automate certain processes such as the watering of plants to even further reduce the burden on community gardens and provide areas in need with more fresh food.