#include <Arduino.h>  
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>
#include <BLEDescriptor.h>

// sensor libraries
#include "Adafruit_seesaw.h"
#include "hp_BH1750.h"

#define UUIDSERVER      "efab93a7-3e27-4c38-a9cc-f768cfc75af6"  // not sure this is needed 
#define UUIDSERVICE     "2aba97e0-10b4-4a9f-bb43-35e02e6eb594"
#define UUIDCHAR1       "f524c885-8158-49b7-9ff6-0d653c3cafb5"
#define UUIDCHAR2       "0308e66e-8096-4b60-b077-892bc738e8f1"
#define UUIDCHAR3       "497b9303-3658-45f7-85ac-e1caadb066fa"

Adafruit_seesaw     soil_sensor;
hp_BH1750           light_sensor;

void setup() {
    Serial.begin(115200);

    // start with bluetooth set up
    BLEDevice::init("Garden_Server");
    BLEServer *server = BLEDevice::createServer();

    // service -- handles characteristics
    BLEService *service = server->createService(UUIDSERVICE);
    
    // characteristics
    BLECharacteristic *soil_moisture_char = service->createCharacteristic(UUIDCHAR1, ESP_GATT_CHAR_PROP_BIT_READ | ESP_GATT_CHAR_PROP_BIT_NOTIFY);
    BLECharacteristic *soil_temp_char = service->createCharacteristic(UUIDCHAR2, ESP_GATT_CHAR_PROP_BIT_READ | ESP_GATT_CHAR_PROP_BIT_NOTIFY);
    BLECharacteristic *lux_char = service->createCharacteristic(UUIDCHAR3, ESP_GATT_CHAR_PROP_BIT_READ | ESP_GATT_CHAR_PROP_BIT_NOTIFY);

    // 
    soil_moisture_char->setValue(0);
    soil_temp_char->setValue(0);
    lux_char->setValue(0);

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
    // put your main code here, to run repeatedly:
}
