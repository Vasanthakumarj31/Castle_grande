'use client';
import { ShieldCheck, MapPin, Star, Home, TrendingUp, Lock } from 'lucide-react';

const reasons = [
  { icon: <ShieldCheck size={26} />, title: 'DTCP & RERA Approved',      desc: 'Full legal compliance — DTCP No. 431/2025 & RERA No. 1143/2026. Zero risk, 100% peace of mind.' },
  { icon: <MapPin size={26} />,      title: 'Prime MTP Road Location',    desc: "In the heart of Coimbatore's fastest-growing real estate corridor, steps from top institutions." },
  { icon: <Star size={26} />,        title: '20+ Modern Amenities',       desc: 'Security, greenery, temple, solar fencing and more — all included for complete comfort.' },
  { icon: <TrendingUp size={26} />,  title: 'High-Growth Corridor',       desc: 'Property values on MTP Road have shown strong year-on-year appreciation.' },
  { icon: <Lock size={26} />,        title: 'Gated Community',            desc: '24/7 security, CCTV surveillance, and solar electric fencing for a truly secure environment.' },
];

export default function WhyBuy() {
  return (
    <section id="why-buy" style={{ background: '#F8F5F0', padding: '80px 0' }} aria-labelledby="why-buy-heading">
      <div className="page-container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>Why Castle Grande?</span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="why-buy-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2 }}>
            Five Compelling Reasons<br /><span style={{ color: '#C9964A' }}>to Invest Today</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
          {reasons.map((r, i) => (
            <div key={r.title}
              style={{ background: '#fff', borderRadius: '16px', padding: '32px 28px', border: '1px solid #E8E0D5', boxShadow: '0 4px 20px rgba(13,27,42,0.07)', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s', position: 'relative', overflow: 'hidden', cursor: 'default' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 12px 40px rgba(13,27,42,0.13)'; el.style.borderColor='rgba(201,150,74,0.4)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform='translateY(0)'; el.style.boxShadow='0 4px 20px rgba(13,27,42,0.07)'; el.style.borderColor='#E8E0D5'; }}>
              {/* Watermark number */}
              <div aria-hidden="true" style={{ position: 'absolute', top: '12px', right: '16px', fontFamily: 'var(--font-serif)', fontSize: '3.5rem', fontWeight: 900, color: 'rgba(201,150,74,0.08)', lineHeight: 1 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ color: '#C9964A', marginBottom: '18px' }}>{r.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#0D1B2A', fontWeight: 700, fontSize: '1.05rem', marginBottom: '10px' }}>{r.title}</h3>
              <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: 1.7 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
