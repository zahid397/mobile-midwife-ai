from pydantic import BaseModel
from typing import List, Optional

class SymptomInput(BaseModel):
    symptoms: str  # User's raw text or voice transcript
    age: Optional[int] = None
    pregnancy_month: Optional[int] = None

class AnalysisResponse(BaseModel):
    risk_level: str  # LOW, MEDIUM, HIGH
    advice: str      # Medical advice
    explanation: str # Simple explanation in Bangla
