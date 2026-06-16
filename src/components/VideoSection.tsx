'use client';

export default function VideoSection() {
  return (
    <section id="video" style={{ background: '#0D1B2A', padding: '80px 0' }} aria-labelledby="video-heading">
      <div className="page-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Experience Castle Grande
          </span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="video-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#fff' }}>
            Project Walkthrough
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px', fontSize: '14px', maxWidth: '500px', margin: '12px auto 0', lineHeight: 1.7 }}>
            Take a virtual tour of our premium community luxury villas and plots. See the quality and lifestyle that awaits you.
          </p>
        </div>

        {/* Video Player */}
        <div style={{ 
          width: '100%',
          maxWidth: '1000px', 
          margin: '0 auto', 
          borderRadius: 'clamp(12px, 3vw, 20px)', 
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
          border: '1px solid rgba(201,150,74,0.3)',
          background: '#000',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <video 
            controls 
            preload="metadata"
            style={{ 
              width: '100%', 
              maxHeight: '80vh',
              objectFit: 'contain',
              display: 'block', 
              outline: 'none' 
            }}
            poster="/real-entrance.png"
          >
            <source src="/castleGrand_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}
