'use client';
import { Phone, Calendar, MapPin } from 'lucide-react';

export default function Tour() {
  return (
    <section id="tour" style={{ background: 'linear-gradient(135deg,#0D1B2A 0%,#1E3450 100%)', padding: '80px 0' }} aria-labelledby="tour-heading">
      <div className="page-container" style={{ textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: 'rgba(201,150,74,0.15)', border: '1px solid rgba(201,150,74,0.4)', color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 20px', borderRadius: '999px', marginBottom: '24px' }}>
          Book a Visit
        </span>
        <h2 id="tour-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '20px', lineHeight: 1.2 }}>
          Experience Castle Grande<br /><span style={{ color: '#C9964A' }}>In Person</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '40px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          Walk through the community, explore the villas, and feel the Castle Grande difference. Our team is ready 7 days a week.
        </p>

        {/* Info pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '40px' }}>
          {[
            { icon: <Calendar size={15} />, text: 'Mon – Sun: 9 AM – 6 PM' },
            { icon: <MapPin size={15} />,   text: 'Vattamalaipalayam, MTP Road' },
            { icon: <Phone size={15} />,    text: '+91 95854 48000' },
          ].map(pill => (
            <div key={pill.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', fontSize: '13px', padding: '10px 18px', borderRadius: '999px' }}>
              <span style={{ color: '#C9964A' }}>{pill.icon}</span>{pill.text}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a href="#contact" id="tour-schedule-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#C9964A', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '16px 36px', borderRadius: '999px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(201,150,74,0.4)', transition: 'background 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background='#A87A38'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#C9964A'; e.currentTarget.style.transform='translateY(0)'; }}>
            <Calendar size={18} /> Schedule a Site Visit
          </a>
          <a href="tel:+919585448000" id="tour-call-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '2px solid rgba(255,255,255,0.35)', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '16px 32px', borderRadius: '999px', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#C9964A'; e.currentTarget.style.color='#C9964A'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.35)'; e.currentTarget.style.color='#fff'; }}>
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
