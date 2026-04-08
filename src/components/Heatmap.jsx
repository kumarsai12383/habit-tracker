import React from "react";

function Heatmap({ habits, daysInMonth }) {
  const data = [];

  for (let day = 0; day < daysInMonth; day++) {
    const completed = habits.filter((h) => h.days[day]).length;
    data.push(completed);
  }

  return (
    <div className="mt-6 rounded-xl bg-slate-900 p-5">
      <h3 className="mb-4 font-semibold text-white">Consistency Heatmap</h3>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {data.map((value, i) => {
          let color =
            value === 0
              ? "bg-slate-800"
              : value === 1
                ? "bg-green-900"
                : value === 2
                  ? "bg-green-700"
                  : "bg-green-500";

          return (
            <div
              key={i}
              className={`h-5 w-5 rounded-md ${color} transition hover:scale-125`}
              title={`Day ${i + 1}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Heatmap;
