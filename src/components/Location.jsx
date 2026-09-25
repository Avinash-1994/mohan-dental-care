import { useScrollReveal } from '../utils';

export default function Location() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const addr = "Mohan Dental Care, M.G. Road, opposite Bajaj Showroom, Surajpur, Chhattisgarh";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;

  const INFO = [
    {
      title: 'Address',
      desc: 'M.G. Road, opposite Bajaj Showroom, Surajpur, Chhattisgarh',
      icon: (
        <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s7-6.3 7-11.5S16.4 3 12 3 5 5.4 5 9.5 12 21 12 21z"/>
          <circle cx="12" cy="9.5" r="2.6"/>
        </svg>
      ),
    },
    {
      title: 'Timings',
      desc: '9:00 AM – 8:00 PM · Sunday by appointment only',
      icon: (
        <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8.5"/>
          <path d="M12 7.5V12l3 2"/>
        </svg>
      ),
    },
    {
      title: 'Phone',
      desc: '88395 57607 · 62671 04997',
      icon: (
        <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="location" className="py-14 sm:py-24 bg-[#fffdfb]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Left info */}
        <div ref={leftRef} className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Find Us
          </div>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.2vw,2.6rem)] text-ink-950 mb-3">Find The Clinic</h2>
          <p className="text-ink-700 text-[1.04rem] mb-10">
            On M.G. Road, opposite the Bajaj showroom — easy to spot, easy to reach.
          </p>

          <div className="flex flex-col divide-y divide-[#ece5db]">
            {INFO.map(({ title, desc, icon }) => (
              <div key={title} className="flex gap-4 items-start py-5">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-[0.98rem] text-ink-950 mb-1">{title}</h4>
                  <p className="text-ink-700 text-[0.94rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-[#ece5db] text-ink-950 font-bold hover:border-accent-500 hover:bg-accent-500/5 transition-all duration-200"
          >
            {/* Route SVG */}
            <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="2.3"/>
              <circle cx="18" cy="18" r="2.3"/>
              <path d="M6 8.3v3.2a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4"/>
            </svg>
            Get Directions
          </a>
        </div>

        {/* Right animated SVG map */}
        <div ref={rightRef} className={`transition-all duration-700 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="card-3d rounded-3xl overflow-hidden border border-[#ece5db] shadow-card" style={{ transformStyle: 'preserve-3d' }}>
            <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <rect width="480" height="380" fill="#f3f1f7"/>
              <g opacity="0.4">
                <path d="M0 0h480M0 40h480M0 80h480M0 120h480M0 160h480M0 200h480M0 240h480M0 280h480M0 320h480M0 360h480" stroke="#ece5db" strokeWidth="1"/>
                <path d="M40 0v380M80 0v380M120 0v380M160 0v380M200 0v380M240 0v380M280 0v380M320 0v380M360 0v380M400 0v380M440 0v380" stroke="#ece5db" strokeWidth="1"/>
              </g>
              <path d="M-20 300 C 120 260, 220 320, 340 210 S 480 60, 520 20" stroke="#8478ef" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.9"/>
              <path d="M-20 300 C 120 260, 220 320, 340 210 S 480 60, 520 20" stroke="#fff" strokeWidth="2" strokeDasharray="12 10" fill="none" opacity="0.7"/>
              <text x="150" y="268" fontFamily="Hind,sans-serif" fontSize="13" fill="#6b6560" fontWeight="700">M.G. Road</text>
              <rect x="298" y="148" width="80" height="50" rx="6" fill="#2a2419"/>
              <text x="338" y="178" textAnchor="middle" fontFamily="Hind,sans-serif" fontSize="10" fill="#fff" fontWeight="600">Bajaj Showroom</text>
              <circle cx="270" cy="195" r="26" fill="#8478ef" opacity="0.15">
                <animate attributeName="r" values="20;36;20" dur="2.6s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.25;0;0.25" dur="2.6s" repeatCount="indefinite"/>
              </circle>
              <path d="M270 165c-11 0-19 8.5-19 19 0 14 19 34 19 34s19-20 19-34c0-10.5-8-19-19-19z" fill="#5b4fe0" stroke="#fff" strokeWidth="2"/>
              <circle cx="270" cy="184" r="7" fill="#fff"/>
              <rect x="200" y="203" width="140" height="32" rx="16" fill="#15130f"/>
              <text x="270" y="224" textAnchor="middle" fontFamily="Hind,sans-serif" fontWeight="700" fontSize="12" fill="#fff">Mohan Dental Care</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
