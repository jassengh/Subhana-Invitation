import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

export const PhotoGallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  const photos = [
    {
      src: '/couple_portrait.png',
      caption: 'Royal Elegance & Joy',
      date: 'Pre-Wedding Celebration'
    },
    {
      src: '/proposal_moment.png',
      caption: 'Sunset Whispers & Proposal',
      date: 'Summer 2025'
    },
    {
      src: '/wedding_venue.png',
      caption: 'The Grand Royal Palace',
      date: 'Our Wedding Destination'
    }
  ];

  const handleNext = () => {
    setActivePhoto((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setActivePhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="gallery" style={{
      padding: '80px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
          <Camera size={16} /> Memories & Moments <Camera size={16} />
        </div>
        <h2 className="font-heading gold-text" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
          Photo Gallery
        </h2>
        <p className="font-calligraphy" style={{ fontSize: '1.6rem', color: '#e8c39e', marginTop: '4px' }}>
          Capturing our cherished memories
        </p>
      </div>

      {/* Grid of Polaroid Photo Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '28px',
        justifyContent: 'center'
      }}>
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setActivePhoto(idx)}
            style={{
              background: '#faf5eb',
              color: '#2c1a1d',
              padding: '16px 16px 24px',
              borderRadius: '16px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.2)',
              border: '2px solid #d4af37',
              cursor: 'pointer',
              transform: idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.04) rotate(0deg)';
              e.currentTarget.style.zIndex = '5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = idx % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)';
              e.currentTarget.style.zIndex = '1';
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              borderRadius: '10px',
              overflow: 'hidden',
              marginBottom: '16px'
            }}>
              <img
                src={photo.src}
                alt={photo.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#59101d', fontWeight: '700' }}>
                {photo.caption}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#8c7377', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {photo.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {activePhoto !== null && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0,0,0,0.92)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <button
            onClick={() => setActivePhoto(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(212, 175, 55, 0.3)',
              border: '1px solid #d4af37',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '20px',
              background: 'rgba(212, 175, 55, 0.3)',
              border: '1px solid #d4af37',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img
              src={photos[activePhoto].src}
              alt={photos[activePhoto].caption}
              style={{
                maxHeight: '75vh',
                maxWidth: '100%',
                borderRadius: '16px',
                border: '3px solid #d4af37',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
              }}
            />
            <h3 className="font-heading gold-text" style={{ fontSize: '2rem', marginTop: '16px' }}>
              {photos[activePhoto].caption}
            </h3>
            <p style={{ color: '#e8c39e', fontSize: '0.9rem' }}>{photos[activePhoto].date}</p>
          </div>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '20px',
              background: 'rgba(212, 175, 55, 0.3)',
              border: '1px solid #d4af37',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};
