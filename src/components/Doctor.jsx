import { useScrollReveal, useTilt } from '../utils';

// ─── Gallery items with real images ─────────────────────────────────────────
const GALLERY = [
  { label: 'Reception', img: '/images/reception.png' },
  { label: 'Treatment Chair', img: '/images/treatment.png' },
  { label: 'Digital X-Ray Room', img: '/images/xray.png' },
  { label: 'Sterilization', img: '/images/sterilization.png' },
  { label: 'Consultation Room', img: '/images/treatment.png' },
  { label: 'Waiting Area', img: '/images/reception.png' },
];

// ─── Doctor card with real photo ─────────────────────────────────────────────
function DoctorCard() {
  const tilt = useTilt(5);

  return (
    <div className="flex justify-center">
      <div
        {...tilt}
        className="card-3d bg-white rounded-[26px] p-3 shadow-3d max-w-[320px] w-full relative cursor-default"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Real doctor photo */}
        <div className="rounded-[18px] overflow-hidden aspect-[4/5] relative bg-gradient-to-b from-accent-600 to-ink-950">
          <img
            src="/images/doctor.png"
            alt="Dr. P. R. Rajwade, BDS"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay at bottom for name */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-5 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent">
            <p className="text-white font-display font-bold text-lg leading-tight">Dr. P. R. Rajwade</p>
            <p className="text-accent-300 text-xs font-semibold mt-0.5">BDS — Govt. Dental College, Raipur</p>
          </div>
        </div>

        {/* Registration badge */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ink-950 text-white rounded-full px-5 py-2.5 text-xs font-bold whitespace-nowrap shadow-[0_12px_26px_-12px_rgba(21,19,15,0.5)]">
          Reg. CGDC/G/23/3989
        </div>

        {/* Floating credentials */}
        <div className="hidden sm:flex absolute -left-10 top-1/3 bg-white rounded-2xl px-4 py-2.5 shadow-card items-center gap-2.5 border border-[#ece5db]"
          style={{ animation: 'badgeFloat1 4s ease-in-out infinite' }}>
          <div className="w-8 h-8 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-wide text-ink-700">Qualification</p>
            <p className="text-[0.8rem] font-bold text-ink-950">BDS</p>
          </div>
        </div>

        <div className="hidden sm:flex absolute -right-8 bottom-[20%] bg-white rounded-2xl px-4 py-2.5 shadow-card items-center gap-2.5 border border-[#ece5db]"
          style={{ animation: 'badgeFloat2 5s ease-in-out infinite 1s' }}>
          <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>
            </svg>
          </div>
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-wide text-ink-700">Available</p>
            <p className="text-[0.8rem] font-bold text-ink-950">9 AM – 8 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Doctor teaser on homepage ───────────────────────────────────────────────
export function DoctorTeaser({ setActivePage }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section className="py-14 sm:py-24 bg-[#f3f1f7]">
      <div
        ref={ref}
        className={`max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <DoctorCard />

        <div className="mt-6 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Meet The Doctor
          </div>
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,1.9rem)] text-ink-950 mb-1">Dr. P. R. Rajwade</h2>
          <p className="text-ink-700 text-[0.98rem] mb-6">B.D.S. — Government Dental College, Raipur</p>

          {/* Highlight stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { num: 'BDS', label: 'Qualified Dentist' },
              { num: '12+', label: 'Treatments Offered' },
              { num: 'CGDC', label: 'Registered Council' },
              { num: 'Daily', label: '9 AM – 8 PM Open' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-white rounded-2xl px-4 py-3 border border-[#ece5db] shadow-sm">
                <p className="font-display font-extrabold text-[1.1rem] text-ink-950">{num}</p>
                <p className="text-[0.72rem] text-ink-700 font-semibold">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-ink-700 text-[1.02rem] leading-relaxed max-w-[52ch] mb-8">
            Registered with the Chhattisgarh Dental Council under CGDC/G/23/3989, Dr. Rajwade treats everything
            from routine fillings to wisdom tooth surgery, jaw fractures and full smile makeovers at an unhurried, patient-first pace.
          </p>
          <button
            onClick={() => setActivePage('about')}
            className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-ink-950 text-white font-bold shadow-[0_14px_30px_-14px_rgba(21,19,15,0.55)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(21,19,15,0.6)] transition-all duration-200"
          >
            Doctor &amp; Clinic Details →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Full about page ─────────────────────────────────────────────────────────
export function AboutPage() {
  const [ref, visible] = useScrollReveal(0.05);

  const CREDS = [
    { label: 'Qualification', value: 'BDS' },
    { label: 'Registration', value: 'CGDC/G/23/3989' },
    { label: 'Focus', value: 'General & Cosmetic' },
    { label: 'College', value: 'Govt. Dental, Raipur' },
  ];

  const BIO = [
    'Dr. P. R. Rajwade completed a Bachelor of Dental Surgery at Government Dental College, Raipur, and is registered with the Chhattisgarh Dental Council under CGDC/G/23/3989.',
    'At the Surajpur clinic, treatment covers routine care as well as more involved work — root canals, wisdom tooth surgery, jaw fractures, orthodontics and full smile makeovers — supported by digital RVG X-ray imaging and modern crown materials (Zirconia, EMAX, DMLS).',
    'Our approach is straightforward: explain what\'s happening, offer the options that fit, and treat every patient — young or old — at an unhurried pace.',
  ];

  return (
    <div className="pt-[68px] sm:pt-[76px]">
      {/* Page hero */}
      <div className="bg-gradient-to-b from-[#fbeee1] to-[#fffdfb] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Meet The Doctor &amp; Clinic
          </div>
          <h1 className="font-display font-bold text-[clamp(2rem,3.6vw,2.9rem)] text-ink-950 mb-4">About Mohan Dental Care</h1>
          <p className="text-ink-700 text-[1.06rem] max-w-[60ch]">
            Led by Dr. P. R. Rajwade, BDS, the Surajpur clinic combines routine dental care with surgical,
            orthodontic and cosmetic treatment — all in one place on M.G. Road.
          </p>
        </div>
      </div>

      {/* Doctor detail */}
      <section className="py-10 sm:py-20 max-w-[1180px] mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <DoctorCard />

          <div className="mt-10 lg:mt-0">
            <h2 className="font-display font-bold text-[1.8rem] text-ink-950 mb-1">Dr. P. R. Rajwade</h2>
            <p className="text-ink-700 text-[0.98rem] mb-6">B.D.S. — Government Dental College, Raipur</p>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {CREDS.map(c => (
                <div key={c.label} className="px-4 py-3 rounded-2xl bg-[#f3f1f7] border border-[#ece5db]">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wider text-accent-600 mb-0.5">{c.label}</p>
                  <p className="text-[0.88rem] font-bold text-ink-950">{c.value}</p>
                </div>
              ))}
            </div>

            {BIO.map((p, i) => (
              <p key={i} className="text-ink-700 text-[1.02rem] leading-relaxed mb-4">{p}</p>
            ))}

            {/* Checklist */}
            <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Root Canal Treatment', 'Wisdom Tooth Surgery',
                'Digital RVG X-Ray', 'Braces & Orthodontics',
                'Zirconia / EMAX Crowns', 'Smile Designing',
                'Pediatric Dentistry', 'Jaw Fracture Care',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-[0.9rem] text-ink-700">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-ink-950 text-white font-bold shadow-[0_14px_30px_-14px_rgba(21,19,15,0.55)] hover:-translate-y-1 transition-all duration-200"
            >
              Book With Dr. Rajwade
            </a>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section id="gallery" className="py-14 sm:py-20 bg-[#f3f1f7]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Around The Clinic
          </div>
          <h2 className="font-display font-bold text-[clamp(1.7rem,2.8vw,2.2rem)] text-ink-950 mb-4">Gallery</h2>
          <p className="text-ink-700 text-[1rem] mb-10 max-w-[52ch]">
            A look inside Mohan Dental Care — modern, clean and designed around your comfort.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {GALLERY.map(({ label, img }) => (
              <div key={label} className="card-3d rounded-2xl overflow-hidden aspect-[4/3] relative cursor-default group shadow-card">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-bold text-[0.9rem]">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-ink-700 text-sm mt-5">
            Placeholder images — will be replaced with real clinic photos.
          </p>
        </div>
      </section>

      {/* Why choose us on about page */}
      <section className="py-14 sm:py-20 bg-[#fffdfb]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Our Approach
          </div>
          <h2 className="font-display font-bold text-[clamp(1.7rem,2.8vw,2.2rem)] text-ink-950 mb-10">What Makes Us Different</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z"/>
                  </svg>
                ),
                grad: 'from-purple-500 to-accent-600',
                title: '12 Treatments Under One Roof',
                desc: 'From routine cleanings to wisdom tooth surgery, braces and smile makeovers — no referrals needed for most cases.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="9" width="28" height="20" rx="3"/><circle cx="20" cy="18" r="4"/>
                    <line x1="6" y1="33" x2="34" y2="33"/>
                  </svg>
                ),
                grad: 'from-blue-500 to-blue-700',
                title: 'Digital RVG X-Ray Chairside',
                desc: 'Images appear on screen in 5 seconds, with 80% less radiation than traditional film — diagnosis and planning in the same visit.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8.5"/><path d="M8.5 15.5c1 2 2 2.5 3.5 2.5s2.5-.5 3.5-2.5"/>
                    <circle cx="9.5" cy="10" r="1" fill="currentColor"/>
                    <circle cx="14.5" cy="10" r="1" fill="currentColor"/>
                  </svg>
                ),
                grad: 'from-teal-500 to-teal-700',
                title: 'Unhurried, Gentle Approach',
                desc: 'We take time to explain what is happening, answer your questions and make sure you are comfortable at every stage.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6z"/>
                  </svg>
                ),
                grad: 'from-amber-500 to-orange-600',
                title: 'Premium Crown Materials',
                desc: 'Zirconia, EMAX and DMLS options give you the best material for your specific tooth — strength and aesthetics matched to need.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                grad: 'from-green-500 to-teal-600',
                title: 'Child-Friendly Environment',
                desc: 'Pediatric patients get a specially gentle, fear-free approach that builds positive dental habits early.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z"/>
                  </svg>
                ),
                grad: 'from-pink-500 to-rose-600',
                title: 'Easy Booking via WhatsApp',
                desc: 'No waiting on hold. Fill the form, it opens WhatsApp — appointment confirmed quickly.',
              },
            ].map(({ icon, grad, title, desc }) => (
              <div key={title} className="card-3d bg-white rounded-2xl p-6 border border-[#ece5db] shadow-card cursor-default">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 shadow-[0_8px_20px_-8px_rgba(91,79,224,0.4)]`}>
                  {icon}
                </div>
                <h3 className="font-display font-bold text-[1rem] text-ink-950 mb-2">{title}</h3>
                <p className="text-ink-700 text-[0.9rem] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
