#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <iostream>
using namespace std;

class soil_sensor {
    public:
     int touchRead(int value){
        return 300;
     }
     int getTemp(){
        return 32;
     }
};

class light_sensor {
    public:
    int getLux(){
        return 500;
    }
    void start(){
        return;
    }

};

void loop();
void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux);
void getASSMsoilmoisture(uint16_t *soil_moisture);
void getASSMtempC(float *soil_tempC);
void getBH1750lux(float *lux);
void getSensorData(uint16_t *soil_moisture, float *soil_tempC, float *lux); 

