def evaluate_risk(text: str, month: int = None) -> dict:
    text = text.lower()
    
    # --- HIGH RISK KEYWORDS ---
    high_risk_keywords = ["bleeding", "severe pain", "unconscious", "convulsion", "water break", "রক্তপাত", "প্রচণ্ড ব্যথা", "অজ্ঞান"]
    
    # --- MEDIUM RISK KEYWORDS ---
    medium_risk_keywords = ["fever", "headache", "vomiting", "swelling", "জ্বর", "মাথা ব্যথা", "বমি"]

    # Rule 1: High Risk Check
    for word in high_risk_keywords:
        if word in text:
            return {
                "risk": "HIGH",
                "advice": "IMMEDIATE HOSPITALIZATION REQUIRED. Go to the nearest hospital.",
                "explanation": f"Detected '{word}' which is a critical danger sign."
            }

    # Rule 2: Medium Risk Check
    for word in medium_risk_keywords:
        if word in text:
            return {
                "risk": "MEDIUM",
                "advice": "Consult a doctor within 24 hours. Monitor symptoms.",
                "explanation": f"Detected '{word}'. It requires medical attention."
            }

    # Rule 3: Low Risk (Default)
    return {
        "risk": "LOW",
        "advice": "Stay hydrated, rest well, and continue regular checkups.",
        "explanation": "No specific danger signs detected in your description."
    }
  
