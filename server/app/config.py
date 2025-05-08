import os
from dotenv import load_dotenv

class Config:
    load_dotenv()


    uri = os.getenv("MONGO_URI")
    db_name = os.getenv("DATABASE_NAME")
    menu_collection = os.getenv("MENU_COLLECTION_NAME")

    def __init__(self):
        pass

