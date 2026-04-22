import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/#team-preview" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#ADE1ED] transition-colors font-mono text-[10px] uppercase tracking-widest mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>
        </div>
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
