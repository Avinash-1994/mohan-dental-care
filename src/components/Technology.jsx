import { useScrollReveal, useTilt } from '../utils';

const TECH_ITEMS = [
  {
    grad: 'from-ink-800 to-ink-950',
    title: 'Digital X-Ray (RVG)',
    desc: 'RadioVisioGraphy gives an instant chairside image using far less radiation than traditional film, so the doctor can plan treatment in the same visit.',
    img: '/images/xray.png',
    icon: (
      <svg className="w-7 h-7 text-accent-400" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="9" width="28" height="20" rx="3"/>
        <circle cx="20" cy="18" r="4"/>
        <line x1="6" y1="33" x2="34" y2="33"/>
        <line x1="12" y1="33" x2="12" y2="36"/>
        <line x1="28" y1="33" x2="28" y2="36"/>
      </svg>
    ),
  },
  {
    grad: 'from-purple-900 to-ink-950',
    title: 'Zirconia, EMAX & DMLS',
    desc: 'Zirconia offers strength for back teeth, EMAX offers natural translucency for visible teeth, and DMLS metal frameworks add extra durability where needed.',
    img: '/images/treatment.png',
    icon: (
      <svg className="w-7 h-7 text-accent-400" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l3.5 4 4-6.5 3.5 5.5 3.5-5.5 4 6.5 3.5-4v6h-21.5z"/>
        <rect x="9" y="18" width="22" height="8" rx="2"/>
      </svg>
    ),
  },
  {
    grad: 'from-teal-900 to-ink-950',
    title: 'Ultrasonic Scaling',
    desc: 'High-frequency vibration breaks up plaque and tartar gently, clearing the gumline without the scraping of manual tools.',
    img: '/images/sterilization.png',
    icon: (
      <svg className="w-7 h-7 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z"/>
      </svg>
    ),
  },
];

function TechCard({ item, delay }) {
  const tilt = useTilt(8);
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        {...tilt}
        className="tech-card-3d rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] h-full cursor-default"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Image preview with dark overlay */}
        <div className="relative h-40 overflow-hidden">
          <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50"/>
          <div className={`absolute inset-0 bg-gradient-to-b ${item.grad} opacity-80`}/>
          <div className="absolute bottom-4 left-5">
            {item.icon}
          </div>
        </div>
        {/* Dark content area */}
        <div className="bg-[#1c1712] border border-white/10 border-t-0 rounded-b-2xl p-6">
          <h3 className="font-display font-bold text-[1.12rem] text-white mb-3">{item.title}</h3>
          <p className="text-[#b3ada2] text-[0.94rem] leading-relaxed">{item.desc}</p>
          <div className="mt-5 h-0.5 bg-gradient-to-r from-accent-500/60 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function Technology({ isAbout = false }) {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className={`py-14 sm:py-24 relative overflow-hidden ${isAbout ? 'bg-[#f3f1f7]' : 'bg-ink-950'}`}>
      {!isAbout && (
        <div className="glow-orb w-[400px] h-[400px] bg-accent-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"/>
      )}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative">
        <div
          ref={headRef}
          className={`mb-8 sm:mb-14 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/15 text-accent-400 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-400" />
            Equipment &amp; Materials
          </div>
          <h2 className={`font-display font-bold text-[clamp(1.9rem,3.2vw,2.6rem)] mb-4 ${isAbout ? 'text-ink-950' : 'text-white'}`}>
            Modern Equipment, Used Chairside
          </h2>
          <p className={`text-[1.04rem] max-w-[52ch] ${isAbout ? 'text-ink-700' : 'text-[#b3ada2]'}`}>
            The materials and imaging that make treatments faster, more precise and longer lasting.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {TECH_ITEMS.map((item, i) => (
            <TechCard key={item.title} item={item} delay={i * 150}/>
          ))}
        </div>
      </div>
    </section>
  );
}
