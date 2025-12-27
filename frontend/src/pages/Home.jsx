import React, { useState } from "react";
import {
  Activity,
  Calendar,
  AlertTriangle,
  CheckCircle,
  AlertOctagon
} from "lucide-react";

const Home = () => {
  const [symptoms, setSymptoms] = useState("");
  const [month, setMonth] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalysis = () => {
    if (!symptoms.trim()) {
      alert("দয়া করে আপনার সমস্যাগুলো লিখুন");
      return;
    }
    if (!month) {
      alert("দয়া করে গর্ভাবস্থার মাস নির্বাচন করুন");
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const text = symptoms.toLowerCase();

      let risk = "LOW";
      let advice = "পর্যাপ্ত বিশ্রাম নিন এবং পানি পান করুন।";
      let explanation = "বর্তমান তথ্য অনুযায়ী বড় কোনো ঝুঁকি ধরা পড়েনি।";

      if (
        text.includes("bleeding") ||
        text.includes("রক্ত") ||
        text.includes("ব্যথা") ||
        text.includes("unconscious") ||
        text.includes("অজ্ঞান")
      ) {
        risk = "HIGH";
        advice = "অবিলম্বে নিকটস্থ হাসপাতালে যান।";
        explanation = "এগুলো গুরুতর বিপদের লক্ষণ।";
      } else if (
        text.includes("fever") ||
        text.includes("জ্বর") ||
        text.includes("vomiting") ||
        text.includes("বমি") ||
        text.includes("headache")
      ) {
        risk = "MEDIUM";
        advice = "২৪ ঘণ্টার মধ্যে ডাক্তারের পরামর্শ নিন।";
        explanation = "এগুলো সতর্কতার লক্ষণ হতে পারে।";
      }

      setResult({
        risk_level: risk,
        advice,
        explanation
      });

      setLoading(false);
    }, 1200);
  };

  const getRiskStyles = (level) => {
    switch (level) {
      case "HIGH":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-700",
          icon: <AlertOctagon />,
          label: "HIGH (উচ্চ ঝুঁকি)"
        };
      case "MEDIUM":
        return {
          bg: "bg-orange-50",
          border: "border-orange-200",
          text: "text-orange-700",
          icon: <AlertTriangle />,
          label: "MEDIUM (মাঝারি ঝুঁকি)"
        };
      default:
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-700",
          icon: <CheckCircle />,
          label: "LOW (ঝুঁকি নেই)"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center py-8 px-4 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-white p-4 rounded-full inline-block shadow mb-3">
          <span className="text-5xl">🤰</span>
        </div>
        <h1 className="text-3xl font-bold text-pink-700">
          মোবাইল ধাত্রী (Mobile Midwife)
        </h1>
        <p className="text-gray-600 mt-2">
          গর্ভাবস্থার প্রাথমিক ঝুঁকি সচেতনতা সহকারী
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 space-y-5">
          {/* Symptoms */}
          <div>
            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
              <Activity size={18} className="text-pink-500" />
              সমস্যাগুলো লিখুন
            </label>
            <textarea
              className="w-full p-4 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-300"
              rows="3"
              placeholder="উদাহরণ: জ্বর, মাথা ব্যথা"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          {/* Month */}
          <div>
            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
              <Calendar size={18} className="text-purple-500" />
              গর্ভাবস্থার মাস
            </label>
            <select
              className="w-full p-3 border rounded-xl bg-gray-50"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">মাস নির্বাচন করুন</option>
              {[1,2,3,4,5,6,7,8,9].map((m) => (
                <option key={m} value={m}>
                  {m} মাস
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleAnalysis}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl"
          >
            {loading ? "বিশ্লেষণ করা হচ্ছে..." : "পরামর্শ নিন"}
          </button>
        </div>

        {/* Result */}
        {result && (() => {
          const style = getRiskStyles(result.risk_level);
          return (
            <div className={`${style.bg} p-6 border-t ${style.border}`}>
              <div
                className={`text-xl font-bold ${style.text} flex items-center gap-2 mb-3`}
              >
                {style.icon} {style.label}
              </div>

              <div className="bg-white p-4 rounded-xl border">
                <p className="font-semibold mb-1">পরামর্শ:</p>
                <p className="mb-3">{result.advice}</p>

                <p className="text-sm text-gray-600">
                  কারণ: {result.explanation}
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                ⚠ এটি ডাক্তারের বিকল্প নয়
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default Home;
