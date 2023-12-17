[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11818477)
<div align="center">

# Garden Sensor Array
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>

WELCOME TO THE GARDEN SENSOR ARRAY README



## Keywords

Distributed Sensor Networks, Arduino, Raspberry Pi, Urban Agriculture, Community Gardens

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

## Required Resources

**Software Requirements**

o   Python

o   JavaScript

o   MQTT

**Hardware Requirements**

o   Raspberry Pico W


o   BH1750 Sunlight sensors with dome

o   Adafruit Stemma Soil Sensors

o   Soldering Kit

o   Electric Static Discharge (ESD) Mat

o   ESD personnel grounding cable

_____________________________________________________________________________
### SCU SETUP
1. Install the Pico C SDK
2. Create a Pico project in the Server subdirectory located in the SCU_Code directory 
    
- Raspberry Pi's official  instructions for completing both of the above steps can be found [here](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)
    - Please note that these instructions vary depending on what operating system you are running, so double check you are following the correct steps for your operating system 

3. Create a build directory inside your newly created project, then cd into it and run "cmake .."
4. Now you can run "make" and the Server.uf2 executable will be built.
    - Note that you must be inside the build folder to run make
5. Connect the Pico to your computer using a micro-USB cable while holding down the BOOTSEL button to put it into mass storage mode.
6. Now the Server.uf2 exectuable can be copied to the Pico and the BLE server will start running automatically once the copy is finished.
______________________________________________________________________________
### RASPBERRY PI HUB DEVICE SETUP

1. Install the HUB_code folder from our GitHub in the root dir

2. Create a python virtual environment in the root dir
-python -m venv env
-source env/bin/activate

3. Put the service file from our GitHub into /lib/systemd/system 
-start it with this command: sudo systemctl enable garden_sensor.service
______________________________________________________________________________

### Website Setup
INSTALL REQ : make sure to install these on terminal when running the program on vs code
1. npm install bootstrap react-bootstrap 
2. npm install react-router-dom
3. npm install firebase 
4. npm install @mui/material @emotion/react @emotion/styled
5. npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
6. npm install react-native
7. npm install  @material-ui/core
8. npm install --save chart.js react-chartjs-2
9. when ready, cd to gsa-website and type: npm start


## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<td align="center">
        <a href="https://github.com/ak74ub">
            <img src="https://github.com/ak74ub.png" width="100;" alt="ak74ub"/>
            <br />
            <sub><b>Alexander Korsunsky</b></sub>
        </a>
    </td>
<td align="center">
        <a href="https://github.com/tuj91536">
            <img src="https://github.com/tuj91536.png" width="100;" alt="Sam GL"/>
            <br />
            <sub><b>Sam GL</b></sub>
        </a>
    </td>
<td align="center">
        <a href="https://github.com/roda33">
            <img src="https://github.com/roda33.png" width="100;" alt="Regina Oda"/>
            <br />
            <sub><b>Regina Oda</b></sub>
        </a>
    </td>
<td align="center">
        <a href="https://github.com/giotata">
            <img src="https://github.com/giotata.png" width="100;" alt="Giorgio Tatarelli"/>
            <br />
            <sub><b>Giorgio Tatarelli</b></sub>
        </a>
    </td>
<td align="center">
        <a href="https://github.com/gistaana">
            <img src="https://github.com/gistaana.png" width="100;" alt="Gabriel Sta Ana"/>
            <br />
            <sub><b>Gabriel Sta Ana</b></sub>
        </a>
    </td>
<td align="center">
        <a href="https://github.com/noise404">
            <img src="https://github.com/noise404.png" width="100;" alt="noise404"/>
            <br />
            <sub><b>Jimson Whiskeyman</b></sub>
        </a>
    </td>
</table>

[//]: # ( readme: collaborators -end )

If you have any questions please feel free to reach out to: alexander.korsunsky@outlook.com


