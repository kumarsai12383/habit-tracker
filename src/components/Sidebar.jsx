import { motion } from "framer-motion";

const navItems = [
  {
    label: "Dashboard",
    active: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M4 13h6V4H4v9Zm0 7h6v-5H4v5Zm10 0h6v-9h-6v9Zm0-11h6V4h-6v5Z" />
      </svg>
    ),
  },
  {
    label: "Habits",
    active: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    active: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M4 19h16M7 15v-4m5 4V7m5 8V5" />
      </svg>
    ),
  },
  {
    label: "Settings",
    active: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.07.07a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.08-.07a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 0 1-4 0v-.11a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.87.34l-.08.07a2 2 0 1 1-2.83-2.83l.07-.08a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 0 1 0-4h.11a1.7 1.7 0 0 0 1.56-1.03 1.7 1.7 0 0 0-.34-1.87l-.07-.08a2 2 0 1 1 2.83-2.83l.08.07a1.7 1.7 0 0 0 1.87.34h.01A1.7 1.7 0 0 0 10.11 3H10a2 2 0 0 1 4 0v.11a1.7 1.7 0 0 0 1.03 1.56h.01a1.7 1.7 0 0 0 1.87-.34l.08-.07a2 2 0 1 1 2.83 2.83l-.07.08a1.7 1.7 0 0 0-.34 1.87v.01A1.7 1.7 0 0 0 21 10.11V10a2 2 0 0 1 0 4h-.11a1.7 1.7 0 0 0-1.56 1.03V15Z" />
      </svg>
    ),
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 p-4 text-slate-200 shadow-2xl shadow-black/30">
      <div className="mb-10 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3">
        <p className="text-lg font-semibold tracking-wide text-slate-100">
          Smart Habit
        </p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <motion.button
            key={item.label}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
              item.active
                ? "bg-cyan-500/15 text-cyan-300 shadow-lg shadow-cyan-950/40"
                : "text-slate-300 hover:bg-slate-800 hover:text-slate-100"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
