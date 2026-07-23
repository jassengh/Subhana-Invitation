import React from 'react';
import { BookOpen, Heart, Sparkles } from 'lucide-react';

export const QuranNikahLines = () => {
  const verses = [
    {
      arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
      translation: '“And among His signs is that He created for you mates from among yourselves that you may find tranquility in them; and He placed between you affection and mercy. Indeed, in that are signs for people who reflect.”',
      reference: 'Qur’an 30:21 (Surah Ar-Rum)',
      icon: '🕊️'
    },
    {
      arabic: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
      translation: '“And We created you in pairs”',
      reference: 'Qur’an 78:8 (Surah An-Naba)',
      icon: '✨'
    },
    {
      arabic: 'هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ',
      translation: '“They are your garments and you are their garments.”',
      reference: 'Qur’an 2:187 (Surah Al-Baqarah)',
      icon: '📜'
    },
    {
      arabic: 'إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ',
      translation: '“Indeed, Allah loves those who put their trust in Him.”',
      reference: 'Qur’an 3:159 (Surah Ali ’Imran)',
      icon: '🌙'
    }
  ];

  return (
    <section id="nikah-verses" style={{
      padding: '80px 20px',
      maxWidth: '1000px',
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
          <BookOpen size={16} /> Sacred Verses & Sunnah <BookOpen size={16} />
        </div>
        <h2 className="font-heading gold-text" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
          Sacred Quranic Verses on Nikah
        </h2>
        <p className="font-calligraphy" style={{ fontSize: '1.6rem', color: '#e8c39e', marginTop: '4px' }}>
          In the Name of Allah, the Most Compassionate, the Most Merciful
        </p>
      </div>

      {/* Grid of Quranic Verses Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {verses.map((item, idx) => (
          <div key={idx} className="glass-card" style={{
            padding: '28px 24px',
            borderRadius: '24px',
            position: 'relative',
            textAlign: 'center',
            border: '2px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
          }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '10px' }}>
              {item.icon}
            </div>

            {/* Arabic Calligraphy Verse */}
            <div className="font-heading" style={{
              fontSize: '1.35rem',
              color: '#fcf6ba',
              lineHeight: '1.8',
              marginBottom: '14px',
              direction: 'rtl'
            }}>
              {item.arabic}
            </div>

            {/* English Translation */}
            <p style={{
              fontSize: '0.95rem',
              color: '#faf5eb',
              lineHeight: '1.6',
              fontStyle: 'italic',
              marginBottom: '14px'
            }}>
              {item.translation}
            </p>

            {/* Reference Badge */}
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              background: 'rgba(212, 175, 55, 0.18)',
              color: '#d4af37',
              padding: '4px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              display: 'inline-block'
            }}>
              {item.reference}
            </span>
          </div>
        ))}
      </div>

      {/* Hadith Wedding Blessing Banner */}
      <div className="parchment-card" style={{
        marginTop: '40px',
        padding: '32px 24px',
        textAlign: 'center',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
      }}>
        <span style={{
          fontSize: '0.8rem',
          color: '#8c7377',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: '700',
          display: 'block',
          marginBottom: '10px'
        }}>
          ✨ Prophetic Wedding Supplication (Hadith) ✨
        </span>

        <div className="font-heading" style={{
          fontSize: '1.9rem',
          color: '#59101d',
          fontWeight: '700',
          marginBottom: '8px'
        }}>
          بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </div>

        <div style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#70060e', marginBottom: '8px', fontWeight: '600' }}>
          Bārakallāhu laka, wa bāraka 'alayka, wa jama'a baynakumā fī khayr.
        </div>

        <p style={{
          fontSize: '1.05rem',
          color: '#2c1a1d',
          lineHeight: '1.5',
          maxWidth: '650px',
          margin: '0 auto'
        }}>
          “May Allah bless you, shower His blessings upon you, and unite you both in goodness.”
        </p>
      </div>

      {/* Du'a Request Banner */}
      <div className="glass-card" style={{
        marginTop: '30px',
        padding: '30px 24px',
        textAlign: 'center',
        borderRadius: '24px',
        border: '2px solid rgba(212,175,55,0.5)'
      }}>
        <h3 className="font-heading gold-text" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
          “Please Remember Us in Your Du’as”
        </h3>

        <p style={{
          fontSize: '1rem',
          color: '#faf5eb',
          lineHeight: '1.7',
          maxWidth: '700px',
          margin: '0 auto 10px',
          fontStyle: 'italic'
        }}>
          “We humbly request your prayers that Allah (SWT) bless our marriage with faith, love, mercy, patience, and everlasting happiness, and make our home a place of peace and barakah. Āmīn.”
        </p>
      </div>
    </section>
  );
};
