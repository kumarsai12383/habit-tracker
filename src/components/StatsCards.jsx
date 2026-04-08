import { CheckCircle, ListTodo, Flame, XCircle, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import ProgressRing from "./ProgressRing";

function StatsCards({
  habits,
  daysInMonth,
  currentStreak,
  bestStreak,
  weeklyCompleted,
  weeklyPercent,
}) {
  const totalDays = habits.length * daysInMonth;
  const completed = habits.reduce(
    (sum, habit) =>
      sum +
      habit.days.slice(0, daysInMonth).filter((dayDone) => dayDone).length,
    0,
  );
  const missed = (() => {
    let count = 0;
    for (let day = 0; day < daysInMonth; day++) {
      habits.forEach((habit) => {
        if (!habit.days[day]) count++;
      });
    }
    return count;
  })();
  const percentage =
    totalDays === 0 ? 0 : Math.round((completed / totalDays) * 100);

  const stats = [
    {
      label: "Completion Rate",
      value: percentage,
      Icon: CheckCircle,
      iconClass: "text-emerald-400",
    },
    {
      label: "Total Habits",
      value: habits.length,
      Icon: ListTodo,
      iconClass: "text-cyan-400",
    },
    {
      label: "Current Streak",
      value: `${currentStreak} days`,
      Icon: Flame,
      iconClass: "text-orange-400",
    },
    {
      label: "Best Streak",
      value: `${bestStreak} days`,
      Icon: Trophy,
      iconClass: "text-amber-400",
    },
    {
      label: "This Week",
      value: `${weeklyCompleted}/7`,
      subtext: `${weeklyPercent}%`,
      Icon: CheckCircle,
      iconClass: "text-sky-400",
    },
    {
      label: "Missed Days",
      value: missed,
      Icon: XCircle,
      iconClass: "text-rose-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ label, value, Icon, iconClass }, index) => {
        const isStreakCard = label === "Current Streak" && currentStreak > 0;
        const isCompletionCard = label === "Completion Rate";

        return (
          <motion.article
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isStreakCard
                ? { opacity: 1, y: 0, scale: [1, 1.05, 1] }
                : { opacity: 1, y: 0 }
            }
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              repeat: isStreakCard ? Infinity : 0,
              repeatDelay: 1.1,
            }}
            whileHover={{ scale: 1.03 }}
            className="flex items-center justify-between rounded-xl bg-slate-900 p-5 shadow-lg transition duration-300 hover:bg-slate-800"
          >
            <div>
              <p className="text-sm text-slate-400">{label}</p>
              {isCompletionCard ? (
                <div className="mt-1">
                  <ProgressRing percent={value} />
                </div>
              ) : (
                <p className="mt-1 text-2xl font-bold text-white">{value}</p>
              )}
              {label === "This Week" ? (
                <p className="mt-1 text-sm text-slate-400">{weeklyPercent}%</p>
              ) : null}
            </div>
            <Icon className={`h-7 w-7 ${iconClass}`} strokeWidth={2} />
          </motion.article>
        );
      })}
    </div>
  );
}

export default StatsCards;
