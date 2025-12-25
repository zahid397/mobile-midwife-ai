import React, { useState } from 'react';
import { Activity, Calendar, Mic, Volume2, AlertTriangle, CheckCircle, AlertOctagon } from 'lucide-react';
// import { analyzeSymptoms } from '../services/api'; 

const Home = () => {
  const [symptoms, setSymptoms] = useState("");
  const [month, setMonth] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalysis = async () => {
    setLoading(true);

    // 🛑 1. Month Validation (মাস চেক)
    if (!month) {
      alert("দয়া করে গর্ভাবস্থার মাস নির্বাচন করুন");
      setLoading(false);
      return;
    }

    // 🛑 2. Empty Symptom Guard (ফাঁকা ইনপুট চেক - NEW)
    if (!symptoms.trim()) {
      alert("দয়া করে আপনার সমস্যাটি লিখুন বা বলুন");
      setLoading(false);
      return;
    }
    
    // Mock Result Logic for Demo
    setTimeout(() => {
        let risk = "LOW";
        let advice = "বেশি করে পানি পান করুন এবং বিশ্রাম নিন।";
        let explanation = "আপনার বর্ণনায় কোনো বিপদ চিহ্ন পাওয়া যায়নি।";

        const text = symptoms.toLowerCase();
        
        // High Risk Keywords
        if (text.includes("bleeding") || text.includes("pain") || text.includes("রক্ত") || text.includes("ব্যথা") || text.includes("unconscious") || text.includes("অজ্ঞান")) {
            risk = "HIGH";
            advice = "অবিলম্বে হাসপাতালে যান। দেরি করবেন না।";
            explanation = "এটি একটি গুরুতর বিপদ চিহ্ন। দ্রুত ব্যবস্থা নিন।";
        } 
        // Medium Risk Keywords
        else if (text.includes("fever") || text.includes("vomiting") || text.includes("জ্বর") || text.includes("বমি") || text.includes("headache")) {
            risk = "MEDIUM";
            advice = "ডাক্তারের পরামর্শ নিন এবং পর্যবেক্ষণে থাকুন।";
            explanation = "এগুলো সতর্কতার লক্ষণ, অবহেলা করবেন না।";
        }

        setResult({
            risk_level: risk,
            advice: advice,
            explanation: explanation
        });
        setLoading(false);
    }, 1500);
  };

  // 🎨 Dynamic Color Logic
  const getRiskStyles = (level) => {
    switch(level) {
        case "HIGH":
            return {
                bg: "bg-red-50",
                border: "border-red-200",
                text: "text-red-700",
                icon: <AlertOctagon size={28} />,
                label: "HIGH (উচ্চ ঝুঁকি) 🚨"
            };
        case "MEDIUM":
            return {
                bg: "bg-orange-50",
                border: "border-orange-200",
                text: "text-orange-700",
                icon: <AlertTriangle size={28} />,
                label: "MEDIUM (মাঝারি ঝুঁকি) ⚠️"
            };
        default: // LOW
            return {
                bg: "bg-green-50",
                border: "border-green-200",
                text: "text-green-700",
                icon: <CheckCircle size={28} />,
                label: "LOW (ঝুঁকি নেই) ✅"
            };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 flex flex-col items-center py-8 px-4 font-sans">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-white p-4 rounded-full inline-block shadow-md mb-3">
            <span className="text-5xl">🤰</span>
        </div>
        <h1 className="text-3xl font-bold text-pink-700">মোবাইল ধাত্রী (Mobile Midwife)</h1>
        <p className="text-gray-600 mt-2">আপনার গর্ভাবস্থায় এআই স্বাস্থ্য সহকারী</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 space-y-5">
            
            {/* Input Section */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Activity size={18} className="text-pink-500"/> সমস্যাগুলো বলুন বা লিখুন
                </label>
                <div className="relative">
                    <textarea 
                        className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
                        rows="3"
                        placeholder="উদাহরণ: আমার জ্বর এবং মাথা ব্যথা..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    ></textarea>
                    <button className="absolute bottom-3 right-3 p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition">
                        <Mic size={20} />
                    </button>
                </div>
            </div>

            {/* Month Selection */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar size={18} className="text-purple-500"/> গর্ভাবস্থার মাস কত?
                </label>
                <select 
                    className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-purple-400 outline-none"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                >
                    <option value="">মাস নির্বাচন করুন</option>
                    {[1,2,3,4,5,6,7,8,9].map(m => <option key={m} value={m}>{m} মাস</option>)}
                </select>
            </div>

            <button 
                onClick={handleAnalysis}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:scale-95 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? "যাচাই করা হচ্ছে..." : "পরামর্শ নিন"}
            </button>
        </div>

        {/* Result Section */}
        {result && (() => {
            const style = getRiskStyles(result.risk_level);
            return (
                <div className={`${style.bg} p-6 border-t ${style.border} animate-fade-in`}>
                    
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">ঝুঁকির মাত্রা (Risk Level)</span>
                            <div className={`text-2xl font-bold ${style.text} flex items-center gap-2 mt-1`}>
                                {style.icon} {style.label}
                            </div>
                        </div>
                        <button className="p-2 bg-white shadow-sm rounded-full text-gray-600 hover:bg-gray-100">
                            <Volume2 size={24}/>
                        </button>
                    </div>

                    {/* MEDIUM MSG */}
                    {result.risk_level === "MEDIUM" && (
                        <div className="mb-4 bg-white/60 p-3 rounded-lg border border-orange-100">
                            <p className="text-orange-800 font-medium text-sm text-center">
                                “ভয় পাবেন না, তবে দেরি করবেন না।”
                            </p>
                        </div>
                    )}

                    {/* HIGH MSG */}
                    {result.risk_level === "HIGH" && (
                        <div className="mb-4 bg-red-100 p-3 rounded-lg border border-red-200">
                            <p className="text-red-900 font-bold text-sm text-center animate-pulse">
                                “নিকটস্থ হাসপাতালের ঠিকানা জানার জন্য সহায়তা নিন।”
                            </p>
                        </div>
                    )}
                    
                    {/* Advice Box */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-1">পরামর্শ:</h4>
                        <p className="text-gray-700 leading-relaxed">{result.advice}</p>
                        
                        <div className="mt-3 pt-3 border-t border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-1 text-sm">কারণ:</h4>
                            <p className="text-sm text-gray-600">{result.explanation}</p>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-4 text-center">⚠ এটি শুধুমাত্র প্রাথমিক পরামর্শ, ডাক্তারের বিকল্প নয়।</p>
                </div>
            );
        })()}
      </div>
    </div>
  );
};

export default Home;
