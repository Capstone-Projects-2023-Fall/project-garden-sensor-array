/**
 * @file Server.c
 * @brief The BLE server ran by Sensor Control Units
 * @author Sam Gandolfo-Lucia
 * @version 0.1
 * @date 2023-12-17
 * 
 * @copyright Copyright (c) 2023
 * 
 */

#include <stdio.h>
#include "pico/stdlib.h"
#include "btstack.h"
#include "pico/unique_id.h"
#include "pico/btstack_cyw43.h"
#include "pico/cyw43_arch.h"
#include "SCU.h" // auto generated by compiling SCU.gatt with btstack's .gatt compiler

#define _I2C_

#include "hardware/i2c.h"
#define I2C_PORT i2c0 
// sensors on gp8 and gp9
#define I2C_SDA 4
#define I2C_SCL 5

// sensor stuff
// a bit unusual to include them like this
// but im not sure if there is a better way
#include "../seesaw/seesaw.h"
#include "../bh1750/bh1750.h"

// for random number generation -- testing purposes!
#include "hardware/regs/rosc.h"
#include "hardware/regs/addressmap.h"

/// server will "beat" every second
#define HEARTBEAT_MS 1000

// btstack magic, it enables ble
#define APP_AD_FLAGS 0x06

/// set to 1 when there's a connection, 0 if not
static int  read_sensors = 0;
/// set to 1 when the client signs up to receive notifications, 0 otherwise
static int  le_notify = 0;
/// assume sensors aren't connected, set to 0 if they aren't found
static int  sensors_connected = 1; 
/// timer source for heartbeat_handler
static btstack_timer_source_t heartbeat;
/// connection handle for notifications
static hci_con_handle_t con_handle; 
 /// for registering bt function callbacks
static btstack_packet_callback_registration_t hci_event_callback_registration;

// standard btstack function declarations
static void  heartbeat_handler(struct btstack_timer_source *ts);
static void packet_handler(uint8_t packet_type, uint16_t channel, uint8_t *packet, uint16_t size);
static uint16_t att_read_callback(hci_con_handle_t con_handle, uint16_t att_handle, uint16_t offset, uint8_t * buffer, uint16_t buffer_size);
static int att_write_callback(hci_con_handle_t connection_handle, uint16_t att_handle, uint16_t transaction_mode, uint16_t offset, uint8_t *buffer, uint16_t buffer_size);

// sensor function wrappers for error checking
void getASSMsoilmoisture();
void getASSMtempC();
void getBH1750lux();
void write_sensor_data();

#define LEN_SENSOR_DATA 30
/// a string containing the sensor data separated by commas -- the BLE characteristic that will be read by a client
char sensor_data[LEN_SENSOR_DATA]; 
uint8_t sensor_data_length = 0;

uint16_t soil_moisture   = 0;
float    tempC           = 0;
float    lux             = 0;

/// advertisement data that will be received by clients
const uint8_t adv_data[] = {
    // Flags general discoverable
    0x02, BLUETOOTH_DATA_TYPE_FLAGS, APP_AD_FLAGS,
    // Name
    0x07, BLUETOOTH_DATA_TYPE_COMPLETE_LOCAL_NAME, 'C', 'a', 'n', 'a', 'r', 'y',
    0x03, BLUETOOTH_DATA_TYPE_COMPLETE_LIST_OF_16_BIT_SERVICE_CLASS_UUIDS, 0x1a, 0x18,
};

const uint8_t adv_data_len = sizeof(adv_data);

/**
 * @brief called every second to check the status of the Server
 * @param ts the timer source (aka interval) for the function to be called on 
 * 
 * this function is called repeatedly on the interval defined by HEARTBEAT_MS
 * aka in this case it is called every second. 
 * ts is a pointer to the globally defined heartbeat variable
 */
static void heartbeat_handler(struct btstack_timer_source *ts) {
    // static because we want its value to persist through function calls
    static uint32_t counter = 0;
    counter++;
    if( counter % 10 == 0 && read_sensors) {
        // do something?
        // right now all we do is poll the sensors when the client
        // wants to read them, so there is nothing to do here
        // probably could remove this if statement altogether
        // but im keeping it in case we need it in the future
    }

    // Invert the led
    // this is from the example, im keeping it for now because it's nice
    // to be able to see that the pico is doing something
    static int led_on = true;
    led_on = !led_on;
    cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, led_on);

    // Restarts timer
    // so the function will be called again
    // in HEARTBEAT_MS milliseconds (1000 for now)
    // im not to sure why the timer is set with ts
    // instead of heartbeat, but this is the convention
    // used by btstack...dont think it makes a difference though
    btstack_run_loop_set_timer(ts, HEARTBEAT_MS);
    btstack_run_loop_add_timer(ts);
}

