#include "testproperties.h"

bool read_sensors = true;
/// strings for formatting sensor data
#define SENSOR_STR_LEN  25
#define LUX_STR_LEN     10
#define TEMP_STR_LEN    10

char *sensor_data[SENSOR_STR_LEN];
char sensor_str[SENSOR_STR_LEN]; 
char lux_str[LUX_STR_LEN];
char temp_str[TEMP_STR_LEN];
void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux);
void getASSMsoilmoisture(uint16_t *soil_moisture);
void getASSMtempC(float *soil_tempC);
void getBH1750lux(float *lux);
void getSensorData(uint16_t *soil_moisture, float *soil_tempC, float *lux); 


void loop() {
    cout << "began loop\n";
    uint16_t soil_moisture;
    float soil_tempC;
    float lux;

    if(read_sensors) {
        // read data from sensors into variables declared above
        // error handling for the sensors is handled internally
        getSensorData(&soil_moisture, &soil_tempC, &lux);

        // merge sensor data into a neat string for output
        format_sensor_data(&soil_moisture, &soil_tempC, &lux);
        *sensor_data = sensor_str;
        
        // im ready
        //sensor_data->notify();
    }


    
    // do it again
    std::cout << sensor_str << "\n";
    //sleep(1);
    cout << "cycled loop once\n";
}

void format_sensor_data(uint16_t *soil_moisture, float *soil_tempC, float *lux) {
    sprintf(temp_str, "%f", *soil_tempC);
    sprintf(lux_str, "%f", *lux);
    
    snprintf(sensor_str, 25, "%d, %s, %s", *soil_moisture, temp_str, lux_str);
}

void getASSMsoilmoisture(uint16_t *soil_moisture) {
    soil_sensor Soil_Sensor_1;

    *soil_moisture = Soil_Sensor_1.touchRead(0);
    if(*soil_moisture < 200 || *soil_moisture > 2000) {
        cout << "ASSM Error!";
        while(1);
    }
}


void getASSMtempC(float *soil_tempC) {
    soil_sensor Soil_Sensor_1;
    *soil_tempC = Soil_Sensor_1.getTemp();
    if(*soil_tempC < 0) {
        cout << "ASSM Temperature Error!";
        while(1);
    }

}


void getBH1750lux(float *lux) {
    light_sensor Light_Sensor1;
    Light_Sensor1.start();
    *lux = Light_Sensor1.getLux();
    if(*lux < 0 || *lux > 65000) {
        cout << "BH1750 Error!";
        while(1);
    }
}


void getSensorData(uint16_t *soil_moisture, float *soil_tempC, float *lux) {
    cout << "I'm in sensor data\n";
    getASSMsoilmoisture(soil_moisture);
    getASSMtempC(soil_tempC);
    getBH1750lux(lux);
}

void notify(){
    return;
}

int started() {
    printf("started in main\n");
    loop();
    printf("left loop\n");
}

