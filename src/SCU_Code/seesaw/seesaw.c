#include "seesaw.h"

// I2C defines
#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9

bool seesaw_hoptoit() {
    // tell the seesaw what register we want to write
    // in this case we want to write a value to the SWRST register
    // to perform a software reset
    uint8_t prefix[2] = { SEESAW_STAUS_BASE, SEESAW_STATUS_SWRST };
    u_int8_t value = 0xFF;
    uint8_t id = 0;

    // first write register info then write 0xFF to perform the reset
    i2c_write_blocking(i2c0, SEESAW_ADDR, prefix, 2, false);
    i2c_write_blocking(i2c0, SEESAW_ADDR, &value, 1, false);

    sleep_ms(250);  // wait a bit to avoid a collision!

    // Same deal as above, except this time we want to read 
    // from the hardware id register
    prefix[0] = SEESAW_STAUS_BASE;
    prefix[1] = SEESAW_STATUS_HARDWARE_ID;
    
    // write the register info then read the hardware id
    i2c_write_blocking(i2c0, SEESAW_ADDR, prefix, 2, false);
    i2c_read_blocking(i2c0, SEESAW_ADDR, &id, 1, false);
    
    if(id != SEESAW_HARDWARE_ID) return false; // this isn't a seesaw!

    return true; // this is a seesaw!
}

bool seesaw_read(uint8_t reghigh, u_int8_t reglow, uint8_t *buffer, uint8_t num) {
    // same as in the above function!
    // this time we take the registers in as arguments
    // so that we can use this function to read either 
    // from the temperature registers or moisture (touch) register
    uint8_t prefix[2];
    prefix[0] = (uint8_t)reghigh;
    prefix[1] = (uint8_t)reglow;
    
    // write the prefix to the seesaw. tell it what register we need to read from
    if( i2c_write_blocking(i2c0, SEESAW_ADDR, prefix, 2, false) == PICO_ERROR_GENERIC ) {
        return false; // couldn't write for some reason
    }

    sleep_ms(5); // im waiting...
    
    // read the data into buffer!
    if( i2c_read_blocking(i2c0, SEESAW_ADDR, buffer, num, false) == PICO_ERROR_GENERIC ) {
        return false; // read failed for some reason
    }

    return true; // now this is getting interesting 
}

uint16_t seesaw_touch_read(uint8_t pin) {
    return 1;
}

float seesaw_get_temp() {
    return 1.0;
}

int main() {
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