/**
 * @brief initializes the advertisements and function callbacks for BLE events
 */
static void le_setup() {
    l2cap_init();

    // improves security, i think
    sm_init();
    
    // define the server profile and the function call back for when a client reads a characteristic.
    // the write callback is just for allowing the client to sign up for notifications.
    // aka no writes can be made to the sensor data characteristic
    att_server_init(profile_data, att_read_callback, att_write_callback);    

    // setup advertisements
    uint16_t adv_int_min = 800;
    uint16_t adv_int_max = 800;
    uint8_t adv_type = 0;
    bd_addr_t null_addr;
    memset(null_addr, 0, 6);
    gap_advertisements_set_params(adv_int_min, adv_int_max, adv_type, 0, null_addr, 0x07, 0x00);
    assert(adv_data_len <= 31); // this is to ensure the advertisement isn't larger than allowed by ble
    gap_advertisements_set_data(adv_data_len, (uint8_t*) adv_data);
    gap_advertisements_enable(1);

    // register for HCI events
    hci_event_callback_registration.callback = &packet_handler;
    hci_add_event_handler(&hci_event_callback_registration);

    // register for ATT event
    att_server_register_packet_handler(packet_handler);

    // set one-shot timer
    // this is another one of those confusing btstack things
    // but this will tell btstack to call the heartbeat_handler
    // after the amount of time defined by HEARTBEAT_MS has elapsed
    // heartbeat will be passed as an argument to heartbeat_handler on each call
    heartbeat.process = &heartbeat_handler;
    btstack_run_loop_set_timer(&heartbeat, HEARTBEAT_MS);
    btstack_run_loop_add_timer(&heartbeat);    
}

/** 
 * @brief receive bt packets
 * @param packet_type 
 * @param channel is not used, but required by bystack
 * @param packet the actual data contained in the packet
 * @param size is not used, but required by btstack
 * 
 * deals with all bt packets received
 * basically the only ones we care about are client connect, disconnect, and notify
 */
static void packet_handler(uint8_t packet_type, uint16_t channel, uint8_t *packet, uint16_t size) {
    UNUSED(size);
    UNUSED(channel);

    if (packet_type != HCI_EVENT_PACKET) return;

    switch (hci_event_packet_get_type(packet)) {
        case HCI_EVENT_LE_META:  // it's happening
            switch (hci_event_le_meta_get_subevent_code(packet)) {
                case HCI_SUBEVENT_LE_CONNECTION_COMPLETE:
                    printf("connected!\n");
                    read_sensors = 1;
                    break;
                default:
                    printf("le meta event!\n");
                    break;
                }
            break;
        case HCI_EVENT_DISCONNECTION_COMPLETE:
            read_sensors = 0;
            le_notify = 0;
            break;
        case ATT_EVENT_CAN_SEND_NOW:
            printf("sending\n");
            att_server_notify(con_handle, ATT_CHARACTERISTIC_0000181b_0000_1000_8000_00805F9B34FB_01_VALUE_HANDLE, (uint8_t*) sensor_data, sensor_data_length);
            break;
        default:
            break;
    }
}


/**
 * @brief called when a client reads the sensor data characteristic 
 * @param connection_handle not used, but required by btstack
 * @param att_handle should match the handle for our sensor data characteristic 
 * @param offset 
 * @param buffer 
 * @param buffer_size 
 * @return uint16_t
 * 
 * called anytime a client attempts to read our sensor data characteristic
 * reads all of the sensors data into variables and then writes it to a string
 * the string is what is read by the clients
 */
static uint16_t att_read_callback(hci_con_handle_t connection_handle, uint16_t att_handle, uint16_t offset, uint8_t * buffer, uint16_t buffer_size) {
    UNUSED(connection_handle);

    if (att_handle == ATT_CHARACTERISTIC_0000181b_0000_1000_8000_00805F9B34FB_01_VALUE_HANDLE) { // it's beautiful
        // a string is like a blob, right?
        lux = bh1750_read_lux();
        printf("sensor status: %d\n", sensors_connected);
        write_sensor_data();
        printf("%s\n", sensor_data);
        return att_read_callback_handle_blob((const uint8_t *)sensor_data, sensor_data_length, offset, buffer, buffer_size);
    }

    return 0;
}


