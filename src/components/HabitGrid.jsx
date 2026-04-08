import { Flame, Trash2 } from "lucide-react";

function HabitGrid({ habits, setHabits, addHabit, daysInMonth }) {
  const toggleDay = (habitIndex, dayIndex) => {
    setHabits((prev) => {
      const updated = [...prev];

      updated[habitIndex] = {
        ...updated[habitIndex],
        days: updated[habitIndex].days.map((d, i) => (i === dayIndex ? !d : d)),
      };

      return updated;
    });
  };

  function handleNameChange(index, value) {
    const updatedHabits = habits.map((habit, i) => {
      if (i !== index) {
        return habit;
      }

      return {
        ...habit,
        name: value,
      };
    });

    setHabits(updatedHabits);
  }

  function handleDelete(index) {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  }

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <section className="mt-6 overflow-x-auto rounded-xl bg-slate-900 p-5 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Monthly Habits</h2>
          <p className="text-sm text-slate-400">Track your daily progress</p>
        </div>

        <button
          onClick={addHabit}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          Add Habit
        </button>
      </div>

      <table className="min-w-max border border-slate-800 text-sm text-slate-200">
        <thead>
          <tr className="sticky top-0 z-20 bg-slate-900 text-xs uppercase tracking-wide text-slate-400">
            <th className="sticky left-0 z-30 bg-slate-900 px-3 py-2 text-left font-medium">
              Habit
            </th>
            {days.map((day) => (
              <th
                key={day}
                className="bg-slate-900 px-2 py-2 text-center font-medium"
              >
                {day}
              </th>
            ))}
            <th className="bg-slate-900 px-3 py-2 text-center font-medium"></th>
          </tr>
        </thead>

        <tbody>
          {habits.map((habit, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex % 2 === 0 ? "bg-slate-900" : "bg-slate-900/70"} transition hover:bg-slate-800`}
            >
              <td className="sticky left-0 z-10 bg-slate-900 px-3 py-2 font-medium whitespace-nowrap">
                <input
                  type="text"
                  value={habit.name}
                  onChange={(e) => handleNameChange(rowIndex, e.target.value)}
                  className="bg-transparent border-none outline-none text-white w-full"
                />
              </td>
              {days.map((day, dayIndex) => (
                <td
                  key={`${rowIndex}-${day}`}
                  className="px-2 py-2 text-center whitespace-nowrap"
                >
                  <button
                    onClick={() => toggleDay(rowIndex, dayIndex)}
                    className="flex h-6 w-6 items-center justify-center"
                  >
                    <Flame
                      className={`h-4 w-4 transition-all duration-200 hover:scale-110 ${habits[rowIndex].days[dayIndex] ? "fill-orange-500 text-orange-500" : "text-slate-600"}`}
                    />
                  </button>
                </td>
              ))}
              <td className="px-3 py-2 text-center whitespace-nowrap">
                <button
                  onClick={() => handleDelete(rowIndex)}
                  className="text-red-400 transition hover:text-red-300 cursor-pointer"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default HabitGrid;
