import React from 'react';
import { Calendar, Heart, MapPin, Sparkles } from 'lucide-react';

export const HeroSection = ({ brideName = "Subhana", groomName = "Saad", weddingDate = "August 8, 2026" }) => {
  const downloadCalendarFile = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Subhana & Saad Wedding//Invitation//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Nikah Ceremony of ' + brideName + ' & ' + groomName,
      'DESCRIPTION:Together with our families, we joyfully invite you to celebrate our Nikah! May Allah bless this union.',
      'LOCATION:The Park Crown Banquet, Kaushambi',
      'DTSTART:20260808T200000Z',
      'DTEND:20260808T235900Z',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${brideName}_and_${groomName}_Nikah.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '120px 20px 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      zIndex: 10
    }}>
      {/* Arabic Bismillah Calligraphy */}
      <div className="font-heading" style={{
        fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
        color: '#fcf6ba',
        letterSpacing: '2px',
        marginBottom: '0.8rem',
        textShadow: '0 0 15px rgba(212,175,55,0.6)'
      }}>
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </div>

      <div style={{
        color: '#d4af37',
        fontSize: '0.85rem',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        marginBottom: '0.5rem'
      }}>
        Together with our families we joyfully invite you to celebrate the
      </div>

      <p className="font-calligraphy" style={{
        fontSize: '3rem',
        color: '#e8c39e',
        textShadow: '0 4px 15px rgba(0,0,0,0.6)',
        marginBottom: '0.2rem'
      }}>
        Nikah Ceremony
      </p>

      {/* Bride & Groom Name Banner */}
      <h1 className="font-heading gold-text" style={{
        fontSize: 'clamp(3.2rem, 7.5vw, 5.8rem)',
        fontWeight: '700',
        lineHeight: '1.1',
        margin: '10px 0 16px',
        letterSpacing: '1px'
      }}>
        {brideName} <span className="font-calligraphy" style={{ fontSize: '0.8em', color: '#e84a5f', WebkitTextFillColor: 'initial' }}>and</span> {groomName}
      </h1>

      {/* Quranic Verse */}
      <div style={{
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#fcf6ba',
        maxWidth: '500px',
        margin: '0 auto 20px',
        letterSpacing: '0.5px'
      }}>
        “And We created you in pairs”
        <span style={{ display: 'block', fontSize: '0.85rem', fontStyle: 'normal', color: '#e8c39e', marginTop: '4px', letterSpacing: '2px' }}>
          — Qur’an 78:8
        </span>
      </div>

      {/* Main Couple Portrait Frame */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '360px',
        height: '460px',
        margin: '10px auto 26px',
        borderRadius: '180px 180px 20px 20px',
        padding: '10px',
        background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 50%, #aa771c 100%)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.3)'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '172px 172px 14px 14px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <img
            src="/couple_portrait.png"
            alt="Subhana & Saad"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(59,10,17,0.75) 0%, transparent 60%)'
          }} />
        </div>

        {/* Floating Date Badge */}
        <div style={{
          position: 'absolute',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#59101d',
          border: '2px solid #d4af37',
          borderRadius: '50px',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
          whiteSpace: 'nowrap'
        }}>
          <Heart size={16} fill="#e84a5f" color="#e84a5f" />
          <span style={{ fontSize: '0.85rem', color: '#fcf6ba', fontWeight: '600', letterSpacing: '1px' }}>
            8 AUGUST 2026 • SATURDAY
          </span>
        </div>
      </div>

      {/* Venue Highlight */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '1rem',
        color: '#faf5eb',
        background: 'rgba(59,10,17,0.6)',
        border: '1px solid rgba(212,175,55,0.4)',
        borderRadius: '30px',
        padding: '8px 20px',
        margin: '10px auto 24px'
      }}>
        <MapPin size={18} color="#d4af37" />
        <span>The Park Crown Banquet, Kaushambi • 8:00 PM Onwards</span>
      </div>

      {/* Islamic Dua Box */}
      <div className="glass-card" style={{
        maxWidth: '520px',
        padding: '20px 24px',
        margin: '0 auto 30px',
        borderRadius: '20px',
        border: '1px solid rgba(212,175,55,0.5)',
        textAlign: 'center'
      }}>
        <div className="font-heading" style={{ fontSize: '1.4rem', color: '#fcf6ba', marginBottom: '4px' }}>
          دُعَاءُ خَيْرٍ
        </div>
        <p style={{ fontSize: '0.95rem', color: '#faf5eb', fontStyle: 'italic', lineHeight: '1.5' }}>
          "May Allah bless this union with love, mercy, Barakah and endless happiness."
        </p>
        <span style={{ fontSize: '0.8rem', color: '#e8c39e', marginTop: '6px', display: 'block' }}>
          Your presence will make our day complete ❤
        </span>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={downloadCalendarFile} className="gold-button">
          <Calendar size={18} /> Add Nikah To Phone Calendar
        </button>

        <a href="#rsvp" style={{
          textDecoration: 'none',
          padding: '14px 28px',
          borderRadius: '50px',
          border: '2px solid #d4af37',
          color: '#fcf6ba',
          fontSize: '0.95rem',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          backdropFilter: 'blur(10px)',
          background: 'rgba(212, 175, 55, 0.1)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Sparkles size={18} color="#d4af37" /> Send RSVP
        </a>
      </div>
    </section>
  );
};