/**
 * @brief called when the client wants to sign up for notifications 
 * @param connection_handle used to notify the client of updates to the sensor data characteristic
 * @param att_handle should match the sensor data characteristic configuration handle
 * @param transaction_mode not used, but required by btstack
 * @param offset not used, but required by btstack
 * @param buffer 
 * @param buffer_size 
 * @return int 
 * 
 * called anytime there's an attempt to write to the characteristic
 * in our case the only valid write is signing up for notifications
 * aka the client can never write to our sensor data characteristic
 * in order to change its value
 */
int att_write_callback(hci_con_handle_t connection_handle, uint16_t att_handle, uint16_t transaction_mode, uint16_t offset, uint8_t *buffer, uint16_t buffer_size) {
    UNUSED(transaction_mode);
    UNUSED(offset);
    UNUSED(buffer_size);

    if (att_handle != ATT_CHARACTERISTIC_0000181b_0000_1000_8000_00805F9B34FB_01_CLIENT_CONFIGURATION_HANDLE) return 0;
    le_notify = little_endian_read_16(buffer, 0) == GATT_CLIENT_CHARACTERISTICS_CONFIGURATION_NOTIFICATION;
    con_handle = connection_handle;
    printf("%d\n", le_notify);
    if (le_notify) {
        att_server_request_can_send_now_event(con_handle);
    }
    return 0;
}


// function for generating random numbers
// useful for testing purposes
uint32_t rnd(void){
    int k, random=0;
    volatile uint32_t *rnd_reg=(uint32_t *)(ROSC_BASE + ROSC_RANDOMBIT_OFFSET);
    
    for(k=0;k<32;k++){
    
    random = random << 1;
    random=random + (0x00000001 & (*rnd_reg));

    }
    return random;
}

/**
 * @brief wrapper for library call to read soil moisture level. 
 * Useful because it allows for easy error handling
 */
void getASSMsoilmoisture() {
    if(sensors_connected) {
        soil_moisture = seesaw_touch_read(0);
        return;
    }

    soil_moisture = (uint16_t)rnd();
}

/**
 * @brief wrapper for library call to read soil temperature. 
 * Useful because it allows for easy error handling
 */
void getASSMtempC() {
    if(sensors_connected) {
        tempC = seesaw_get_temp();
        return;
    }

    tempC = (float)rnd() / rnd();
}

/**
 * @brief wrapper for library call to read light level. 
 * Useful because it allows for easy error handling
 */
void getBH1750lux() {
    if(sensors_connected) {
        lux = bh1750_read_lux();
        return;
    }

    lux = (float)rnd() / rnd(); 
}

/**
 * @brief write the data read by our sensors into a single string 
 */
void write_sensor_data() {
    // write sensor data to a string -- this is what will be read by the client!
    snprintf(sensor_data, LEN_SENSOR_DATA, "%u,%f,%f", soil_moisture, tempC, lux);
    sensor_data_length = strlen(sensor_data);
}

/**
 * @brief print a unique ID for the SCU in use. 
 * Can be used to differentiating SCUs from each other to prevent accidental connections
 * @param id the board ID
 */
void print_id(pico_unique_board_id_t *id) {
    printf("%x", id->id[0]);
    for(int i = 1; i < 8; i++) {
        printf(" %x", id->id[i]);
    }
    printf("\n");
}

int main() {
    stdio_init_all();

    if(cyw43_arch_init()) {
        printf("couldn't initialize cyw43_arch\n");
        return -1;
    }

    // I2C Initialisation. Using it at 100Khz.
    i2c_init(I2C_PORT, 100*1000);
    
    gpio_set_function(I2C_SDA, GPIO_FUNC_I2C);
    gpio_set_function(I2C_SCL, GPIO_FUNC_I2C);
    gpio_pull_up(I2C_SDA);
    gpio_pull_up(I2C_SCL);
    
    // get everything initialized for the le server
    le_setup();

    if( !bh1750_makeamove(CONTINUOUS_HIGH_RES_MODE) ) {
        puts("sensor initialization failed!");
        sensors_connected = 0;
    }
    sleep_ms(250); // wait a second...
    

    // turn on bluetooth!
    hci_power_control(HCI_POWER_ON);
    printf("bluetooth running!\n");

    // in this state, btstack runs in threadsafe background, so we just have the main thread sleep
    // to prevent the program from exiting
    while(true) {
        sleep_ms(1000);
    }

    return 0;
}
