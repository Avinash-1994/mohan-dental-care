import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home', page: 'home' },
  { label: 'Services', href: '#services', page: 'services' },
  { label: 'About', href: '#about', page: 'about' },
  { label: 'Location', href: '#location', page: null },
  { label: 'Contact', href: '#booking', page: null },
];

export default function Header({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (page, href) => {
    if (page) setActivePage(page);
    setMenuOpen(false);
    if (!page) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(21,19,15,0.2)] border-b border-[#ece5db]'
        : 'bg-white/70 backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-[68px] sm:h-[76px] flex items-center justify-between gap-3 sm:gap-5">

        {/* Brand */}
        <button onClick={() => handleNavClick('home', '#home')} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
            {/* Tooth SVG */}
            <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M20 8c-4.6 0-8.2 2.6-9.4 6-.9 2.4-.2 4.7.7 7.1.9 2.5 1.1 5.2 1.7 7.9.5 2.1 1.2 4.9 2.6 4.9 1.3 0 1.8-2.6 2.3-4.9.4-1.9 1-3.1 2.1-3.1s1.7 1.2 2.1 3.1c.5 2.3 1 4.9 2.3 4.9 1.4 0 2.1-2.8 2.6-4.9.6-2.7.8-5.4 1.7-7.9.9-2.4 1.6-4.7.7-7.1-1.2-3.4-4.8-6-9.4-6z"/>
            </svg>
          </div>
          <div className="text-left">
            <div className="font-display font-bold text-[0.95rem] sm:text-[1.1rem] text-ink-950 leading-tight">Mohan Dental Care</div>
            <div className="hidden xs:block text-[0.6rem] font-semibold tracking-[0.12em] text-ink-700 uppercase">Surajpur · Chhattisgarh</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, page }) => (
            <button
              key={label}
              onClick={() => handleNavClick(page, href)}
              className={`px-4 py-2 rounded-full text-[0.9rem] font-semibold transition-all duration-200 ${
                page && activePage === page
                  ? 'text-ink-950 bg-[#f3f1f7]'
                  : 'text-ink-700 hover:text-ink-950 hover:bg-[#f3f1f7]'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href="tel:+918839557607" className="hidden sm:flex items-center gap-2 text-[0.9rem] font-bold text-ink-950 hover:text-accent-600 transition-colors">
            {/* Phone SVG */}
            <svg className="w-4 h-4 text-accent-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z"/>
            </svg>
            <span>88395 57607</span>
          </a>

          <button
            onClick={() => handleNavClick(null, '#booking')}
            className="btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 text-white text-[0.9rem] font-bold shadow-[0_10px_25px_-8px_rgba(91,79,224,0.5)] hover:shadow-[0_14px_35px_-8px_rgba(91,79,224,0.65)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Calendar SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.5" y="5" width="17" height="15" rx="2.4"/>
              <line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/>
              <line x1="8" y1="3" x2="8" y2="7"/>
              <line x1="16" y1="3" x2="16" y2="7"/>
            </svg>
            <span className="hidden sm:block">Book Now</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#f3f1f7] transition-colors"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-[#ece5db] px-6 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href, page }) => (
            <button
              key={label}
              onClick={() => handleNavClick(page, href)}
              className={`text-left px-4 py-3 rounded-xl text-[0.95rem] font-semibold transition-colors ${
                page && activePage === page ? 'text-accent-600 bg-[#f3f1f7]' : 'text-ink-700 hover:text-ink-950 hover:bg-[#f3f1f7]'
              }`}
            >
              {label}
            </button>
          ))}
          <a href="tel:+918839557607" className="flex items-center gap-2 px-4 py-3 text-[0.95rem] font-bold text-ink-950">
            <svg className="w-4 h-4 text-accent-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z"/>
            </svg>
            88395 57607
          </a>
        </div>
      </div>
    </header>
  );
}
