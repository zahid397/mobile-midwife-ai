import React, { useState } from 'react';

/**
 * Mobile Midwife AI - Final App.js
 * Features: Tailwind Integration, Error Handling, Bangla Support, and Result Analysis.
 */

export default function App() {
  const [symptoms, setSymptoms] = useState('');
  const [month, setMonth] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    // Basic Validation - Bug protection
    if (!symptoms.trim() || !month) {
      alert("দয়া করে আপনার উপসর্গ এবং গর্ভাবস্থার মাস সঠিকভাবে প্রদান করুন।");
      return;
    }

    if (month < 1 || month > 9) {
      alert("গর্ভাবস্থার মাস ১ থেকে ৯ এর মধ্যে হতে হবে।");
      return;
    }

    setLoading(true);
    setResult(null);

    // AI Analysis Simulation
    setTimeout(() => {
      setLoading(false);
      
      // সিম্পল লজিক ভিত্তিক ফলাফল (পরে এটাকে API দিয়ে রিপ্লেস করা যাবে)
      const lowSymptoms = ['বমি', 'ক্লান্তি', 'অল্প ক্ষুধা'];
      const riskSymptoms = ['রক্তক্ষরণ', 'তীব্র ব্যথা', 'প্রবল জ্বর', 'অস্পষ্ট দৃষ্টি'];
      
      let isHighRisk = riskSymptoms.some(s => symptoms.includes(s));

      if (isHighRisk) {
        setResult({
          type: 'danger',
          message: "আপনার প্রদান করা উপসর্গে উচ্চ ঝুঁকি দেখা যাচ্ছে। দয়া করে জরুরি ভিত্তিতে নিকটস্থ হাসপাতালে যোগাযোগ করুন।"
        });
      } else {
        setResult({
          type: 'success',
          message: "আপনার তথ্য অনুযায়ী এখন পর্যন্ত সব স্বাভাবিক মনে হচ্ছে। পর্যাপ্ত বিশ্রাম নিন এবং পুষ্টিকর খাবার খান।"
        });
      }
    }, 1800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 selection:bg-brand-100">
      {/* Container Card */}
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)] border border-brand-100 overflow-hidden">
        
        {/* Header - Using HTML's Pink Theme */}
        <div className="bg-brand-500 p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform duration-500 hover:scale-110"></div>
          <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg transform -rotate-6">
            <span className="text-4xl">🤰</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">ডিজিটাল ধাত্রী</h1>
          <p className="text-brand-50 text-xs font-medium uppercase tracking-[0.1em]">Mobile Midwife AI</p>
        </div>

        {/* Input Form */}
        <div className="p-8 pt-10 space-y-6">
          <div className="group">
            <label className="block text-gray-700 font-bold mb-2 ml-1 transition-colors group-focus-within:text-brand-600">
              বর্তমান উপসর্গ (Symptoms)
            </label>
            <textarea
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-brand-500 focus:bg-white outline-none transition-all duration-300 min-h-[120px] resize-none text-gray-800 placeholder:text-gray-400"
              placeholder="যেমন: মাথা ব্যথা, বমি বমি ভাব..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 ml-1">গর্ভাবস্থার মাস (১-৯)</label>
            <input
              type="number"
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-brand-500 focus:bg-white outline-none transition-all duration-300 text-gray-800 font-semibold"
              placeholder="যেমন: ৩"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>

          {/* Analysis Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-5 rounded-[1.5rem] shadow-xl shadow-brand-200 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 text-lg"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                AI এনালাইসিস চলছে...
              </>
            ) : (
              "রিপোর্ট চেক করুন"
            )}
          </button>

          {/* Analysis Result Display */}
          {result && (
            <div className={`mt-6 p-6 rounded-3xl border-2 transition-all duration-500 ${
              result.type === 'danger' 
              ? 'bg-red-50 border-red-200 text-red-800' 
              : 'bg-green-50 border-green-200 text-green-800'
            }`}>
              <div className="flex items-center gap-3 mb-2 font-bold text-lg">
                <span>{result.type === 'danger' ? '⚠️' : '✅'}</span>
                ফলাফল বিশ্লেষণ:
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {result.message}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50/80 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">
            জরুরি প্রয়োজনে: ১৬২৬৩ (স্বাস্থ্য বাতায়ন)
          </p>
          <p className="text-[9px] text-gray-400">© ২০২৫ মোবাইল মিডওয়াইফ টিম</p>
        </div>
      </div>
    </div>
  );
}
