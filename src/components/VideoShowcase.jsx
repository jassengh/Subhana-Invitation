import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Sparkles } from 'lucide-react';

export const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video" style={{
      padding: '80px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
          <Film size={16} /> Cinematic Highlights <Film size={16} />
        </div>

        <h2 className="font-heading gold-text" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
          Our Love Story Video
        </h2>
        <p className="font-calligraphy" style={{ fontSize: '1.6rem', color: '#e8c39e', marginTop: '4px' }}>
          A glimpse into our journey together
        </p>
      </div>

      {/* Luxury Gold Frame Video Container */}
      <div className="glass-card" style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.25)',
        border: '2px solid rgba(212, 175, 55, 0.6)'
      }}>
        {/* HTML5 Video Element */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000' }}>
          <video
            ref={videoRef}
            poster="/proposal_moment.png"
            loop
            playsInline
            muted={isMuted}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-looking-at-each-other-in-the-sunset-41487-large.mp4"
          />

          {/* Center Big Play Overlay Button (when paused) */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="pulse-glow"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.9)',
                border: '2px solid #fff',
                color: '#2b070d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                zIndex: 5
              }}
            >
              <Play size={36} fill="#2b070d" style={{ marginLeft: '4px' }} />
            </button>
          )}

          {/* Video Control Bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px 20px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#fff',
            zIndex: 6
          }}>
            <button
              onClick={togglePlay}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fcf6ba',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              <span>{isPlaying ? 'Pause Video' : 'Play Video'}</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={toggleMute}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fcf6ba',
                  cursor: 'pointer'
                }}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              <button
                onClick={handleFullscreen}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fcf6ba',
                  cursor: 'pointer'
                }}
              >
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
