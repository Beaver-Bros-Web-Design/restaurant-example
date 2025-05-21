from flask import Flask
from dotenv import load_dotenv
from app.config import Config
from app.routes.catering import create_catering_blueprint
from .routes.menu import create_menu_blueprint
from flask_cors import CORS
import os

from .services.db_service import DbService

def create_app():
    load_dotenv()
    app = Flask(__name__)
    CORS(app) 



    config = Config()


    db_service = DbService(config.uri, config.db_name)

   

    catering_collection = db_service.get_collection_service(os.getenv("CATERING_COLLECTION_NAME"))

    # main_bp = create_menu_blueprint(menu_collection)

    main_bp = create_catering_blueprint(catering_collection)
    app.register_blueprint(main_bp)

    return app
