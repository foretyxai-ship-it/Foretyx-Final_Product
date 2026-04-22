import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

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
    <nav className={`fixed top-0 left-0 right-0 z-[9999] flex items-center justify-end px-6 md:px-12 py-4 transition-opacity duration-300 bg-transparent ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex items-center gap-8">
        <a href="#how-it-works" className="font-mono text-[12px] uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
          How It Works
        </a>
        <a href="#approach" className="font-mono text-[12px] uppercase tracking-[0.1em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
          Why Foretyx
        </a>
        <a href="#use-cases" className="font-mono text-[12px] uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
          Use Cases
        </a>
        <a href="#faq" className="font-mono text-[12px] uppercase tracking-[0.2em] text-primary-foreground/70 hover:text-primary-foreground transition-all">
          FAQ
        </a>
        <a href="#early-access" className="btn-early-access">
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
          Request Early Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
