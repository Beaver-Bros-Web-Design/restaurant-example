from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

def create_auth_blueprint(collection):
    bp = Blueprint("auth", __name__)

    @bp.route("/api/register", methods=["POST"])
    def register():
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            return jsonify({"error": "Username and password required"}), 400

        # Check if user already exists
        if collection.find_one({"username": username}):
            return jsonify({"error": "Username already exists"}), 400

        hashed_password = generate_password_hash(password)
        collection.insert_one({"username": username, "password": hashed_password})
        return jsonify({"message": "User created successfully"}), 201

    @bp.route("/api/login", methods=["POST"])
    def login():
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            return jsonify({"error": "Username and password required"}), 400

        user = collection.find_one({"username": username})
        if user and check_password_hash(user["password"], password):
            return jsonify({"exists": True})
        return jsonify({"exists": False})

    return bp