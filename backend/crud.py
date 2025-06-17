from database import collection
from models import FormData,LoginData



def save_from_data(data: FormData):
    collection.insert_one(data.dict())



def check_credentials(data: LoginData):
    user = collection.find_one({"email":data.email})
    if user and user["password"] == data.password:
        return True
    
    return False