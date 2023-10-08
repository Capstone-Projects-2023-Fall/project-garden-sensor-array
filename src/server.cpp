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

// characteristics for our sensors
// need to be defined globally
BLECharacteristic *sensor_data;

// sensor types
Adafruit_seesaw     soil_sensor;
hp_BH1750           light_sensor;

// tells us if there's a connection
bool read_sensors = false;

// strings for formatting sensor data
#define SENSOR_STR_LEN  25
#define LUX_STR_LEN     10
#define TEMP_STR_LEN    10

char sensor_str[SENSOR_STR_LEN]; 
char lux_str[LUX_STR_LEN];
char temp_str[TEMP_STR_LEN];

// this is a class for overriding the onConnect() function found in BLEServerCallbacks
class ConnectionCallback: public BLEServerCallbacks{
    // we don't want to read sensors unless there is a connection
    void onConnect(BLEServer *pserver){
        read_sensors = true;
    }

    // something went wrong
    void onDisconnect(BLEServer *pserver){
        read_sensors = false;
    }
};

void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux); 

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

void loop() {
    uint16_t soil_moisture;
    float soil_tempC;
    float lux;

    if(read_sensors){
        soil_moisture = soil_sensor.touchRead(0);
        soil_tempC = soil_sensor.getTemp();
        lux = light_sensor.getLux();

        // Merge sensor data into a neat string for output
        format_sensor_data(&soil_moisture, &soil_tempC, &lux);
        sensor_data->setValue(sensor_str);
        
        // im ready
        sensor_data->notify();
    }

    // do it again
    sleep(10);
}

void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux) {
    dtostrf(*soil_tempC, 4, 2, temp_str);
    dtostrf(*lux, 4, 2, lux_str);
    
    snprintf(sensor_str, 25, "%d, %s, %s", *soil_moisture, temp_str, lux_str);
}