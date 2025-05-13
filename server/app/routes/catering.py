from flask import Blueprint, request, Response, jsonify
from werkzeug.utils import secure_filename
import datetime
from bson.binary import Binary

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


    return bp