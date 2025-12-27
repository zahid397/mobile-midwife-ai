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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex justify-center px-4 pt-8 pb-40">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 pb-24">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="bg-pink-100 p-3 rounded-full inline-block mb-2">
            <span className="text-4xl">🤰</span>
          </div>
          <h1 className="text-2xl font-bold text-pink-700">
            মোবাইল ধাত্রী
          </h1>
          <p className="text-sm text-gray-500">
            গর্ভাবস্থার প্রাথমিক ঝুঁকি সচেতনতা
          </p>
        </div>

        {/* Symptoms */}
        <label className="font-semibold flex items-center gap-2 mb-2">
          <Activity size={18} /> উপসর্গ লিখুন
        </label>
        <textarea
          className="w-full p-3 rounded-xl border bg-gray-50 mb-4"
          placeholder="যেমন: মাথা ব্যথা, জ্বর"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        {/* Month */}
        <label className="font-semibold flex items-center gap-2 mb-2">
          <Calendar size={18} /> গর্ভাবস্থার মাস
        </label>
        <select
          className="w-full p-3 rounded-xl border bg-gray-50 mb-6"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">মাস নির্বাচন করুন</option>
          {[1,2,3,4,5,6,7,8,9].map((m) => (
            <option key={m} value={m}>{m} মাস</option>
          ))}
        </select>

        {/* Result */}
        {result && (
          <div className={`p-4 rounded-xl ${riskUI[result.risk].bg}`}>
            <div className={`flex items-center gap-2 font-bold ${riskUI[result.risk].color}`}>
              {riskUI[result.risk].icon}
              {riskUI[result.risk].label}
            </div>
            <p className="mt-2">{result.advice}</p>
            <p className="text-sm text-gray-600 mt-1">
              কারণ: {result.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Fixed Button */}
      <div className="fixed bottom-4 left-0 right-0 px-4">
        <button
          onClick={handleAnalysis}
          disabled={loading}
          className="w-full max-w-md mx-auto py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-lg"
        >
          {loading ? "বিশ্লেষণ করা হচ্ছে..." : "পরামর্শ নিন"}
        </button>
      </div>
    </div>
  );
};

export default Home;
