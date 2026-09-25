export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-[#c9c3ba] pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                {/* Tooth SVG */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                  <path d="M20 8c-4.6 0-8.2 2.6-9.4 6-.9 2.4-.2 4.7.7 7.1.9 2.5 1.1 5.2 1.7 7.9.5 2.1 1.2 4.9 2.6 4.9 1.3 0 1.8-2.6 2.3-4.9.4-1.9 1-3.1 2.1-3.1s1.7 1.2 2.1 3.1c.5 2.3 1 4.9 2.3 4.9 1.4 0 2.1-2.8 2.6-4.9.6-2.7.8-5.4 1.7-7.9.9-2.4 1.6-4.7.7-7.1-1.2-3.4-4.8-6-9.4-6z"/>
                </svg>
              </div>
              <span className="font-display font-extrabold text-[1.1rem] text-white">Mohan Dental Care</span>
            </div>
            <p className="text-sm text-[#a39d92] leading-relaxed max-w-[32ch]">
              Complete oral &amp; dental healthcare on M.G. Road, Surajpur, under Dr. P. R. Rajwade, BDS. Reg. CGDC/G/23/3989.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h5 className="text-white text-[0.83rem] font-bold mb-5 uppercase tracking-wider">Explore</h5>
            <ul className="flex flex-col gap-3">
              {['Home', 'Services', 'About &amp; Doctor', 'Gallery'].map(label => (
                <li key={label}>
                  <a href="#" className="text-[0.9rem] text-[#b3ada2] hover:text-accent-400 transition-colors duration-200"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h5 className="text-white text-[0.83rem] font-bold mb-5 uppercase tracking-wider">Visit</h5>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'M.G. Road, Surajpur, C.G.', href: '#location' },
                { label: '88395 57607', href: 'tel:+918839557607' },
                { label: '62671 04997', href: 'tel:+916267104997' },
                { label: 'Book an Appointment', href: '#booking' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[0.9rem] text-[#b3ada2] hover:text-accent-400 transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-wrap gap-4 justify-between text-[0.82rem] text-[#8a8479]">
          <span>© {year} Mohan Dental Care, Surajpur</span>
          <span>9:00 AM – 8:00 PM · Sunday by appointment only</span>
        </div>
      </div>
    </footer>
  );
}
