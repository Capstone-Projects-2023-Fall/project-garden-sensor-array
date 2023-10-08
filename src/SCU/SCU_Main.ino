/**
 * @file SCU_Main.ino
 *
 * @mainpage SCU Main
 *
 * @section description Description
 * This file describes how the ESP32 SCU is programmed. This program allows for the reading
 * of the Adafruit Stemma Soil Moisture(ASSM) Sensor/Temperature sensor and the BH1750 Lux Sensor.
 *
 *
 * @section circuit Circuit
 * - Where we will connect the pins for the ESP 32
 * - Green LED 1 GPIO Pin
 * - Green LED 2 GPIO Pin
 * - Green LED 3 GPIO Pin
 * - Red LED 1 GPIO Pin
 * - Red LED 2 GPIO Pin
 * - Red LED 3 GPIO Pin
 * - BH1750 SDA Pin 
 * - BH1750 SCL Pin
 * - ASSM Sensor SCL Pin
 * - ASSM Sensor SDA Pin
 *
 * @section libraries Libraries
 * - Adafruit_seesaw.h
 * -- Used in order to be able to utilize ASSM Sensor
 * - Wire.h
 * -- This allows us to be able to access COMPORT for serial data
 * - BH1750.h
 * -- This allows us to be able to utilize the BH1750 sensor
 * - stdio.h
 * -- This allows us to use char type data to string funcitons
 *
 * @section notes Notes
 * - Comments are Doxygen compatible.
 *
 * @section todo TODO
 * - Don't use Doxygen style formatting inside the body of a function.
 *
 * @section author Author
 * - Created by John Woolsey on 03/12/2020.
 * - Modified by John Woolsey on 03/16/2020.
 * - Modified by Alexander Korsunsky on 10/07/2023
 *
 * Copyright (c) 2020 Woolsey Workshop.  All rights reserved.
 */


// Libraries
#include "Adafruit_seesaw.h"
#include <Wire.h>
#include "BH1750.h"
#include <stdio.h>


// Defines


// Types



/** The sensor structure type. */



// Pin Mapping



// Global Constants



// Global Variables
Adafruit_seesaw soil_sensor; ///< The ASSM sensor object used from header
BH1750 light_meter           ///< The BH1750 sensor object for the light sensor
char sensor_data[20] = "";   ///< The character array to put in packet for sunlight data.
char Str_Lux[10];            ///< This character array stores Lux information
char Str_Temp[10];           ///< This character stores the temperature. 
float tempC;                 ///< This float stores the soil_sensor direct input
float lux;                   ///< This float stores the BH1750 lux data
uint16_t capread             ///< This takes the data returned from the touch reader function


/**
 * The standard Arduino setup function used for setup and configuration tasks.
 */
void setup() {
   // Initialize serial bus (Serial Monitor)
   Serial.begin(9600);
   while (!Serial);  // wait for serial connection
   // Configure the generic device
   configureDevice();
}


/**
 * The standard Arduino loop function used for repeating tasks.
 */
void loop() {
   tempC = getASSMtemp();
   capread = getASSMsoilmoisture();
   lux = getBH1750value();

  //Converting floats to string due to Arduino IDE does not take Floats
  dtostrf(lux,4,2,Str_Lux);
  dtostrf(tempC, 4, 2, Str_Temp);
  
  //Taking the data and sending it to the COM port to be read by ReadSensor.py 
  snprintf(sensor_data, 20, "%s %s %d", Str_Temp, Str_Lux, capread);
  Serial.println(sensor_data);
  delay(1000);//wait one second
}


/**
 * Configures and initializes ESP32.
 *
 * Turns on wire, allows for checks on BH1750 and ASSM
 */
void configureDevice() {
   // Configure the device
      Wire.begin(); 
   
  if(!light_meter.begin()){ // check to make sure the light sensor initiates properly. If not, don't run the sketch
    Serial.println("light sensor not found!");
    exit(0); // loops infinitely
  }
  // check to make the soil sensor initiates properly. If not, don't run the sketch
  if(!soil_sensor.begin(0x36)){
    Serial.println("soil sensor not found!");
    exit(0); // loops infinitely
  } 
}


/**
 * Retrieves temperature from ASSM.
 *
 * @param none
 *
 * @return  The result of ASSM temperature.
 */
float getASSMtemp() {
   float tempC = soil_sensor.getTemp();
   return tempC;
}
/**
 * Retrieves soil moisture from some ASSM.
 *
 * @param none
 *
 * @return  The result of ASSM soil moisture.
 */
float getASSMsoilmoisture(){
  uint16_t capread = soil_sensor.touchRead(0);
  return capread
}
/**
 * Retrieves soil moisture from some Bh1750.
 *
 * @param none   
 *
 * @return  The result of BH750.
 */
float getBH1750Value(){
  float lux = light_meter.readLightLevel();
  return lux
}
