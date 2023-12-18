#include "testproperties.h"

void getASSMtempC(float *soil_tempC) {
    soil_sensor Soil_Sensor_1;
    *soil_tempC = Soil_Sensor_1.getTemp();
    if(*soil_tempC < 0) {
        cout << "ASSM Temperature Error!";
        while(1);
    }

}

int testgetASSMtempC(int argc, char** argv) {
    soil_sensor Soil_Sensor_1;
    float *soil_tempC = (float*)malloc(sizeof(float));

    getASSMtempC(soil_tempC);
    if(*soil_tempC == 32) {
        return 0;
    }
    else{
        return 1;
    }
}