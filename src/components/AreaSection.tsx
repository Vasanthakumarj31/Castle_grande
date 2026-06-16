'use client';

const stats = [
  { value: '// TODO:', unit: '%', label: 'Property Appreciation', sub: 'YoY growth rate on MTP Road' },
  { value: '// TODO:', unit: 'L+', label: 'Metro Population',     sub: 'Greater Coimbatore urban area' },
  { value: '// TODO:', unit: '+',  label: 'IT Companies',          sub: 'Operating in the Coimbatore tech hub' },
  { value: '// TODO:', unit: '',   label: 'Highway Connectivity',  sub: 'NH & state highway access' },
];

export default function AreaSection() {
  return (
    <section id="area" style={{ background: '#fff', padding: '80px 0' }} aria-labelledby="area-heading">
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>About the Area</span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="area-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2 }}>
            Coimbatore —<br /><span style={{ color: '#C9964A' }}>The Manchester of South India</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '56px', alignItems: 'start' }}>
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{ fontSize: '1.05rem', color: '#2C3E50', lineHeight: 1.8 }}>
              Coimbatore is Tamil Nadu&apos;s second-largest city and one of South India&apos;s most dynamic economic engines, renowned as the &quot;Manchester of South India&quot; for its thriving textile and manufacturing industries.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.8 }}>
              The <strong style={{ color: '#0D1B2A' }}>MTP Road growth corridor</strong> is today one of Coimbatore&apos;s most sought-after investment zones. With rapid infrastructure development, expanding IT parks, and prestigious educational institutions clustering along this stretch, property values have seen sustained appreciation year after year.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.8 }}>
              Vattamalaipalayam sits at the heart of this corridor — well-connected to the city centre, airport, and NH-544, while still offering the calm, greenery, and space of a suburban township.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
              <span style={{ display: 'block', width: '40px', height: '3px', background: 'linear-gradient(90deg,#C9964A,#DEB06A)', borderRadius: '2px' }} aria-hidden="true" />
              <span style={{ color: '#C9964A', fontWeight: 600, fontSize: '14px', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>&ldquo;Tomorrow&apos;s homes today!&rdquo; — Castle Realty</span>
            </div>
          </div>

          {/* Stat grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {stats.map((s) => (
              <div key={s.label}
                style={{ background: '#0D1B2A', borderRadius: '16px', padding: '28px 20px', color: '#fff', boxShadow: '0 6px 24px rgba(13,27,42,0.14)', transition: 'transform 0.25s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform='translateY(0)'}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 800, color: '#C9964A', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', opacity: 0.5 }}>{s.value}</span>{s.unit}
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: 1.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
