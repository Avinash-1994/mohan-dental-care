import { useScrollReveal, useTilt } from '../utils';

const WHY_ITEMS = [
  {
    gradient: 'from-purple-500 to-accent-600',
    title: 'Comprehensive Care',
    desc: 'Twelve services under one roof — from routine cleanings to wisdom tooth surgery, jaw fracture care and full smile makeovers.',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z"/>
      </svg>
    ),
  },
  {
    gradient: 'from-blue-500 to-purple-600',
    title: 'Modern Equipment',
    desc: 'Digital RVG X-ray and Zirconia, EMAX and DMLS crown materials for faster, more precise treatment.',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="9" width="28" height="20" rx="3"/>
        <circle cx="20" cy="18" r="4"/>
        <line x1="6" y1="33" x2="34" y2="33"/>
        <line x1="12" y1="33" x2="12" y2="36"/>
        <line x1="28" y1="33" x2="28" y2="36"/>
      </svg>
    ),
  },
  {
    gradient: 'from-teal-500 to-teal-700',
    title: 'Comfortable Treatment',
    desc: 'Gentle ultrasonic scaling and a calm, unhurried approach at every appointment.',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5"/>
        <path d="M8.5 15.5c1 2 2 2.5 3.5 2.5s2.5-.5 3.5-2.5"/>
        <circle cx="9.5" cy="10" r="1" fill="currentColor"/>
        <circle cx="14.5" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

function WhyCard({ item, delay }) {
  const tilt = useTilt(10);
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        {...tilt}
        className="svc-card-3d bg-white rounded-2xl p-5 sm:p-8 border border-[#ece5db] shadow-card cursor-default"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-[0_8px_20px_-6px_rgba(91,79,224,0.4)]`}>
          {item.icon}
        </div>
        <h3 className="font-display font-bold text-[1.15rem] text-ink-950 mb-3">{item.title}</h3>
        <p className="text-ink-700 text-[0.95rem] leading-relaxed">{item.desc}</p>
        <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${item.gradient} opacity-30`} />
      </div>
    </div>
  );
}

export default function WhyUs() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-14 sm:py-24 bg-[#f3f1f7] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-accent-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div ref={headRef} className={`text-center mb-8 sm:mb-14 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Our Dental Philosophy
          </div>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.2vw,2.6rem)] text-ink-950 mb-4">
            Why Patients Choose Mohan Dental Care
          </h2>
          <p className="text-ink-700 text-[1.04rem] max-w-[52ch] mx-auto">
            Comprehensive treatment, modern equipment and an unhurried chairside manner.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item, i) => (
            <WhyCard key={item.title} item={item} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
