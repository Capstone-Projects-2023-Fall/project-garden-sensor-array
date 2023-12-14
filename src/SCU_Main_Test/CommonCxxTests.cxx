#include "testproperties.h"

int SCU_Test() {
    uint16_t *soilmoisture = (uint16_t*)malloc(sizeof(int));
    getASSMsoilmoisture(soilmoisture);
    if(*soilmoisture==300){
        return 0;
    }
    else{
        return 1;
    }
}