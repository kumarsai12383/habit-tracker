import React from "react";

function ProgressRing({ percent }) {
  const radius = 36;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative h-20 w-20">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#1e293b"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="#22c55e"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-700"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
        {percent}%
      </div>
    </div>
  );
}

export default ProgressRing;