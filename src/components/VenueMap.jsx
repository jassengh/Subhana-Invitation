import React from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';

export const VenueMap = () => {
  const venueAddress = "The Park Crown Banquet, Kaushambi, Ghaziabad, Uttar Pradesh";
  const googleMapsShareUrl = "https://share.google/lzLBHSxMrilXMSLou";
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(venueAddress)}`;

  return (
    <section id="venue" style={{
      padding: '80px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
          <MapPin size={16} /> Destination & Directions <MapPin size={16} />
        </div>
        <h2 className="font-heading gold-text" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
          Nikah Venue Location
        </h2>
        <p className="font-calligraphy" style={{ fontSize: '1.6rem', color: '#e8c39e', marginTop: '4px' }}>
          The Park Crown Banquet, Kaushambi
        </p>
      </div>

      <div className="glass-card" style={{
        borderRadius: '24px',
        overflow: 'hidden',
        border: '2px solid rgba(212, 175, 55, 0.4)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
      }}>
        {/* Venue Photo Header */}
        <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
          <img
            src="/wedding_venue.png"
            alt="The Park Crown Banquet"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(42,5,11,0.95) 0%, transparent 60%)'
          }} />

          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '24px',
            right: '24px',
            color: '#faf5eb'
          }}>
            <h3 className="font-heading" style={{ fontSize: '1.8rem', color: '#fcf6ba' }}>
              The Park Crown Banquet
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#e8c39e', marginTop: '2px' }}>
              Kaushambi, Ghaziabad, Uttar Pradesh
            </p>
          </div>
        </div>

        {/* Map Information & Buttons */}
        <div style={{ padding: '28px', textAlign: 'center' }}>
          <p style={{
            fontSize: '0.95rem',
            color: '#faf5eb',
            lineHeight: '1.6',
            maxWidth: '650px',
            margin: '0 auto 24px'
          }}>
            The Park Crown Banquet is located conveniently near Kaushambi Metro Station. Valet parking assistance is available at the main entrance. Your presence will make our day complete ❤
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href={googleMapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
              style={{ textDecoration: 'none' }}
            >
              <Navigation size={18} /> Open Google Maps Directions
            </a>

            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                padding: '14px 28px',
                borderRadius: '50px',
                border: '2px solid #d4af37',
                color: '#fcf6ba',
                fontSize: '0.95rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                background: 'rgba(212, 175, 55, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Compass size={18} color="#d4af37" /> Open Apple Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
