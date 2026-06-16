'use client';
import { Phone, Crown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
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

      <div className="page-container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '2.5rem', paddingBottom: '4rem' }}>

        <style>{`
          .hero-grid { display: grid; gap: 3rem; align-items: center; grid-template-columns: repeat(2, 1fr); }
          .hero-call-label { display: inline; }
          .hero-img-container { margin-top: 0; }
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
            .hero-call-label { display: none; }
            .hero-img-container { margin-top: 1rem; }
          }
        `}</style>

        {/* Two-column grid — collapses via CSS hero-grid class */}
        <div className="hero-grid animate-fade-up">

          {/* ── LEFT: Copy ── */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              border: '1px solid rgba(201,150,74,0.4)', color: '#C9964A',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', padding: '7px 16px', borderRadius: '999px',
              marginBottom: '22px', background: 'rgba(201,150,74,0.07)',
            }}>
              <Crown size={12} /> Castle Realty Presents
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem,5vw,4rem)',
              fontWeight: 800, lineHeight: 1.1, marginBottom: '20px',
            }}>
              <span style={{ color: '#fff' }}>A Perfect Home,</span><br />
              <span style={{ color: '#C9964A' }}>Within Reach.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 'clamp(0.875rem,2vw,1rem)', lineHeight: 1.75, marginBottom: '28px', maxWidth: '460px' }}>
              Castle Grande — premium community villas and DTCP &amp; RERA approved residential plots at
              Vattamalaipalayam, MTP Road, Coimbatore. Live better. Invest wiser.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              <a href="#contact" id="hero-cta-visit"
                style={{ background: '#C9964A', color: '#fff', fontWeight: 700, fontSize: 'clamp(0.82rem,2vw,0.95rem)', padding: '13px 26px', borderRadius: '999px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(201,150,74,0.35)', transition: 'background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background='#A87A38'; }}
                onMouseLeave={e => { e.currentTarget.style.background='#C9964A'; }}>
                Schedule a Site Visit
              </a>
              <a href="tel:+919585448000" id="hero-cta-call"
                style={{ display: 'flex', alignItems: 'center', gap: '7px', border: '2px solid rgba(255,255,255,0.35)', color: '#fff', fontWeight: 700, fontSize: 'clamp(0.82rem,2vw,0.95rem)', padding: '13px 20px', borderRadius: '999px', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='#C9964A'; e.currentTarget.style.color='#C9964A'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.35)'; e.currentTarget.style.color='#fff'; }}>
                <Phone size={14} />
                <span>Call</span>
                <span className="hero-call-label"> +91 95854 48000</span>
              </a>
            </div>

            {/* Approval Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[['✓','DTCP Approved 431/2025'],['✓','RERA Approved 1143/2026'],['★','20+ Modern Amenities']].map(([icon, label]) => (
                <span key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)',
                  color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(10px,1.8vw,12px)', fontWeight: 500,
                  padding: '7px 13px', borderRadius: '999px',
                }}>
                  <span style={{ color: '#C9964A', fontWeight: 800 }}>{icon}</span>{label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero Image (Always visible now, stacks on mobile) ── */}
          <div className="animate-fade-in hero-img-container" style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{
              borderRadius: 'clamp(12px, 3vw, 20px)', overflow: 'hidden',
              border: '2px solid rgba(201,150,74,0.3)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              position: 'relative',
              aspectRatio: '4/3'
            }}>
              <Image
                src="/brochure.jpg"
                alt="Castle Grande Premium Community Luxury Villas at Vattamalaipalayam Coimbatore"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,27,42,0.3) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>

            {/* Floating BHK badge - responsive placement */}
            <div style={{
              position: 'absolute', bottom: '-15px', left: '-5px',
              background: '#fff', borderRadius: '12px', padding: '10px 16px',
              boxShadow: '0 8px 32px rgba(13,27,42,0.2)', border: '1px solid rgba(201,150,74,0.2)',
              zIndex: 2,
            }}>
              <div style={{ color: '#C9964A', fontWeight: 800, fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontFamily: 'var(--font-serif)' }}>3 &amp; 4 BHK</div>
              <div style={{ color: '#2C3E50', fontSize: 'clamp(10px, 1.5vw, 12px)', fontWeight: 600 }}>Premium Community Villas</div>
            </div>

            {/* Limited badge - responsive placement */}
            <div style={{
              position: 'absolute', top: '-10px', right: '-5px',
              background: '#C9964A', borderRadius: '12px', padding: '8px 14px',
              boxShadow: '0 8px 24px rgba(201,150,74,0.5)', zIndex: 2,
            }}>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(10px, 1.5vw, 12px)', textAlign: 'center', letterSpacing: '0.08em' }}>LIMITED</div>
              <div style={{ color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(8px, 1.2vw, 10px)', textAlign: 'center' }}>PREMIUM VILLAS</div>
            </div>
          </div>

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
