import { useRef, useState } from 'react';
import { useScrollReveal } from '../utils';

export default function CompareSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);
  const [ref, visible] = useScrollReveal();

  const calcPos = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100));
    setPos(x);
  };

  const onPointerDown = (e) => { setDragging(true); calcPos(e.clientX); e.currentTarget.setPointerCapture(e.pointerId); };
  const onPointerMove = (e) => { if (dragging) calcPos(e.clientX); };
  const onPointerUp = () => setDragging(false);

  return (
    <section className="py-14 sm:py-24 bg-[#fffdfb]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Smile Design Preview
          </div>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.2vw,2.6rem)] text-ink-950 mb-4">
            See How A Smile Can Change
          </h2>
          <p className="text-ink-700 text-[1rem] max-w-[48ch] mx-auto">
            Drag the slider to compare before and after smile design.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto">
          <div
            ref={sliderRef}
            className="compare-slider aspect-[16/9] select-none touch-none rounded-2xl overflow-hidden relative"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            style={{ boxShadow: '0 30px 80px -20px rgba(21,19,15,0.5)', cursor: 'ew-resize' }}
          >
            {/* After image (full width background) */}
            <div className="absolute inset-0">
              <img
                src="/images/smile-compare.png"
                alt="After smile design"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'right center' }}
              />
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/50 backdrop-blur-sm uppercase tracking-wider">
                After
              </div>
            </div>

            {/* Before image (clipped to slider position) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img
                src="/images/smile-compare.png"
                alt="Before smile design"
                className="absolute inset-0 h-full object-cover"
                style={{ width: `${10000 / pos}%`, objectPosition: 'left center', maxWidth: 'none' }}
              />
              {/* Sepia/yellow overlay for "before" look */}
              <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/50 backdrop-blur-sm uppercase tracking-wider">
                Before
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 flex items-center justify-center pointer-events-none"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_8px_25px_-6px_rgba(0,0,0,0.5)] border-2 border-white/80 z-10">
                {/* Drag arrows SVG */}
                <svg className="w-5 h-5 text-ink-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 8l-4 4 4 4M16 8l4 4-4 4"/>
                </svg>
              </div>
            </div>
          </div>

          <p className="text-center text-ink-700 text-sm mt-5 max-w-[50ch] mx-auto">
            Actual patient results — actual results vary by individual treatment plan. Drag the handle to compare.
          </p>

          {/* Book CTA under slider */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/918839557607"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 text-white font-bold text-[0.97rem] shadow-[0_14px_30px_-8px_rgba(91,79,224,0.5)] hover:-translate-y-1 transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8.5"/>
                <path d="M9 17c2.5 6 6.5 9.5 11 9.5" />
                <path d="M9 14c1.5 3.5 4 5 6 5s4.5-1.5 6-5"/>
                <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
                <circle cx="25" cy="10" r="1.5" fill="currentColor"/>
              </svg>
              Book a Smile Design Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
