import { useScrollReveal } from '../utils';

export default function TrustBand() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-12 sm:py-16 bg-[#fffdfb]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`bg-ink-950 rounded-2xl sm:rounded-3xl px-5 sm:px-10 py-8 sm:py-12 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-6 relative overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 sm:gap-5 relative max-w-full sm:max-w-[520px]">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-accent-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.1 6.6 7.1.6-5.2 5 1.6 7L12 18l-6.6 3.2 1.6-7L1.8 9.2l7.1-.6z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-[1.3rem] text-white mb-1.5">
                Read What Patients Say on Google
              </h3>
              <p className="text-[#c9c3ba] text-[0.94rem]">
                We're building our reviews online — check the latest directly on Google.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Mohan+Dental+Care+Surajpur+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer relative flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 text-white font-bold shadow-[0_14px_30px_-8px_rgba(91,79,224,0.55)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-8px_rgba(91,79,224,0.7)] transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.1 6.6 7.1.6-5.2 5 1.6 7L12 18l-6.6 3.2 1.6-7L1.8 9.2l7.1-.6z"/>
            </svg>
            View Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
