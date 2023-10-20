#include <stdio.h>
#include "btstack.h"
#include "bluetooth_sdp.h"
#include "pico/btstack_cyw43.h"
#include "pico/stdlib.h"
#include "pico/cyw43_arch.h"
#include "pico/stdlib.h"
#include "garden_sensor.h"

// for random number generation -- can be removed once sensors are working
#include "hardware/regs/rosc.h"
#include "hardware/regs/addressmap.h"


// server will "beat" every second
#define HEARTBEAT_MS 1000

// btstack magic, it enables ble
#define APP_AD_FLAGS 0x02

static int  read_sensors;   // set to 1 when there's a connection, 0 if not
static btstack_timer_source_t heartbeat;   
static btstack_packet_callback_registration_t hci_event_callback_registration;
static hci_con_handle_t con_handle;

// standard btstack stuff, this is taken from their examples and the pico example
static void packet_handler (uint8_t packet_type, uint16_t channel, uint8_t *packet, uint16_t size);
static uint16_t att_read_callback(hci_con_handle_t con_handle, uint16_t att_handle, uint16_t offset, uint8_t * buffer, uint16_t buffer_size);
static void  heartbeat_handler(struct btstack_timer_source *ts);

static uint8_t gatt_service_buffer[70];

#define LEN_SENSOR_DATA 20
char sensor_data[LEN_SENSOR_DATA];

const uint8_t adv_data[] = {
    // Flags general discoverable
    0x02, BLUETOOTH_DATA_TYPE_FLAGS, APP_AD_FLAGS,
    // Name
    0x0b, BLUETOOTH_DATA_TYPE_COMPLETE_LOCAL_NAME, 'S', 'C', 'U', ' ', '0', '0', ':', '0', '0', ':', '0', '0', ':', '0', '0', ':', '0', '0', ':', '0', '0', 
    // 844194e2-b026-48b2-b7c3-d3b878fd2afd
    // This is what makes our SCUs unique! Each of our SCUs must have this uuid so that the hub recognizes its service
    0x03, BLUETOOTH_DATA_TYPE_COMPLETE_LIST_OF_128_BIT_SERVICE_CLASS_UUIDS, 0xfd, 0x2a, 0xfd, 0x78, 0xb8, 0xd3, 0xc3, 0xb7, 0xb2, 0x48, 0x26, 0xb0, 0xe2, 0x94, 0x41, 0x84,
};

const uint8_t adv_data_len = sizeof(adv_data);

// counter for 

static void heartbeat_handler(struct btstack_timer_source *ts) {
    // static because we want its value to persis through function calls
    static uint32_t counter = 1;

    if(counter % 10 == 0 && read_sensors) {
        // get sensor data and notify client
    }
}

// this function looks like it has a lot going on, but it is just handling a lot of 
// annoying ble semantics. this is all taken from the pico-examples repository, which
// appears to have taken it directly from btstack
static void le_setup() {
    l2cap_init();

    // improves security, i think
    sm_init();

    // define the server profile and the function call back for when a client reads the a characteristic.
    // the write callback is left NULL because there is no case where our hub should be writing data to the SCUs
    att_server_init(profile_data, att_read_callback, NULL);    

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
    heartbeat.process = &heartbeat_handler;
    btstack_run_loop_set_timer(&heartbeat, HEARTBEAT_MS);
    btstack_run_loop_add_timer(&heartbeat);
}

static uint16_t att_read_callback(hci_con_handle_t con_handle, uint16_t att_handle, uint16_t offset, uint8_t * buffer, uint16_t buffer_size) {

}

// function for generating random numbers
// just for testing
// raspberry pi is gonna sue me
uint32_t rnd(void){
    int k, random=0;
    volatile uint32_t *rnd_reg=(uint32_t *)(ROSC_BASE + ROSC_RANDOMBIT_OFFSET);
    
    for(k=0;k<32;k++){
    
    random = random << 1;
    random=random + (0x00000001 & (*rnd_reg));

    }
    return random;
}

// at some point this will need to actually read from the sensor
// right now it just spits out a random number to simulate reading the sensor 
void getASSMsoilmoisture(uint16_t *soil_moisture) {
    *soil_moisture = (uint16_t)rnd();
}

// same deal as above
getASSMtempC(float *tempC) {
    *tempC = (float)rnd() / rnd();
}

// okay i get it
void getBH1750lux(float *lux) {
    *lux = (float)rnd() / rnd(); 
}

void write_sensor_data(uint16_t *soil_moisture, float *tempC, float *lux) {
    getASSMsoilmoisture(soil_moisture);
    getASSMtempC(tempC);
    getBH1750lux(lux);

    // write sensor data to a string -- this is what will be read by the client
    snprintf(sensor_data, LEN_SENSOR_DATA, "%u,%f,%f", *soil_moisture, *tempC, *lux);
}

/* way is tao */
int main() {
    stdio_init_all();

    // get this party started
    le_setup();
    
    // bluetooth is on!
    hci_power_control(HCI_POWER_ON);
    

    return 0;
}
