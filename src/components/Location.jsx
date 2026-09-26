import { useState } from 'react';
import { useScrollReveal, getAssetUrl } from '../utils';

export default function Location() {
  const [viewMode, setViewMode] = useState('office');
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const addr = "Mohan Dental Care, M.G. Road, opposite Bajaj Showroom, Surajpur, Chhattisgarh";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;

  const INFO = [
    {
      title: 'Clinic Address',
      desc: 'M.G. Road, opposite Bajaj Showroom, Surajpur, Chhattisgarh - 497229',
      icon: (
        <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s7-6.3 7-11.5S16.4 3 12 3 5 5.4 5 9.5 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.6" />
        </svg>
      ),
    },
    {
      title: 'Opening Hours',
      desc: 'Monday – Saturday: 9:00 AM – 8:00 PM · Sunday by appointment only',
      icon: (
        <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      ),
    },
    {
      title: 'Phone & WhatsApp',
      desc: '+91 88395 57607 · +91 62671 04997',
      icon: (
        <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F8FAFA] border-t border-[#E5E8E8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* Left info */}
        <div ref={leftRef} className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#123b5d]" />
            FIND OUR CLINIC
          </div>
          <h2 className="font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3">
            Visit Mohan Dental Care
          </h2>
          <p className="text-[#66737F] text-[1.02rem] mb-8">
            Centrally located on M.G. Road opposite the Bajaj Showroom, with easy parking and immediate road access.
          </p>

          <div className="flex flex-col divide-y divide-[#E5E8E8] mb-8">
            {INFO.map(({ title, desc, icon }) => (
              <div key={title} className="flex gap-4 items-start py-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {icon}
                </div>
                <div>
                  <h4 className="font-bold text-[0.96rem] text-[#03213B] mb-1">{title}</h4>
                  <p className="text-[#66737F] text-[0.92rem] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#03213B] hover:bg-[#133A5B] text-white font-bold text-[0.92rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="2.3" />
                <circle cx="18" cy="18" r="2.3" />
                <path d="M6 8.3v3.2a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4" />
              </svg>
              <span>Get Directions</span>
            </a>

            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#123b5d] text-[#123b5d] hover:bg-[#E8F1F8] font-bold text-[0.92rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
                <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
              </svg>
              <span>Book Appointment</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive Clinic Office Photo (office.png) & Map Switcher */}
        <div ref={rightRef} className={`transition-all duration-700 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="rounded-3xl overflow-hidden border border-[#E5E8E8] shadow-[0_10px_35px_-10px_rgba(3,33,59,0.1)] bg-white p-3">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-[#EEF1F1] rounded-2xl mb-3">
              <button
                type="button"
                onClick={() => setViewMode('office')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${viewMode === 'office' ? 'bg-white text-[#03213B] shadow-sm' : 'text-[#66737F] hover:text-[#03213B]'}`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span>Clinic Office Photo</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('map')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${viewMode === 'map' ? 'bg-white text-[#03213B] shadow-sm' : 'text-[#66737F] hover:text-[#03213B]'}`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                <span>Road Map &amp; Route</span>
              </button>
            </div>

            {/* View Mode: Clinic Office Photo */}
            {viewMode === 'office' ? (
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-[#EEF1F1] group">
                <img
                  src={getAssetUrl('images/office.png')}
                  alt="Mohan Dental Care Clinic Office & Consultation Room"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#03213B] via-[#03213B]/80 to-transparent text-left">
                  <p className="text-white font-display font-bold text-sm">Consultation Office &amp; Reception</p>
                  <p className="text-[#BFA88F] text-xs font-medium">Mohan Dental Care • Dr. P. R. Rajwade, BDS</p>
                </div>
              </div>
            ) : (
              /* View Mode: Map */
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-[#EEF1F1]">
                <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="480" height="360" fill="#EEF1F1" />
                  <g opacity="0.3">
                    <path d="M0 0h480M0 40h480M0 80h480M0 120h480M0 160h480M0 200h480M0 240h480M0 280h480M0 320h480" stroke="#d5d7d5" strokeWidth="1" />
                    <path d="M40 0v360M80 0v360M120 0v360M160 0v360M200 0v360M240 0v360M280 0v360M320 0v360M360 0v360M400 0v360M440 0v360" stroke="#d5d7d5" strokeWidth="1" />
                  </g>
                  <path d="M-20 280 C 120 240, 220 300, 340 190 S 480 60, 520 20" stroke="#133A5B" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.9" />
                  <path d="M-20 280 C 120 240, 220 300, 340 190 S 480 60, 520 20" stroke="#123b5d" strokeWidth="2" strokeDasharray="10 8" fill="none" opacity="0.8" />
                  <text x="140" y="248" fontFamily="Hind,sans-serif" fontSize="12" fill="#546576" fontWeight="700">M.G. Road</text>
                  <rect x="298" y="130" width="84" height="46" rx="6" fill="#133A5B" />
                  <text x="340" y="158" textAnchor="middle" fontFamily="Hind,sans-serif" fontSize="10" fill="#fff" fontWeight="600">Bajaj Showroom</text>
                  <circle cx="265" cy="180" r="26" fill="#123b5d" opacity="0.2">
                    <animate attributeName="r" values="18;34;18" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                  <path d="M265 152c-10 0-17 7.5-17 17 0 13 17 30 17 30s17-17 17-30c0-9.5-7-17-17-17z" fill="#123b5d" stroke="#fff" strokeWidth="2" />
                  <circle cx="265" cy="169" r="6" fill="#fff" />
                  <rect x="195" y="196" width="140" height="30" rx="15" fill="#03213B" />
                  <text x="265" y="216" textAnchor="middle" fontFamily="Hind,sans-serif" fontWeight="700" fontSize="11" fill="#fff">Mohan Dental Care</text>
                </svg>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
