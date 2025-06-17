from fastapi import APIRouter
from models import FormData,LoginData
from crud import save_from_data,check_credentials


router = APIRouter()


@router.post("/subit-form")
def submit_form(data:FormData):
    save_from_data(data)
    return {"msg":"form data saved sucessfully"}


@router.post("/login")
def login(data :LoginData ):
    if check_credentials(data):
        return {"msg":"Login sucessfull"}
    
    raise HTTPException(status_code=401, detail="Invalid credentials")