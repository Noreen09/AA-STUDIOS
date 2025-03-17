from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import traceback
from dotenv import load_dotenv
import os
from flask_migrate import Migrate

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://aimapogeestudios.com"}})

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("SQLALCHEMY_DATABASE_URI")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")  # Added this line

# Initialize database
db = SQLAlchemy(app)
migrate = Migrate(app, db)  # No need for db.create_all()


class Visitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    submission_date = db.Column(db.DateTime, default=db.func.current_timestamp())

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    message = db.Column(db.Text, nullable=False)
    submission_date = db.Column(db.DateTime, default=db.func.current_timestamp())

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    budget = db.Column(db.String(50), nullable=False)
    services = db.Column(db.Text, nullable=False)  # Stored as comma-separated values
    submission_date = db.Column(db.DateTime, default=db.func.current_timestamp())

# Routes

## Route 1: Handle Email Popup Submissions (Visitor Emails)
@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()
        print("Received data:", data)  #  Debugging print

        if not data:
            return jsonify({"error": "Request body must be JSON"}), 400

        email = data.get('email', '').strip().lower()
        if not email:
            return jsonify({"error": "Email is required"}), 400

        #  Check if email already exists
        if Visitor.query.filter_by(email=email).first():
            return jsonify({"error": "Email already subscribed"}), 400

        #  Save email to database
        new_visitor = Visitor(email=email)
        db.session.add(new_visitor)
        db.session.commit()
        return jsonify({"message": "Thank you for subscribing!"}), 201

    except Exception as e:
        db.session.rollback()
        print("Database error:", traceback.format_exc())  #  Detailed error logging
        return jsonify({"error": "Database error", "details": str(e)}), 500

## Route 2: Handle Contact Form Submissions
@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        print("Received data:", data)  #  Debugging print

        if not data:
            return jsonify({"error": "Request body must be JSON"}), 400

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        phone = data.get('phone', '').strip()
        message = data.get('message', '').strip()

        if not all([name, email, phone, message]):
            return jsonify({"error": "All fields are required"}), 400

        #  Save contact submission to database
        new_contact = Contact(name=name, email=email, phone=phone, message=message)
        db.session.add(new_contact)
        db.session.commit()
        return jsonify({"message": "Your message has been sent!"}), 201

    except Exception as e:
        db.session.rollback()
        print("Database error:", traceback.format_exc())  #  Detailed error logging
        return jsonify({"error": "Database error", "details": str(e)}), 500

## Route 3: Handle Order Form Submissions
@app.route('/api/order', methods=['POST'])
def order():
    try:
        data = request.get_json()
        print("Received data:", data)  #  Debugging print

        if not data:
            return jsonify({"error": "Request body must be JSON"}), 400

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        phone = data.get('phone', '').strip()
        budget = data.get('budget', '').strip()
        services = data.get('services', [])

        if not all([name, email, phone, budget]):
            return jsonify({"error": "All fields are required"}), 400

        if not isinstance(services, list) or len(services) == 0:
            return jsonify({"error": "Services must be a non-empty list"}), 400

        #  Save order submission to database
        new_order = Order(name=name, email=email, phone=phone, budget=budget, services=",".join(services))
        db.session.add(new_order)
        db.session.commit()
        return jsonify({"message": "Your order has been submitted!"}), 201

    except Exception as e:
        db.session.rollback()
        print("Database error:", traceback.format_exc())  #  Detailed error logging
        return jsonify({"error": "Database error", "details": str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
