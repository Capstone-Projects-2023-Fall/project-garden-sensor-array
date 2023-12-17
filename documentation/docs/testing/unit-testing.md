---
sidebar_position: 1
---
# Unit tests


## SCU(Sensor Control Unit) Unit Test

We use GitHub actions to automatically test our logic when we update our SCU code. 
We created structures to represent the connecting sensors to the SCU, and update the logic
we use in their .uf2 files. This ensures that, if there is a push or pull request made on the main branch which includes any change in the logic, our Ctest files ensure they work. 

In addition, since CMake and CTest are used to test our code, whenever there is a change to the c files themselves, we do not have to regenerate the build manually, as GitHub actions will do this 
whenever it cleans the section. 

To testing can be seen on Github actions by following this link.
[LINK](https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/actions)

