#include "testproperties.h"

void getSensorData(uint16_t *soil_moisture, float *soil_tempC, float *lux) {
    cout << "I'm in sensor data\n";
    getASSMsoilmoisture(soil_moisture);
    getASSMtempC(soil_tempC);
    getBH1750lux(lux);
}

int testgetSensorData(int argc, char** argv) {
    light_sensor Light_sensor1;
    soil_sensor Soil_sensor1;

    float *lux = (float*)malloc(sizeof(float));
    float *tempC = (float*)malloc(sizeof(float));
    uint16_t *soil_moisture = (uint16_t*)malloc(sizeof(int));


    getSensorData(soil_moisture, tempC, lux);

    if(*lux == 500 && *soil_moisture==300 && *tempC == 32) {
        return 0;
    }
    else{
        return 1;
    }
}