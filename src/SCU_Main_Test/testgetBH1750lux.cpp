#include "testproperties.h"

void getBH1750lux(float *lux) {
    light_sensor Light_Sensor1;
    Light_Sensor1.start();
    *lux = Light_Sensor1.getLux();
    if(*lux < 0 || *lux > 65000) {
        cout << "BH1750 Error!";
        while(1);
    }
}

int testgetBH1750lux(int argc, char** argv) {
    light_sensor Light_Sensor_1;
    float *lux = (float*)malloc(sizeof(float));

    getBH1750lux(lux);
    if(*lux == 500) {
        return 0;
    }
    else{
        return 1;
    }
}