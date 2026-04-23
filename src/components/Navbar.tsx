import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { pathname } = useLocation();
  const isTeamPage = pathname === "/team";

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const heroHeight = hero.offsetHeight;
        setIsVisible(window.scrollY < heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-4 md:px-12 py-3 md:py-4 transition-opacity duration-300 bg-transparent ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {isTeamPage ? (
        <Link
          to="/#team-preview"
          aria-label="Navigate back to the homepage overview"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#ADE1ED] transition-colors font-mono text-[10px] uppercase tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" />
          <span className="hidden sm:inline">Back to Overview</span>
          <span className="sm:hidden">Back</span>
        </Link>
      ) : (
        <div />
      )}

      <div className="flex items-center gap-4 md:gap-8">
        {!isTeamPage && (
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" aria-label="Navigate to How It Works section" className="font-mono text-[12px] uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
              How It Works
            </a>
            <a href="#approach" aria-label="Navigate to Why Foretyx section" className="font-mono text-[12px] uppercase tracking-[0.1em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
              Why Foretyx
            </a>
            <a href="#use-cases" aria-label="Navigate to Use Cases section" className="font-mono text-[12px] uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
              Use Cases
            </a>
            <a href="#faq" aria-label="Navigate to FAQ section" className="font-mono text-[12px] uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
              FAQ
            </a>
          </div>
        )}
        <a href="#early-access" aria-label="Request early access to Foretyx" className="btn-early-access text-[11px] md:text-[13px] px-4 md:px-6 py-2 md:py-3">
          <span className="btn-icon-wrapper">
            <svg
              width="10"
              className="btn-icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>

            <svg
              className="btn-icon-svg btn-icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
          <span className="hidden sm:inline">Request Early Access</span>
          <span className="sm:hidden">Early Access</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
