'use client';

import { Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Location', href: '#location' },
  { label: 'Area',     href: '#area' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Tour',     href: '#tour' },
  { label: 'Why Buy',  href: '#why-buy' },
  { label: 'Contact',  href: '#contact' },
];

function CrownSVG() {
  return (
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M6 26L8 14L14 20L18 10L22 20L28 14L30 26H6Z" fill="#C9964A" />
      <circle cx="6"  cy="14" r="2.2" fill="#C9964A" />
      <circle cx="18" cy="10" r="2.2" fill="#C9964A" />
      <circle cx="30" cy="14" r="2.2" fill="#C9964A" />
      <rect x="6" y="26" width="24" height="2.5" rx="1.25" fill="#C9964A" opacity="0.7" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <>
      {/* Scoped responsive CSS */}
      <style>{`
        #cg-nav-links { display: none; }
        #cg-call-full { display: none; }
        #cg-call-mobile { display: flex; }
        @media (min-width: 1024px) {
          #cg-nav-links   { display: flex; }
          #cg-call-full   { display: flex; }
          #cg-call-mobile { display: none; }
        }
      `}</style>

      <header
        role="banner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: '#0D1B2A',
          boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
          padding: '12px 0',
        }}
      >
        <div className="page-container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>

          {/* Logo */}
          <a href="#hero" aria-label="Castle Grande Home"
            style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none', flexShrink: 0 }}>
            <CrownSVG />
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontWeight: 700, fontSize: 'clamp(0.72rem,2.5vw,1rem)', letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>
                CASTLE GRANDE
              </div>
              <div style={{ color: '#C9964A', fontSize: 'clamp(7px,1.2vw,8.5px)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, whiteSpace: 'nowrap' }}>
                Luxury Villas &amp; Plots
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="cg-nav-links"
            style={{ alignItems: 'center', gap: '22px', flex: 1, justifyContent: 'center' }}
            aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9964A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Desktop "Call Now" pill */}
          <a href="tel:+919585448000" id="cg-call-full"
            style={{ alignItems: 'center', gap: '7px', background: '#C9964A', color: '#fff', fontWeight: 700, fontSize: '0.82rem', padding: '9px 18px', borderRadius: '999px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background 0.2s', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.background = '#A87A38')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C9964A')}>
            <Phone size={13} style={{ marginRight: '4px' }} /> Call Now
          </a>

          {/* Mobile: compact call icon button (no hamburger) */}
          <a href="tel:+919585448000" id="cg-call-mobile"
            aria-label="Call Castle Grande"
            style={{ alignItems: 'center', justifyContent: 'center', background: '#C9964A', color: '#fff', width: '38px', height: '38px', borderRadius: '50%', textDecoration: 'none', flexShrink: 0, boxShadow: '0 2px 12px rgba(201,150,74,0.4)' }}>
            <Phone size={17} />
          </a>

        </div>
      </header>
    </>
  );
}
