from picamera2 import Picamera2, Preview
from time import sleep
from firebase_admin import credentials, initialize_app, storage


import imgUp

# Establish creds and initialize storage
cred = credentials.Certificate("/home/user/gsaStuff/cred.json")
initialize_app(cred, {'storageBucket': 'gardensensortest.appspot.com'})

piCam2 = Picamera2()

camera_config = piCam2.create_preview_configuration()
piCam2.configure(camera_config)
piCam2.rotation = 180

x = 0

while True:
    piCam2.start()
    sleep(2)

    img = "test%d.jpg" % x
    piCam2.capture_file(img)

    imgUp.up(img)

    #x += 1

    sleep(10)