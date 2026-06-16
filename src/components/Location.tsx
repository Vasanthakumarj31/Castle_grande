'use client';
import { MapPin, ExternalLink } from 'lucide-react';

const landmarks = [
  { cat: 'Schools',    items: ['Coimbatore Public School','Amrita Vidyalayam','Manchester International School','Velammal Bodhi Campus'] },
  { cat: 'Colleges',   items: ['SNS / KGiSL & Kumaraguru Institutions','Ramakrishna Eng. College','Ganga Nursing College'] },
  { cat: 'Healthcare', items: ['V.G Hospital & Healthcare Centers'] },
  { cat: 'Business',   items: ['KGiSL SEZ IT Park & Industrial Hubs'] },
  { cat: 'Lifestyle',  items: ['Shopping Malls & Entertainment Centers','Major Highway Connections'] },
];

export default function Location() {
  return (
    <section id="location" style={{ background: '#F8F5F0', padding: '80px 0' }} aria-labelledby="location-heading">
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>Location Advantage</span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="location-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2 }}>
            Vattamalaipalayam,<br /><span style={{ color: '#C9964A' }}>MTP Road, Coimbatore</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="loc-grid">
          {/* Map */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(13,27,42,0.12)', border: '2px solid rgba(201,150,74,0.2)' }}>
            <iframe title="Castle Grande Location" src="https://maps.google.com/maps?q=Vattamalaipalayam+MTP+Road+Coimbatore&output=embed&z=14" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ display: 'block', border: 'none' }} />
          </div>

          {/* Info cards row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
            {/* Address */}
            <div style={{ background: '#0D1B2A', borderRadius: '16px', padding: '28px', color: '#fff', boxShadow: '0 8px 32px rgba(13,27,42,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
                <MapPin size={20} style={{ color: '#C9964A', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>Project Location</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.6 }}>Vattamalaipalayam, MTP Road,<br />Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginBottom: '20px' }}>
                {[['DTCP','Approved — No. 431/2025'],['RERA','Approved — No. 1143/2026']].map(([key,val]) => (
                  <div key={key} style={{ display: 'flex', gap: '12px', marginBottom: '8px', fontSize: '13px' }}>
                    <span style={{ color: '#C9964A', fontWeight: 700, minWidth: '36px' }}>{key}</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>{val}</span>
                  </div>
                ))}
              </div>
              <a href="https://maps.app.goo.gl/HZRLSNgwQaDT69Fy8" target="_blank" rel="noopener noreferrer" id="open-maps-btn"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#C9964A', color: '#fff', fontWeight: 700, padding: '12px', borderRadius: '999px', textDecoration: 'none', fontSize: '14px', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background='#A87A38')}
                onMouseLeave={e => (e.currentTarget.style.background='#C9964A')}>
                <ExternalLink size={14} /> Open in Google Maps
              </a>
            </div>

            {/* Landmarks */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid #E8E0D5', boxShadow: '0 4px 20px rgba(13,27,42,0.07)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: '#0D1B2A', fontWeight: 700, fontSize: '1.05rem', marginBottom: '20px' }}>📍 Nearby Landmarks</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {landmarks.map((group) => (
                  <div key={group.cat}>
                    <div style={{ color: '#C9964A', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '6px' }}>{group.cat}</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {group.items.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#2C3E50' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9964A', flexShrink: 0 }} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
