import React, { useState, useRef } from "react";
import { Mic, Send } from "lucide-react";

const InputForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("আপনার ব্রাউজার ভয়েস ইনপুট সাপোর্ট করে না 😢");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = "bn-BD";
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setText((prev) => prev ? prev + " " + transcript : transcript);
      };

      recognitionRef.current = recognition;
    }

    if (!isListening) {
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
    }
  };

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text.trim());
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-md">
      <label className="block text-gray-700 font-semibold mb-2">
        সমস্যা বর্ণনা করুন
      </label>

      <textarea
        className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
        rows="4"
        placeholder="উদাহরণ: আমার অনেক জ্বর এবং পেট ব্যাথা..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-3 mt-4">
        {/* Voice Button */}
        <button
          type="button"
          onClick={startListening}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition
          ${
            isListening
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <Mic size={18} />
          {isListening ? "শুনছি..." : "ভয়েস"}
        </button>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!text.trim() || isLoading}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 disabled:opacity-50"
        >
          {isLoading ? (
            "Processing..."
          ) : (
            <>
              জমা দিন <Send size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default InputForm;
