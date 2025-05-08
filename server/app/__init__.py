from flask import Flask
from dotenv import load_dotenv
from app.config import Config
from .routes.menu import create_menu_blueprint
import os

from .services.db_service import DbService

def create_app():
    load_dotenv()
    app = Flask(__name__)



    config = Config()

    db_service = DbService(Config.uri, Config.db_name)

    menu_collection = db_service.get_collection_service(os.getenv("MENU_COLLECTION_NAME"))

    main_bp = create_menu_blueprint(menu_collection)
    app.register_blueprint(main_bp)

    return app
