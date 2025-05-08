from os import getenv

from dotenv import load_dotenv
from app import create_app
load_dotenv()
PORT = int(getenv("PORT", 5000)) 
HOST = getenv("HOST", "0.0.0.0")  
print(HOST, PORT)

app = create_app()

if __name__ == "__main__":
    app.run(host=HOST, port=PORT)