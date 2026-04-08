import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
import StatsCards from "./components/StatsCards";
import MotivationBanner from "./components/MotivationBanner";
import Charts from "./components/Charts";
import Achievements from "./components/Achievements";
import Heatmap from "./components/Heatmap";
import HabitGrid from "./components/HabitGrid";
import Celebration from "./components/Celebration";
import Fireworks from "./components/Fireworks";
import MobileBlock from "./components/MobileBlock";

const defaultHabits = [{ name: "Workout", days: Array(31).fill(false) }];

function App() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const storageKey = `habits-${year}-${month}`;

  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem(
      `habits-${new Date().getFullYear()}-${new Date().getMonth()}`,
    );

    if (saved) {
      return JSON.parse(saved);
    }

    return defaultHabits;
  });

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(month, year);

  const currentStreak = (() => {
    let lastCompletedDay = -1;

    // find last completed day
    for (let i = 0; i < 31; i++) {
      const completed = habits.some((h) => h.days[i]);
      if (completed) lastCompletedDay = i;
    }

    // no completed days
    if (lastCompletedDay === -1) return 0;

    let streak = 0;

    // count backwards from last completed day
    for (let day = lastCompletedDay; day >= 0; day--) {
      const completed = habits.some((h) => h.days[day]);

      if (completed) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  })();

  const bestStreak = (() => {
    let maxStreak = 0;
    let current = 0;

    for (let day = 0; day < 31; day++) {
      const completed = habits.some((h) => h.days[day]);

      if (completed) {
        current++;
        if (current > maxStreak) {
          maxStreak = current;
        }
      } else {
        current = 0;
      }
    }

    return maxStreak;
  })();

  const today = new Date().getDate() - 1;
  const start = Math.max(0, today - 6);

  let weeklyCompleted = 0;

  for (let day = start; day <= today; day++) {
    const completed = habits.some((h) => h.days[day]);

    if (completed) weeklyCompleted++;
  }

  const weeklyTotal = 7;
  const weeklyPercent = Math.round((weeklyCompleted / weeklyTotal) * 100);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(habits));
  }, [habits, storageKey]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setHabits(JSON.parse(saved));
    } else {
      setHabits(defaultHabits);
    }
  }, [month, year]);

  function addHabit() {
    const newHabit = {
      name: "New Habit",
      days: Array(daysInMonth).fill(false),
    };

    setHabits([...habits, newHabit]);
  }

  return (
    <MobileBlock>
      <Layout>
        <Fireworks currentStreak={currentStreak} />
        <Celebration currentStreak={currentStreak} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <StatsCards
            habits={habits}
            daysInMonth={daysInMonth}
            currentStreak={currentStreak}
            bestStreak={bestStreak}
            weeklyCompleted={weeklyCompleted}
            weeklyPercent={weeklyPercent}
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <MotivationBanner currentStreak={currentStreak} />
          </motion.div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Charts habits={habits} daysInMonth={daysInMonth} />
              </motion.div>
            </div>

            <Achievements
              currentStreak={currentStreak}
              bestStreak={bestStreak}
              weeklyPercent={weeklyPercent}
            />
          </div>

          <Heatmap habits={habits} daysInMonth={daysInMonth} />

          <HabitGrid
            habits={habits}
            setHabits={setHabits}
            addHabit={addHabit}
            daysInMonth={daysInMonth}
          />
        </motion.div>
      </Layout>
    </MobileBlock>
  );
}

export default App;
