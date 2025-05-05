### 1.  Create a Virtual Environment 


python -m venv venv

source venv/bin/activate

### 1.  Install Dependencies

pip install -r requirements.txt


### 1.  Configure Environment Variables

Create a .env file in the root directory and add your MongoDB connection string:

MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>

