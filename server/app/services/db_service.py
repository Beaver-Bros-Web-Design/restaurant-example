from pymongo import MongoClient

class DbService:
    def __init__(self, uri, db_name):
        self.client = MongoClient(uri)
        self.db_name = db_name


    def get_database_service(self):
        return self.client[self.db_name]

    def get_collection_service(self, collection_name):
        db = self.get_database_service()
        print(db)
        return db[collection_name]
