import React, { useState } from "react";
import {
  Activity,
  Calendar,
  AlertTriangle,
  AlertOctagon,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const [symptoms, setSymptoms] = useState("");
  const [month, setMonth] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalysis = () => {
    if (!symptoms.trim()) {
      alert("উপসর্গ লিখুন");
      return;
    }
    if (!month) {
      alert("মাস নির্বাচন করুন");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      let risk = "LOW";
      let advice = "সবকিছু স্বাভাবিক মনে হচ্ছে। বিশ্রাম নিন।";
      let explanation = "গুরুতর লক্ষণ নেই।";

      const text = symptoms.toLowerCase();

      if (text.includes("রক্ত") || text.includes("pain")) {
        risk = "HIGH";
        advice = "দ্রুত হাসপাতালে যান।";
        explanation = "উচ্চ ঝুঁকির লক্ষণ।";
      } else if (text.includes("জ্বর") || text.includes("headache")) {
        risk = "MEDIUM";
        advice = "ডাক্তারের পরামর্শ নিন।";
        explanation = "মাঝারি ঝুঁকি।";
      }

      setResult({ risk, advice, explanation });
      setLoading(false);
    }, 1200);
  };

  const riskUI = {
    HIGH: {
      color: "text-red-700",
      bg: "bg-red-50 border-red-200",
      icon: <AlertOctagon />,
      label: "HIGH (উচ্চ ঝুঁকি)",
    },
    MEDIUM: {
      color: "text-orange-700",
      bg: "bg-orange-50 border-orange-200",
      icon: <AlertTriangle />,
      label: "MEDIUM (মাঝারি ঝুঁকি)",
    },
    LOW: {
      color: "text-green-700",
      bg: "bg-green-50 border-green-200",
      icon: <CheckCircle />,
      label: "LOW (ঝুঁকি নেই)",
    },
  };

  return (
    <div className="min-h-screen flex justify-center items-start pt-10 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🤰</div>
          <h1 className="text-2xl font-bold text-pink-700">
            মোবাইল ধাত্রী
          </h1>
          <p className="text-sm text-gray-500">
            গর্ভাবস্থার ঝুঁকি সহকারী
          </p>
        </div>

        {/* Symptoms */}
        <label className="font-semibold flex gap-2 mb-2">
          <Activity size={18} /> উপসর্গ লিখুন
        </label>
        <textarea
          className="w-full p-4 rounded-xl border bg-gray-50 mb-4"
          rows="3"
          placeholder="যেমন: মাথা ব্যথা, জ্বর"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        {/* Month */}
        <label className="font-semibold flex gap-2 mb-2">
          <Calendar size={18} /> গর্ভাবস্থার মাস
        </label>
        <select
          className="w-full p-3 rounded-xl border bg-gray-50 mb-6"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">মাস নির্বাচন করুন</option>
          {[1,2,3,4,5,6,7,8,9].map(m => (
            <option key={m} value={m}>{m} মাস</option>
          ))}
        </select>

        {/* 🔥 BUTTON (NO CSS CAN HIDE THIS) */}
        <button
          onClick={handleAnalysis}
          disabled={loading}
          style={{
            display: "block",
            width: "100%",
            padding: "16px",
            background: "linear-gradient(to right, #ec4899, #a855f7)",
            color: "white",
            fontWeight: "700",
            fontSize: "18px",
            borderRadius: "14px",
            border: "none",
          }}
        >
          {loading ? "বিশ্লেষণ করা হচ্ছে..." : "পরামর্শ নিন"}
        </button>

        {/* Result */}
        {result && (() => {
          const ui = riskUI[result.risk];
          return (
            <div className={`mt-6 p-4 rounded-xl border ${ui.bg}`}>
              <div className={`flex gap-2 font-bold ${ui.color}`}>
                {ui.icon} {ui.label}
              </div>
              <p className="mt-2 font-semibold">পরামর্শ:</p>
              <p>{result.advice}</p>
              <p className="text-sm text-gray-600">
                কারণ: {result.explanation}
              </p>
            </div>
          );
        })()}

        <p className="text-xs text-center text-gray-400 mt-6">
          ⚠ এটি ডাক্তারের বিকল্প নয়
        </p>
      </div>
    </div>
  );
};

export default Home;
