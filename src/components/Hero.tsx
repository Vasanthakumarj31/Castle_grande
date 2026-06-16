'use client';
import { useState, useEffect } from 'react';
import { Phone, Crown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(135deg,#0D1B2A 0%,#162435 55%,#1E3450 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid bg pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }} aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hg" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 0 0 60" fill="none" stroke="#C9964A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hg)" />
        </svg>
      </div>

      <div className="page-container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '3rem', paddingBottom: isMobile ? '3rem' : '4rem' }}>

        {/* Two-column grid — stacks on mobile */}
        <div className="hero-grid" style={{ display: 'grid', gap: isMobile ? '2rem' : '3rem', alignItems: 'center' }}>

          {/* ── LEFT: Copy ── */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              border: '1px solid rgba(201,150,74,0.4)', color: '#C9964A',
              fontSize: isMobile ? '10px' : '11px', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', padding: isMobile ? '6px 14px' : '8px 18px', borderRadius: '999px',
              marginBottom: '20px', background: 'rgba(201,150,74,0.07)',
            }}>
              <Crown size={isMobile ? 11 : 13} /> Castle Realty Presents
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? 'clamp(2rem,8vw,2.8rem)' : 'clamp(2.4rem,4vw,4rem)',
              fontWeight: 800, lineHeight: 1.1, marginBottom: '20px',
            }}>
              <span style={{ color: '#fff' }}>A Perfect Home,</span><br />
              <span style={{ color: '#C9964A' }}>Within Reach.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: 1.75, marginBottom: '28px', maxWidth: '460px' }}>
              Castle Grande — premium community villas and DTCP &amp; RERA approved residential plots at
              Vattamalaipalayam, MTP Road, Coimbatore. Live better. Invest wiser.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              <a href="#contact" id="hero-cta-visit"
                style={{ background: '#C9964A', color: '#fff', fontWeight: 700, fontSize: isMobile ? '0.85rem' : '0.95rem', padding: isMobile ? '12px 22px' : '14px 30px', borderRadius: '999px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(201,150,74,0.35)', transition: 'background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#A87A38'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C9964A'; }}>
                Schedule a Site Visit
              </a>
              <a href="tel:+919585448000" id="hero-cta-call"
                style={{ display: 'flex', alignItems: 'center', gap: '7px', border: '2px solid rgba(255,255,255,0.35)', color: '#fff', fontWeight: 700, fontSize: isMobile ? '0.85rem' : '0.95rem', padding: isMobile ? '12px 18px' : '14px 26px', borderRadius: '999px', textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9964A'; e.currentTarget.style.color = '#C9964A'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#fff'; }}>
                <Phone size={14} /> {isMobile ? 'Call Now' : 'Call +91 95854 48000'}
              </a>
            </div>

            {/* Approval Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[['✓', 'DTCP Approved 431/2025'], ['✓', 'RERA Approved 1143/2026'], ['★', '20+ Modern Amenities']].map(([icon, label]) => (
                <span key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)',
                  color: 'rgba(255,255,255,0.88)', fontSize: isMobile ? '11px' : '12px', fontWeight: 500,
                  padding: isMobile ? '6px 11px' : '8px 14px', borderRadius: '999px',
                }}>
                  <span style={{ color: '#C9964A', fontWeight: 800 }}>{icon}</span>{label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero Image (hidden on mobile to save space) ── */}
          {!isMobile && (
            <div style={{ position: 'relative' }} className="animate-fade-in">
              <div style={{
                borderRadius: '20px', overflow: 'hidden',
                border: '2px solid rgba(201,150,74,0.3)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              }}>
                <Image
                  src="/brochure.jpg"
                  alt="Castle Grande Premium Community Luxury Villas at Vattamalaipalayam Coimbatore"
                  width={680}
                  height={480}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,27,42,0.3) 0%, transparent 60%)', pointerEvents: 'none' }} />
              </div>

              {/* Floating BHK badge */}
              <div style={{
                position: 'absolute', bottom: '-18px', left: '-14px',
                background: '#fff', borderRadius: '14px', padding: '14px 20px',
                boxShadow: '0 8px 32px rgba(13,27,42,0.2)', border: '1px solid rgba(201,150,74,0.2)',
              }}>
                <div style={{ color: '#C9964A', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>3 &amp; 4 BHK</div>
                <div style={{ color: '#2C3E50', fontSize: '12px', fontWeight: 600 }}>Premium Community Villas</div>
              </div>

              {/* Limited badge */}
              <div style={{
                position: 'absolute', top: '-14px', right: '-14px',
                background: '#C9964A', borderRadius: '14px', padding: '12px 18px',
                boxShadow: '0 8px 24px rgba(201,150,74,0.5)',
              }}>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '12px', textAlign: 'center', letterSpacing: '0.08em' }}>LIMITED</div>
                <div style={{ color: 'rgba(255,255,255,0.88)', fontSize: '10px', textAlign: 'center' }}>PREMIUM VILLAS</div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', display: 'block' }}>
          <path d="M0 60L1440 60L1440 30C1200 60 800 0 500 30C300 50 100 20 0 30Z" fill="#F8F5F0" />
        </svg>
      </div>
    </section>
  );
}
