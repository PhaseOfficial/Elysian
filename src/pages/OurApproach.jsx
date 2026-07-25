import { motion } from "framer-motion";
import Methodology from "../components/home/Methodology";
import FAQAndProfessionalBoundaries from "../components/home/FAQAndProfessionalBoundaries";

const OurApproach = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-24 font-sans">
      {/* Hero Header with Animated Background Icons & Animated Gradient */}
      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "account_tree", top: "18%", left: "12%", size: "45px" },
            { icon: "checklist", top: "25%", left: "82%", size: "50px" },
            { icon: "fact_check", top: "70%", left: "10%", size: "40px" },
            { icon: "gavel", top: "65%", left: "85%", size: "48px" },
            { icon: "shield", top: "15%", left: "70%", size: "42px" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.20, 0.45, 0.20],
                y: [0, -30, 0],
                x: [0, (i % 2 === 0 ? 20 : -20), 0]
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                delay: i * 1.2 
              }}
              className="absolute text-[#B6924A]"
              style={{ 
                top: item.top, 
                left: item.left,
                fontSize: item.size
              }}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </motion.div>
          ))}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B6924A]"
          >
            <span className="material-symbols-outlined text-[320px]">account_tree</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">account_tree</span>
            Methodology & Ethics
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Our <span className="text-[#B6924A] italic">Approach</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            A structured 6-step framework anchored in strict professional boundaries, independence, objectivity, and transparent reporting.
          </p>
        </div>
      </section>

      <Methodology />
      <FAQAndProfessionalBoundaries />
    </div>
  );
};

export default OurApproach;
