import React, { useState } from 'react';
import { Music, VolumeX, Settings, Heart, Menu, X, Sparkles, Mail } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Navbar = ({ brideName, groomName, onUpdateNames, weddingDate, onUpdateDate, recipientEmail, onUpdateEmail }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { label: 'Video', href: '#video' },
    { label: 'Quran Verses', href: '#nikah-verses' },
    { label: 'Scratch Heart', href: '#scratch-heart' },
    { label: 'Events', href: '#events' },
    { label: 'Map', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' }
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '92%',
        maxWidth: '1100px',
        zIndex: 8000,
        background: 'rgba(59, 10, 17, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(212, 175, 55, 0.4)',
        borderRadius: '50px',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Brand Monogram */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Heart size={20} fill="#e84a5f" color="#e84a5f" />
          <span className="font-calligraphy" style={{ fontSize: '1.6rem', color: '#fcf6ba' }}>
            {brideName} & {groomName}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#faf5eb',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '500',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.target.style.color = '#faf5eb')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Quick Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            style={{
              background: isMuted ? 'rgba(140, 115, 119, 0.3)' : 'rgba(212, 175, 55, 0.25)',
              border: '1px solid #d4af37',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fcf6ba',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {isMuted ? <VolumeX size={18} /> : <Music size={18} className="float-slow" />}
          </button>

          {/* Settings Customizer Toggle */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            title="Edit Couple Names, Date & RSVP Email"
            style={{
              background: 'rgba(212, 175, 55, 0.25)',
              border: '1px solid #d4af37',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fcf6ba',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <Settings size={18} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fcf6ba',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '5%',
          right: '5%',
          zIndex: 7999,
          background: 'rgba(42, 5, 11, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid #d4af37',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#faf5eb',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(212,175,55,0.15)',
                paddingBottom: '10px'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Interactive Settings Drawer Modal */}
      {showSettings && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div className="glass-card" style={{
            width: '100%',
            maxWidth: '420px',
            padding: '28px',
            color: '#faf5eb',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowSettings(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                color: '#faf5eb',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            <h3 className="font-heading" style={{ fontSize: '1.5rem', color: '#fcf6ba', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} color="#d4af37" /> Customize Invitation
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', color: '#e8c39e', display: 'block', marginBottom: '4px' }}>Bride Name</label>
                <input
                  type="text"
                  value={brideName}
                  onChange={(e) => onUpdateNames(e.target.value, groomName)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #d4af37',
                    background: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#e8c39e', display: 'block', marginBottom: '4px' }}>Groom / Partner Name</label>
                <input
                  type="text"
                  value={groomName}
                  onChange={(e) => onUpdateNames(brideName, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #d4af37',
                    background: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#e8c39e', display: 'block', marginBottom: '4px' }}>Wedding Date</label>
                <input
                  type="text"
                  value={weddingDate}
                  onChange={(e) => onUpdateDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #d4af37',
                    background: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#e8c39e', display: 'block', marginBottom: '4px' }}>Email Address for RSVPs & Wishes</label>
                <input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => onUpdateEmail(e.target.value)}
                  placeholder="e.g. navelaindustries@gmail.com"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #d4af37',
                    background: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <button
                onClick={() => setShowSettings(false)}
                className="gold-button"
                style={{ marginTop: '10px', width: '100%' }}
              >
                Save & Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
