import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section relative min-h-screen px-6 md:px-12 pt-6 pb-12 overflow-hidden flex flex-col">
      {/* Logo moved here to scroll away naturally */}
      <div className="py-4">
        <a href="/" className="font-mono text-2xl font-bold tracking-tighter text-primary-foreground">
          FORETYX
        </a>
      </div>
      {/* --- BACKGROUND TEXT --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[25vw] font-black leading-none tracking-tighter block px-20 uppercase text-primary-foreground">
              FORETYX
            </span>
          ))}
        </div>
      </div>


      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-4xl mt-12 mb-auto">
        {/* mt-8 pulls the headline close to the logo, my-auto keeps the content vertically balanced */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-[-0.04em] text-primary-foreground mb-8">
          Your employees use AI.
          <br />
          Your data shouldn't leave the building.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 font-sans">
          Foretyx is an on-device AI security gateway. It intercepts employee prompts before they reach any external LLM scrubbing PII, blocking injections, and enforcing your org's policies. Entirely on your infrastructure. Zero raw data ever leaves unprotected.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a href="#early-access" className="btn-rig">
            Request Early Access
          </a>
          <a
            href="#how-it-works"
            className="btn-rig-outline !text-primary-foreground before:!border-primary-foreground/30 hover:before:!bg-primary-foreground/10"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;