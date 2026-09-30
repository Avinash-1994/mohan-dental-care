import { getAssetUrl } from '../utils';

export default function Hero({ _setActivePage }) {
  const scrollToBooking = (e) => {
    e?.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-[#0284c7]">
          <path d="M12 2C8 2 5 5 5 9c0 3 2 6 3 9 1 3 2 4 4 4s3-1 4-4c1-3 3-6 3-9 0-4-3-7-7-7z"/>
          <path d="M9 10h6"/>
        </svg>
      ),
      title: 'Advanced Technology',
      desc: 'Modern & painless treatment',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-[#0284c7]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Patient Friendly',
      desc: 'Comfortable & caring environment',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-[#0284c7]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      title: 'Healthy Smiles',
      desc: 'For a brighter tomorrow',
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-76px)] flex flex-col justify-between overflow-hidden bg-slate-900 pt-[76px]"
    >
      {/* ── BACKGROUND IMAGE (Desktop & Mobile) ── */}
      <img
        src={getAssetUrl('images/hero-mobile.png')}
        alt="Mohan Dental Care Clinic Interior"
        className="absolute inset-0 w-full h-full object-cover object-center lg:hidden pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <img
        src={getAssetUrl('images/hero-desktop.jpg')}
        alt="Mohan Dental Care Clinic Interior"
        className="absolute inset-0 w-full h-full object-cover object-center hidden lg:block pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Mobile dark overlay for high contrast readability */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(3,20,40,0.3) 0%, rgba(3,20,40,0.6) 50%, rgba(2,15,30,0.9) 100%)',
        }}
      />

      {/* ── MAIN CONTENT AREA ── */}
      <div
        className="relative flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10 flex flex-col lg:flex-row items-center lg:items-center justify-between"
        style={{ zIndex: 2 }}
      >
        {/* Left spacer for desktop layout so clinic room is visible */}
        <div className="hidden lg:block lg:flex-1" />

        {/* ── FLOATING ACTION CARD (Right side) ── */}
        <div className="w-full max-w-[430px] sm:max-w-[470px] lg:max-w-[460px] xl:max-w-[490px] bg-white rounded-3xl sm:rounded-[32px] shadow-[0_25px_70px_-15px_rgba(0,15,40,0.25)] p-6 sm:p-8 lg:p-9 border border-white/90 transition-all duration-300">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[0.72rem] font-bold tracking-[0.06em] uppercase mb-4 sm:mb-5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#0284c7]">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            MOHAN DENTAL CARE &bull; SURAJPUR
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black leading-[1.12] mb-3 sm:mb-4 text-[clamp(2.1rem,4.2vw,3rem)] text-[#0b2545] tracking-tight">
            Healthy Teeth.<br />
            <span className="text-[#0284c7]">Confident Smiles.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#475569] text-[0.93rem] sm:text-[0.98rem] leading-relaxed mb-5 sm:mb-6 font-normal">
            Personalized dental care with modern technology and a comfortable patient-first approach.
          </p>

          {/* Doctor Info Row */}
          <div className="flex items-center gap-3.5 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-slate-100">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#0284c7]/20 bg-slate-100 shadow-sm">
              <img
                src={getAssetUrl('images/dr_p_r_rajwade.webp')}
                alt="Dr. P.R. Rajwade, B.D.S."
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="font-bold text-[0.98rem] text-[#0b2545] leading-snug">Dr. P.R. Rajwade, B.D.S.</p>
              <p className="text-[0.78rem] text-[#64748b] font-medium">Professional Dental Care</p>
              <p className="text-[0.75rem] text-[#0284c7] font-semibold flex items-center gap-1.5 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                Govt. Dental College Raipur
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-3">
            <button
              onClick={scrollToBooking}
              className="btn-shimmer w-full flex items-center justify-between px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-[0.96rem] text-white transition-all duration-200 bg-[#0a2560] hover:bg-[#061840] shadow-[0_10px_25px_-6px_rgba(10,37,96,0.45)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
                  <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                </svg>
                Book an Appointment
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-80">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <a
              href="tel:+918839557607"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-[0.96rem] text-[#0a2560] border-2 border-[#0a2560]/20 hover:border-[#0a2560]/60 hover:bg-[#0a2560]/5 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0284c7]">
                <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
              </svg>
              Call 8839557607
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM FEATURES STRIP (Floating on Desktop, Stacked on Mobile) ── */}
      <div
        className="relative lg:absolute lg:bottom-6 lg:left-12 xl:left-24 w-full lg:w-auto max-w-[1400px] lg:max-w-[680px] px-4 sm:px-6 lg:px-0 pb-4 sm:pb-6 lg:pb-0"
        style={{ zIndex: 3 }}
      >
        <div
          className="w-full rounded-2xl overflow-hidden shadow-xl border border-white/80 p-2 sm:p-3"
          style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(16px)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-[#e0f2fe] text-[#0284c7]">
                  {icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[0.82rem] sm:text-[0.88rem] text-[#0b2545] leading-tight truncate">{title}</p>
                  <p className="text-[0.7rem] sm:text-[0.75rem] text-[#64748b] leading-tight truncate mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
