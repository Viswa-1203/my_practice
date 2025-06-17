# mongodb://localhost:27017


from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["mini-project"]
collection = db["form_data"]