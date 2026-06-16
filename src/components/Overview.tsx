'use client';
import { Ruler, ShieldCheck, Home, Sparkles } from 'lucide-react';

const cards = [
  { icon: <Ruler size={26} />,      label: 'Plot Sizes',    value: 'Various Sizes',  detail: 'Flexible configurations to suit your dream home vision', highlight: false },
  { icon: <ShieldCheck size={26} />, label: 'Approvals',    value: 'DTCP & RERA',    detail: 'DTCP No. 431/2025  ·  RERA No. 1143/2026', highlight: false },
  { icon: <Home size={26} />,        label: 'Configuration', value: '3 & 4 BHK',     detail: 'Premium Community Villas', highlight: true },
  { icon: <Sparkles size={26} />,    label: 'Amenities',     value: '20+ Modern',     detail: 'State-of-the-art facilities for elevated community living', highlight: false },
];

export default function Overview() {
  return (
    <section id="overview" style={{ background: '#F8F5F0', padding: '80px 0' }} aria-labelledby="overview-heading">
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Property Overview
          </span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="overview-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2 }}>
            A community designed for<br />
            <em style={{ fontStyle: 'normal', color: '#C9964A' }}>premium living</em>
          </h2>
          <p style={{ color: '#6B7280', marginTop: '16px', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Every aspect of Castle Grande is crafted to deliver luxury, comfort, and lasting value in Coimbatore&apos;s fastest-growing corridor.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '24px' }}>
          {cards.map((card) => (
            <div key={card.label} style={{
              background: card.highlight ? '#0D1B2A' : '#fff',
              borderRadius: '16px', padding: '32px 28px',
              border: card.highlight ? '2px solid #C9964A' : '1px solid #E8E0D5',
              boxShadow: '0 4px 20px rgba(13,27,42,0.08)',
              transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'default', position: 'relative',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(13,27,42,0.15)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(13,27,42,0.08)'; }}>
              {card.highlight && <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#C9964A', color: '#fff', fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', padding: '3px 8px', borderRadius: '999px' }}>FEATURED</div>}
              <div style={{ color: '#C9964A', marginBottom: '16px' }}>{card.icon}</div>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: card.highlight ? 'rgba(201,150,74,0.7)' : '#9CA3AF', marginBottom: '6px' }}>{card.label}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 800, color: card.highlight ? '#fff' : '#0D1B2A', marginBottom: '8px' }}>{card.value}</div>
              <div style={{ fontSize: '13px', lineHeight: 1.6, color: card.highlight ? '#C9964A' : '#6B7280', fontWeight: card.highlight ? 600 : 400 }}>{card.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
