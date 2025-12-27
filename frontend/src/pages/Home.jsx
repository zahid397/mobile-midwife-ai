import React, { useState } from "react";
import { Activity, Calendar } from "lucide-react";

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
      setResult({
        advice: "সবকিছু স্বাভাবিক মনে হচ্ছে। বিশ্রাম নিন।",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-5xl">🤰</span>
          <h1 className="text-2xl font-bold mt-2">Mobile Midwife</h1>
          <p className="text-gray-500 text-sm">গর্ভাবস্থার সহকারী</p>
        </div>

        {/* Symptoms */}
        <label className="font-semibold text-sm flex gap-2 mb-2">
          <Activity size={16}/> উপসর্গ লিখুন
        </label>
        <textarea
          className="w-full p-3 border rounded-xl mb-4"
          rows="3"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="যেমন: মাথা ব্যথা"
        />

        {/* Month */}
        <label className="font-semibold text-sm flex gap-2 mb-2">
          <Calendar size={16}/> গর্ভাবস্থার মাস
        </label>
        <select
          className="w-full p-3 border rounded-xl mb-6"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">মাস নির্বাচন করুন</option>
          {[1,2,3,4,5,6,7,8,9].map(m => (
            <option key={m} value={m}>{m} মাস</option>
          ))}
        </select>

        {/* ✅ BUTTON – ALWAYS VISIBLE */}
        <button
          onClick={handleAnalysis}
          className="w-full py-4 bg-pink-500 text-white font-bold rounded-xl text-lg mt-2"
        >
          {loading ? "বিশ্লেষণ হচ্ছে..." : "পরামর্শ নিন"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="font-semibold">ফলাফল:</p>
            <p className="text-sm">{result.advice}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
