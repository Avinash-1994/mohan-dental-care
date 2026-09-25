import { useState } from 'react';
import { useScrollReveal } from '../utils';

const SERVICES = [
  'Root Canal Treatment (RCT)', 'Digital Dental X-Ray (RVG)', 'Wisdom Tooth Surgery',
  'Tooth Extraction', 'Teeth Cleaning', 'Oral Lesion Treatment',
  'Braces / Orthodontic Treatment', 'Pediatric Dentistry', 'Crown, Bridge & Denture',
  'Jaw Fracture Management', 'Tooth Filling', 'Smile Designing & Cosmetic Treatment', 'Not sure yet',
];

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;
    const lines = [
      "Hello Mohan Dental Care, I'd like to book an appointment.",
      `Name: ${form.name}`, `Phone: ${form.phone}`, `Service: ${form.service}`,
      form.date && `Preferred date: ${form.date}`,
      form.message && `Notes: ${form.message}`,
    ].filter(Boolean);
    window.open(`https://wa.me/918839557607?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    setStatus('sent');
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setStatus('error');
      return;
    }
    const lines = [
      "Hello Mohan Dental Care, I'd like to book an appointment.",
      `Name: ${form.name}`, `Phone: ${form.phone}`, `Service: ${form.service}`,
      form.date && `Preferred date: ${form.date}`,
      form.message && `Notes: ${form.message}`,
    ].filter(Boolean);
    window.open(`https://wa.me/918839557607?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    setStatus('sent_wa');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('submitting');

    try {
      // Free Web3Forms endpoint: enter your access key in VITE_WEB3FORMS_KEY or default
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Appointment Request - ${form.name}`,
          from_name: "Mohan Dental Care Website",
          name: form.name,
          phone: form.phone,
          service: form.service,
          date: form.date || "Not specified",
          message: form.message || "None",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('sent_email');
        setForm({ name: '', phone: '', service: '', date: '', message: '' });
      } else {
        // Fallback to WhatsApp if key is missing/unconfigured
        handleWhatsAppSubmit(e);
      }
    } catch (err) {
      console.error("Email submission error:", err);
      // Fallback: open WhatsApp
      handleWhatsAppSubmit(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border-[1.5px] border-[#e4ddd2] bg-white text-ink-950 text-[0.96rem] focus:outline-none focus:border-accent-500 transition-colors duration-200";
  const labelCls = "block text-[0.85rem] font-bold text-ink-900 mb-1.5";

  return (
    <section id="booking" className="py-14 sm:py-24 bg-gradient-to-b from-[#fffdfb] to-[#fbeee1]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14">

        {/* Left info */}
        <div ref={leftRef} className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Book Your Visit
          </div>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3vw,2.5rem)] text-ink-950 mb-3">Book an Appointment</h2>
          <p className="text-ink-700 text-[1.02rem] max-w-[44ch] mb-8">
            Submit the form to send us an instant booking request, or contact us directly via WhatsApp or Phone.
          </p>

          {/* Quick call */}
          <div className="flex flex-col gap-3 mb-8">
            {[
              { href: 'tel:+918839557607', num: '88395 57607' },
              { href: 'tel:+916267104997', num: '62671 04997' },
            ].map(({ href, num }) => (
              <a key={num} href={href}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-[#ece5db] hover:border-accent-500 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <svg className="w-5 h-5 text-accent-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.75rem] text-ink-700 font-semibold">Call Direct</p>
                  <p className="font-bold text-[1.02rem] text-ink-950">{num}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#ece5db]">
            <h4 className="font-display font-bold text-[0.94rem] text-ink-950 mb-2">Clinic Timings</h4>
            <p className="text-ink-700 text-[0.92rem]">9:00 AM – 8:00 PM, daily · Sunday by appointment only</p>
          </div>
        </div>

        {/* Right form */}
        <div ref={rightRef} className={`transition-all duration-700 delay-150 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="card-3d bg-white rounded-3xl p-5 sm:p-9 shadow-card border border-[#ece5db]" style={{ transformStyle: 'preserve-3d' }}>
            <h3 className="font-display font-bold text-[1.2rem] text-ink-950 mb-6">Request an Appointment</h3>

            <form onSubmit={handleEmailSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className={labelCls}>Full name <span className="text-accent-500">*</span></label>
                  <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} className={inputCls} placeholder="Your name"/>
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone number <span className="text-accent-500">*</span></label>
                  <input id="phone" name="phone" type="tel" required inputMode="tel" value={form.phone} onChange={handleChange} className={inputCls} placeholder="Mobile number"/>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="service" className={labelCls}>Service <span className="text-accent-500">*</span></label>
                  <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputCls}>
                    <option value="" disabled>Choose a service</option>
                    {SERVICES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className={labelCls}>Preferred date</label>
                  <input id="date" name="date" type="date" min={today} value={form.date} onChange={handleChange} className={inputCls}/>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className={labelCls}>Anything else? <span className="font-normal text-ink-700">(optional)</span></label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} className={`${inputCls} resize-y min-h-[80px]`} placeholder="Tell us a bit about what's going on"/>
              </div>

              {status === 'error' && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold">
                  Please fill in your name, phone number, and service required.
                </div>
              )}

              {status === 'sent_email' && (
                <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Thank you! Your appointment request has been submitted. We will contact you soon.</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button type="submit" disabled={isSubmitting}
                  className="btn-shimmer flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-bold shadow-md transition-all duration-200 text-[0.94rem]"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13"/>
                        <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                      Submit Form (Email)
                    </>
                  )}
                </button>

                <button type="button" onClick={handleWhatsAppSubmit}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-md transition-all duration-200 text-[0.94rem]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.6 0 0 0 1.333 4.993L2 22l5.233-1.37a9.95 9.95 0 0 0 4.779 1.216h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.92 9.92 0 0 0 12.012 2z"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </div>

              <p className="mt-3 text-[0.78rem] text-ink-700 text-center sm:text-left">
                Direct phone: <a href="tel:+918839557607" className="font-bold underline text-ink-900">+91 88395 57607</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
