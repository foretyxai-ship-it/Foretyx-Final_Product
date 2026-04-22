import { Github, Twitter, Linkedin } from "lucide-react";
import sohamImg from "../team-pics/soham pic.jpeg";
import soumikImg from "../team-pics/soumik pic.jpeg";
import rishiImg from "../team-pics/rishi pic.jpeg";
import upasnaImg from "../team-pics/upasna pic.jpeg";

const teamMembers = [
  {
    name: "Soham Singh",
    role: "CEO & Co-founder",
    oneLiner: "Leads product strategy and the Control Plane the centralised policy, analytics, and auth layer that governs every deployment.",
    image: sohamImg,
    links: {
      github: "https://github.com/Som007-builds",
      twitter: "https://x.com/soham_sing78648",
      linkedin: "https://www.linkedin.com/in/soham-singh-a21688307/"
    }
  },
  {
    name: "Soumik Misra",
    role: "CTO & Co-founder",
    oneLiner: "Owns the Data Plane sidecar PII detection, ONNX injection models, the guard pipeline, and local inference. The person who built the engine.",
    image: soumikImg,
    links: {
      github: "https://github.com/that-blacksheep",
      linkedin: "https://www.linkedin.com/in/soumik-misra-08837a3aa/"
    }
  },
  {
    name: "Rishi Ghosh",
    role: "COO & Co-founder",
    oneLiner: "Responsible for deployment architecture, CI/CD, and the desktop application. The person who ensures that what Soham designs and Soumik builds actually runs everywhere, every time.",
    image: rishiImg,
    links: {
      github: "https://github.com/rishiii183",
      twitter: "https://x.com/wasRizzii",
      linkedin: "https://www.linkedin.com/in/rishighoshofficial/"
    }
  },
  {
    name: "Upasna Mishra",
    role: "Business & GTM Lead",
    oneLiner: "Drives go-to-market, compliance documentation, and enterprise partnerships. Translates technical architecture into regulatory and commercial value.",
    image: upasnaImg,
    links: {
      linkedin: "https://www.linkedin.com/in/upasna-mishra-b33187386/"
    }
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
            Built by engineers who
            <br />
            <span className="text-white/40">got tired of watching data leak.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden group-hover:border-[#ADE1ED]/30 transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#ADE1ED] transition-colors">{member.name}</h3>
              <span className="font-mono text-[10px] text-[#ADE1ED] uppercase tracking-[0.2em] mb-4 block">
                {member.role}
              </span>
              <p className="text-xs text-white/40 leading-relaxed font-sans max-w-[200px] mb-6">
                {member.oneLiner}
              </p>

              <div className="flex items-center gap-5 mt-auto">
                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-[#ADE1ED] transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.links.twitter && (
                  <a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-[#ADE1ED] transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-[#ADE1ED] transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
