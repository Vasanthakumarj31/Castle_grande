'use client';
import { Phone, MapPin } from 'lucide-react';

function CrownSVG() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M6 26L8 14L14 20L18 10L22 20L28 14L30 26H6Z" fill="#C9964A" />
      <circle cx="6"  cy="14" r="2.2" fill="#C9964A" />
      <circle cx="18" cy="10" r="2.2" fill="#C9964A" />
      <circle cx="30" cy="14" r="2.2" fill="#C9964A" />
      <rect x="6" y="26" width="24" height="2.5" rx="1.25" fill="#C9964A" opacity="0.7" />
    </svg>
  );
}

const quickLinks = [
  ['Overview','#overview'],['Location','#location'],['About the Area','#area'],
  ['Gallery','#gallery'],['Tour','#tour'],['Why Buy','#why-buy'],['Contact Us','#contact'],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#0D1B2A', color: '#fff', paddingTop: '60px', paddingBottom: '24px' }} role="contentinfo">
      <div className="page-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '40px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <CrownSVG />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.14em' }}>CASTLE GRANDE</div>
                <div style={{ color: '#C9964A', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>Premium Community Luxury Villas &amp; Plots</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.8, marginBottom: '12px' }}>
              A flagship project by Castle Realty — bringing tomorrow&apos;s homes to Coimbatore&apos;s finest corridor today.
            </p>
            <span style={{ color: '#C9964A', fontStyle: 'italic', fontSize: '14px', fontFamily: 'var(--font-serif)' }}>
              &ldquo;Tomorrow&apos;s homes today!&rdquo;
            </span>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color='#C9964A')}
                    onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.5)')}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '18px' }}>Reach Us</h3>
            <a href="tel:+919585448000" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '14px' }}>
              <Phone size={14} style={{ color: '#C9964A' }} /> +91 95854 48000
            </a>
            <a href="https://maps.app.goo.gl/HZRLSNgwQaDT69Fy8" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.6, marginBottom: '18px' }}>
              <MapPin size={14} style={{ color: '#C9964A', flexShrink: 0, marginTop: '2px' }} />
              Vattamalaipalayam, MTP Road, Coimbatore
            </a>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['DTCP No. 431/2025','RERA No. 1143/2026'].map(b => (
                <span key={b} style={{ fontSize: '10px', fontWeight: 700, color: '#C9964A', border: '1px solid rgba(201,150,74,0.3)', padding: '4px 10px', borderRadius: '999px' }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(201,150,74,0.4),transparent)', marginBottom: '22px' }} aria-hidden="true" />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
          <span>© {year} Castle Realty. All rights reserved.</span>
          <span>DTCP No. 431/2025 &nbsp;|&nbsp; RERA No. 1143/2026</span>
        </div>
      </div>
    </footer>
  );
}
