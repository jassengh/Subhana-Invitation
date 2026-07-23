import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Unlock } from 'lucide-react';

export const ScratchHeart = ({ brideName = "Subhana", groomName = "Saad", weddingDate = "August 8, 2026" }) => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const width = 320;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    // Draw Gold Metallic Coating
    const drawFoil = () => {
      ctx.globalCompositeOperation = 'source-over';

      // Gold Foil Gradient
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#bf953f');
      grad.addColorStop(0.3, '#fcf6ba');
      grad.addColorStop(0.6, '#b38728');
      grad.addColorStop(1, '#aa771c');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Add Gold Dust Speckles
      for (let i = 0; i < 200; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.6)' : 'rgba(100,60,10,0.3)';
        ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
      }

      // Scratch Text Prompt
      ctx.fillStyle = '#2b070d';
      ctx.font = 'bold 16px "Montserrat", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SCRATCH HERE', width / 2, height / 2 - 10);
      ctx.font = '14px "Great Vibes", cursive';
      ctx.fillText('❤️ Drag finger or mouse ❤️', width / 2, height / 2 + 20);
    };

    drawFoil();
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#fcf6ba', '#e84a5f', '#ffffff']
    });
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }

    const percent = Math.round((transparentCount / (pixels.length / 4)) * 100);
    setScratchPercent(percent);

    if (percent > 35 && !isRevealed) {
      setIsRevealed(true);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      triggerConfetti();
    }
  };

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleTouchStart = (e) => {
    isDrawing.current = true;
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDrawing.current) return;
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <section id="scratch-heart" style={{
      padding: '80px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#d4af37',
          fontSize: '0.85rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          <Heart size={16} fill="#e84a5f" color="#e84a5f" /> Interactive Secret Reveal <Heart size={16} fill="#e84a5f" color="#e84a5f" />
        </div>

        <h2 className="font-heading gold-text" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
          Scratch The Golden Heart
        </h2>
        <p className="font-calligraphy" style={{ fontSize: '1.6rem', color: '#e8c39e', marginTop: '4px' }}>
          Rub with your finger or mouse to unlock our Nikah card details
        </p>
      </div>

      {/* Heart Container */}
      <div style={{
        position: 'relative',
        width: '320px',
        height: '300px',
        margin: '0 auto',
        userSelect: 'none',
        touchAction: 'none'
      }}>
        {/* Underneath Revealed Content Card */}
        <div className="parchment-card" style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 16px',
          textAlign: 'center',
          borderRadius: '24px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.5)'
        }}>
          <Sparkles size={24} color="#d4af37" className="float-slow" />

          <h3 className="font-heading" style={{
            fontSize: '1.5rem',
            color: '#59101d',
            fontWeight: '700',
            marginTop: '4px'
          }}>
            Nikah Invitation Unlocked!
          </h3>

          <p style={{
            fontSize: '0.88rem',
            color: '#2c1a1d',
            lineHeight: '1.4',
            margin: '6px 0'
          }}>
            "Together with our families, join us for the Nikah of <strong>{brideName} & {groomName}</strong> on <strong>Saturday, August 8th, 2026 at 8:00 PM</strong> at <strong>The Park Crown Banquet, Kaushambi</strong>."
          </p>

          <div style={{
            background: '#59101d',
            color: '#fcf6ba',
            padding: '5px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            دُعَاءُ خَيْرٍ • May Allah bless this union with Barakah & love
          </div>
        </div>

        {/* Scratchable Canvas Layer */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              cursor: 'pointer',
              boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
              zIndex: 3
            }}
          />
        )}
      </div>

      {/* Progress Indicator */}
      {!isRevealed ? (
        <p style={{ marginTop: '16px', color: '#e8c39e', fontSize: '0.9rem' }}>
          Scratched: {scratchPercent}% (Scratch over 35% to reveal all!)
        </p>
      ) : (
        <div style={{
          marginTop: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#fcf6ba',
          fontSize: '1rem',
          fontWeight: '600'
        }}>
          <Unlock size={18} color="#d4af37" /> Revealed! Your presence will make our day complete ❤
        </div>
      )}
    </section>
  );
};
