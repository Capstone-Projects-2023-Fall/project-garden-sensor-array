#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/i2c.h"

#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9


#define SEESAW_ADDR                 0x36
#define SEESAW_STAUS_BASE           0
#define SEESAW_STATUS_HARDWARE_ID   1
#define SEESAW_STATUS_TEMP          4
#define SEESAW_STATUS_SWRST         127
#define SEESAW_TOUCH_BASE           15
#define SEESAW_TOUCH_CHANNEL_OFFSET 16
#define SEESAW_HARDWARE_ID          0x55

bool seesaw_reset();
// bool seesaw_read(uint8_t reghigh, u_int8_t reglow, uint8_t *buffer, uint8_t num);
uint16_t seesaw_touch_read(uint8_t pin);
float seesaw_get_temp();