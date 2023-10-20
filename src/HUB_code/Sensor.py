"""Identifies and handles communication with a Sensor Control Unit (SCU)

"""

class sensor():
    """The Sensor class will be used to represent any particular SCU, connect to it, and collect data from it

        Parameters:
            name (string): Human readable SCU name. "Sensor (number)" by default, overwritten by user given name.
            id (int): Device's Bluetooth ID used to connect and listen to a particular sensor
    """

    def __init__(self, name, id):
        self.name = name
        self.id = id

    def connect(self):
        """This method connects to the sensor using it's id

        Returns: 
            boolean: True if connection was successful, False if not
        """
        return True
    
    def listen(self):
        """This method receives data from a sensor using it's id and stores it in an array
        
        Returns: 
            int[]: an array of integers representing sensor data (sunlight, moisture, temp)
        """
        data = []
        return data