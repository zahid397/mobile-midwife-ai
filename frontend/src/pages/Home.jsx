import React, { useState } from "react";
import {
  Activity,
  Calendar,
  AlertTriangle,
  CheckCircle,
  AlertOctagon,
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
      alert("গর্ভাবস্থার মাস নির্বাচন করুন");
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      let risk = "LOW";
      let advice = "সব ঠিক আছে। নিয়মিত বিশ্রাম নিন।";
      let explanation = "গুরুতর কোনো লক্ষণ পাওয়া যায়নি।";

      const text = symptoms.toLowerCase();

      if (
        text.includes("রক্ত") ||
        text.includes("bleeding") ||
        text.includes("ব্যথা")
      ) {
        risk = "HIGH";
        advice = "অবিলম্বে নিকটস্থ হাসপাতালে যান।";
        explanation = "এটি একটি গুরুতর ঝুঁকির লক্ষণ।";
      } else if (
        text.includes("জ্বর") ||
        text.includes("headache") ||
        text.includes("বমি")
      ) {
        risk = "MEDIUM";
        advice = "২৪ ঘণ্টার মধ্যে ডাক্তারের পরামর্শ নিন।";
        explanation = "সতর্কতার প্রয়োজন আছে।";
      }

      setResult({ risk, advice, explanation });
      setLoading(false);
    }, 1200);
  };

  const riskUI = {
    LOW: {
      color: "text-green-700",
      bg: "bg-green-50",
      icon: <CheckCircle />,
      label: "LOW (ঝুঁকি নেই)",
    },
    MEDIUM: {
      color: "text-orange-700",
      bg: "bg-orange-50",
      icon: <AlertTriangle />,
      label: "MEDIUM (মাঝারি ঝুঁকি)",
    },
    HIGH: {
      color: "text-red-700",
      bg: "bg-red-50",
      icon: <AlertOctagon />,
      label: "HIGH (উচ্চ ঝুঁকি)",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🤰</div>
          <h1 className="text-2xl font-bold text-pink-700">
            Mobile Midwife AI
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            গর্ভাবস্থার প্রাথমিক ঝুঁকি বিশ্লেষণ
          </p>
        </div>

        {/* Symptoms */}
        <div className="mb-4">
          <label className="flex items-center gap-2 font-semibold mb-2">
            <Activity size={18} className="text-pink-500" />
            উপসর্গ লিখুন
          </label>
          <textarea
            className="w-full p-4 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-pink-400 outline-none"
            rows="3"
            placeholder="যেমন: মাথা ব্যথা, জ্বর"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        {/* Month */}
        <div className="mb-6">
          <label className="flex items-center gap-2 font-semibold mb-2">
            <Calendar size={18} className="text-purple-500" />
            গর্ভাবস্থার মাস
          </label>
          <select
            className="w-full p-3 rounded-xl border bg-gray-50"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">মাস নির্বাচন করুন</option>
            {[1,2,3,4,5,6,7,8,9].map(m => (
              <option key={m} value={m}>{m} মাস</option>
            ))}
          </select>
        </div>

        {/* BUTTON 🔘 */}
        <button
          type="button"
          onClick={handleAnalysis}
          disabled={loading}
          className="w-full py-4 rounded-xl text-white font-bold text-lg
          bg-gradient-to-r from-pink-500 to-purple-600
          hover:shadow-lg hover:-translate-y-0.5 transition
          disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "বিশ্লেষণ করা হচ্ছে..." : "পরামর্শ নিন"}
        </button>

        {/* RESULT */}
        {result && (() => {
          const ui = riskUI[result.risk];
          return (
            <div className={`mt-6 p-4 rounded-xl ${ui.bg}`}>
              <div className={`flex items-center gap-2 font-bold ${ui.color}`}>
                {ui.icon} {ui.label}
              </div>
              <p className="mt-2"><b>পরামর্শ:</b> {result.advice}</p>
              <p className="text-sm text-gray-600 mt-1">
                কারণ: {result.explanation}
              </p>
              <p className="text-xs text-gray-500 mt-3 text-center">
                ⚠ এটি চিকিৎসকের বিকল্প নয়
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default Home;
