import React from "react";

function MotivationBanner({ currentStreak }) {
  let message = "Start small. Start today.";
  let icon = "🌱";

  if (currentStreak >= 3) {
    message = "Momentum is building.";
    icon = "🔥";
  }

  if (currentStreak >= 5) {
    message = "You're getting consistent.";
    icon = "⚡";
  }

  if (currentStreak >= 7) {
    message = "Consistency unlocked.";
    icon = "🚀";
  }

  if (currentStreak >= 14) {
    message = "You're unstoppable.";
    icon = "🏆";
  }

  if (currentStreak >= 30) {
    message = "Beast mode activated.";
    icon = "👑";
  }

  return (
    <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-700 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 p-5">
      <div>
        <p className="text-sm text-slate-400">Motivation</p>
        <h2 className="mt-1 text-lg font-semibold text-white">{message}</h2>
        <p className="mt-1 text-sm text-slate-500">
          Current streak: {currentStreak} days
        </p>
      </div>

      <div className="text-4xl">{icon}</div>
    </div>
  );
}

export default MotivationBanner;
