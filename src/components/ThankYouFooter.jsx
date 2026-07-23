import React from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, MessageCircle } from 'lucide-react';

export const ThankYouFooter = ({ brideName = "Subhana", groomName = "Saad", creditPhone = "+917717655835" }) => {
  const triggerFireworks = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#d4af37', '#fcf6ba', '#e84a5f', '#ffffff']
      });
    }, 250);
  };

  const formattedPhone = "7717655835";
  const cleanPhone = creditPhone.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi! I loved this wedding invitation website and would like to order one!")}`;

  return (
    <footer style={{
      position: 'relative',
      padding: '100px 20px 60px',
      textAlign: 'center',
      background: 'linear-gradient(to top, #150205 0%, rgba(59,10,17,0.85) 100%)',
      borderTop: '1px solid rgba(212, 175, 55, 0.3)',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        {/* Floating Lantern Icon */}
        <div className="float-slow" style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fcf6ba 0%, #d4af37 70%, #aa771c 100%)',
          margin: '0 auto 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(254, 246, 186, 0.8)'
        }}>
          <Sparkles size={30} color="#2b070d" />
        </div>

        <h3 className="font-heading gold-text" style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '8px'
        }}>
          Jazakum Allahu Khayran
        </h3>

        <p className="font-calligraphy" style={{
          fontSize: '2rem',
          color: '#e8c39e',
          marginBottom: '16px'
        }}>
          {groomName} & {brideName}
        </p>

        <p style={{
          fontSize: '1rem',
          color: '#faf5eb',
          lineHeight: '1.7',
          maxWidth: '650px',
          margin: '0 auto 24px',
          opacity: 0.95
        }}>
          We look forward to celebrating this joyous occasion with you and your family. May Allah bless you abundantly and reward you for sharing in our happiness.
        </p>

        {/* Quranic Elegant Ending */}
        <div style={{
          fontSize: '1.1rem',
          color: '#fcf6ba',
          fontStyle: 'italic',
          marginBottom: '30px'
        }}>
          “Indeed, Allah loves those who put their trust in Him.”
          <span style={{ display: 'block', fontSize: '0.85rem', fontStyle: 'normal', color: '#e8c39e', marginTop: '4px', letterSpacing: '1.5px' }}>
            (Qur’an 3:159)
          </span>
        </div>

        {/* Fireworks Button */}
        <button onClick={triggerFireworks} className="gold-button pulse-glow" style={{ marginBottom: '40px' }}>
          <Sparkles size={18} /> Launch Celebration Fireworks 🎆
        </button>

        {/* Footer Credit Banner for Creating More Invitations */}
        <div style={{
          marginTop: '30px',
          padding: '20px 24px',
          borderRadius: '20px',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#fcf6ba',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            ✨ Want to create an interactive invitation like this for your special occasion?
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#d4af37',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '700',
              letterSpacing: '1px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(59, 10, 17, 0.8)',
              border: '1px solid #d4af37',
              transition: 'all 0.3s ease'
            }}
          >
            <MessageCircle size={18} color="#25D366" /> Contact / WhatsApp: {formattedPhone}
          </a>
        </div>

        <div style={{
          fontSize: '0.8rem',
          color: '#8c7377',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginTop: '30px',
          borderTop: '1px solid rgba(212,175,55,0.15)',
          paddingTop: '20px'
        }}>
          Crafted with love for {groomName} & {brideName}'s Nikah • 2026
        </div>
      </div>
    </footer>
  );
};
