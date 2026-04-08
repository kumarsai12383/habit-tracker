import { useEffect, useState } from "react";

function Celebration({ currentStreak }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (
      currentStreak === 3 ||
      currentStreak === 7 ||
      currentStreak === 14 ||
      currentStreak === 30
    ) {
      setShow(true);

      timeoutId = setTimeout(() => {
        setShow(false);
      }, 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentStreak]);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="" />

      <div className="absolute inset-0 flex items-center justify-center">
       
      </div>
    </div>
    
  );
}

export default Celebration;
