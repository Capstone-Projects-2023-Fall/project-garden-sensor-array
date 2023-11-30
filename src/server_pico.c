#include <stdio.h>
#include "pico/stdlib.h"
#include "btstack.h"
#include "pico/btstack_cyw43.h"
#include "pico/cyw43_arch.h"
#include "SCU.h"

// sensor libraries
// SPI.h is a dependency of the seesaw library
#include <SPI.h>
#include "Adafruit_seesaw.h"
#include "hp_BH1750.h"

static int                                      read_sensors = 0;   // set to 1 when there's a connection, 0 if not
static int                                      le_notify;   // same deal
static btstack_timer_source_t                   heartbeat;
static hci_con_handle_t                         con_handle;
static btstack_packet_callback_registration_t   hci_event_callback_registration;

// standard btstack function declarations, this is taken from their examples and the pico example
static void  heartbeat_handler(struct btstack_timer_source *ts);
static void packet_handler(uint8_t packet_type, uint16_t channel, uint8_t *packet, uint16_t size);
static uint16_t att_read_callback(hci_con_handle_t con_handle, uint16_t att_handle, uint16_t offset, uint8_t * buffer, uint16_t buffer_size);
static int att_write_callback(hci_con_handle_t connection_handle, uint16_t att_handle, uint16_t transaction_mode, uint16_t offset, uint8_t *buffer, uint16_t buffer_size);

// declarations for our sensor functions
void getASSMsoilmoisture();
void getASSMtempC();
void getBH1750lux();
void write_sensor_data();

// max length for our characteristic string. it could be made longer if necessary
#define LEN_SENSOR_DATA_MAX 30

char    sensor_data[LEN_SENSOR_DATA_MAX]; // the infamous "characteristic"
uint8_t sensor_data_length = 0;


Adafruit_seesaw soil_sensor;
hp_BH1750       light_sensor;

uint16_t soil_moisture   = 0;
float    tempC           = 0;
float    lux             = 0;


// btstack magic, it enables ble
#define APP_AD_FLAGS 0x06

// if you want to change the local name make sure you adjust the hex value before it!
// right now it is 0x04 because it must be equal to the number of elements that follow it
// aka if you add a letter to the name you would have to change the value to 0x05
// similarly you would have to decrease it if you were shortening the name.
// this is because the number at the beginning of each line tells the client
// how many bytes of the advertisement to read
static uint8_t adv_data[] = {
    // Flags general discoverable
    0x02, BLUETOOTH_DATA_TYPE_FLAGS, APP_AD_FLAGS,
    // Name
    0x04, BLUETOOTH_DATA_TYPE_COMPLETE_LOCAL_NAME, 'S', 'C', 'U',
    0x03, BLUETOOTH_DATA_TYPE_COMPLETE_LIST_OF_16_BIT_SERVICE_CLASS_UUIDS, 0x1a, 0x18,
};

const uint8_t adv_data_len = sizeof(adv_data);


#define HEARTBEAT_MS 1000
// this function is called repeatedly on the interval defined by HEARTBEAT_MS
// aka in this case it is called every second. 
// ts is a pointer to the globally defined heartbeat variable
static void heartbeat_handler(struct btstack_timer_source *ts) {
    // static because we want its value to persist through function calls
    static uint32_t counter = 0;
    counter++;
    if(counter % 10 == 0 && read_sensors) {
        // get sensor data and notify client
        write_sensor_data();
        printf("Data Written: %s\n", sensor_data);
        att_server_request_can_send_now_event(con_handle); // the packet handler sends its regards
    }

    // Invert the led
    // this is from the example, im keeping it for now because it's nice
    // to be able to see that the pico is doing something
    static int led_on = true;
    led_on = !led_on;
    cyw43_arch_gpio_put(0, led_on);

    // Restarts timer
    // so the function will be called again
    // in HEARTBEAT_MS milliseconds (1000 for now)
    // im not to sure why the timer is set with ts
    // instead of heartbeat, but this is the convention
    // used by btstack...dont think it makes a difference though
    btstack_run_loop_set_timer(ts, HEARTBEAT_MS);
    btstack_run_loop_add_timer(ts);
}

// this function looks like it has a lot going on, but it is just handling a lot of 
// annoying ble semantics. this is all taken from the pico-examples repository, which
// appears to have taken it directly from btstack
static void le_setup() {
    l2cap_init();

    // improves security, i think
    sm_init();

    // define the server profile and the function call back for when a client reads the a characteristic.
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

static void packet_handler(uint8_t packet_type, uint16_t channel, uint8_t *packet, uint16_t size) {
    UNUSED(size);
    UNUSED(channel);

    if (packet_type != HCI_EVENT_PACKET) return;

    switch (hci_event_packet_get_type(packet)) {
        case HCI_EVENT_LE_META:  // literally what the fuck is going on
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

static uint16_t att_read_callback(hci_con_handle_t connection_handle, uint16_t att_handle, uint16_t offset, uint8_t * buffer, uint16_t buffer_size) {
    UNUSED(connection_handle);

    if (att_handle == ATT_CHARACTERISTIC_0000181b_0000_1000_8000_00805F9B34FB_01_VALUE_HANDLE) { // it's beautiful
        // a string is like a blob, right?
        printf("%s\n", sensor_data);
        return att_read_callback_handle_blob((const uint8_t *)sensor_data, strlen(sensor_data), offset, buffer, buffer_size);
    }

    return 0;
}

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

// at some point this will need to actually read from the sensor
// right now it just spits out a random number to simulate reading the sensor 
void getASSMsoilmoisture(void) {
    soil_moisture = soil_sensor.touchRead(0);
    if(soil_moisture < 200 || soil_moisture > 2000) {
        printf("moisture read error!\n");
        // what to do next?
        // exit(-1); maybe
    }
}

// same deal as above
void getASSMtempC(void) {
    tempC = soil_sensor.getTemp();
    if(tempC < 0) {
        printf("bad temp read!\n");
        // keep going?
    }
}

// okay i get it
void getBH1750lux(void) {
    light_sensor.start();
    lux = light_sensor.getLux();
    if(lux < 0 || lux > 65000) {
        printf("bad lux read!\n");
        // stop the program?
    } 
}

void write_sensor_data(void) {
    getASSMsoilmoisture();
    getASSMtempC();
    getBH1750lux();

    // write sensor data to a string -- this is what will be read by the client!
    sensor_data_length = snprintf(sensor_data, LEN_SENSOR_DATA_MAX, "%u,%f,%f", soil_moisture, tempC, lux);
}

/* way is tao */
int main() {
    // initialize CYW43 driver architecture (will enable BT if/because CYW43_ENABLE_BLUETOOTH == 1)
    if (cyw43_arch_init()) {
        printf("failed to initialise cyw43_arch\n");
        return -1;
    }
    
    if( !soil_sensor.begin(0x36) || !light_sensor.begin(BH1750_TO_GROUND) ) {
        printf("sensor error!\n");
    }

    // get everything initialized for the le server
    le_setup();

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