import { useRef, useEffect } from 'react';
import { getAssetUrl } from '../utils';

export default function Hero({ _setActivePage }) {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const currentRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const rafId = useRef(null);

  const scrollToBooking = (e) => {
    e.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (!cardRef.current || !heroRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const deltaX = e.clientX - cardCenterX;
    const deltaY = e.clientY - cardCenterY;

    const heroRect = heroRef.current.getBoundingClientRect();
    const halfHeroW = heroRect.width / 2 || 1;
    const halfHeroH = heroRect.height / 2 || 1;

    const dist = Math.hypot(deltaX, deltaY);
    const maxDist = Math.hypot(halfHeroW, halfHeroH) || 1;
    // Proximity factor: cursor close to image has slightly stronger responsiveness (0.6 to 1.0)
    const proximity = Math.max(0.6, 1 - (dist / maxDist) * 0.4);

    // Normalized ratios between -1 and 1
    const ratioX = Math.max(-1, Math.min(1, deltaX / (halfHeroW * 0.75)));
    const ratioY = Math.max(-1, Math.min(1, deltaY / (halfHeroH * 0.75)));

    // Movement within ±8px (moves with cursor direction: left->left, right->right, up->up, down->down)
    targetRef.current.x = Number((ratioX * 8 * proximity).toFixed(2));
    targetRef.current.y = Number((ratioY * 8 * proximity).toFixed(2));

    // Subtle 3D tilt within ±1.2deg
    targetRef.current.rotY = Number((-ratioX * 1.2 * proximity).toFixed(2));
    targetRef.current.rotX = Number((ratioY * 1.0 * proximity).toFixed(2));
  };

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0, rotX: 0, rotY: 0 };
  };

  useEffect(() => {
    let isRunning = true;

    const animate = () => {
      if (!isRunning) return;

      const current = currentRef.current;
      const target = targetRef.current;

      // Smooth lerp interpolation factor
      const lerp = 0.08;
      current.x += (target.x - current.x) * lerp;
      current.y += (target.y - current.y) * lerp;
      current.rotX += (target.rotX - current.rotX) * lerp;
      current.rotY += (target.rotY - current.rotY) * lerp;

      if (cardRef.current) {
        cardRef.current.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0) rotateX(${current.rotX.toFixed(2)}deg) rotateY(${current.rotY.toFixed(2)}deg)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      isRunning = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-[76px] pb-12 sm:pb-20 overflow-hidden bg-[#F8FAFA]"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] bg-[#E8F1F8] rounded-full blur-[100px] pointer-events-none opacity-60" />
      <div className="absolute bottom-10 left-[-100px] w-[380px] h-[380px] bg-[#EEF1F1] rounded-full blur-[90px] pointer-events-none opacity-70" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* ── Left: Text content (7 cols) ── */}
        <div className="lg:col-span-7 text-left">
          {/* Eyebrow */}
          <div className="animate-hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#123b5d]" />
            MODERN DENTISTRY • PERSONALIZED CARE
          </div>

          <h1 className="animate-hero-heading font-display font-bold text-[clamp(2.1rem,4.2vw,3.4rem)] text-[#03213B] leading-[1.14] mb-5 tracking-tight">
            Complete Dental Care.<br />
            <span className="gradient-text">From a Filling to a Full Smile Makeover.</span>
          </h1>

          <p className="animate-hero-desc text-[#66737F] text-[1.02rem] sm:text-[1.1rem] leading-relaxed max-w-[54ch] mb-8">
            Under the care of <strong className="text-[#03213B]">Dr. P. R. Rajwade, BDS</strong>. Dedicated to gentle, comprehensive dentistry with modern digital imaging and comfortable chairside treatments in Surajpur.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="animate-hero-cta flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="btn-shimmer flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#123b5d] hover:bg-[#0c2a44] text-white font-bold text-[0.96rem] shadow-[0_10px_25px_-6px_rgba(18,59,93,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
                <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
                <line x1="8" y1="3" x2="8" y2="7" />
                <line x1="16" y1="3" x2="16" y2="7" />
              </svg>
              Book Appointment
            </a>

            <a
              href="tel:+918839557607"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-[#03213B] text-[#03213B] font-bold text-[0.96rem] hover:bg-[#03213B] hover:text-white active:scale-[0.98] transition-all duration-200"
            >
              <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
              </svg>
              Call Clinic
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="animate-hero-trust pt-6 border-t border-[#E5E8E8] flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2.5">
              <div className="flex text-[#BFA88F]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#03213B]">4.9 Google Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#123b5d]" />
              <span className="text-xs sm:text-sm font-bold text-[#03213B]">500+ Patients</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#BFA88F]" />
              <span className="text-xs sm:text-sm font-bold text-[#03213B]">10+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* ── Right: Premium Doctor Card (5 cols) ── */}
        <div className="lg:col-span-5 flex justify-center animate-hero-image">
          {/* Parallax + Tilt interactive container */}
          <div
            ref={cardRef}
            className="relative w-full max-w-[360px] sm:max-w-[400px]"
            style={{
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* Organic continuous floating container */}
            <div className="hero-organic-float w-full">
              {/* Main Rounded Image Container */}
              <div className="group bg-white rounded-[24px] sm:rounded-[28px] p-3 shadow-[0_20px_50px_-15px_rgba(3,33,59,0.12)] border border-[#E5E8E8] relative transition-shadow duration-300">
                <div className="rounded-[20px] overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#133A5B] to-[#03213B] relative">
                  <img
                    src={getAssetUrl('images/dr_p_r_rajwade.webp')}
                    alt="Dr. P. R. Rajwade, BDS"
                    className="w-full h-full object-cover object-top transition-transform duration-400 ease-out group-hover:scale-[1.01] group-hover:rotate-[0.5deg]"
                  />
                  
                  {/* Clean Bottom Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#03213B] via-[#03213B]/80 to-transparent">
                    <p className="text-white font-display font-bold text-base sm:text-lg leading-tight">Dr. P. R. Rajwade</p>
                    <p className="text-[#BFA88F] text-xs font-medium">B.D.S. — Govt. Dental College, Raipur</p>
                  </div>
                </div>

                {/* Floating Card 1: Experience & Trust */}
                <div className="floating-badge-1 hidden sm:flex absolute -left-6 bottom-16 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_12px_30px_-8px_rgba(3,33,59,0.15)] items-center gap-3 border border-[#E5E8E8]">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F1F8] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-[#66737F] font-bold uppercase tracking-wider">Experience</p>
                    <p className="text-[0.88rem] font-bold text-[#03213B]">10+ Years Clinical Care</p>
                  </div>
                </div>

                {/* Floating Card 2: Rating & Smiles */}
                <div className="floating-badge-2 hidden sm:flex absolute -right-6 top-12 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_12px_30px_-8px_rgba(3,33,59,0.15)] items-center gap-3 border border-[#E5E8E8]">
                  <div className="w-9 h-9 rounded-xl bg-[#F8FAFA] flex items-center justify-center flex-shrink-0 text-[#BFA88F]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-[#66737F] font-bold uppercase tracking-wider">Google Verified</p>
                    <p className="text-[0.88rem] font-bold text-[#03213B]">4.9 ★ Rating</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
