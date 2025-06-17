from fastapi import FastAPI
from routes import form


app = FastAPI()

app.include_router(form.router)