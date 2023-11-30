#include <stdio.h>
#include "pico/stdlib.h"

#define BH1750_ADDR             0x23
#define BH1750_POWER_DOWN       0x00
#define BH1750_POWER_ON         0x01
#define BH1750_RESET            0x07
#define BH1750_DEFAULT_MTREG    69
#define BH1750_MTREG_MIN        31
#define BH1750_MTREG_MAX        254

uint8_t BH1750_MODE;
uint8_t BH1750_MTREG;
const float BH1750_CONV_FACTOR = 1.2;

enum Mode {
    // same as Power Down
    UNCONFIGURED = 0,
    // Measurement at 1 lux resolution. Measurement time is approx 120ms.
    CONTINUOUS_HIGH_RES_MODE = 0x10,
    // Measurement at 0.5 lux resolution. Measurement time is approx 120ms.
    CONTINUOUS_HIGH_RES_MODE_2 = 0x11,
    // Measurement at 4 lux resolution. Measurement time is approx 16ms.
    CONTINUOUS_LOW_RES_MODE = 0x13,
    // Measurement at 1 lux resolution. Measurement time is approx 120ms.
    ONE_TIME_HIGH_RES_MODE = 0x20,
    // Measurement at 0.5 lux resolution. Measurement time is approx 120ms.
    ONE_TIME_HIGH_RES_MODE_2 = 0x21,
    // Measurement at 4 lux resolution. Measurement time is approx 16ms.
    ONE_TIME_LOW_RES_MODE = 0x23
};

bool bh1750_starttheparty(uint8_t mode);
void bh1750_setMTreg(uint8_t MTreg);
float bh1750_read_lux();