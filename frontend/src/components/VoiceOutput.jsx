import React, { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";

const VoiceOutput = ({ text }) => {
  const [voices, setVoices] = useState([]);

  // Load voices properly (important fix)
  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = () => {
    if (!text || !window.speechSynthesis) return;

    // Stop previous speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Bangla voice priority
    const banglaVoice =
      voices.find(v => v.lang === "bn-BD") ||
      voices.find(v => v.lang.startsWith("bn")) ||
      voices.find(v => v.lang.startsWith("en"));

    if (banglaVoice) utterance.voice = banglaVoice;

    utterance.lang = "bn-BD";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  if (!text) return null;

  return (
    <button
      onClick={speak}
      className="flex items-center justify-center gap-2 mt-4 w-full px-4 py-3
      bg-blue-600 text-white font-semibold rounded-xl
      hover:bg-blue-700 active:scale-95 transition"
    >
      <Volume2 size={20} />
      শুনুন (Voice Output)
    </button>
  );
};

export default VoiceOutput;
