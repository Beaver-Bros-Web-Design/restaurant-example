from flask import Blueprint, request, Response, jsonify
from werkzeug.utils import secure_filename
import datetime
from bson.binary import Binary
from bson.json_util import dumps, loads
from bson import ObjectId
def create_catering_blueprint(collection):
    bp = Blueprint("main", __name__)


    @bp.route("/api/upload-catering-form", methods=["POST"])
    def upload_pdf():
        try:
            data = request.get_json()

            date = data.get("date")
            email = data.get("email")
            event_type = data.get("eventType")
            first_name = data.get("firstName")
            last_name = data.get("lastName")
            number_people = data.get("numberPeople")
            phone_number = data.get("phoneNumber")

            # Example: Save to database, send email, generate PDF, etc.
            print("Received catering form:")
            print(f"{first_name} {last_name} is planning a {event_type} with {number_people} people on {date}")
            print(f"Contact: {email}, {phone_number}")

            result = collection.insert_one(data)

            return jsonify({
                    "message": "Form submitted successfully",
                    "inserted_id": str(result.inserted_id)
                }), 201

        except Exception as e:
            print(f"Error processing form: {e}")
            return jsonify({"error": "Something went wrong"}), 500
        
    @bp.route("/api/get-catering-forms", methods=["GET"])
    def get_catering_forms():
        try:
            documents = collection.find()
            
            # Convert ObjectId to string inside each document
            formatted_documents = []
            for doc in documents:
                doc["_id"] = str(doc["_id"])  # Convert ObjectId to string
                formatted_documents.append(doc)

            return jsonify(formatted_documents)  # Return a properly formatted JSON response
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        

    @bp.route("/api/delete-catering-form/<string:form_id>", methods=["DELETE"])
    def delete_catering_form(form_id):

        try:
            result = collection.delete_one({"_id": ObjectId(form_id)})
            
            if result.deleted_count == 0:
                return jsonify({"message": "Form not found"}), 404
            
            return jsonify({"message": f"Form {form_id} deleted successfully"})
        except Exception as e:
            return jsonify({"error": str(e)}), 500





    return bp