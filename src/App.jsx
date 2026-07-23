import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { EnvelopeGate } from './components/EnvelopeGate';
import { Navbar } from './components/Navbar';
import { ParticleCanvas } from './components/ParticleCanvas';
import { HeroSection } from './components/HeroSection';
import { VideoShowcase } from './components/VideoShowcase';
import { QuranNikahLines } from './components/QuranNikahLines';
import { ScratchHeart } from './components/ScratchHeart';
import { CountdownClock } from './components/CountdownClock';
import { EventTimeline } from './components/EventTimeline';
import { VenueMap } from './components/VenueMap';
import { PhotoGallery } from './components/PhotoGallery';
import { GuestWishes } from './components/GuestWishes';
import { RsvpForm } from './components/RsvpForm';
import { ThankYouFooter } from './components/ThankYouFooter';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [brideName, setBrideName] = useState('Subhana');
  const [groomName, setGroomName] = useState('Saad');
  const [weddingDate, setWeddingDate] = useState('August 8, 2026');
  const [recipientEmail, setRecipientEmail] = useState('navelaindustries@gmail.com');

  const handleNamesUpdate = (newBride, newGroom) => {
    if (newBride) setBrideName(newBride);
    if (newGroom) setGroomName(newGroom);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* 1. Loading Screen */}
      {isLoading && (
        <LoadingScreen
          onComplete={() => setIsLoading(false)}
          brideName={brideName}
          groomName={groomName}
        />
      )}

      {/* 2-6. Interactive Envelope Gate & Welcome Voice Greeting */}
      {!isLoading && !isEnvelopeOpened && (
        <EnvelopeGate
          onOpenComplete={() => setIsEnvelopeOpened(true)}
          brideName={brideName}
          groomName={groomName}
        />
      )}

      {/* Main Interactive Invitation Web App */}
      {isEnvelopeOpened && (
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Floating Gold & Blossom Particles Canvas */}
          <ParticleCanvas />

          {/* Top Navbar & Floating Controls */}
          <Navbar
            brideName={brideName}
            groomName={groomName}
            onUpdateNames={handleNamesUpdate}
            weddingDate={weddingDate}
            onUpdateDate={setWeddingDate}
            recipientEmail={recipientEmail}
            onUpdateEmail={setRecipientEmail}
          />

          {/* Hero Section */}
          <ScrollReveal animation="fade-up" duration={1000}>
            <HeroSection
              brideName={brideName}
              groomName={groomName}
              weddingDate={weddingDate}
            />
          </ScrollReveal>

          {/* Cinematic Video Showcase */}
          <ScrollReveal animation="zoom-in" duration={900}>
            <VideoShowcase />
          </ScrollReveal>

          {/* Sacred Quranic Verses on Nikah */}
          <ScrollReveal animation="fade-up" duration={900}>
            <QuranNikahLines />
          </ScrollReveal>

          {/* Interactive Scratch Heart Reveal */}
          <ScrollReveal animation="zoom-in" duration={900}>
            <ScratchHeart
              brideName={brideName}
              groomName={groomName}
              weddingDate={weddingDate}
            />
          </ScrollReveal>

          {/* Countdown Clock */}
          <ScrollReveal animation="fade-up" duration={900}>
            <CountdownClock targetDate="2026-08-08T20:00:00" />
          </ScrollReveal>

          {/* Events Schedule */}
          <ScrollReveal animation="fade-up" duration={900}>
            <EventTimeline />
          </ScrollReveal>

          {/* Venue Maps */}
          <ScrollReveal animation="zoom-in" duration={900}>
            <VenueMap />
          </ScrollReveal>

          {/* Photo Gallery & Lightbox */}
          <ScrollReveal animation="fade-up" duration={900}>
            <PhotoGallery />
          </ScrollReveal>

          {/* Guest Wishes Wall */}
          <ScrollReveal animation="fade-up" duration={900}>
            <GuestWishes
              brideName={brideName}
              groomName={groomName}
              recipientEmail={recipientEmail}
            />
          </ScrollReveal>

          {/* Interactive RSVP Form */}
          <ScrollReveal animation="zoom-in" duration={900}>
            <RsvpForm
              brideName={brideName}
              groomName={groomName}
              recipientEmail={recipientEmail}
            />
          </ScrollReveal>

          {/* Fireworks & Thank You Footer */}
          <ThankYouFooter
            brideName={brideName}
            groomName={groomName}
          />
        </div>
      )}
    </div>
  );
}
