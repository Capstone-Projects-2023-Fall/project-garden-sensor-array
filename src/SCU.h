// auto generated by btstack
// compiled from SCU.gatt

// att db format version 1

// binary attribute representation:
// - size in bytes (16), flags(16), handle (16), uuid (16/128), value(...)

#include <stdint.h>

// Reference: https://en.cppreference.com/w/cpp/feature_test
#if __cplusplus >= 200704L
constexpr
#endif
const uint8_t profile_data[] =
{
    // ATT DB Version
    1,

    // 0x0001 PRIMARY_SERVICE-GAP_SERVICE
    0x0a, 0x00, 0x02, 0x00, 0x01, 0x00, 0x00, 0x28, 0x00, 0x18, 
    // 0x0002 CHARACTERISTIC-GAP_DEVICE_NAME - READ
    0x0d, 0x00, 0x02, 0x00, 0x02, 0x00, 0x03, 0x28, 0x02, 0x03, 0x00, 0x00, 0x2a, 
    // 0x0003 VALUE CHARACTERISTIC-GAP_DEVICE_NAME - READ -'SCU'
    // READ_ANYBODY
    0x0b, 0x00, 0x02, 0x00, 0x03, 0x00, 0x00, 0x2a, 0x53, 0x43, 0x55, 
    // 0x0004 PRIMARY_SERVICE-GATT_SERVICE
    0x0a, 0x00, 0x02, 0x00, 0x04, 0x00, 0x00, 0x28, 0x01, 0x18, 
    // 0x0005 CHARACTERISTIC-GATT_DATABASE_HASH - READ
    0x0d, 0x00, 0x02, 0x00, 0x05, 0x00, 0x03, 0x28, 0x02, 0x06, 0x00, 0x2a, 0x2b, 
    // 0x0006 VALUE CHARACTERISTIC-GATT_DATABASE_HASH - READ -''
    // READ_ANYBODY
    0x18, 0x00, 0x02, 0x00, 0x06, 0x00, 0x2a, 0x2b, 0x40, 0x8d, 0x3b, 0x05, 0xac, 0x7b, 0x14, 0x1f, 0x03, 0x9d, 0xab, 0x81, 0xbd, 0x18, 0xf7, 0xc1, 
    // 0x0007 PRIMARY_SERVICE-ORG_BLUETOOTH_SERVICE_ENVIRONMENTAL_SENSING
    0x0a, 0x00, 0x02, 0x00, 0x07, 0x00, 0x00, 0x28, 0x1a, 0x18, 
    // 0x0008 CHARACTERISTIC-0000181b-0000-1000-8000-00805F9B34FB - READ | NOTIFY | DYNAMIC
    0x1b, 0x00, 0x02, 0x00, 0x08, 0x00, 0x03, 0x28, 0x12, 0x09, 0x00, 0xfb, 0x34, 0x9b, 0x5f, 0x80, 0x00, 0x00, 0x80, 0x00, 0x10, 0x00, 0x00, 0x1b, 0x18, 0x00, 0x00, 
    // 0x0009 VALUE CHARACTERISTIC-0000181b-0000-1000-8000-00805F9B34FB - READ | NOTIFY | DYNAMIC
    // READ_ANYBODY
    0x16, 0x00, 0x02, 0x03, 0x09, 0x00, 0xfb, 0x34, 0x9b, 0x5f, 0x80, 0x00, 0x00, 0x80, 0x00, 0x10, 0x00, 0x00, 0x1b, 0x18, 0x00, 0x00, 
    // 0x000a CLIENT_CHARACTERISTIC_CONFIGURATION
    // READ_ANYBODY, WRITE_ANYBODY
    0x0a, 0x00, 0x0e, 0x01, 0x0a, 0x00, 0x02, 0x29, 0x00, 0x00, 
    // END
    0x00, 0x00, 
}; // total size 85 bytes 


//
// list service handle ranges
//
#define ATT_SERVICE_GAP_SERVICE_START_HANDLE 0x0001
#define ATT_SERVICE_GAP_SERVICE_END_HANDLE 0x0003
#define ATT_SERVICE_GAP_SERVICE_01_START_HANDLE 0x0001
#define ATT_SERVICE_GAP_SERVICE_01_END_HANDLE 0x0003
#define ATT_SERVICE_GATT_SERVICE_START_HANDLE 0x0004
#define ATT_SERVICE_GATT_SERVICE_END_HANDLE 0x0006
#define ATT_SERVICE_GATT_SERVICE_01_START_HANDLE 0x0004
#define ATT_SERVICE_GATT_SERVICE_01_END_HANDLE 0x0006
#define ATT_SERVICE_ORG_BLUETOOTH_SERVICE_ENVIRONMENTAL_SENSING_START_HANDLE 0x0007
#define ATT_SERVICE_ORG_BLUETOOTH_SERVICE_ENVIRONMENTAL_SENSING_END_HANDLE 0x000a
#define ATT_SERVICE_ORG_BLUETOOTH_SERVICE_ENVIRONMENTAL_SENSING_01_START_HANDLE 0x0007
#define ATT_SERVICE_ORG_BLUETOOTH_SERVICE_ENVIRONMENTAL_SENSING_01_END_HANDLE 0x000a

//
// list mapping between characteristics and handles
//
#define ATT_CHARACTERISTIC_GAP_DEVICE_NAME_01_VALUE_HANDLE 0x0003
#define ATT_CHARACTERISTIC_GATT_DATABASE_HASH_01_VALUE_HANDLE 0x0006
#define ATT_CHARACTERISTIC_0000181b_0000_1000_8000_00805F9B34FB_01_VALUE_HANDLE 0x0009
#define ATT_CHARACTERISTIC_0000181b_0000_1000_8000_00805F9B34FB_01_CLIENT_CONFIGURATION_HANDLE 0x000a
