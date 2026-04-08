import {
  LineChart,
  Line,
  RadialBarChart,
  RadialBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Charts({ habits, daysInMonth }) {
  // Calculate daily completion data
  const dailyData = Array.from({ length: daysInMonth }, (_, dayIndex) => {
    const completed = habits.filter((habit) => habit.days[dayIndex]).length;
    return {
      day: dayIndex + 1,
      completed,
    };
  });

  // Calculate monthly stats for pie chart
  const totalDays = habits.length * daysInMonth;
  const completedDays = habits.reduce(
    (sum, habit) => sum + habit.days.filter((done) => done).length,
    0,
  );
  const missedDays = totalDays - completedDays;

  const total = completedDays + missedDays;
  const percent = total === 0 ? 0 : Math.round((completedDays / total) * 100);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
      {/* Line Chart */}
      <div className="rounded-xl bg-slate-900 p-5 shadow-lg">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Daily Completion
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              style={{ fontSize: "12px" }}
            />
            <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #475569",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Legend wrapperStyle={{ color: "#cbd5e1" }} />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
        <h3 className="mb-4 text-sm text-slate-400">Monthly Progress</h3>

        <div className="relative h-[260px] w-full">
          <ResponsiveContainer width="100%" height={260}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="75%"
              outerRadius="100%"
              barSize={12}
              data={[
                { name: "bg", value: 100, fill: "#ffffff" },
                { name: "progress", value: percent, fill: "url(#gradient)" },
              ]}
              startAngle={90}
              endAngle={-270}
            >
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              <RadialBar background dataKey="value" />
            </RadialBarChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-white">
              {percent}%
            </span>
            <span className="text-xs text-slate-400">completion</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
