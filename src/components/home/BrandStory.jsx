import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import founderImg from "../../assets/gin proffessional photo.jpeg";
import teamImg from "../../assets/stock/team-meeting.jpg";

const BrandStory = () => {
  return (
    <section className="py-28 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Visual Grid - Featuring Founder Portrait */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-3xl overflow-hidden border-2 border-[#B6924A]/40 shadow-2xl h-72 md:h-80 bg-[#16222F] relative group">
                <img src={founderImg} alt="Jean Sigauke - Founder & Director of Elysian Consulting Ltd" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center p-2.5 bg-[#1E2A38]/85 backdrop-blur-md rounded-xl border border-[#B6924A]/30">
                  <span className="text-xs font-bold text-[#B6924A] block">Jean Sigauke</span>
                  <span className="text-[9px] text-white/70 uppercase tracking-widest block">Founder & Director</span>
                </div>
              </div>
              <div className="p-5 rounded-3xl bg-[#B6924A] text-[#1E2A38] shadow-xl">
                <span className="text-2xl md:text-3xl font-bold block">UK</span>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Leadership & Governance Standards</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-8"
            >
              <div className="p-5 rounded-3xl bg-[#16222F] border border-white/10 text-white shadow-xl">
                <span className="text-2xl md:text-3xl font-bold text-[#B6924A] block">100%</span>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Independent Representation</span>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-64 md:h-72 bg-[#16222F]">
                <img src={teamImg} alt="Elysian Leadership and Professional Team" className="w-full h-full object-cover" />
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
              &ldquo;Distance should never be a barrier to opportunity, progress or peace of mind. Elysian Global was founded to bridge the gap between international clients and dependable local execution.&rdquo;
            </p>
            <p>
              &ldquo;Having built and led organisations in the United Kingdom, I understand the importance of strong governance, trusted partnerships, accountability, and practical implementation. I also understand the challenges faced by people living abroad who want to invest, establish projects, or support family members but need trusted eyes and ears on the ground.&rdquo;
            </p>
            <p>
              &ldquo;Every engagement is guided by integrity, professionalism and accountability — because we know that wherever you are in the world, you deserve a partner who protects your interests as if they were our own.&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={founderImg} alt="Jean Sigauke" className="w-12 h-12 rounded-full object-cover border-2 border-[#B6924A] flex-shrink-0" />
              <div>
                <h4 className="text-base font-bold text-[#B6924A]">Jean Sigauke</h4>
                <p className="text-xs text-white/60 uppercase tracking-wider">Founder & Director | Elysian Consulting Ltd</p>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="px-5 py-3 bg-[#B6924A] text-[#1E2A38] rounded-xl font-semibold text-xs hover:bg-white transition-all uppercase tracking-wider whitespace-nowrap"
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
