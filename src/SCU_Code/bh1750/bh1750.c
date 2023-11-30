#include "bh1750.h"

// I2C defines
#ifndef _I2C_

#include "hardware/i2c.h"
#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9

#endif

bool bh1750_makeamove(uint8_t mode) {
    uint8_t err; // check return value of i2c write

    err = i2c_write_blocking(I2C_PORT, BH1750_ADDR, &mode, 1, false);
    sleep_ms(10); // wait a bit...

    if (err == PICO_ERROR_GENERIC) return false; // write failed, get me out of here!

    BH1750_MODE = mode; // set the mode. should be a value in the enum--for our purposes probably CONTINUOUS_HIGH_RES_MODE
    last_read_timestamp = us_to_ms(time_us_64()) - start_time; // not used at the moment. might be useful later 
    
    bh1750_setMTreg(BH1750_DEFAULT_MTREG); // theoretically this could fail but i dont want to check that 
    return true; // guess we're good then!
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
