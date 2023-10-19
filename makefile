all:
	g++ -std=c++17 SCU_Test_Program.cpp -o SCU
	g++ -std=c++17 SCU_Unit_Test.cpp -lcppunit -o SCUTest

test:
	chmod +x SCU
	./SCUTest

clean:
	$(RM) SCU SCUTest