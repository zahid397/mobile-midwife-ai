from fastapi import APIRouter
from models.schema import SymptomInput, AnalysisResponse
from logic.rules import evaluate_risk

router = APIRouter(prefix="/analyze", tags=["Analysis"])

@router.post("/", response_model=AnalysisResponse)
async def analyze_symptoms(data: SymptomInput):
    result = evaluate_risk(data.symptoms, data.pregnancy_month)

    return AnalysisResponse(
        risk_level=result["risk"],
        advice=result["advice"],
        explanation=result["explanation"]
    )
