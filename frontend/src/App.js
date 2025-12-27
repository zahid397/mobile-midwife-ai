import React, { useState } from 'react';

const MobileMidwifeUI = () => {
  const [symptoms, setSymptoms] = useState('');
  const [month, setMonth] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    // এখানে আপনার API কল বা লজিক বসবে
    setTimeout(() => setLoading(false), 2000); 
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-4 font-sans text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container */}
      <div className="z-10 w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-teal-500/20 rounded-2xl mb-4">
            <span className="text-3xl">🤰</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Mobile Midwife AI</h1>
          <p className="text-gray-400 text-sm mt-2">AI-powered pregnancy risk awareness tool</p>
        </div>

        <div className="space-y-6">
          {/* Symptoms Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">উপসর্গসমূহ (Symptoms)</label>
            <textarea
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              placeholder="যেমন: মাথা ব্যথা, বমি বমি ভাব..."
              rows="3"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>

          {/* Pregnancy Month Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">গর্ভাবস্থার মাস (১-৯)</label>
            <input
              type="number"
              min="1"
              max="9"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              placeholder="যেমন: ৩"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg transform transition active:scale-95 disabled:opacity-50"
          >
            {loading ? "বিশ্লেষণ করা হচ্ছে..." : "Analyze (বিশ্লেষণ করুন)"}
          </button>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-[10px] text-center text-gray-500 leading-relaxed uppercase tracking-widest">
          সতর্কতা: এটি কোনো চিকিৎসকের বিকল্প নয়। জরুরি প্রয়োজনে ডাক্তারের পরামর্শ নিন।
        </p>
      </div>
    </div>
  );
};

export default MobileMidwifeUI;
