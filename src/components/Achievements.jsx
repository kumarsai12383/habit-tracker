import React from "react";

function Achievements({ currentStreak, bestStreak, weeklyPercent }) {
  const achievements = [
    {
      title: "Starter",
      icon: "🌱",
      unlocked: currentStreak >= 1,
    },
    {
      title: "3 Day Streak",
      icon: "🔥",
      unlocked: currentStreak >= 3,
    },
    {
      title: "Consistent",
      icon: "⚡",
      unlocked: currentStreak >= 7,
    },
    {
      title: "Unstoppable",
      icon: "🚀",
      unlocked: currentStreak >= 14,
    },
    {
      title: "Legend",
      icon: "👑",
      unlocked: bestStreak >= 30,
    },
    {
      title: "Perfect Week",
      icon: "🏆",
      unlocked: weeklyPercent === 100,
    },
  ];

  return (
    <div className="h-full rounded-xl bg-slate-900 p-5">
      <h3 className="mb-4 font-semibold text-white">Achievements</h3>

      <div className="space-y-3">
        {achievements.map((a, i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded-lg p-3 ${a.unlocked ? "bg-slate-800" : "bg-slate-800/40 opacity-50"}`}
          >
            <div className="flex items-center gap-3">
              <div className="text-xl">{a.icon}</div>
              <div className="text-sm text-white">{a.title}</div>
            </div>

            <div>{a.unlocked ? "✅" : "🔒"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
