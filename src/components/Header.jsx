function Header() {
  return (
    <header className="sticky top-0 z-20 flex min-h-16 items-center justify-between border-b border-slate-700/60 bg-slate-800/95 px-6 py-2 backdrop-blur-sm">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold tracking-tight text-slate-100">
          Dashboard
        </h1>

        <div className="flex gap-2">
          <select className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-200 outline-none transition hover:border-slate-500">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>

          <select className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-200 outline-none transition hover:border-slate-500">
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>
      </div>

      <div className="h-9 w-9 rounded-full border border-slate-600 bg-gradient-to-br from-cyan-400 to-emerald-400 shadow-md shadow-cyan-950/50" />
    </header>
  );
}

export default Header;
