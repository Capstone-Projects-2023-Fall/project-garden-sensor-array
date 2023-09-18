[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11818477)
<div align="center">

# Garden Sensor Array
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Distributed Sensor Networks, Arduino, Raspberry Pi, Urban Agriculture, Community Gardens

## Project Abstract

The purpose of this project is to provide the average community gardener with little to no technical knowledge the ability to place previously implemented sensors in their garden that will notify them through a webpage, sensor information related to gardening i.e., sunlight, soil moisture, and ambient temperature. Through achieving this we will be able to reduce the working hours of community gardeners in food-desert areas in Philadelphia. This will help reduce the fresh food shortage in areas that have less common access to nutrition. We will do this by accomplishing three things, making the sensors cost-effective, reliable, and with high levels of UX design.

## High Level Requirement

To meet those accomplishments, we will focus on having the sensors themselves require the user to simply power them on and install them into the soil where the plants occupy. The sensors will utilize wireless I2C Bluetooth communication to a local unit. This local unit will then utilize cellular connection to a webpage with MQTT. The webpage when logged in through the local unit’s login credentials will display the sensor’s collected information through an easy-to-understand display.

## Conceptual Design

The sensors will be using Raspberry Pico W (microcontroller) hardware to be able to retrieve and send their sensors (BH1750 and Stemma Soil Sensor) information to another Raspberry Pico W. They will send this information through packets containing the following integers of sunlight, soil moisture, and temperature. All of the software will utilize python and several libraries that are already made for the sensors and Bluetooth capabilities.

In order for the local unit to be able to publish the information to the webpage, we will use MQTT(Message Query Telemetry Transport) that will send the packets as they are retrieved in real time.

Once the webpage receives the information it will store it using a Web API on a file server. When queried from an outside source, the webpage will verify the credentials requesting the information to ensure that it displays the correct local unit’s sensor information.
## Background

There are already several companies that make garden sensors but when looking at the amateur gardener level there is no cost-effective sensor that relays its information in a Local Area Network to then a Wide Area Network. With the information being incredibly lightweight, this is a perfect job for microcontrollers to handle. Instead of having gardeners who work at community gardens take their time out of the day to confirm whether their garden requires certain levels of maintenance they can now only spend their working hours on items that are necessary. Another future concept of this device’s implementation is to provide automatic watering and LED lighting.

## Required Resources

·         Software Requirements

o   Python

o   Web API JavaScript

o   MQTT

·         Hardware Requirements

o   (3) Raspberry Pico W

o   (1) Cellular Data plan

o   (2) BH1750 Sunlight sensors with dome

o   (2) Adafruit Stemma Soil Sensors

o   Soldering Kit

o   Electric Static Discharge (ESD) Mat

o   ESD personnel grounding cable

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<td align="center">
        <a href="https://github.com/ak74ub">
            <img src="https://avatars.githubusercontent.com/u/76227413?v=4" width="100;" alt="ak74ub"/>
            <br />
            <sub><b>Alexander Korsunsky</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/tuj91536">
            <img src="https://avatars.githubusercontent.com/u/74029318?v=4" width="100;" alt="Sam GL"/>
            <br />
            <sub><b>Sam GL</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/roda33">
            <img src="https://avatars.githubusercontent.com/u/112010522?v=4" width="100;" alt="Regina Oda"/>
            <br />
            <sub><b>Regina Oda</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/giotata">
            <img src="https://avatars.githubusercontent.com/u/74078503?v=4" width="100;" alt="Giorgio Tatarelli"/>
            <br />
            <sub><b>Giorgio Tatarelli</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/noise404">
            <img src=" https://github.com/noise404.png" width="100;" alt="noise404"/>
            <br />
            <sub><b>Jimson Whiskeyman</b></sub>
        </a>
    </td></tr>
</table>

[//]: # ( readme: collaborators -end )
