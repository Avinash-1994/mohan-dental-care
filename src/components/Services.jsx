import { useState } from 'react';
import { useScrollReveal, useTilt } from '../utils';
import { ALL_SERVICES } from '../servicesData';

// ──────────────────────────────────────────────────────────────────────────────
// BADGE COLOR MAP
// ──────────────────────────────────────────────────────────────────────────────
const BADGE_COLORS = {
  Preventive:  'bg-teal-50 text-teal-700 border-teal-200',
  Diagnostic:  'bg-blue-50 text-blue-700 border-blue-200',
  Screening:   'bg-red-50 text-red-700 border-red-200',
  Restorative: 'bg-purple-50 text-purple-700 border-purple-200',
  Surgical:    'bg-orange-50 text-orange-700 border-orange-200',
  Emergency:   'bg-red-100 text-red-800 border-red-300',
  Orthodontic: 'bg-violet-50 text-violet-700 border-violet-200',
  Cosmetic:    'bg-pink-50 text-pink-700 border-pink-200',
  Pediatric:   'bg-green-50 text-green-700 border-green-200',
};

// ──────────────────────────────────────────────────────────────────────────────
// SERVICE CARD
// ──────────────────────────────────────────────────────────────────────────────
function ServiceCard({ svc, delay = 0, onClick }) {
  const [ref, visible] = useScrollReveal();
  const tilt = useTilt(5);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        {...tilt}
        onClick={onClick}
        className="svc-card-3d bg-white border border-[#ece5db] border-t-4 border-t-accent-500 rounded-2xl p-5 sm:p-6 shadow-card h-full cursor-pointer group active:scale-[0.98] transition-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Icon + badge row */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-[0_6px_16px_-6px_rgba(91,79,224,0.4)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 8c-4.6 0-8.2 2.6-9.4 6-.9 2.4-.2 4.7.7 7.1.9 2.5 1.1 5.2 1.7 7.9.5 2.1 1.2 4.9 2.6 4.9 1.3 0 1.8-2.6 2.3-4.9.4-1.9 1-3.1 2.1-3.1s1.7 1.2 2.1 3.1c.5 2.3 1 4.9 2.3 4.9 1.4 0 2.1-2.8 2.6-4.9.6-2.7.8-5.4 1.7-7.9.9-2.4 1.6-4.7.7-7.1-1.2-3.4-4.8-6-9.4-6z"/>
            </svg>
          </div>
          <span className={`inline-block text-[0.6rem] font-bold uppercase tracking-wider px-2 py-1 rounded-full border flex-shrink-0 ${BADGE_COLORS[svc.badge] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
            {svc.badge}
          </span>
        </div>

        <h3 className="font-display font-bold text-[0.92rem] sm:text-[1rem] text-ink-950 mb-1 leading-snug">{svc.title}</h3>
        <p className="text-accent-600 text-xs font-semibold mb-3 leading-snug">{svc.hindi}</p>
        <p className="text-ink-700 text-[0.86rem] sm:text-[0.9rem] leading-relaxed mb-4 line-clamp-3">{svc.shortDesc}</p>

        <div className="flex items-center gap-1.5 text-ink-700 text-xs font-semibold mb-4">
          <svg className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>
          </svg>
          {svc.duration}
        </div>

        <div className="flex items-center gap-1.5 text-accent-600 text-xs font-bold group-hover:gap-2.5 transition-all">
          <span>Tap for full details</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// SERVICE DETAIL MODAL — bottom sheet on mobile, centered on desktop
// ──────────────────────────────────────────────────────────────────────────────
function ServiceModal({ svc, onClose }) {
  const [openFaq, setOpenFaq] = useState(null);
  const relatedServices = ALL_SERVICES.filter(s => svc.related?.includes(s.id));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-ink-950/75 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto modal-scroll rounded-t-[24px] sm:rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Gradient header ── */}
        <div className={`bg-gradient-to-br ${svc.color} px-5 sm:px-8 pt-6 pb-10 relative overflow-hidden`}>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />

          {/* Mobile drag handle */}
          <div className="w-10 h-1 bg-white/40 rounded-full mx-auto mb-4 sm:hidden" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/25 hover:bg-white/40 transition-colors flex items-center justify-center"
            style={{ minHeight: '32px' }}
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12"/>
            </svg>
          </button>

          <span className="inline-block text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/25 text-white mb-3">
            {svc.badge}
          </span>
          <h2 className="font-display font-extrabold text-[1.2rem] sm:text-[1.6rem] text-white mb-1 pr-8 leading-tight">{svc.title}</h2>
          <p className="text-white/80 text-xs sm:text-sm font-semibold">{svc.hindi}</p>
          <p className="text-white/90 font-medium mt-2 text-[0.9rem] sm:text-[1rem] italic">"{svc.tagline}"</p>
        </div>

        {/* ── Body ── */}
        <div className="px-5 sm:px-8 py-6 sm:py-8">

          {/* About */}
          <div className="mb-7">
            <h3 className="font-display font-bold text-[1rem] text-ink-950 mb-4">About This Treatment</h3>
            {svc.overview.split('\n\n').map((para, i) => (
              <p key={i} className="text-ink-700 text-[0.9rem] sm:text-[0.95rem] leading-relaxed mb-3 last:mb-0">{para}</p>
            ))}
          </div>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
            {[
              { icon: <circle cx="12" cy="12" r="8.5"/>, path: <path d="M12 7.5V12l3 2"/>, label: 'Duration', val: svc.duration },
              { icon: null, path: null, label: 'Frequency', val: svc.freq, isCalendar: true },
            ].map(({ label, val, isCalendar }) => (
              <div key={label} className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-2xl bg-[#f3f1f7] border border-[#ece5db] min-w-0 max-w-full">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {isCalendar ? (
                    <>
                      <rect x="3.5" y="5" width="17" height="15" rx="2.4"/>
                      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/>
                      <line x1="8" y1="3" x2="8" y2="7"/>
                      <line x1="16" y1="3" x2="16" y2="7"/>
                    </>
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>
                    </>
                  )}
                </svg>
                <div className="min-w-0">
                  <p className="text-[0.6rem] font-bold uppercase tracking-wider text-ink-700">{label}</p>
                  <p className="text-[0.82rem] sm:text-[0.87rem] font-bold text-ink-950 truncate">{val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits + Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
            <div className="bg-[#f3f1f7] rounded-2xl p-4 sm:p-5">
              <h4 className="font-display font-bold text-[0.88rem] text-ink-950 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7"/>
                </svg>
                Key Benefits
              </h4>
              <ul className="flex flex-col gap-2">
                {svc.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2 text-[0.84rem] text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-[6px] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f3f1f7] rounded-2xl p-4 sm:p-5">
              <h4 className="font-display font-bold text-[0.88rem] text-ink-950 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z"/>
                </svg>
                Treatment Steps
              </h4>
              <ol className="flex flex-col gap-2">
                {svc.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-[0.84rem] text-ink-700">
                    <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${svc.color} text-white text-[0.6rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Aftercare */}
          {svc.aftercare && svc.aftercare.length > 0 && (
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 sm:p-5 mb-7">
              <h4 className="font-display font-bold text-[0.88rem] text-amber-900 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4M12 17h.01M10.29 3.86l-8.17 14A2 2 0 0 0 3.86 21h16.28a2 2 0 0 0 1.74-3l-8.17-14a2 2 0 0 0-3.48 0z"/>
                </svg>
                Aftercare Instructions
              </h4>
              <ul className="flex flex-col gap-2">
                {svc.aftercare.map(a => (
                  <li key={a} className="flex items-start gap-2 text-[0.84rem] text-amber-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-[6px] flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ accordion */}
          <div className="mb-7">
            <h4 className="font-display font-bold text-[0.92rem] text-ink-950 mb-4">Frequently Asked Questions</h4>
            <div className="flex flex-col gap-2">
              {svc.faq.map((item, i) => (
                <div key={i} className="border border-[#ece5db] rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between px-4 sm:px-5 py-3.5 sm:py-4 text-left hover:bg-[#f9f7f4] transition-colors gap-3"
                    style={{ minHeight: '52px' }}
                  >
                    <span className="font-semibold text-[0.85rem] sm:text-[0.9rem] text-ink-950">{item.q}</span>
                    <svg
                      className={`w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-4 pt-3 text-ink-700 text-[0.84rem] sm:text-[0.88rem] leading-relaxed border-t border-[#ece5db] bg-[#faf9f7]">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {relatedServices.length > 0 && (
            <div className="mb-7">
              <h4 className="font-display font-bold text-[0.88rem] text-ink-950 mb-3">Related Treatments</h4>
              <div className="flex flex-wrap gap-2">
                {relatedServices.map(r => (
                  <span key={r.id} className={`px-3 py-1.5 rounded-full text-xs font-bold border ${BADGE_COLORS[r.badge] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                    {r.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Book CTA */}
          <a
            href={`https://wa.me/918839557607?text=${encodeURIComponent(`Hello Mohan Dental Care, I'd like to book / enquire about: ${svc.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-[0.93rem] sm:text-[0.97rem] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3z"/>
              <path d="M8.3 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 1.9 1.3 2.2 1.4.3.2.4.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3.1.3.1.8-.1 1.3-.3.5-1.4 1.2-2 1.2-.5.1-1.1.1-3.5-.8-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4z" fill="white" stroke="none"/>
            </svg>
            Book This Treatment on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// SERVICE TEASER — homepage
// ──────────────────────────────────────────────────────────────────────────────
export function ServiceTeaser({ setActivePage }) {
  const [headRef, headVisible] = useScrollReveal();
  const [selected, setSelected] = useState(null);
  const TEASER = ALL_SERVICES.slice(0, 6);

  return (
    <section id="services-preview" className="py-14 sm:py-24 bg-[#f3f1f7]">
      {selected && <ServiceModal svc={selected} onClose={() => setSelected(null)} />}

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div
          ref={headRef}
          className={`mb-8 sm:mb-12 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Specialised Care
          </div>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3.2vw,2.6rem)] text-ink-950 mb-4">
            Dental Care, Treatment By Treatment
          </h2>
          <p className="text-ink-700 text-[0.95rem] sm:text-[1.04rem] max-w-[52ch]">
            Tap any card for full clinical details, treatment steps, aftercare and patient FAQs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TEASER.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} delay={i * 80} onClick={() => setSelected(svc)} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <button
            onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="btn-shimmer inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-ink-950 text-white font-bold text-[0.9rem] sm:text-[0.97rem] shadow-[0_14px_30px_-14px_rgba(21,19,15,0.55)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200"
          >
            View All 12 Services →
          </button>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// FULL SERVICES PAGE
// ──────────────────────────────────────────────────────────────────────────────
export function ServicesPage() {
  const GROUPS = [...new Set(ALL_SERVICES.map(s => s.group))];
  const [selected, setSelected] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const [headRef, headVisible] = useScrollReveal();

  const displayGroups = activeGroup ? [activeGroup] : GROUPS;
  const grouped = (g) => ALL_SERVICES.filter(s => s.group === g);

  return (
    <div className="pt-[68px] sm:pt-[76px]">
      {selected && <ServiceModal svc={selected} onClose={() => setSelected(null)} />}

      {/* ── Page hero ── */}
      <div className="bg-gradient-to-b from-[#fbeee1] to-[#fffdfb] py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Specialised Care
          </div>
          <h1 className="font-display font-bold text-[clamp(1.7rem,3.6vw,2.8rem)] text-ink-950 mb-4">Our 12 Services</h1>
          <p className="text-ink-700 text-[0.95rem] sm:text-[1.05rem] max-w-[58ch] mb-8">
            Complete oral care at one address on M.G. Road, Surajpur. Tap any card for full clinical details, treatment steps, aftercare and patient FAQs.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { num: '12', label: 'Services' },
              { num: '5', label: 'Specialties' },
              { num: 'BDS', label: 'Qualified Doctor' },
              { num: '9AM–8PM', label: 'Daily Hours' },
            ].map(({ num, label }) => (
              <div key={label} className="px-4 py-2.5 bg-white rounded-2xl shadow-card border border-[#ece5db] text-center">
                <p className="font-display font-extrabold text-[0.95rem] sm:text-[1.1rem] text-ink-950">{num}</p>
                <p className="text-[0.62rem] sm:text-[0.7rem] font-semibold text-ink-700 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky filter tabs ── */}
      <div className="sticky top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-[#ece5db] shadow-sm">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveGroup(null)}
            className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${!activeGroup ? 'bg-ink-950 text-white' : 'bg-[#f3f1f7] text-ink-700 hover:bg-[#ece5db]'}`}
          >
            All (12)
          </button>
          {GROUPS.map(g => (
            <button
              key={g}
              onClick={() => setActiveGroup(activeGroup === g ? null : g)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${activeGroup === g ? 'bg-ink-950 text-white' : 'bg-[#f3f1f7] text-ink-700 hover:bg-[#ece5db]'}`}
            >
              {g} ({grouped(g).length})
            </button>
          ))}
        </div>
      </div>

      {/* ── Services by group ── */}
      <div className="py-10 sm:py-14 max-w-[1180px] mx-auto px-4 sm:px-6">
        {displayGroups.map((group, gi) => (
          <div key={group} className="mb-10 sm:mb-16">
            <div
              ref={headRef}
              className={`flex items-center gap-3 mb-5 sm:mb-8 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink-950 text-white text-[0.72rem] font-display font-bold flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(21,19,15,0.4)] flex-shrink-0">
                {gi + 1}
              </span>
              <div>
                <h2 className="font-display font-bold text-[1.1rem] sm:text-[1.35rem] text-ink-950 leading-tight">{group}</h2>
                <p className="text-ink-700 text-xs font-semibold">{grouped(group).length} treatment{grouped(group).length > 1 ? 's' : ''}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {grouped(group).map((svc, i) => (
                <ServiceCard key={svc.id} svc={svc} delay={i * 80} onClick={() => setSelected(svc)} />
              ))}
            </div>
          </div>
        ))}

        {/* ── Bottom CTA ── */}
        <div className="mt-4 bg-ink-950 rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-10 flex flex-wrap items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-[480px]">
            <h3 className="font-display font-bold text-[1.1rem] sm:text-[1.35rem] text-white mb-2">Not sure which treatment you need?</h3>
            <p className="text-[#c9c3ba] text-[0.88rem] sm:text-[0.95rem]">
              Send us a message on WhatsApp and Dr. Rajwade will guide you to the right treatment.
            </p>
          </div>
          <a
            href="https://wa.me/918839557607"
            target="_blank"
            rel="noopener noreferrer"
            className="relative btn-shimmer flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold shadow-[0_14px_30px_-8px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3z"/>
              <path d="M8.3 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 1.9 1.3 2.2 1.4.3.2.4.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3.1.3.1.8-.1 1.3-.3.5-1.4 1.2-2 1.2-.5.1-1.1.1-3.5-.8-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4z" fill="white" stroke="none"/>
            </svg>
            Ask Dr. Rajwade on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
