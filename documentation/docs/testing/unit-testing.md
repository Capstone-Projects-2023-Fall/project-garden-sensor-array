---
sidebar_position: 1
---
# Unit tests


## SCU(Sensor Control Unit) Unit Test

For this testing metric we use GitHub actions to test our logic when we update our SCU technology. 
We created data type structures to represent the connecting sensors to the SCU, and update the logic
we use in their .uf2 files. If there is a push or pull request made on the main branch, we ensure
that if there is any change in the logic, we update our Ctest files to ensure they work. 

Also since CMake and CTest is the means we use to test our code, whenever there is a change to the c files themselves, we do not have to regenerate the build manually, since GitHub actions will do this 
whenever it cleans the section. 

In order to be able to see our testing through Github actions please follow this link.
[LINK](https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/actions)

