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
      alert("দয়া করে উপসর্গ লিখুন");
      return;
    }
    if (!month) {
      alert("দয়া করে গর্ভাবস্থার মাস নির্বাচন করুন");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const text = symptoms.toLowerCase();

      let risk = "LOW";
      let advice = "সবকিছু স্বাভাবিক মনে হচ্ছে। বিশ্রাম নিন।";
      let explanation = "গুরুতর কোনো লক্ষণ পাওয়া যায়নি।";

      if (
        text.includes("রক্ত") ||
        text.includes("bleeding") ||
        text.includes("ব্যথা") ||
        text.includes("pain")
      ) {
        risk = "HIGH";
        advice = "দয়া করে দ্রুত নিকটস্থ হাসপাতালে যান।";
        explanation = "এটি উচ্চ ঝুঁকির লক্ষণ।";
      } else if (
        text.includes("জ্বর") ||
        text.includes("fever") ||
        text.includes("headache") ||
        text.includes("বমি")
      ) {
        risk = "MEDIUM";
        advice = "ডাক্তারের পরামর্শ নিন এবং পর্যবেক্ষণে থাকুন।";
        explanation = "এটি মাঝারি ঝুঁকির লক্ষণ।";
      }

      setResult({ risk, advice, explanation });
      setLoading(false);
    }, 1200);
  };

  const getRiskUI = (risk) => {
    if (risk === "HIGH")
      return {
        color: "text-red-700",
        bg: "bg-red-50 border-red-200",
        icon: <AlertOctagon />,
        label: "HIGH (উচ্চ ঝুঁকি)",
      };
    if (risk === "MEDIUM")
      return {
        color: "text-orange-700",
        bg: "bg-orange-50 border-orange-200",
        icon: <AlertTriangle />,
        label: "MEDIUM (মাঝারি ঝুঁকি)",
      };
    return {
      color: "text-green-700",
      bg: "bg-green-50 border-green-200",
      icon: <CheckCircle />,
      label: "LOW (ঝুঁকি নেই)",
    };
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center px-4 pt-10 overflow-y-auto">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 mb-10">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🤰</div>
          <h1 className="text-2xl font-bold text-pink-700">
            মোবাইল ধাত্রী
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            গর্ভাবস্থার প্রাথমিক ঝুঁকি সহকারী
          </p>
        </div>

        {/* Symptoms */}
        <label className="font-semibold flex items-center gap-2 mb-2">
          <Activity size={18} className="text-pink-500" />
          উপসর্গ লিখুন
        </label>
        <textarea
          className="w-full p-4 rounded-xl border bg-gray-50 mb-4"
          rows="3"
          placeholder="যেমন: মাথা ব্যথা, জ্বর"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        {/* Month */}
        <label className="font-semibold flex items-center gap-2 mb-2">
          <Calendar size={18} className="text-purple-500" />
          গর্ভাবস্থার মাস
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

        {/* BUTTON — এখন আর লুকাবে না */}
        <button
          onClick={handleAnalysis}
          disabled={loading}
          className="w-full py-4 rounded-xl text-white font-bold text-lg
          bg-gradient-to-r from-pink-500 to-purple-600
          active:scale-95 transition"
        >
          {loading ? "বিশ্লেষণ করা হচ্ছে..." : "পরামর্শ নিন"}
        </button>

        {/* Result */}
        {result && (() => {
          const ui = getRiskUI(result.risk);
          return (
            <div className={`mt-6 p-4 rounded-xl border ${ui.bg}`}>
              <div className={`flex items-center gap-2 font-bold ${ui.color}`}>
                {ui.icon} {ui.label}
              </div>
              <p className="mt-2 font-semibold">পরামর্শ:</p>
              <p>{result.advice}</p>
              <p className="text-sm text-gray-600 mt-1">
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
