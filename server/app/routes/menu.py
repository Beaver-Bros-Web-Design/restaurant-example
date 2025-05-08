from flask import Blueprint, request, Response
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

    @bp.route("/upload-menu", methods=["POST"])
    def upload_pdf():
        if 'file' not in request.files:
            return Response("No file part", status=400)

        file = request.files['file']
        if file.filename == '':
            return Response("No selected file", status=400)

        filename = secure_filename(file.filename or "")
        file_bytes = file.read()

        # Clear the collection (only one file allowed)
        collection.delete_many({})

        # Insert new menu document
        collection.insert_one({
            "filename": filename,
            "uploaded_at": datetime.datetime.utcnow(),
            "file": Binary(file_bytes)
        })

        return Response("Menu uploaded successfully", status=201)

    return bp
