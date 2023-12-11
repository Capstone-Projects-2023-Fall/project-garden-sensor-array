#include "testproperties.h"

/// strings for formatting sensor data
#define SENSOR_STR_LEN  25
#define LUX_STR_LEN     10
#define TEMP_STR_LEN    10

char *sensor_data[SENSOR_STR_LEN];
char sensor_str[SENSOR_STR_LEN]; 
char lux_str[LUX_STR_LEN];
char temp_str[TEMP_STR_LEN];

void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux) {
    sprintf(temp_str, "%f", *soil_tempC);
    sprintf(lux_str, "%f", *lux);
    
    snprintf(sensor_str, 25, "%d, %s, %s", *soil_moisture, temp_str, lux_str);
}

int testformat_sensor_data(int argc, char** argv) {
    light_sensor Light_sensor1;
    soil_sensor Soil_sensor1;

    float *lux = (float*)malloc(sizeof(float));
    float *tempC = (float*)malloc(sizeof(float));
    uint16_t *soil_moisture = (uint16_t*)malloc(sizeof(int));


    getSensorData(soil_moisture, tempC, lux);
    format_sensor_data(soil_moisture, tempC, lux);
    char compare_string[SENSOR_STR_LEN];
    snprintf(compare_string, 25, "%d, %s, %s", *soil_moisture, temp_str, lux_str);

    if(strcmp(sensor_str, compare_string) == 0) {
        return 0;
    }
    else{
        return 1;
    }
}