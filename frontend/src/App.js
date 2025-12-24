import React, { useState } from "react";
import { analyzeSymptoms } from "./api";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [month, setMonth] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!symptoms.trim()) {
      setError("⚠️ Please enter symptoms");
      return;
    }

    if (!month || month < 1 || month > 9) {
      setError("⚠️ Pregnancy month must be between 1 and 9");
      return;
    }

    setLoading(true);

    try {
      const res = await analyzeSymptoms({
        symptoms,
        pregnancy_month: Number(month),
      });
      setResult(res.data);
    } catch (err) {
      setError("❌ API error. Please try again.");
      console.error(err);
    }

    setLoading(false);
  };

  const riskEmoji =
    result?.risk_level === "HIGH"
      ? "🚨"
      : result?.risk_level === "MEDIUM"
      ? "⚠️"
      : "✅";

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🤰 Mobile Midwife AI</h2>
      <p style={styles.subtitle}>
        AI-powered pregnancy risk awareness tool
      </p>

      <form onSubmit={handleSubmit} style={styles.card}>
        <label style={styles.label}>Symptoms</label>
        <input
          type="text"
          placeholder="e.g. nausea, headache, bleeding"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Pregnancy Month (1–9)</label>
        <input
          type="number"
          placeholder="e.g. 3"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {result && (
        <div style={styles.resultCard}>
          <h3>🧠 Result</h3>
          <p>
            <b>Risk:</b> {riskEmoji}{" "}
            <span style={{ color: riskColor(result.risk_level) }}>
              {result.risk_level}
            </span>
          </p>
          <p>
            <b>Advice:</b> {result.advice}
          </p>
          <p>
            <b>Explanation:</b> {result.explanation}
          </p>

          <p style={styles.disclaimer}>
            ⚠️ This tool does not replace professional medical advice.
          </p>
        </div>
      )}
    </div>
  );
}

const riskColor = (risk) => {
  if (risk === "HIGH") return "#e63946";
  if (risk === "MEDIUM") return "#f4a261";
  return "#2a9d8f";
};

const styles = {
  container: {
    maxWidth: 420,
    margin: "0 auto",
    padding: 20,
    fontFamily: "system-ui, sans-serif",
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    color: "#555",
    marginBottom: 20,
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  label: {
    fontWeight: "600",
    display: "block",
    marginTop: 10,
  },
  input: {
    width: "100%",
    padding: 12,
    marginTop: 5,
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: "100%",
    padding: 14,
    background: "linear-gradient(135deg,#06beb6,#48b1bf)",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: {
    color: "#d62828",
    marginTop: 10,
  },
  resultCard: {
    marginTop: 30,
    background: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
  },
  disclaimer: {
    marginTop: 15,
    fontSize: 13,
    color: "#666",
  },
};

export default App;
