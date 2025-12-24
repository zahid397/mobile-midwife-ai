import React, { useState } from "react";
import { analyzeSymptoms } from "./api";
import "./App.css";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [month, setMonth] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await analyzeSymptoms({
        symptoms: symptoms,
        pregnancy_month: Number(month),
      });
      setResult(res.data);
    } catch (err) {
      alert("API error 😥");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h2>🤰 Mobile Midwife AI</h2>

      <form onSubmit={handleSubmit} className="form-card">
        <input
          type="text"
          placeholder="Symptoms (comma separated)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Pregnancy Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {result && (
        <div className="result-card">
          <h3>🧠 Result</h3>

          <p>
            <b>Risk:</b>{" "}
            <span className={`risk ${result.risk_level.toLowerCase()}`}>
              {result.risk_level}
            </span>
          </p>

          <p>
            <b>Advice:</b> {result.advice}
          </p>

          <p>
            <b>Explanation:</b> {result.explanation}
          </p>

          <p className="disclaimer">
            ⚠️ This tool does not replace professional medical advice.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
