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
 * - BH1750.h
 * -- This allows us to be able to utilize the BH1750 sensor
 * - stdio.h
 * -- This allows us to use char type data to string funcitons
 * - Arduino.h
 * -- This library will handle any specific arduino calls.
 * - SPI.h
 * -- This library allows for a dependency for the soil sensor bust IO library
 * - BLEDevice.h
 * -- This library allows for the device ESP32 to utilize the Bluetooth Low Energy (BLE)
 * - BLEUtils.h
 * -- This library allows for BLE to utilize bluetooths functions. 
 * - BLEServer.h
 * -- This library allows for BLE to create client and server functions. 
 * - BLEDescriptor.h
 * -- This library allows for BLE to define their bluetooth charecteristics to function. 
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
 * 
 */

#include <Arduino.h>  
#include <stdio.h>
#include <SPI.h>
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#include <BLEDescriptor.h>

// sensor libraries
#include "Adafruit_seesaw.h"
#include "hp_BH1750.h"

// 
#define UUIDSERVICE     "2aba97e0-10b4-4a9f-bb43-35e02e6eb594"
#define UUIDCHAR1       "f524c885-8158-49b7-9ff6-0d653c3cafb5"


// These are not needed right now. keeping them commented in case we need them in the future.
// #define UUIDSERVER      "efab93a7-3e27-4c38-a9cc-f768cfc75af6"  // not sure this is needed 
// #define UUIDCHAR2       "0308e66e-8096-4b60-b077-892bc738e8f1"
// #define UUIDCHAR3       "497b9303-3658-45f7-85ac-e1caadb066fa"

// Global Variables
/// characteristics for our sensors
/// need to be defined globally
BLECharacteristic *sensor_data;

/// sensor types
Adafruit_seesaw     soil_sensor;
hp_BH1750           light_sensor;

/// tells us if there's a connection
bool read_sensors = false;

/// strings for formatting sensor data
#define SENSOR_STR_LEN  25
#define LUX_STR_LEN     10
#define TEMP_STR_LEN    10

char sensor_str[SENSOR_STR_LEN]; 
char lux_str[LUX_STR_LEN];
char temp_str[TEMP_STR_LEN];

//class
/// this is a class for overriding the onConnect() function found in BLEServerCallbacks
class ConnectionCallback: public BLEServerCallbacks{
    //// we don't want to read sensors unless there is a connection
    void onConnect(BLEServer *pserver){
        read_sensors = true;
    }

    // something went wrong
    void onDisconnect(BLEServer *pserver){
        read_sensors = false;
    }
};


//prototypes
void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux);
void getASSMsoilmoisture(uint16_t *soil_moisture);
void getASSMtempC(float *soil_tempC);
void getBH1750lux(float *lux);
void getSensorData(uint16_t *soil_moisture, float *soil_tempC, float *lux); 


/**
 * The standard Arduino setup function used for setup and configuration tasks.
 */
void setup() {
    Serial.begin(115200);

    // start with bluetooth set up
    BLEDevice::init("Garden_Server");
    BLEServer *server = BLEDevice::createServer();
    server->setCallbacks(new ConnectionCallback());

    // service -- handles characteristics
    BLEService *service = server->createService(UUIDSERVICE);
    
    // characteristics
    sensor_data = service->createCharacteristic(UUIDCHAR1, ESP_GATT_CHAR_PROP_BIT_READ | ESP_GATT_CHAR_PROP_BIT_NOTIFY);
    // soil_temp_char = service->createCharacteristic(UUIDCHAR2, ESP_GATT_CHAR_PROP_BIT_READ | ESP_GATT_CHAR_PROP_BIT_NOTIFY);
    // lux_char = service->createCharacteristic(UUIDCHAR3, ESP_GATT_CHAR_PROP_BIT_READ | ESP_GATT_CHAR_PROP_BIT_NOTIFY);

    // nothing to see here
    sensor_data->setValue(0);
    // soil_temp_char->setValue(0);
    // lux_char->setValue(0);

    // here we go
    service->start();

    // start advertising
    BLEAdvertising *advertisement = server->getAdvertising();
    advertisement->start();

    // looks like bluetooth is set up. lets try to start the sensors
    if( !soil_sensor.begin(0x36) || !light_sensor.begin(BH1750_TO_GROUND) ) {
        Serial.println("Sensor error!");
        while(1); // hault program, something's not right
    }

    Serial.println("Sensors initialized!");
}

/**
 * The standard Arduino loop function used for repeating tasks.
 */
void loop() {
    uint16_t soil_moisture;
    float soil_tempC;
    float lux;

    if(read_sensors) {
        // read data from sensors into variables declared above
        // error handling for the sensors is handled internally
        getSensorData(&soil_moisture, &soil_tempC, &lux);

        // merge sensor data into a neat string for output
        format_sensor_data(&soil_moisture, &soil_tempC, &lux);
        sensor_data->setValue(sensor_str);
        
        // im ready
        sensor_data->notify();
    }

    // do it again
    sleep(10);
}

/// @brief Takes data read by theuse sensors and formats it into a string
/// which will be used to update the value of the sensor_data characteristic
/// @param soil_moisture 
/// @param soil_tempC 
/// @param lux 
void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux) {
    dtostrf(*soil_tempC, 4, 2, temp_str);
    dtostrf(*lux, 4, 2, lux_str);
    
    snprintf(sensor_str, 25, "%d, %s, %s", *soil_moisture, temp_str, lux_str);
}

/// @brief Reads soil moisture from sensor and checks to ensure the return value is
/// within the expected range
/// @param soil_moisture Reference to an int for storing the soil moisture
void getASSMsoilmoisture(uint16_t *soil_moisture) {
    *soil_moisture = soil_sensor.touchRead(0);
    if(*soil_moisture < 200 || *soil_moisture > 2000) {
        Serial.println("ASSM Error!");
        while(1);
    }
}

/// @brief Reads the temperature in degreees celsius from the soil sensor
/// and checks to make sure the reading is within the expected range
/// @param soil_tempC Reference to a float for storing the temperature in degrees celsius
void getASSMtempC(float *soil_tempC) {
    *soil_tempC = soil_sensor.getTemp();
    if(*soil_tempC < 0) {
        Serial.println("ASSM Temperature Error!");
        while(1);
    }

}

/// @brief Reads lux from the BH1750 sensor and checks to make sure
/// the reading is within the expected range
/// @param lux Reference to a float for storing the lux
void getBH1750lux(float *lux) {
    light_sensor.start();
    *lux = light_sensor.getLux();
    if(*lux < 0 || *lux > 65000) {
        Serial.println("BH1750 Error!");
        while(1);
    }
}

/// @brief Wrapper for the three above functions used to get sensor data
/// mostly for readability 
/// @param soil_moisture 
/// @param soil_tempC 
/// @param lux 
void getSensorData(uint16_t *soil_moisture, float *soil_tempC, float *lux) {
    getASSMsoilmoisture(soil_moisture);
    getASSMtempC(soil_tempC);
    getBH1750lux(lux);
}