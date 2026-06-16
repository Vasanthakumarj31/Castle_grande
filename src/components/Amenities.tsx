'use client';
import { Home, Shield, Camera, Flame, Zap, Leaf } from 'lucide-react';

const amenities = [
  { icon: <Home size={30} />,   label: 'Premium Villas & Plots',   desc: 'Thoughtfully designed homes and investment-grade plots.' },
  { icon: <Shield size={30} />, label: '24/7 Security',             desc: 'Round-the-clock professional security personnel.' },
  { icon: <Camera size={30} />, label: 'CCTV Live Tracking',        desc: 'Comprehensive surveillance for complete peace of mind.' },
  { icon: <Flame size={30} />,  label: 'Vinayagar Temple',          desc: 'Sacred community temple within the gated premises.' },
  { icon: <Zap size={30} />,    label: 'Solar Electric Fencing',    desc: 'Advanced perimeter security with solar-powered fencing.' },
  { icon: <Leaf size={30} />,   label: 'Lush Green Environment',    desc: 'Beautifully landscaped greens and open spaces.' },
];

export default function Amenities() {
  return (
    <section id="amenities" style={{ background: 'linear-gradient(180deg,#0D1B2A 0%,#162435 100%)', padding: '80px 0' }} aria-labelledby="amenities-heading">
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            World-Class Facilities
          </span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="amenities-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
            20+ Modern <span style={{ color: '#C9964A' }}>Amenities</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '16px', fontSize: '0.95rem', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.7 }}>
            Every convenience curated for a life of ease, security, and serenity.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
          {amenities.map((item) => (
            <div key={item.label}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '36px 28px', transition: 'background 0.25s, border-color 0.25s, transform 0.25s', cursor: 'default' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background='rgba(255,255,255,0.1)'; el.style.borderColor='rgba(201,150,74,0.5)'; el.style.transform='translateY(-4px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background='rgba(255,255,255,0.05)'; el.style.borderColor='rgba(255,255,255,0.1)'; el.style.transform='translateY(0)'; }}>
              <div style={{ color: '#C9964A', marginBottom: '18px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px' }}>{item.label}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
