from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import analyze
import uvicorn

app = FastAPI(title="Mobile Midwife API")

# Enable CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Change to specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

