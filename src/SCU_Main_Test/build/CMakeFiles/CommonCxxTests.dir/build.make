# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.28

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files (x86)\cmake-3.28.0-rc1-windows-x86_64\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files (x86)\cmake-3.28.0-rc1-windows-x86_64\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build"

# Include any dependencies generated for this target.
include CMakeFiles/CommonCxxTests.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/CommonCxxTests.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/CommonCxxTests.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/CommonCxxTests.dir/flags.make

CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.obj: CMakeFiles/CommonCxxTests.dir/flags.make
CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.obj: CommonCxxTests.cxx
CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.obj: CMakeFiles/CommonCxxTests.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.obj -MF CMakeFiles\CommonCxxTests.dir\CommonCxxTests.cxx.obj.d -o CMakeFiles\CommonCxxTests.dir\CommonCxxTests.cxx.obj -c "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CommonCxxTests.cxx"

CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CommonCxxTests.cxx" > CMakeFiles\CommonCxxTests.dir\CommonCxxTests.cxx.i

CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CommonCxxTests.cxx" -o CMakeFiles\CommonCxxTests.dir\CommonCxxTests.cxx.s

CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.obj: CMakeFiles/CommonCxxTests.dir/flags.make
CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.obj: C:/Users/Ak74u/Documents/Garden\ Sensor\ Array/SCU_Main_Test/testgetASSMsoilmoisture.cpp
CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.obj: CMakeFiles/CommonCxxTests.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.obj -MF CMakeFiles\CommonCxxTests.dir\testgetASSMsoilmoisture.cpp.obj.d -o CMakeFiles\CommonCxxTests.dir\testgetASSMsoilmoisture.cpp.obj -c "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetASSMsoilmoisture.cpp"

CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetASSMsoilmoisture.cpp" > CMakeFiles\CommonCxxTests.dir\testgetASSMsoilmoisture.cpp.i

CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetASSMsoilmoisture.cpp" -o CMakeFiles\CommonCxxTests.dir\testgetASSMsoilmoisture.cpp.s

CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.obj: CMakeFiles/CommonCxxTests.dir/flags.make
CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.obj: C:/Users/Ak74u/Documents/Garden\ Sensor\ Array/SCU_Main_Test/testgetASSMtempC.cpp
CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.obj: CMakeFiles/CommonCxxTests.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.obj -MF CMakeFiles\CommonCxxTests.dir\testgetASSMtempC.cpp.obj.d -o CMakeFiles\CommonCxxTests.dir\testgetASSMtempC.cpp.obj -c "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetASSMtempC.cpp"

CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetASSMtempC.cpp" > CMakeFiles\CommonCxxTests.dir\testgetASSMtempC.cpp.i

CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetASSMtempC.cpp" -o CMakeFiles\CommonCxxTests.dir\testgetASSMtempC.cpp.s

CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.obj: CMakeFiles/CommonCxxTests.dir/flags.make
CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.obj: C:/Users/Ak74u/Documents/Garden\ Sensor\ Array/SCU_Main_Test/testgetBH1750lux.cpp
CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.obj: CMakeFiles/CommonCxxTests.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.obj -MF CMakeFiles\CommonCxxTests.dir\testgetBH1750lux.cpp.obj.d -o CMakeFiles\CommonCxxTests.dir\testgetBH1750lux.cpp.obj -c "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetBH1750lux.cpp"

CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetBH1750lux.cpp" > CMakeFiles\CommonCxxTests.dir\testgetBH1750lux.cpp.i

CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetBH1750lux.cpp" -o CMakeFiles\CommonCxxTests.dir\testgetBH1750lux.cpp.s

CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.obj: CMakeFiles/CommonCxxTests.dir/flags.make
CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.obj: C:/Users/Ak74u/Documents/Garden\ Sensor\ Array/SCU_Main_Test/testgetSensorData.cpp
CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.obj: CMakeFiles/CommonCxxTests.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.obj -MF CMakeFiles\CommonCxxTests.dir\testgetSensorData.cpp.obj.d -o CMakeFiles\CommonCxxTests.dir\testgetSensorData.cpp.obj -c "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetSensorData.cpp"

CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetSensorData.cpp" > CMakeFiles\CommonCxxTests.dir\testgetSensorData.cpp.i

CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testgetSensorData.cpp" -o CMakeFiles\CommonCxxTests.dir\testgetSensorData.cpp.s

CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.obj: CMakeFiles/CommonCxxTests.dir/flags.make
CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.obj: C:/Users/Ak74u/Documents/Garden\ Sensor\ Array/SCU_Main_Test/testformat_sensor_data.cpp
CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.obj: CMakeFiles/CommonCxxTests.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.obj -MF CMakeFiles\CommonCxxTests.dir\testformat_sensor_data.cpp.obj.d -o CMakeFiles\CommonCxxTests.dir\testformat_sensor_data.cpp.obj -c "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testformat_sensor_data.cpp"

CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testformat_sensor_data.cpp" > CMakeFiles\CommonCxxTests.dir\testformat_sensor_data.cpp.i

CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\testformat_sensor_data.cpp" -o CMakeFiles\CommonCxxTests.dir\testformat_sensor_data.cpp.s

# Object files for target CommonCxxTests
CommonCxxTests_OBJECTS = \
"CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.obj" \
"CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.obj" \
"CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.obj" \
"CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.obj" \
"CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.obj" \
"CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.obj"

# External object files for target CommonCxxTests
CommonCxxTests_EXTERNAL_OBJECTS =

CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/CommonCxxTests.cxx.obj
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/testgetASSMsoilmoisture.cpp.obj
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/testgetASSMtempC.cpp.obj
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/testgetBH1750lux.cpp.obj
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/testgetSensorData.cpp.obj
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/testformat_sensor_data.cpp.obj
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/build.make
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/linkLibs.rsp
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/objects1.rsp
CommonCxxTests.exe: CMakeFiles/CommonCxxTests.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_7) "Linking CXX executable CommonCxxTests.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\CommonCxxTests.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/CommonCxxTests.dir/build: CommonCxxTests.exe
.PHONY : CMakeFiles/CommonCxxTests.dir/build

CMakeFiles/CommonCxxTests.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\CommonCxxTests.dir\cmake_clean.cmake
.PHONY : CMakeFiles/CommonCxxTests.dir/clean

CMakeFiles/CommonCxxTests.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test" "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test" "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build" "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build" "C:\Users\Ak74u\Documents\Garden Sensor Array\SCU_Main_Test\build\CMakeFiles\CommonCxxTests.dir\DependInfo.cmake" "--color=$(COLOR)"
.PHONY : CMakeFiles/CommonCxxTests.dir/depend

