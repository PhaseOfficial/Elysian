import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import carerTeamImg from "../../assets/carer team.png";
import missionImg from "../../assets/mission.png";

const BrandStory = () => {
  return (
    <section className="py-28 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Visual Grid */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-64 bg-[#16222F]">
                <img src={carerTeamImg} alt="Elysian Leadership and Professional Team" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 rounded-3xl bg-[#B6924A] text-[#1E2A38] shadow-xl">
                <span className="text-3xl font-bold block">UK</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Leadership & Governance Standards</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-8"
            >
              <div className="p-6 rounded-3xl bg-[#16222F] border border-white/10 text-white shadow-xl">
                <span className="text-3xl font-bold text-[#B6924A] block">100%</span>
                <span className="text-xs font-semibold uppercase tracking-wider">Independent Representation</span>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-64 bg-[#16222F]">
                <img src={missionImg} alt="Elysian Mission & Vision" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Founder's Message Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">record_voice_over</span>
            A Message From Our Founder
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Bridging Experience, Governance & Action.
          </h2>

          <div className="space-y-4 text-white/80 font-light leading-relaxed text-base">
            <p>
              "Elysian Consulting Ltd was born from my desire to use my experience in UK healthcare, leadership, entrepreneurship, and service development to contribute to sustainable progress in Zimbabwe and across the region."
            </p>
            <p>
              "Having built and led organisations in the United Kingdom, I understand the importance of strong systems, trusted partnerships, accountability, and practical implementation. I also understand the challenges faced by people living abroad who want to invest, establish projects, or support family members but need trusted eyes and ears on the ground."
            </p>
          </div>

          <div className="pt-4 border-t border-white/15 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-[#B6924A]">Jean Sigauke</h4>
              <p className="text-xs text-white/60 uppercase tracking-wider">Founder & Director | Elysian Consulting Ltd</p>
            </div>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-[#B6924A] text-[#1E2A38] rounded-xl font-semibold text-xs hover:bg-white transition-all uppercase tracking-wider"
            >
              Contact Founder
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;
