import React, { useState } from "react";

export default function App() {
  const [symptoms, setSymptoms] = useState("");
  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!symptoms.trim() || !month) {
      alert("অনুগ্রহ করে সব তথ্য দিন।");
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const riskWords = ["রক্ত", "ব্যথা", "জ্বর", "পানি"];
      const isHighRisk = riskWords.some((word) =>
        symptoms.includes(word)
      );

      setResult({
        type: isHighRisk ? "danger" : "success",
        message: isHighRisk
          ? "সতর্কতা: আপনার উপসর্গে ঝুঁকি থাকতে পারে। দ্রুত ডাক্তারের পরামর্শ নিন।"
          : "আপনার তথ্য অনুযায়ী এখন পর্যন্ত সব স্বাভাবিক মনে হচ্ছে। নিয়মিত যত্ন নিন।",
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-pink-500 p-8 text-center text-white">
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🤰</span>
          </div>
          <h1 className="text-2xl font-bold">মোবাইল মিডওয়াইফ</h1>
          <p className="text-pink-100 text-xs mt-1">
            AI Pregnancy Assistant
          </p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          <div>
            <label className="block font-semibold mb-2">
              উপসর্গ লিখুন
            </label>
            <textarea
              className="w-full bg-gray-50 border rounded-xl p-4"
              placeholder="যেমন: মাথা ব্যথা বা বমি..."
              rows="3"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              গর্ভাবস্থার মাস
            </label>
            <input
              type="number"
              className="w-full bg-gray-50 border rounded-xl p-4"
              placeholder="যেমন: ৩"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>

          {/* ✅ BUTTON – এখন আর লুকাবে না */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition active:scale-95 disabled:opacity-50"
          >
            {loading ? "চেক করা হচ্ছে..." : "ফলাফল দেখুন"}
          </button>

          {/* Result */}
          {result && (
            <div
              className={`p-4 rounded-xl border ${
                result.type === "danger"
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-green-50 border-green-200 text-green-700"
              }`}
            >
              <p className="font-bold mb-1">ফলাফল:</p>
              <p className="text-sm">{result.message}</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 text-center text-xs text-gray-500">
          জরুরি সেবা: ১৬২৬৩
        </div>
      </div>
    </div>
  );
}
