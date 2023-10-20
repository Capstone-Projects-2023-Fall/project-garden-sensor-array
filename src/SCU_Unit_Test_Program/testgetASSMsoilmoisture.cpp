#include "testproperties.h"

void getASSMsoilmoisture(uint16_t *soil_moisture) {
    soil_sensor Soil_Sensor_1;

    *soil_moisture = Soil_Sensor_1.touchRead(0);
    if(*soil_moisture < 200 || *soil_moisture > 2000) {
        cout << "ASSM Error!";
        while(1);
    }
}

int testgetASSMsoilmoisture(int argc, char** argv) {
    soil_sensor Soil_Sensor_1;
    uint16_t *soil_moisture = (uint16_t*)malloc(sizeof(int));

    getASSMsoilmoisture(soil_moisture);
    if(*soil_moisture == 300) {
        return 0;
    }
    else{
        return 1;
    }
}