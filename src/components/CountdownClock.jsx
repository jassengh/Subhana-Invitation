import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';

export const CountdownClock = ({ targetDate = "2026-11-24T18:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section style={{
      padding: '60px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color: '#d4af37',
        fontSize: '0.85rem',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        marginBottom: '12px'
      }}>
        <Clock size={16} /> Counting Down To The Big Day <Clock size={16} />
      </div>

      <h2 className="font-heading gold-text" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2.5rem' }}>
        Until We Say "I Do"
      </h2>

      {/* Grid of 4 Gold Countdown Boxes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '16px',
        justifyContent: 'center'
      }}>
        {timeUnits.map((unit) => (
          <div key={unit.label} className="glass-card" style={{
            padding: '24px 16px',
            textAlign: 'center',
            border: '2px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)'
          }}>
            <span className="font-heading gold-text" style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: '700',
              lineHeight: '1'
            }}>
              {String(unit.value).padStart(2, '0')}
            </span>
            <span style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#e8c39e',
              marginTop: '8px'
            }}>
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
