class HUB:  # constructor for the HUB
    def __init__(self, SensorID, AccountID, Temperature, Moisture, Sunlight, Time):
        self.SensorID = SensorID
        self.AccountID = AccountID
        self.Temperature = Temperature
        self.Moisture = Moisture
        self.Sunlight = Sunlight
        self.Time = Time

    """ # Still in testing
    def from_fb(source): # retrieves from database
        return HUB(
            source["SensorID"],
            source["AccountID"],
            source["Temperature"],
            source["Moisture"],
            source["Sunlight"],
            source["Time"]
        )
    """
    
    def to_fb(self):  # writes to database
        return {
            "SensorID": self.SensorID,
            "AccountID": self.AccountID,
            "Temperature": self.Temperature,
            "Moisture": self.Moisture,
            "Sunlight": self.Sunlight,
            "Time": self.Time
        }
