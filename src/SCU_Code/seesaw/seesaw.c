#include "seesaw.h"

// I2C defines
#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9

bool seesaw_reset() {
    return true;
}

bool seesaw_read(uint8_t reghigh, u_int8_t reglow, uint8_t *buffer, uint8_t num) {
    return true;
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
