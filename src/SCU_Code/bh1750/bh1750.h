#include <stdio.h>
#include "pico/stdlib.h"

#define BH1750_ADDR             0x23
#define BH1750_POWER_DOWN       0x00
#define BH1750_POWER_ON         0x01
#define BH1750_RESET            0x07
#define BH1750_DEFAULT_MTREG    69
#define BH1750_MTREG_MIN        31
#define BH1750_MTREG_MAX        254

// various modes for the bh1750
// taken from another library but im keeping
// the original comments since they're helpful 
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

/*!
 * \brief start the bh1750
 * 
 * \param mode the mode (resolution) to use for lux readings
 * \return true if the bh1750 is properly initialized
 * \return false otherwise
 */
bool bh1750_makeamove(uint8_t mode);

/*!
 * \brief set the MT register of the bh1750
 * 
 * \param MTreg value to set the MT register to.
 *  This will affect the max lux value the sensor can red 
 */
bool bh1750_setMTreg(uint8_t MTreg); 

/*!
 * \brief read lux from bh1750 
 * 
 * \return float representing the lux detected. Max value is around 65k by default
 */
float bh1750_read_lux();