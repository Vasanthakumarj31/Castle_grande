'use client';
import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const categories = ['All', 'Overview', 'Layout', 'Site Progress'];

const items = [
  { src: '/brochure.jpg', alt: 'Castle Grande premium community', label: 'Community Overview', category: 'Overview', className: 'md:col-span-2 md:row-span-2' },
  { src: '/site-3.jpeg', alt: 'Real-time site progress', label: 'Site Construction', category: 'Site Progress', className: 'md:col-span-2 md:row-span-1' },
  { src: '/vellakinar-layout.png', alt: 'Vellakinar Layout aerial view', label: 'Community Layout', category: 'Layout', className: 'md:col-span-1 md:row-span-1' },
  { src: '/office-room.png', alt: 'Castle Grande site office', label: 'Site Office', category: 'Overview', className: 'md:col-span-1 md:row-span-1' },
  { src: '/real-entrance.png', alt: 'Castle Grande entrance gate', label: 'Grand Entrance', category: 'Overview', className: 'md:col-span-1 md:row-span-1' },
  { src: '/site-1.jpeg', alt: 'Real-time site progress', label: 'Site Progress', category: 'Site Progress', className: 'md:col-span-1 md:row-span-1' },
  { src: '/site-2.jpeg', alt: 'Real-time site progress', label: 'Site Progress', category: 'Site Progress', className: 'md:col-span-1 md:row-span-1' },
  { src: '/site-4.jpeg', alt: 'Real-time site progress', label: 'Site Progress', category: 'Site Progress', className: 'md:col-span-1 md:row-span-1' },
  { src: '/site-5.jpeg', alt: 'Real-time site progress', label: 'Site Progress', category: 'Site Progress', className: 'md:col-span-2 md:row-span-1' },
];

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredItems = useMemo(() => {
    if (filter === 'All') return items;
    return items.filter(item => item.category === filter);
  }, [filter]);

  const close = useCallback(() => setIdx(null), []);
  
  // Find the actual index in the original array for the lightbox navigation
  const prev = useCallback(() => setIdx(i => i === null ? 0 : (i - 1 + filteredItems.length) % filteredItems.length), [filteredItems]);
  const next = useCallback(() => setIdx(i => i === null ? 0 : (i + 1) % filteredItems.length), [filteredItems]);

  return (
    <section id="gallery" style={{ background: '#F8F5F0', padding: '100px 0' }} aria-labelledby="gallery-heading">
      <div className="page-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ color: '#C9964A', fontSize: '12px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Visual Journey
          </span>
          <h2 id="gallery-heading" style={{ fontFamily: 'var(--font-serif)', color: '#0D1B2A', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '20px' }}>
            Our Gallery
          </h2>
          <p style={{ color: '#6B7280', maxWidth: '600px', textAlign: 'center', fontSize: '16px', lineHeight: 1.6, margin: '0 auto' }}>
            Explore the architectural brilliance, premium amenities, and the real-time progress of Castle Grande.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: filter === cat ? '#0D1B2A' : '#ffffff',
                color: filter === cat ? '#ffffff' : '#4B5563',
                boxShadow: filter === cat ? '0 10px 25px -5px rgba(13,27,42,0.4)' : '0 2px 10px rgba(0,0,0,0.05)',
                transform: filter === cat ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={e => {
                if (filter !== cat) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#0D1B2A';
                }
              }}
              onMouseLeave={e => {
                if (filter !== cat) {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#4B5563';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 lg:gap-6" style={{ gridAutoFlow: 'dense' }}>
          {filteredItems.map((item, i) => (
            <button
              key={item.src + i}
              onClick={() => setIdx(i)}
              aria-label={`View ${item.label} fullscreen`}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer block w-full h-full border-0 p-0 text-left bg-gray-200 ${filter === 'All' ? item.className : 'md:col-span-1 md:row-span-1'}`}
              style={{ boxShadow: '0 10px 30px -10px rgba(13,27,42,0.15)' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#C9964A] text-xs font-bold tracking-wider uppercase mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-white text-lg font-medium leading-tight">
                      {item.label}
                    </h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-2 text-white">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm md:text-base">
            Want to see more details?{' '}
            <a href="#contact" className="text-[#C9964A] font-semibold hover:underline transition-all">
              Request the full brochure & 3D Walkthrough
            </a>
          </p>
        </div>
      </div>

      {/* Modern Lightbox */}
      {idx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1B2A]/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button 
            onClick={close} 
            aria-label="Close lightbox"
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:rotate-90 transition-all duration-300 z-50 p-2"
          >
            <X size={36} />
          </button>
          
          <button 
            onClick={e => { e.stopPropagation(); prev(); }} 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all duration-300 z-50 p-4"
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          <div 
            onClick={e => e.stopPropagation()} 
            className="relative w-full max-w-6xl px-4 md:px-16 max-h-[85vh] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300"
          >
            <div className="relative w-full" style={{ height: '75vh' }}>
              <Image
                src={filteredItems[idx].src}
                alt={filteredItems[idx].alt}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            <div className="mt-6 text-center">
              <span className="text-[#C9964A] text-xs font-bold tracking-widest uppercase block mb-2">
                {filteredItems[idx].category}
              </span>
              <p className="text-white text-xl font-light tracking-wide">
                {filteredItems[idx].label}
              </p>
              <p className="text-white/50 text-sm mt-2">
                {idx + 1} / {filteredItems.length}
              </p>
            </div>
          </div>

          <button 
            onClick={e => { e.stopPropagation(); next(); }} 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition-all duration-300 z-50 p-4"
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  );
}
