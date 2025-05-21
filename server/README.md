### 1. Create a Virtual Environment

python -m venv venv

source venv/Scripts/activate

### 2. Install Dependencies

pip install -r requirements.txt

### 3. Configure Environment Variables

Create a .env file in the root directory and add your MongoDB connection string:

MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>

### A list of all .env variables in (in server/.env):

MONGO_URI=
DATABASE_NAME=
MENU_COLLECTION_NAME=
DEBUG=
PORT=
HOST=

python run.py
