---
sidebar_position: 2
---

# System Block Diagram

![system_block_diagram](/documentation/static/img/Garden_Sensor_Array_Sys_Block_Diag.drawio.png)

## Figure 1 High Level Design for Garden Sensor Array

## The avove diagram depicts how the Garden Sensor array will be connecting their flow of information. Starting at level I the sensors, BH1750 and Stemma Soil Moisture Sensor which collect the information of Soil Moisture, Temperature, and Sunlight. Once the sensors report their serial data to the Rasberry Pico W, the device will then send the information via bluetooth to the local hub. The local HUB is a Rasberry Pi 4 which stores the information locally to then be distributed upon collection of data through Wi-Fi to its Web API. The Web API will then display the informaiton through a front end webpage. 
