import React, { useState } from "react";
import { analyzeSymptoms } from "./api";

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
        pregnancy_month: Number(month)
      });
      setResult(res.data);
    } catch (err) {
      alert("API error 😥");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>🤰 Mobile Midwife AI</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Symptoms (comma separated)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Pregnancy Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>🧠 Result</h3>
          <p><b>Risk:</b> {result.risk_level}</p>
          <p><b>Advice:</b> {result.advice}</p>
          <p><b>Explanation:</b> {result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
