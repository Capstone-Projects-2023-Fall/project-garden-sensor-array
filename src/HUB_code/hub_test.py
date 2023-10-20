import Broker
import Database
import Sensor

def test_wifi():
    assert Broker.connect_wifi('ssid', 'password')

def test_db():
    db = Database.database(12345)
    assert db.write_data(54321)

def test_sensor():
    s = Sensor.sensor('sensor1', 1234)
    assert s.listen() == []