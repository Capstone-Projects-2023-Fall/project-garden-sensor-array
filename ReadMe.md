WELCOME TO GARDEN SENSOR ARRAY README
Created by
- Alexander
- Sam
- Regina
- Jimson
- Giorgio
- Gabriel

For any questions, please feel free to email, alexander.korsunsky@outlook.com
_____________________________________________________________________________

SETUP
_____________________________________________________________________________
### SCU SETUP
1. Install the Pico C SDK
2. Create a Pico project in the Server subdirectory located in the SCU_Code directory 
    
- Raspberry Pi's official  instructions for completing both of the above steps can be found [here](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)
    - Please note that these instructions vary depending on what operating system you are running, so double check you are following the correct steps for your operating system 

3. Create a build directory inside your newly created project, then cd into it and run "cmake .."
4. Now you can run "make" and the Server.uf2 executable will be built.
    - Note that you must be inside the build folder to run make
5. Connect the Pico to your computer using a micro-USB cable while holding down the BOOTSEL button to put it into mass storage mode.
6. Now the Server.uf2 exectuable can be copied to the Pico and the BLE server will start running automatically once the copy is finished.
______________________________________________________________________________
### RASPBERRY PI HUB DEVICE SETUP

1. Install the HUB_code folder from our GitHub in the root dir

2. Create a python virtual environment in the root dir
-python -m venv env
-source env/bin/activate

3. Put the service file from our GitHub into /lib/systemd/system 
-start it with this command: sudo systemctl enable garden_sensor.service
______________________________________________________________________________

### Website Setup
INSTALL REQ : make sure to install these on terminal when running the program on vs code
1. npm install bootstrap react-bootstrap 
2. npm install react-router-dom
3. npm install firebase 
4. npm install @mui/material @emotion/react @emotion/styled
5. npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
6. npm install react-native
7. npm install  @material-ui/core
8. npm install --save chart.js react-chartjs-2
9. when ready, cd to gsa-website and type: npm start


