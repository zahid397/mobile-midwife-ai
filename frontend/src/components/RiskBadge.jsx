import React from 'react';

const RiskBadge = ({ level }) => {
  const colors = {
    LOW: "bg-green-100 text-green-800 border-green-200",
    MEDIUM: "bg-yellow-100 text-yellow-800 border-yellow-200",
    HIGH: "bg-red-100 text-red-800 border-red-200 animate-pulse"
  };

  return (
    <div className={`px-6 py-2 rounded-full border-2 font-bold text-center text-xl shadow-sm ${colors[level] || colors.LOW}`}>
      RISK LEVEL: {level}
    </div>
  );
};

export default RiskBadge;
