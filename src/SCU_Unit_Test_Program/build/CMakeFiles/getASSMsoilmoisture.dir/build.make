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
CMAKE_SOURCE_DIR = "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\build"

# Include any dependencies generated for this target.
include CMakeFiles/getASSMsoilmoisture.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/getASSMsoilmoisture.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/getASSMsoilmoisture.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/getASSMsoilmoisture.dir/flags.make

CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.obj: CMakeFiles/getASSMsoilmoisture.dir/flags.make
CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.obj: C:/Users/Ak74u/Documents/Garden\ Sensor\ Array/C_test/src/SCU_Test_Program.cpp
CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.obj: CMakeFiles/getASSMsoilmoisture.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.obj"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.obj -MF CMakeFiles\getASSMsoilmoisture.dir\src\SCU_Test_Program.cpp.obj.d -o CMakeFiles\getASSMsoilmoisture.dir\src\SCU_Test_Program.cpp.obj -c "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\src\SCU_Test_Program.cpp"

CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.i"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\src\SCU_Test_Program.cpp" > CMakeFiles\getASSMsoilmoisture.dir\src\SCU_Test_Program.cpp.i

CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.s"
	C:\MinGW\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\src\SCU_Test_Program.cpp" -o CMakeFiles\getASSMsoilmoisture.dir\src\SCU_Test_Program.cpp.s

# Object files for target getASSMsoilmoisture
getASSMsoilmoisture_OBJECTS = \
"CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.obj"

# External object files for target getASSMsoilmoisture
getASSMsoilmoisture_EXTERNAL_OBJECTS =

getASSMsoilmoisture.exe: CMakeFiles/getASSMsoilmoisture.dir/src/SCU_Test_Program.cpp.obj
getASSMsoilmoisture.exe: CMakeFiles/getASSMsoilmoisture.dir/build.make
getASSMsoilmoisture.exe: CMakeFiles/getASSMsoilmoisture.dir/linkLibs.rsp
getASSMsoilmoisture.exe: CMakeFiles/getASSMsoilmoisture.dir/objects1.rsp
getASSMsoilmoisture.exe: CMakeFiles/getASSMsoilmoisture.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir="C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\build\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable getASSMsoilmoisture.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\getASSMsoilmoisture.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/getASSMsoilmoisture.dir/build: getASSMsoilmoisture.exe
.PHONY : CMakeFiles/getASSMsoilmoisture.dir/build

CMakeFiles/getASSMsoilmoisture.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\getASSMsoilmoisture.dir\cmake_clean.cmake
.PHONY : CMakeFiles/getASSMsoilmoisture.dir/clean

CMakeFiles/getASSMsoilmoisture.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test" "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test" "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\build" "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\build" "C:\Users\Ak74u\Documents\Garden Sensor Array\C_test\build\CMakeFiles\getASSMsoilmoisture.dir\DependInfo.cmake" "--color=$(COLOR)"
.PHONY : CMakeFiles/getASSMsoilmoisture.dir/depend

