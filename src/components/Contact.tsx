'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Phone, MapPin, Send, CheckCircle } from 'lucide-react';

type FormState  = { name: string; phone: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm]           = useState<FormState>({ name: '', phone: '', message: '' });
  const [errors, setErrors]       = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = 'Please enter your full name (min 2 characters).';
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters.';
    return e;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error as user types (only if previously submitted)
    if (errors[name as keyof FormState])
      setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // Build WhatsApp message with lead details
    const waMessage = 
      `🏠 *New Enquiry — Castle Grande*\n\n` +
      `👤 *Name:* ${form.name.trim()}\n` +
      `📞 *Mobile:* ${form.phone.trim()}\n` +
      `💬 *Message:* ${form.message.trim()}\n\n` +
      `_Sent via Castle Grande website_`;

    const waUrl = `https://api.whatsapp.com/send/?phone=919585448000&text=${encodeURIComponent(waMessage)}&type=phone_number&app_absent=0`;

    setLoading(true);
    // Small delay so the user sees the loading state, then open WhatsApp
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(waUrl, '_blank');
    }, 800);
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    border: `1.5px solid ${hasError ? '#EF4444' : '#D8D0C8'}`,
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '14px',
    background: hasError ? '#FEF2F2' : '#F8F5F0',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    color: '#2C3E50',
    transition: 'border-color 0.2s, background 0.2s',
    boxSizing: 'border-box',
  });

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '13px', fontWeight: 700,
    color: '#0D1B2A', marginBottom: '6px',
  };

  return (
    <section id="contact" style={{ background: '#F8F5F0', padding: '80px 0' }} aria-labelledby="contact-heading">
      <div className="page-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#C9964A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>Get in Touch</span>
          <span className="gold-divider" aria-hidden="true" style={{ display: 'block', marginBottom: '20px' }} />
          <h2 id="contact-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.2 }}>
            Enquire About<br /><span style={{ color: '#C9964A' }}>Castle Grande</span>
          </h2>
          <p style={{ color: '#6B7280', marginTop: '14px', fontSize: '14px', maxWidth: '420px', margin: '14px auto 0', lineHeight: 1.7 }}>
            Fill in the form and our team will get back to you within 24 hours. Or simply call us now.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'start' }}>

          {/* Form Card */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '40px 36px', boxShadow: '0 8px 40px rgba(13,27,42,0.08)', border: '1px solid #E8E0D5' }}>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <CheckCircle size={56} style={{ color: '#C9964A' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', color: '#0D1B2A', fontSize: '1.6rem', fontWeight: 700 }}>
                  Thank you, {form.name.split(' ')[0]}!
                </h3>
                <p style={{ color: '#6B7280', fontSize: '14px', maxWidth: '300px', lineHeight: 1.7 }}>
                  Your enquiry has been received. Our Castle Grande team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
                <h3 style={{ fontFamily: 'var(--font-serif)', color: '#0D1B2A', fontWeight: 700, fontSize: '1.3rem', marginBottom: '28px' }}>
                  Send an Enquiry
                </h3>

                {/* Name */}
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="contact-name" style={labelStyle}>
                    Full Name <span style={{ color: '#C9964A' }}>*</span>
                  </label>
                  <input
                    id="contact-name" name="name" type="text" autoComplete="name"
                    value={form.name} onChange={handleChange}
                    placeholder="e.g. Ravi Kumar"
                    style={inputStyle(!!errors.name)}
                    aria-invalid={!!errors.name}
                    onFocus={e => { e.target.style.borderColor='#C9964A'; e.target.style.background='#fff'; }}
                    onBlur={e => { e.target.style.borderColor=errors.name?'#EF4444':'#D8D0C8'; e.target.style.background=errors.name?'#FEF2F2':'#F8F5F0'; }}
                  />
                  {errors.name && <p role="alert" style={{ color: '#EF4444', fontSize: '12px', marginTop: '5px' }}>{errors.name}</p>}
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="contact-phone" style={labelStyle}>
                    Mobile Number <span style={{ color: '#C9964A' }}>*</span>
                  </label>
                  <input
                    id="contact-phone" name="phone" type="tel" autoComplete="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="e.g. 9876543210" maxLength={10}
                    style={inputStyle(!!errors.phone)}
                    aria-invalid={!!errors.phone}
                    onFocus={e => { e.target.style.borderColor='#C9964A'; e.target.style.background='#fff'; }}
                    onBlur={e => { e.target.style.borderColor=errors.phone?'#EF4444':'#D8D0C8'; e.target.style.background=errors.phone?'#FEF2F2':'#F8F5F0'; }}
                  />
                  {errors.phone && <p role="alert" style={{ color: '#EF4444', fontSize: '12px', marginTop: '5px' }}>{errors.phone}</p>}
                </div>

                {/* Message */}
                <div style={{ marginBottom: '28px' }}>
                  <label htmlFor="contact-message" style={labelStyle}>
                    Message <span style={{ color: '#C9964A' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="e.g. I'm interested in a 3 BHK villa. Please share details."
                    style={{ ...inputStyle(!!errors.message), resize: 'none' }}
                    aria-invalid={!!errors.message}
                    onFocus={e => { e.target.style.borderColor='#C9964A'; e.target.style.background='#fff'; }}
                    onBlur={e => { e.target.style.borderColor=errors.message?'#EF4444':'#D8D0C8'; e.target.style.background=errors.message?'#FEF2F2':'#F8F5F0'; }}
                  />
                  {errors.message && <p role="alert" style={{ color: '#EF4444', fontSize: '12px', marginTop: '5px' }}>{errors.message}</p>}
                </div>

                <button id="contact-submit-btn" type="submit" disabled={loading}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', background: '#C9964A', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '12px', border: 'none', cursor: loading ? 'wait' : 'pointer', boxShadow: '0 4px 20px rgba(201,150,74,0.3)', opacity: loading ? 0.75 : 1 }}>
                  {loading
                    ? <><span style={{ width:'16px',height:'16px',border:'2px solid #fff',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite',display:'inline-block'}} />Sending…</>
                    : <><Send size={16} />Send Enquiry</>}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#0D1B2A', borderRadius: '20px', padding: '36px', color: '#fff', boxShadow: '0 8px 40px rgba(13,27,42,0.18)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.3rem', marginBottom: '28px' }}>Contact Details</h3>

              <a href="tel:+919585448000" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width:'48px',height:'48px',borderRadius:'50%',background:'rgba(201,150,74,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                  <Phone size={20} style={{ color: '#C9964A' }} />
                </div>
                <div>
                  <div style={{ color:'rgba(255,255,255,0.45)',fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'4px' }}>Phone</div>
                  <div style={{ color:'#fff',fontWeight:700,fontSize:'1.1rem' }}>+91 95854 48000</div>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/HZRLSNgwQaDT69Fy8" target="_blank" rel="noopener noreferrer"
                style={{ display:'flex',alignItems:'flex-start',gap:'16px',textDecoration:'none',color:'inherit',marginBottom:'24px' }}>
                <div style={{ width:'48px',height:'48px',borderRadius:'50%',background:'rgba(201,150,74,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                  <MapPin size={20} style={{ color: '#C9964A' }} />
                </div>
                <div>
                  <div style={{ color:'rgba(255,255,255,0.45)',fontSize:'11px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'4px' }}>Address</div>
                  <div style={{ color:'#fff',fontWeight:600,fontSize:'14px',lineHeight:1.6 }}>Vattamalaipalayam, MTP Road,<br />Coimbatore, Tamil Nadu</div>
                </div>
              </a>

              <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:'18px',display:'flex',flexWrap:'wrap',gap:'8px' }}>
                {['DTCP No. 431/2025','RERA No. 1143/2026'].map(b => (
                  <span key={b} style={{ fontSize:'11px',fontWeight:700,color:'#C9964A',border:'1px solid rgba(201,150,74,0.35)',padding:'5px 12px',borderRadius:'999px' }}>{b}</span>
                ))}
              </div>
            </div>

            <div style={{ background:'#C9964A',borderRadius:'20px',padding:'28px 32px',textAlign:'center',boxShadow:'0 6px 24px rgba(201,150,74,0.35)' }}>
              <div style={{ fontFamily:'var(--font-serif)',color:'#fff',fontWeight:700,fontSize:'1.1rem',marginBottom:'8px' }}>Prefer a quick call?</div>
              <p style={{ color:'rgba(255,255,255,0.85)',fontSize:'13px',marginBottom:'18px' }}>Mon–Sun, 9 AM – 6 PM</p>
              <a href="tel:+919585448000"
                style={{ display:'inline-flex',alignItems:'center',gap:'8px',background:'#fff',color:'#C9964A',fontWeight:700,padding:'12px 24px',borderRadius:'999px',textDecoration:'none',fontSize:'14px' }}>
                <Phone size={16} /> Call +91 95854 48000
              </a>
            </div>
          </div>

        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
