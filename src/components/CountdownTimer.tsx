import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-white">
      <Clock className="w-4 h-4" />
      <div className="flex gap-1 font-mono text-sm">
        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span>:</span>
        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span>:</span>
        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
