/**
 * @file seesaw.h
 * @author Sam Gandolfo-Lucia
 * @brief Library for interacting with the Adafruit Stemme Soil Sensor
 * @version 0.1
 * @date 2023-12-17
 * 
 * @copyright Copyright (c) 2023
 * 
 */
#include <stdio.h>
#include "pico/stdlib.h"

#ifndef _I2C_

#define I2C_PORT i2c0
#define I2C_SDA 8
#define I2C_SCL 9

#endif

#define SEESAW_ADDR                     0x36
#define SEESAW_STAUS_BASE               0
#define SEESAW_STATUS_HARDWARE_ID       1
#define SEESAW_STATUS_TEMP              4
#define SEESAW_STATUS_SWRST             127
#define SEESAW_TOUCH_BASE               15
#define SEESAW_TOUCH_CHANNEL_OFFSET     16
#define SEESAW_HARDWARE_ID              0x55

/**
 * @public
 * @brief start the seesaw
 * @return true if the seesaw is found.
 * @return false otherwise
 */
bool seesaw_hoptoit();

/**
 * @public
 * @brief read the seesaw touch channel
 * 
 * @param pin offset from the touch channel register read. Usually 0
 * @return an unisgned 16 bit integer representing the capacitance reading
 * -- we interpret this as moisture
 */
uint16_t seesaw_touch_read(uint8_t pin);

/**
 * @public
 * @brief Read the temperature from the seesaw
 * 
 * @return a float representing the (approximate) temperature in degrees Celsius
 */
float seesaw_get_temp();