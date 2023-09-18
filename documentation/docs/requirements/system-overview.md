---
sidebar_position: 1
---

# System Overview

## Project Abstract
The purpose of this project is to provide the average community gardener with little to no technical knowledge the ability to place sensors in their garden that will provide them with access to valuable information about their garden's conditions i.e., sunlight, soil moisture, and ambient temperature. This will reduce the demands on community gardeners in food-desert areas in Philadelphia by allowing them to work fewer hours while still maintaining proper garden conditions. Ultimately, this will help reduce the fresh food shortage in areas that have less common access to nutrition. We will do this by accomplishing three things, making the sensors cost-effective, reliable, and with high levels of UX design.

## High Level Requirement
To meet those accomplishments, we will focus on having the sensors themselves require the user to simply power them on and install them into the soil where the plants occupy. The sensors will utilize wireless I2C Bluetooth communication to a central module. This central module will then utilize cellular connection to a webpage with MQTT. The webpage when logged in through the central module’s login credentials will display the sensor’s collected information through an easy-to-understand display.

## Conceptual Design
A microcontroller (either Raspberry Pi Pico W or ESP32) will be used to collect data from a light sensor (BH1750) and a soil moisture sensor (Stemma Soil Sensor) and send it to a central module that will be in charge of relaying this data to a server so that it can be displayed on a webpage for the user. This data will be sent over Bluetooth and will consist of: an integer representing the amount of sunlight received, an integer representing the soil moisture level, and a float representing the temperature of the soil. The code for the microcontrollers in charge of reading from the sensors will be written in either MicroPython, Arduino, or C, and the code for the central module will be written in either Python, C, or some combination of both.

In order for the central module to be able to send the data to a server where the webpage will ultimately retrieve the data an display it in a convenient way for the user, we will use MQTT(Message Query Telemetry Transport) that will send the packets as they are retrieved in real time.

Once the server receives the information it will store it using a Web API. When queried from an outside source, the webpage will verify the credentials requesting the information to ensure that it displays the correct central module’s sensor information.

## Background
There are already several companies that make garden sensors but when looking at the amateur gardener level there is no cost-effective sensor that relays its information in a Local Area Network to then a Wide Area Network. With the information being incredibly lightweight, this is a perfect job for microcontrollers to handle. Instead of having gardeners who work at community gardens take their time out of the day to confirm whether their garden requires certain levels of maintenance they can now only spend their working hours on items that are necessary. Another future concept of this device’s implementation is to provide automatic watering and LED lighting.