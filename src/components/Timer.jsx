import { useEffect, useState } from 'react';
import AnimacionScroll from '../components/AnimacionScroll.jsx';

export default function CountdownTimer() {
  const targetDate = new Date("2025-08-17T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // ejecuta de inmediato la primera vez

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center my-8 p-10 mb-24 md:mb-0">
      <AnimacionScroll direction="bottom">
        <h1 className="text-2xl md:text-8xl font-bold text-center pt-10">
          FALTAN:
        </h1>
      </AnimacionScroll>
      <AnimacionScroll direction="top">
        <div className="flex justify-center gap-6 mt-8 text-xl md:text-3xl font-bold">
          <div>
            <span>{String(timeLeft.days).padStart(2, '0')}</span><br />
            <span className="text-sm font-normal">Días</span>
          </div>
          <div>
            <span>{String(timeLeft.hours).padStart(2, '0')}</span><br />
            <span className="text-sm font-normal">Horas</span>
          </div>
          <div>
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span><br />
            <span className="text-sm font-normal">Minutos</span>
          </div>
          <div>
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span><br />
            <span className="text-sm font-normal">Segundos</span>
          </div>
        </div>
      </AnimacionScroll>
    </div>
  );
}