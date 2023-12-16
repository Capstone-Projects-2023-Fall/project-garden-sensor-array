---
sidebar_position: 1
---

# System Overview

## Project Abstract
The purpose of this project is to provide community gardeners with an easy way to access valuable, precise, information about their garden (i.e., sunlight, soil moisture, ambient temperature), without requiring any special technical knowledge or knowhow. This will hopefully alieviate some of the difficulty of cultivating larger community gardeners. 

The ultimate goal is  to help make this technology available to the average person, in hopes of reducing the difficulties of growing fresh foods and enabling access to cheap and nutrious options in areas that would otherwise be at risk of becoming food deserts. To do this, we designed this project to be cost-effective, reliable, and easy to use.

## High Level Requirement
GSA is dead simple to get started. All that needs to be done is to put a sensor into the ground and power it on. The sensors utilize Bluetooth to communicate with a central HUB, which then uses WiFi to transmite the data to an online server. The user can then log onto a Web App using their personalized credentials, which then presents the data collected from the sensors in an easy to understand way.

## Conceptual Design
A microcontroller is used to collect data from a light sensor and a soil moisture sensor which is then sent to a local HUB that is in charge of relaying the data to a server so that it can be displayed on a webpage. This data is sent from the sensors to the HUB over Bluetoothm and consists of: an integer representing the amount of sunlight received, an integer representing the soil moisture level, and a float representing the temperature of the soil. The code for the microcontrollers in charge of reading from the sensors is written in C, and the code for the central HUB is written in Python.

In order for the HUB to send data to the server we use MQTT(Message Query Telemetry Transport), which sends the data packets as soon they are retrieved.

Once the server receives the information it stores it using Firebases Web API. When queried from an outside source, the webpage verifies the credentials of the session requesting the information to ensure that it displays the correct users information.

## Background
There are already several commercially available garden sensors, but the options for smaller community gardens are not quite cost-effective, especially ones that allows users to collect and view their data remotely. Instead of having community gardeners take time out of their day to determine whether their garden requires maintenance, with our project they're able able to access that data remotely, allowing them to make more informed descisions. 

A future goal for this project is to enable different types of automation, such as the watering of plants, to further reduce the burden on community gardens, and hopefully encourage more people everywhere to engage with urban agriculture.