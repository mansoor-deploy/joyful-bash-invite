
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date("2024-06-15T19:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];
  
  return (
    <div className="py-12 px-4 bg-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Countdown to the Celebration</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="relative">
              <div className="bg-white border-gradient shadow-md rounded-lg w-24 h-24 flex flex-col items-center justify-center p-4 mb-2">
                <div className="absolute inset-0 bg-celebration-gradient opacity-5 rounded-lg"></div>
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  {unit.value < 10 ? `0${unit.value}` : unit.value}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{unit.label}</p>
              {index < timeUnits.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-6 text-xl text-celebration-gold">:</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
