import { useEffect, useState } from "react";
import "./styles.css";

const targetDate = new Date("Oct 19, 2024 00:00:00").getTime();

function calculateTimeLeft() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (targetDate - new Date().getTime() < 0) {
    return (
      <div className="counter mb-6 text-wedding-secondary text-5xl appear">
        ¡Ha llegado el día!
      </div>
    );
  }

  return (
    <div className="counter mb-6 px-4 flex flex-wrap gap-8 items-start justify-around md:justify-between appear">
      <div className="flex flex-col items-center">
        <span className="number text-6xl">{timeLeft.days}</span>
        <span className="unit text-xs uppercase">Días</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="number text-6xl">{timeLeft.hours}</span>
        <span className="unit text-xs uppercase">Horas</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="number text-6xl">{timeLeft.minutes}</span>
        <span className="unit text-xs uppercase">Minutos</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="number text-6xl">{timeLeft.seconds}</span>
        <span className="unit text-xs uppercase">Segundos</span>
      </div>
    </div>
  );
};
