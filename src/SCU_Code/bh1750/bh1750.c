#include "bh1750.h"

// I2C defines
#ifndef _I2C_

#include "hardware/i2c.h"
#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9

#endif

// initialize the bh1750 sensor
// has to be called before lux can be read
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
 
// short for MTregister?
void bh1750_setMTreg(uint8_t MTreg) {
    if(MTreg < BH1750_MTREG_MIN || MTreg > BH1750_MTREG_MAX) {
        puts("bad value!");
        return;
    }

    uint8_t ack = 0; // acknowledgement byte used for error checking. i didn't use it though!

    // the following set of bit shifts and writes are just bh1750 hardware semantics
    // basically its specsheet stuff that i took from the reference library
    // --obtains a byte by doing a logical or on the MTreg value and a bit string
    // --then writes it to the bh1750
    uint8_t value = (0b01000 << 3) | (MTreg >> 5);
    i2c_write_blocking(I2C_PORT, BH1750_ADDR, &value, 1, false);
    
    value = (0b011 << 5) | (MTreg & 0b11111);
    i2c_write_blocking(I2C_PORT, BH1750_ADDR, &value, 1, false);

    i2c_write_blocking(I2C_PORT, BH1750_ADDR, &BH1750_MODE, 1, false);

    sleep_ms(10); // boring!
    
    BH1750_MTREG = MTreg; // need to keep track of this
}

// now that's what im talking about!
float bh1750_read_lux() {
    uint8_t buffer[2]; // here we go again...
    float level = -1.0; // this should be different when the function returns!

    // read two bytes into the buffer
    // don't need to set up any registers because setMTreg should have been called by this point
    i2c_read_blocking(I2C_PORT, BH1750_ADDR, buffer, 2, false);
    unsigned int tmp = 0;
    tmp = (buffer[0] << 8) | buffer[1]; // -_-
    level = tmp;

    last_read_timestamp = us_to_ms(time_us_64()); // still not used but let's keep it around!

    // some kind of conversion i guess
    // only necessary if not using the default MTreg
    // which i dont think should apply to us
    if (BH1750_MTREG != BH1750_DEFAULT_MTREG) {
        level *= (float)((uint8_t)BH1750_DEFAULT_MTREG / (float)BH1750_MTREG);
    }

    level /= BH1750_CONV_FACTOR; // simple conversion
    return level; // there it is
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
