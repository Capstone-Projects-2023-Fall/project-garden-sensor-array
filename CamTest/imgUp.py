from firebase_admin import credentials, initialize_app, storage



def up(img):

    
    # 
    fileName = img
    bucket = storage.bucket()
    blob = bucket.blob(fileName)
    blob.upload_from_filename(fileName)

    blob.make_public()

    print("your file url", blob.public_url)