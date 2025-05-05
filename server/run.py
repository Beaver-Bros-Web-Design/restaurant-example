from datetime import datetime
from flask import Flask, jsonify
from pymongo import MongoClient
import configparser
import base64
import os
from dotenv import load_dotenv




# Setup Flask and MongoDB
app = Flask(__name__)
load_dotenv()  
client = MongoClient(os.getenv("MONGO_URI"))
db = client["restaurant_example"]
collection = db["menu"]

@app.route('/data', methods=['GET'])
def get_data():

    doc = collection.find_one()
    if not doc:
        return jsonify({"error": "Document not found"}), 404

    result = {
        "id": str(doc["_id"]),
        "uploaded_at": doc["uploaded_at"].isoformat(),
        "filename": doc["filename"],
        "tmp": doc["tmp"],
        "file": base64.b64encode(doc["file"]).decode("utf-8")
    }

    return jsonify(result)

@app.route('/all', methods=['GET'])
def get_all_docs():

    collection.insert_one({
    "tmp": "1",
    "filename": "test.txt",
    "uploaded_at": datetime.utcnow(),
    "file": b"test"
        })
    docs = []
    for doc in collection.find():
        docs.append({
            "id": str(doc["_id"]),
            "uploaded_at": doc.get("uploaded_at", None).isoformat() if doc.get("uploaded_at") else None,
            "filename": doc.get("filename"),
            "tmp": doc.get("tmp"),
            "file": base64.b64encode(doc["file"]).decode("utf-8") if doc.get("file") else None
        })
    return jsonify(docs)
if __name__ == '__main__':
    app.run(debug=True)
