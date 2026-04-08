import { useEffect, useState } from "react";

function MobileBlock({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 900);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-slate-950">
        <div className="max-w-sm p-8 text-center">
          <h1 className="mb-3 text-xl font-semibold text-white">
            Desktop Only
          </h1>

          <p className="mb-6 text-sm text-slate-400">
            This dashboard is optimized for desktop screens. Please open on laptop or
            PC.
          </p>

          <button
            onClick={() => window.close()}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Exit
          </button>
        </div>
      </div>
    );
  }

  return children;
}

export default MobileBlock;
