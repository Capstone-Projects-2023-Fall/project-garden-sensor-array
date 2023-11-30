#include "bh1750.h"

// I2C defines
#ifndef _I2C_

#include "hardware/i2c.h"
#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9

#endif

bool bh1750_starttheparty(uint8_t mode) {
    return true;
}

void bh1750_setMTreg(uint8_t MTreg) {

}

float bh1750_read_lux() {
    return 1.0;
}

int main()
{
    stdio_init_all();

    // I2C Initialisation. Using it at 400Khz.
    i2c_init(I2C_PORT, 100*1000);
    
    gpio_set_function(I2C_SDA, GPIO_FUNC_I2C);
    gpio_set_function(I2C_SCL, GPIO_FUNC_I2C);
    gpio_pull_up(I2C_SDA);
    gpio_pull_up(I2C_SCL);


    puts("Hello, world!");

    return 0;
}
