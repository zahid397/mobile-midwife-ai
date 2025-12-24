# 🤰 Midwarefiy (Mobile Midwife AI)

Midwarefiy is a lightweight, web-based maternal health support application designed to help identify **early pregnancy risk signals** in low-resource and rural settings.

⚠️ This tool does **NOT replace doctors or professional medical advice**.  
It is intended for **early risk awareness and timely referral only**.

---

## 🌍 Problem Statement

In many parts of Bangladesh and other developing regions:

- Pregnant women lack immediate access to doctors or midwives
- Symptoms are often misunderstood or ignored
- Online misinformation creates confusion
- Delay in recognizing danger signs increases maternal risk

---

## 💡 Solution

Midwarefiy provides:

- Simple symptom input
- Pregnancy month consideration
- Immediate risk categorization:
  - 🟢 LOW
  - 🟡 MEDIUM
  - 🔴 HIGH
- Clear, easy-to-understand advice
- Ethical and explainable logic

The system prioritizes **safety, predictability, and accessibility**.

---

## 🧠 How It Works

1. User enters symptoms (text-based)
2. Selects pregnancy month (1–9)
3. Backend evaluates inputs using **rule-based medical logic**
4. The app returns:
   - Risk level
   - Advice
   - Explanation

> No generative AI is used in the current MVP to avoid hallucination and ensure medical safety.

---

## 🛠️ Tech Stack

### Frontend
- React
- Deployed on **Vercel**

### Backend
- FastAPI (Python)
- Deployed on **Render**

### Logic
- Rule-based expert system
- Easily extendable to AI/ML in future

---

## 🚀 Live Demo

- **Frontend:** https://mobile-midwife-ai.vercel.app  
- **Backend API:** https://mobile-midwife-ai.onrender.com  
- **Swagger Docs:** https://mobile-midwife-ai.onrender.com/docs

---

## 🧪 Sample Test Inputs

| Symptoms | Pregnancy Month | Expected Risk |
|--------|-----------------|---------------|
| nausea, fatigue | 3 | LOW |
| headache, swelling | 6 | MEDIUM |
| heavy bleeding, severe pain | 8 | HIGH |

---

## ⚖️ Ethical Considerations

- No diagnosis is provided
- Clear medical disclaimer included
- Encourages hospital referral for high-risk cases
- Avoids overdependence on AI
- Focused on maternal safety

---

## 🔮 Future Roadmap

- Bangla language support
- Voice input/output
- Offline-first version
- Integration with community health workers
- AI-assisted explanation (with strict guardrails)

---

## 🏆 Use Case

This project was developed for:
- Academic demonstrations
- Pitch competitions
- Community health innovation showcases

---

## 👤 Author

**Zahid Hasan**  
Solo Builder | AI & Software Developer  
LinkedIn: (add your link here)

---

## 📜 Disclaimer

Midwarefiy is an awareness and support tool.  
Always consult qualified healthcare professionals for medical decisions.
