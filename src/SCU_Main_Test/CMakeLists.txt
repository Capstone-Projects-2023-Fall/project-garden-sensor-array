# set minimum cmake version
cmake_minimum_required(VERSION 3.14)

# project name and language
project(C_TEST)

# require C++14
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# enable testing functionality
enable_testing()


# create the testing file and list of tests
create_test_sourcelist (Tests
  CommonCxxTests.cxx
  testgetASSMsoilmoisture.cpp 
  testgetASSMtempC.cpp
  testgetBH1750lux.cpp
  testgetSensorData.cpp
  testformat_sensor_data.cpp
  )

# add the executable
add_executable (CommonCxxTests ${Tests})

# remove the test driver source file
set (TestsToRun ${Tests})
remove (TestsToRun CommonCxxTests.cxx)

# Add all the ADD_TEST for each test
foreach (test ${TestsToRun})
  get_filename_component (TName ${test} NAME_WE)
  add_test (NAME ${TName} COMMAND CommonCxxTests ${TName})
endforeach ()
