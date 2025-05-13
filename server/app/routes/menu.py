from flask import Blueprint, request, Response, jsonify
from werkzeug.utils import secure_filename
import datetime
from bson.binary import Binary


def create_menu_blueprint(collection):
    bp = Blueprint("main", __name__)

    @bp.route("/menu-pdf", methods=["GET"])
    def serve_pdf():
        doc = collection.find_one()
        if not doc or 'file' not in doc:
            return Response("PDF not found", status=404)

        file_data = doc['file']
        file_bytes = bytes(file_data) if isinstance(file_data, Binary) else None

        if not file_bytes:
            return Response("Unsupported file format", status=500)

        return Response(file_bytes, mimetype='application/pdf', headers={
            "Content-Disposition": "inline; filename=menu.pdf"
        })


    return bp
