#include <stdio.h>
#include "pico/stdlib.h"
#include "pico/cyw43_arch.h"

#define _I2C_

#include "hardware/i2c.h"
#define I2C_PORT i2c0 
// sensors on gp8 and gp9
#define I2C_SDA 8
#define I2C_SCL 9

// sensor stuff
// kinda ugly to include them like this
// but im not sure if there is a better way
#include "../seesaw/seesaw.h"
#include "../bh1750/bh1750.h"


int main() {
    stdio_init_all();

    // I2C Initialisation. Using it at 100Khz.
    i2c_init(I2C_PORT, 100*1000);
    
    gpio_set_function(I2C_SDA, GPIO_FUNC_I2C);
    gpio_set_function(I2C_SCL, GPIO_FUNC_I2C);
    gpio_pull_up(I2C_SDA);
    gpio_pull_up(I2C_SCL);
    
    seesaw_hoptoit();
    bh1750_makeamove(CONTINUOUS_HIGH_RES_MODE);
    sleep_ms(250);

    uint16_t moisture = 0;
    float tempC = 0;
    float lux = 0;
    while (1) {
        moisture = seesaw_touch_read(0);
        tempC = seesaw_get_temp();
        lux = bh1750_read_lux();

        printf("moisture = %u\ntemp = %f\nlux = %f\n", moisture, tempC, lux);
        sleep_ms(1000);
    }
    

    return 0;
}
