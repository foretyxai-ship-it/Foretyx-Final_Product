import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import sohamImg from "../team-pics/soham pic.jpeg";
import soumikImg from "../team-pics/soumik pic.jpeg";
import rishiImg from "../team-pics/rishi pic.jpeg";
import upasnaImg from "../team-pics/upasna pic.jpeg";

const teamPreview = [
  { name: "Soham Singh", image: sohamImg },
  { name: "Soumik Misra", image: soumikImg },
  { name: "Rishi Ghosh", image: rishiImg },
  { name: "Upasna Mishra", image: upasnaImg },
];

const TeamButtonSection = () => {
  const navigate = useNavigate();

  return (
    <section id="team-preview" className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ADE1ED]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-6 block">
          Elite Engineering
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-12">
          Built by engineers who<br />
          <span className="text-white/40">know the cost of data leaks.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {teamPreview.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 overflow-hidden group-hover:border-[#ADE1ED]/50 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(173,225,237,0.15)] relative aspect-square [transform:translateZ(0)] [antialiased]">
                {/* Base Layer - Static dimmed version */}
                <img 
                  src={member.image} 
                  alt=""
                  className="block mx-auto w-full h-full object-cover opacity-40 [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges] [shape-rendering:crispEdges] [backface-visibility:hidden] [transform:translateZ(0)]"
                />
                {/* Top Layer (Color) - Fade only */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 block mx-auto w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out [will-change:opacity] [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges] [shape-rendering:crispEdges] [backface-visibility:hidden] [transform:translateZ(0)]"
                />
              </div>
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{member.name}</span>
            </div>
          ))}
        </div>

        <Link
          to="/team"
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-[#ADE1ED] transition-all duration-300 rounded-full font-bold text-sm tracking-wider uppercase overflow-hidden"
        >
          <span className="relative z-10">View Full Team</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default TeamButtonSection;
