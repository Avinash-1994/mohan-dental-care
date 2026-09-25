import { useState } from 'react';

export default function FAB() {
  const [open, setOpen] = useState(false);

  const ITEMS = [
    {
      label: 'Call the clinic',
      href: 'tel:+918839557607',
      icon: (
        <svg className="w-5 h-5 text-accent-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z"/>
        </svg>
      ),
    },
    {
      label: 'WhatsApp us',
      href: 'https://wa.me/918839557607',
      external: true,
      icon: (
        <svg className="w-5 h-5 text-teal-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3z"/>
        </svg>
      ),
    },
    {
      label: 'Book appointment',
      href: '#booking',
      icon: (
        <svg className="w-5 h-5 text-accent-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="5" width="17" height="15" rx="2.4"/>
          <line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/>
          <line x1="8" y1="3" x2="8" y2="7"/>
          <line x1="16" y1="3" x2="16" y2="7"/>
        </svg>
      ),
      onClick: (e) => {
        e.preventDefault();
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      <div className="flex flex-col gap-2 items-end mb-1">
        {ITEMS.map(({ label, href, icon, external, onClick }, i) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={(e) => { if (onClick) onClick(e); setOpen(false); }}
            className={`fab-menu-item flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-white text-ink-950 shadow-card border border-[#ece5db] text-[0.87rem] font-bold whitespace-nowrap ${open ? 'open' : ''}`}
            style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
          >
            {icon}
            {label}
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Quick contact options"
        className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] hover:shadow-[0_14px_36px_-8px_rgba(37,211,102,0.65)] transition-all duration-300 ${open ? 'rotate-[135deg] scale-95' : 'hover:-translate-y-1'}`}
      >
        {open ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
