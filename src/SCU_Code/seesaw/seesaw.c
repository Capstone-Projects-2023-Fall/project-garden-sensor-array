#include "seesaw.h"

// I2C defines
#ifndef _I2C_

#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9

#endif

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
    uint8_t buffer[2]; // where data read by the read function will be stored
    uint8_t p = pin; // offset from the touch channel register...will be 0 for us
    uint16_t ret = 65535; // something has gone wrong if this is the return value

    // not sure this loop is necessary
    for(uint8_t retry = 0; retry < 5; retry++) {
        if( seesaw_read(SEESAW_TOUCH_BASE, SEESAW_TOUCH_CHANNEL_OFFSET + p, buffer, 2) ) {
            // bit shift to get the bytes from buffer into ret in the correct orientation
            // the high byte is stored at buffer[0] and the low byte at buffer[1]
            // for example buffer[0] = 1101 0101 and buffer[1] = 0011 1100
            // we want ret to = 1101 0101 0011 1100
            // to do this we pad the high byte (buffer[0]) with an empty byte by shifting
            // it to the left 8 bits. so buffer[0] = 1101 0101 0000 0000
            // all that's left to do now is a logical or with buffer[1] to copy the rest of the bits
            //      1101 0101 0000 0000
            //     |          0011 1100
            //     --------------------
            //    = 1101 0101 0011 1100 = ret
            // success!
            ret = ((uint16_t)buffer[0] << 8) | buffer[1];
            break;
        }
    }

    return ret;
}

float seesaw_get_temp() {
    uint8_t buffer[4]; // same deal as above
    seesaw_read(SEESAW_STAUS_BASE, SEESAW_STATUS_TEMP, buffer, 4); // looks familiar
    // looks scary but its the same as in the above function!
    // its just that there are four bytes this time so the highest
    // byte needs to be padded with 3 zero bytes, and so on
    int32_t ret = ((uint32_t)buffer[0] << 24) | ((uint32_t)buffer[1] << 16) |
                ((uint32_t)buffer[2] << 8) | (uint32_t)buffer[3];
    return (1.0 / (1UL << 16)) * ret; // floating point conversion
}

int main() {
    stdio_init_all();

    // I2C Initialisation. Using it at 400Khz.
    i2c_init(I2C_PORT, 100*1000);
    
    gpio_set_function(I2C_SDA, GPIO_FUNC_I2C);
    gpio_set_function(I2C_SCL, GPIO_FUNC_I2C);
    gpio_pull_up(I2C_SDA);
    gpio_pull_up(I2C_SCL);
    seesaw_hoptoit();
    sleep_ms(250);

    uint16_t moisture = 0;
    float tempC = 0;
    while (1) {
        moisture = seesaw_touch_read(0);
        tempC = seesaw_get_temp();
        printf("moisture = %u\ntemp = %f\n", moisture, tempC);

        sleep_ms(1000);
    }
    

    return 0;
}
