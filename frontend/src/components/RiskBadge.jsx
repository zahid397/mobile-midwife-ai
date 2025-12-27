import React from "react";

const RiskBadge = ({ level = "LOW" }) => {
  const styles = {
    LOW: {
      text: "LOW (ঝুঁকি নেই)",
      className: "bg-green-100 text-green-800 border-green-300",
    },
    MEDIUM: {
      text: "MEDIUM (মাঝারি ঝুঁকি)",
      className: "bg-orange-100 text-orange-800 border-orange-300",
    },
    HIGH: {
      text: "HIGH (উচ্চ ঝুঁকি)",
      className:
        "bg-red-100 text-red-800 border-red-300 animate-pulse",
    },
  };

  const badge = styles[level] || styles.LOW;

  return (
    <div
      className={`w-full px-6 py-3 rounded-full border-2 font-bold text-center text-lg shadow-sm transition ${badge.className}`}
    >
      ⚠️ ঝুঁকির মাত্রা: {badge.text}
    </div>
  );
};

export default RiskBadge;
