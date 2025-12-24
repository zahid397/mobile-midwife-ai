from fastapi import APIRouter
from models.schema import SymptomInput, AnalysisResponse
from logic.rules import evaluate_risk

router = APIRouter()

@router.post("/analyze", response_model=AnalysisResponse)
async def analyze_symptoms(data: SymptomInput):
    # 1. Run Rule-Based Logic
    result = evaluate_risk(data.symptoms, data.pregnancy_month)
    
    # 2. (Optional) You can call logic/ai_helper.py here in the future
    # tailored_response = ai_helper.refine(result) 
    
    return AnalysisResponse(
        risk_level=result["risk"],
        advice=result["advice"],
        explanation=result["explanation"]
    )
  
