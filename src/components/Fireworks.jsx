import { useEffect } from "react";
import confetti from "canvas-confetti";

function Fireworks({ currentStreak }) {
  useEffect(() => {
    const milestones = [3, 7, 14, 30];

    if (!milestones.includes(currentStreak)) return;

    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#22c55e", "#06b6d4", "#6366f1", "#f59e0b"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, [currentStreak]);

  return null;
}

export default Fireworks;
