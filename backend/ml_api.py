from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os

app = Flask(__name__)
CORS(app)

model = joblib.load(os.path.join("..", "ml_model", "medicine_predictor.pkl"))
vectorizer = joblib.load(os.path.join("..", "ml_model", "vectorizer.pkl"))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    symptoms = data.get("symptoms", "")
    if not symptoms:
        return jsonify({"error": "No symptoms provided"}), 400
    X = vectorizer.transform([symptoms])
    prediction = model.predict(X)[0]
    return jsonify({"medicine": prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
