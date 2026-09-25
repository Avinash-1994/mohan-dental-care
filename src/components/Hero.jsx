export default function Hero({ setActivePage }) {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[68px] sm:pt-[76px] overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fbeee1 0%, #fdf6ef 55%, #fffdfb 100%)' }}
    >
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-accent-400 top-10 right-[-100px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-purple-400 bottom-10 left-[-80px]" style={{ animationDelay: '3s' }} />

      {/* 3D perspective grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(91,79,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,79,224,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: 'perspective(800px) rotateX(8deg)',
          transformOrigin: 'center top',
        }}
      />

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* ── Left: Text content ── */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            Surajpur's Trusted Dental Clinic
          </div>

          <p className="text-ink-700 font-semibold text-[0.95rem] mb-3">
            Under the care of <span className="text-ink-950 font-bold">Dr. P. R. Rajwade, BDS</span>
          </p>

          <h1 className="font-display font-extrabold text-[clamp(2.2rem,4.5vw,3.5rem)] text-ink-950 leading-[1.1] mb-6">
            Complete Dental Care,<br />
            <span className="gradient-text">From a Filling to a Full Makeover</span>
          </h1>

          <p className="text-ink-700 text-[1.05rem] leading-relaxed max-w-[46ch] mb-8">
            Mohan Dental Care treats everything from routine cleanings and root canals to wisdom tooth surgery,
            braces, crowns and same-day digital X-rays — all on M.G. Road, Surajpur.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="tel:+918839557607"
              className="btn-shimmer flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-ink-950 text-white font-bold text-[0.97rem] shadow-[0_14px_30px_-14px_rgba(21,19,15,0.55)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(21,19,15,0.6)] transition-all duration-200"
            >
              {/* Phone SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z"/>
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/918839557607"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-[#ece5db] text-ink-950 font-bold text-[0.97rem] hover:border-teal-500 hover:bg-teal-500/5 transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                {/* WhatsApp SVG */}
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3z"/>
                  <path d="M8.3 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 1.9 1.3 2.2 1.4.3.2.4.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3.1.3.1.8-.1 1.3-.3.5-1.4 1.2-2 1.2-.5.1-1.1.1-3.5-.8-2.9-1.2-4.8-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4z" fill="white" stroke="none"/>
                </svg>
              </span>
              WhatsApp Us
            </a>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-5 text-[0.87rem] text-ink-700 font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Open Daily: 9 AM – 8 PM
            </span>
            <span className="flex items-center gap-2">
              {/* Pin SVG */}
              <svg className="w-4 h-4 text-accent-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s7-6.3 7-11.5S16.4 3 12 3 5 5.4 5 9.5 12 21 12 21z"/>
                <circle cx="12" cy="9.5" r="2.6"/>
              </svg>
              M.G. Road, Surajpur
            </span>
          </div>
        </div>

        {/* ── Right: 3D floating doctor card ── */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative" style={{ perspective: '800px' }}>
            {/* Floating card */}
            <div className="hero-card-3d bg-white rounded-[28px] p-3 sm:p-4 shadow-3d w-full max-w-[340px] sm:max-w-[370px] relative">
              {/* Top chip */}
              <div className="absolute -top-4 left-6 bg-ink-950 text-white rounded-full px-4 py-2.5 flex items-center gap-2 text-xs font-bold shadow-[0_12px_30px_-10px_rgba(21,19,15,0.5)] z-10">
                <svg className="w-4 h-4 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z"/>
                </svg>
                Complete Oral Care
              </div>

              {/* Real doctor photo */}
              <div className="rounded-[20px] overflow-hidden aspect-[4/5] bg-gradient-to-b from-accent-600 to-ink-950 relative">
                <img
                  src="/images/doctor.png"
                  alt="Dr. P. R. Rajwade, BDS"
                  className="w-full h-full object-cover"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-ink-950/90 to-transparent">
                  <p className="text-white font-display font-bold text-base leading-tight">Dr. P. R. Rajwade</p>
                  <p className="text-accent-300 text-xs font-semibold">BDS — Govt. Dental College, Raipur</p>
                </div>
              </div>

              {/* Badge 1 — hidden on mobile to prevent overflow */}
              <div className="badge-float-1 hidden sm:flex absolute -left-10 top-1/3 bg-white rounded-2xl px-4 py-3 shadow-card items-center gap-3 border border-[#ece5db]">
                <div className="w-9 h-9 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  {/* Calendar SVG */}
                  <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="5" width="17" height="15" rx="2.4"/>
                    <line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/>
                    <line x1="8" y1="3" x2="8" y2="7"/>
                    <line x1="16" y1="3" x2="16" y2="7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.62rem] text-ink-700 font-bold uppercase tracking-wide">Qualification</p>
                  <p className="text-[0.84rem] font-bold text-ink-950">BDS, Govt. College</p>
                </div>
              </div>

              {/* Badge 2 — hidden on mobile to prevent overflow */}
              <div className="badge-float-2 hidden sm:flex absolute -right-8 bottom-[15%] bg-white rounded-2xl px-4 py-3 shadow-card items-center gap-3 border border-[#ece5db]">
                <div className="w-9 h-9 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  {/* Badge/shield SVG */}
                  <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.62rem] text-ink-700 font-bold uppercase tracking-wide">Registration</p>
                  <p className="text-[0.84rem] font-bold text-ink-950">CGDC/G/23/3989</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-2 sm:gap-3 mt-5 sm:mt-6 justify-center">
              {[
                { num: '12+', label: 'Services' },
                { num: '9AM', label: 'Opens Daily' },
                { num: '2', label: 'Phone Lines' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-white rounded-2xl px-5 py-3 shadow-card text-center flex-1 border border-[#ece5db]">
                  <p className="font-display font-bold text-lg text-ink-950">{num}</p>
                  <p className="text-[0.7rem] text-ink-700 font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="#fffdfb"/>
        </svg>
      </div>
    </section>
  );
}
