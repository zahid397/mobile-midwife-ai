import React, { useState } from 'react';

// App.js
export default function App() {
  const [symptoms, setSymptoms] = useState('');
  const [month, setMonth] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!symptoms.trim() || !month) {
      alert("অনুগ্রহ করে সব তথ্য দিন।");
      return;
    }
    setLoading(true);
    setResult(null);

    // AI Analysis Simulation
    setTimeout(() => {
      setLoading(false);
      const riskWords = ['রক্ত', 'ব্যথা', 'জ্বর', 'পানি'];
      const isHighRisk = riskWords.some(word => symptoms.includes(word));

      setResult({
        type: isHighRisk ? 'danger' : 'success',
        message: isHighRisk 
          ? "সতর্কতা: আপনার উপসর্গে ঝুঁকি থাকতে পারে। দ্রুত ডাক্তারের পরামর্শ নিন।" 
          : "আপনার তথ্য অনুযায়ী এখন পর্যন্ত সব স্বাভাবিক মনে হচ্ছে। নিয়মিত যত্ন নিন।"
      });
    }, 1500);
  };

  return (
    // bg-brand-50 নিশ্চিত করবে যে ব্যাকগ্রাউন্ড কালো হবে না
    <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-xl border border-brand-100 overflow-hidden">
        
        {/* Header - Pink Theme */}
        <div className="bg-brand-500 p-10 text-center text-white">
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <span className="text-4xl">🤰</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">মোবাইল মিডওয়াইফ</h1>
          <p className="text-brand-100 text-xs uppercase tracking-widest mt-1">AI Pregnancy Assistant</p>
        </div>

        {/* Input Form */}
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2 ml-1">উপসর্গ লিখুন</label>
            <textarea
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-brand-500 focus:bg-white outline-none transition-all text-gray-800"
              placeholder="যেমন: মাথা ব্যথা বা বমি..."
              rows="3"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 ml-1">গর্ভাবস্থার মাস</label>
            <input
              type="number"
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-brand-500 focus:bg-white outline-none transition-all text-gray-800"
              placeholder="যেমন: ৩"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-5 rounded-2xl shadow-lg active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? "চেক করা হচ্ছে..." : "ফলাফল দেখুন"}
          </button>

          {/* Result Section */}
          {result && (
            <div className={`mt-6 p-5 rounded-2xl border-2 ${
              result.type === 'danger' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'
            }`}>
              <p className="font-bold mb-1 underline">ফলাফল:</p>
              <p className="text-sm">{result.message}</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400 font-bold uppercase">জরুরি সেবা: ১৬২৬৩</p>
        </div>
      </div>
    </div>
  );
}
