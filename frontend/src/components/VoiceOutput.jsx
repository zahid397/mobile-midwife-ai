import React, { useEffect } from 'react';
import { Volume2 } from 'lucide-react';

const VoiceOutput = ({ text }) => {
  
  const speak = () => {
    if (!window.speechSynthesis) return;
    
    // Stop any previous speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    // Try to find a Bangla voice, fallback to default
    const voices = window.speechSynthesis.getVoices();
    const banglaVoice = voices.find(v => v.lang.includes('bn'));
    
    if (banglaVoice) utterance.voice = banglaVoice;
    utterance.lang = 'bn-BD'; // Force Bangla Locale
    utterance.rate = 0.9;
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button 
      onClick={speak}
      className="flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      <Volume2 size={20} />
      শুনুন (Play Audio)
    </button>
  );
};

export default VoiceOutput;
