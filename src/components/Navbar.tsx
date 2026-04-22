import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Foretyx", href: "#approach" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8 md:py-10'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="font-mono text-xl md:text-2xl font-black tracking-tighter text-primary-foreground relative z-[110]">
          FORETYX
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary-foreground/60 hover:text-primary-foreground transition-all duration-300">
              {link.name}
            </a>
          ))}
          <a href="#early-access" className="btn-early-access">
            <span className="btn-icon-wrapper">
              <svg width="10" className="btn-icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
              <svg className="btn-icon-svg btn-icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
            </span>
            Request Early Access
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-[110] p-2 text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-background z-[105] flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full invisible'}`}>
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-mono text-lg uppercase tracking-[0.4em] text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#early-access" 
            className={`btn-early-access mt-6 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            onClick={() => setIsMenuOpen(false)}
          >
            Request Early Access
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
