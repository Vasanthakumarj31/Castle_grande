'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  { src: '/brochure.jpg',          alt: 'Castle Grande premium community — luxury villas at Coimbatore',          label: 'Community Overview' },
  { src: '/vellakinar-layout.png', alt: 'Vellakinar Layout aerial view with temple and amenities',                label: 'Community Layout' },
  { src: '/office-room.png',       alt: 'Castle Grande site office room building exterior',                       label: 'Site Office' },
  { src: '/real-entrance.png',     alt: 'Castle Grande grand entrance gate — gated community Coimbatore',         label: 'Grand Entrance' },
];

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const prev  = useCallback(() => setIdx(i => i === null ? 0 : (i - 1 + items.length) % items.length), []);
  const next  = useCallback(() => setIdx(i => i === null ? 0 : (i + 1) % items.length), []);

  return (
    <section id="gallery" style={{ background: '#F8F5F0', padding: '80px 0' }} aria-labelledby="gallery-heading">
      <div className="page-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Visual Journey
          </span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="gallery-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0D1B2A' }}>
            Gallery
          </h2>
          <p style={{ color: '#6B7280', marginTop: '12px', fontSize: '14px', maxWidth: '400px', margin: '12px auto 0', lineHeight: 1.7 }}>
            A glimpse into the Castle Grande lifestyle. Click any image to view full screen.
          </p>
        </div>

        {/* Masonry-style grid — 2 cols top, 2 cols bottom */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {items.map((item, i) => (
            <button
              key={item.src}
              id={`gallery-item-${i}`}
              onClick={() => setIdx(i)}
              aria-label={`View ${item.label} fullscreen`}
              style={{
                position: 'relative', borderRadius: '16px', overflow: 'hidden',
                border: 'none', padding: 0, cursor: 'pointer', display: 'block',
                boxShadow: '0 4px 20px rgba(13,27,42,0.1)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(13,27,42,0.2)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.transform='translateY(0)'; el.style.boxShadow='0 4px 20px rgba(13,27,42,0.1)'; }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={400}
                style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
              />

              {/* Hover overlay with zoom icon */}
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(13,27,42,0)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: '8px', transition: 'background 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(13,27,42,0.55)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(13,27,42,0)')}>
                <ZoomIn size={28} style={{ color: '#fff', opacity: 0 }} />
              </div>

              {/* Label badge */}
              <div style={{
                position: 'absolute', bottom: '12px', left: '12px',
                background: 'rgba(13,27,42,0.72)', backdropFilter: 'blur(4px)',
                color: '#fff', fontSize: '12px', fontWeight: 600,
                padding: '5px 14px', borderRadius: '999px',
              }}>
                {item.label}
              </div>
            </button>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '32px', color: '#C9964A', fontSize: '14px', fontWeight: 500 }}>
          More photos &amp; 3D walkthrough available —{' '}
          <a href="#contact" style={{ color: '#C9964A', textDecoration: 'underline', fontWeight: 600 }}>
            request a brochure
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {idx !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <button onClick={close} aria-label="Close lightbox"
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10 }}>
            <X size={32} />
          </button>
          <button onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous image"
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10, padding: '12px', borderRadius: '50%' }}>
            <ChevronLeft size={32} />
          </button>

          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', width: '960px', margin: '0 24px' }}>
            <Image
              src={items[idx].src}
              alt={items[idx].alt}
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', borderRadius: '14px', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
            />
            <p style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center', marginTop: '14px', fontSize: '14px', fontWeight: 500 }}>
              {items[idx].label}
            </p>
          </div>

          <button onClick={e => { e.stopPropagation(); next(); }} aria-label="Next image"
            style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10, padding: '12px', borderRadius: '50%' }}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
