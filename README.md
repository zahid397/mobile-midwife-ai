# 🤰 Mobile Midwife AI  
### AI-powered Pregnancy Risk Awareness System

**Mobile Midwife AI** is a mobile-first, Bangla-friendly web application designed to provide **early pregnancy risk awareness** for mothers, especially in low-resource and rural settings.

⚠️ This system is for **awareness and early guidance only** — it does **not replace doctors or medical diagnosis**.

---

## 🌟 Motivation
In Bangladesh and similar regions:
- Many pregnant mothers lack regular access to doctors
- Early danger signs are often ignored or misunderstood
- Language and usability barriers reduce access to digital health tools

**Mobile Midwife AI** aims to act as a **digital first step** — helping mothers recognize risk early and seek timely medical help.

> “I speak with proof, not noise.”

---

## 🚀 Features
- 📝 Symptom input (Bangla / English)
- 📅 Pregnancy month selection
- 🧠 Risk classification: **LOW / MEDIUM / HIGH**
- 🎨 Clean, mobile-first UI (inspired by real apps like bKash)
- 🔗 Separated frontend & backend (production-style architecture)
- 📄 Fully documented backend API (Swagger)

---

## 🖥️ Live Application Links

### 🌐 Frontend (Vercel)
👉 **Live App:**  
https://vercel.com/zahid-hasan-s-projects-178655a9/mobile-midwife-ai  

*(React-based UI for user interaction)*

---

### 🔗 Backend (Render)
👉 **API Base URL:**  
https://mobile-midwife-ai.onrender.com/

👉 **API Documentation (Swagger UI):**  
https://mobile-midwife-ai.onrender.com/docs  

*(FastAPI backend for risk analysis & future AI integration)*

---

## 🧠 How It Works (Demo Logic)
1. User enters symptoms
2. Selects pregnancy month
3. Backend analyzes inputs using rule-based logic
4. System returns:
   - Risk level
   - Advice
   - Explanation

### 🧪 Risk Rules (Demo)
- **HIGH:** bleeding, severe pain  
- **MEDIUM:** fever, headache, vomiting  
- **LOW:** no critical symptoms detected  

> Rule-based logic is used for safety and transparency.  
> Can be upgraded to ML / LLM in future.

---

## 🏗️ System Architecture

User (Mobile Browser) | v Frontend (React – Vercel) | v REST API Calls | v Backend (FastAPI – Render) | v Risk Logic / Future AI Engine

This separation ensures:
- Scalability
- Clean architecture
- Easy AI upgrades without breaking UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Lucide Icons
- Deployed on **Vercel**

### Backend
- FastAPI (Python)
- Swagger / OpenAPI Docs
- Deployed on **Render**

---

## 🧑‍💻 Project Structure

mobile-midwife-ai/ ├── frontend/ │   ├── src/ │   │   ├── pages/ │   │   │   └── Home.jsx │   │   ├── components/ │   │   │   ├── InputForm.jsx │   │   │   ├── RiskBadge.jsx │   │   │   └── VoiceOutput.jsx │   │   ├── App.js │   │   ├── index.js │   │   └── index.css │   └── public/ └── backend/ └── main.py (FastAPI)

---

## 🎤 Pitch Highlight
- 🎯 Real social problem
- 📱 Mobile-first & Bangla-first
- 🧠 Transparent risk logic
- 🌍 Ready for real-world deployment
- 🚀 Scalable to AI-powered healthcare

---

## 👤 Author
**Zahid Hasan**  
Solo Developer & Builder  

> “আমার রাস্তা আলাদা — আমি প্রমাণ দিয়ে কথা বলি।”

---

## 📜 Disclaimer
This application does **not provide medical advice**.  
Always consult qualified healthcare professionals for medical decisions.

---

## ❤️ Final Note
> Some paths are lonely.  
> Some ideas are misunderstood.  
> But real impact is always built by those who walk alone first.
