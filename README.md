# MediMatch AI 💊

**MediMatch AI** is an intelligent medicine recommendation system that suggests affordable and generic alternatives based on either:

- 🔎 A branded medicine name
- 🤖 Symptoms entered by the user (using an ML model)

The app uses:
- **Node.js + Express** for backend APIs and frontend hosting
- **Flask + scikit-learn** for ML-based predictions
- **Bootstrap** for responsive frontend UI

---

## 📁 Project Structure

```
MediMatch_AI/
├── backend/                # Express server + ML API
│   ├── app.js              # Node.js server
│   ├── ml_api.py           # Flask ML API
│   ├── routes/recommend.js
│   ├── data/medicines.json
│   └── public/             # Frontend (HTML, CSS, JS)
├── ml_model/               # Trained ML models + dataset
│   ├── medicine_predictor.pkl
│   ├── vectorizer.pkl
│   └── symptom_medicine_dataset.csv
├── package.json            # Node dependencies
├── requirements.txt        # Python dependencies (optional)
```

---

## 🚀 How to Run Locally

### 🔧 Prerequisites

- Node.js and npm
- Python 3.x and pip

---

### 🧠 Step 1: Start ML Flask API

```bash
cd backend
pip install flask flask-cors joblib scikit-learn pandas
python ml_api.py
```

Runs on: [http://localhost:8080/predict](http://localhost:8080/predict)

---

### 🧪 Step 2: Start Express + Frontend

```bash
cd backend
npm install
node app.js
```

Runs on: [http://localhost:5000](http://localhost:5000)

---

## 💻 Features

| Feature                   | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| 🔍 Brand Lookup           | Enter branded medicine like "Crocin" and get generic suggestions   |
| 🤖 ML Symptom Prediction  | Enter symptoms like "fever, headache" and get a smart suggestion    |
| 📱 Responsive Design      | Works well on desktop and mobile using Bootstrap                   |
| ⚡ Fast API Integration    | Node.js serves frontend and routes, Flask handles AI predictions   |

---

## 🧠 Dataset

ML model is trained on 100+ rows of symptom–medicine mappings stored in:

```
ml_model/symptom_medicine_dataset.csv
```

To retrain the model:

```bash
cd ml_model
python train_model.py
```

---

## 📦 Deployment Options

You can deploy:
- Flask ML API → Render.com / Railway / PythonAnywhere
- Frontend + Express → Vercel / Render (Node)
- Or separate: Flask on Render + frontend on GitHub Pages

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/ac3b37ae-b60f-41f2-a8e8-6a29ae144ecb)


---

## 👨‍💻 Author

- **Name:** Divyansh Sharma  
- **GitHub:** [Divyansh-bot](https://github.com/Divyansh-bot)  
- **Email:** divyanshsharma990@gmail.com

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
You are free to use, modify, and distribute this project for personal or educational purposes.
