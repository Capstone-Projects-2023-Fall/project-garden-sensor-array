"""Stores the database connection and handles writes and reads to the database

"""

class database():
    """The Database class will be able to store database credentials as well as connect to it and write data to it

        Parameters:
            user_id (int): Unique id given to each user that will be used to store their data
    """

    def __init__(self, user_id):
        self.user_id = user_id

    def connect(self):
        """This method connects to the database using credentials stored on the hub

        Returns: 
            boolean: True if connection was successful, False if not
        """
        return True
    
    def write_data(self, sensor_data):
        """This method takes the data from the sensors and formats it into a JSON packet that is sent to the database
        
        Returns: 
            Boolean: True if write was successful, False otherwiase
        """
        return True