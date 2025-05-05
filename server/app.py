from flask import Flask, render_template, jsonify
from requests import request

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/api/greeting', methods=['GET'])
def greet():
    return jsonify({"message": "Hello from Flask!"})
@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.get_json()  # Expecting JSON payload
    return jsonify({"you_sent": data})


if __name__ == '__main__':
    app.run(debug=True)
