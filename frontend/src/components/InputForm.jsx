import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react';

const InputForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  // Browser Native Speech Recognition
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Browser does not support voice input.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'bn-BD'; // Input in Bangla
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(prev => prev + " " + transcript);
    };

    recognition.start();
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
      <label className="block text-gray-700 font-semibold mb-2">
        সমস্যা বর্ণনা করুন (Describe Symptoms):
      </label>
      
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        rows="4"
        placeholder="উদাহরণ: আমার অনেক জ্বর এবং পেট ব্যাথা... (Example: I have high fever...)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-3 mt-4">
        <button
          onClick={startListening}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition ${isListening ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          <Mic size={18} /> {isListening ? 'শুনছি...' : 'ভয়েস (Voice)'}
        </button>

        <button
          onClick={() => onSubmit(text)}
          disabled={!text || isLoading}
          className="flex-1 flex items-center justify-center gap-2 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : <span>জমা দিন <Send size={18} className="inline"/></span>}
        </button>
      </div>
    </div>
  );
};

export default InputForm;
