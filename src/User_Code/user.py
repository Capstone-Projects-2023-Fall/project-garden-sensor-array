import pyrebase

firebaseConfig = {
  'apiKey': "AIzaSyA3M16JuWNWWy8t5pfKN86mg-LtgRWKh4g",
  'authDomain': "gardensensortest.firebaseapp.com",
  'databaseURL': "https://gardensensortest-default-rtdb.firebaseio.com",
  'projectId': "gardensensortest",
  'storageBucket': "gardensensortest.appspot.com",
 ' messagingSenderId': "778109626399",
  'appId': "1:778109626399:web:bf79e4c162bf17538b4d2a",
  'measurementId': "G-W1QFYR82FY"
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()
db = firebase.database()

def signup():   # create user and store it in firebase
    print("Please Sign Up")
    name = input('Enter name: ')
    email = input("Enter email: ")
    password = input("Enter password: ")
    try:   
        user = auth.create_user_with_email_and_password(email, password)

        data = {                             # stored in the realtime database
            'name': name,
            'email': email,
            'password': password
        }

        results = db.child('Users').push(data, user['idToken'])
        print("Successfully registered account")
    except:
        print("Email already exists")

def signin():  # prompts user to enter email/password
    print("Please Sign In")
    email = input("Enter email: ")
    password = input("Enter password: ")
    try:   
        user = auth.sign_in_with_email_and_password(email, password)
        print("Successfully logged in")
    except:
        print("Email or Password is incorrect")

signup()

