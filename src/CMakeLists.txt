# Generated Cmake Pico project file

cmake_minimum_required(VERSION 3.13)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)

# Initialise pico_sdk from installed location
# (note this can come from environment, CMake cache etc)
set(PICO_SDK_PATH "/home/hops/pico/pico-sdk")

set(PICO_BOARD pico_w CACHE STRING "Board type")

# Pull in Raspberry Pi Pico SDK (must be before project)
include(pico_sdk_import.cmake)

if (PICO_SDK_VERSION_STRING VERSION_LESS "1.4.0")
  message(FATAL_ERROR "Raspberry Pi Pico SDK version 1.4.0 (or later) required. Your version is ${PICO_SDK_VERSION_STRING}")
endif()

project(pico_ble C CXX ASM)

# Initialise the Raspberry Pi Pico SDK
pico_sdk_init()

# Add executable. Default name is the project name, version 0.1

add_executable(pico_ble pico_ble.c )

pico_set_program_name(pico_ble "pico_ble")
pico_set_program_version(pico_ble "0.1")

pico_enable_stdio_uart(pico_ble 0)
pico_enable_stdio_usb(pico_ble 1)

# Add the standard library to the build
target_link_libraries(pico_ble
        pico_stdlib
        pico_btstack_ble 
        pico_btstack_sdp_server
        pico_btstack_cyw43 
        pico_cyw43_arch_none
        hardware_adc)

# Add the standard include files to the build
target_include_directories(pico_ble PRIVATE
  ${CMAKE_CURRENT_LIST_DIR}
  ${CMAKE_CURRENT_LIST_DIR}/.. # for our common lwipopts or any other standard includes, if required
)

# Add any user requested libraries
target_link_libraries(pico_ble 
        )

pico_add_extra_outputs(pico_ble)

