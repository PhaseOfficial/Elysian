import { motion } from "framer-motion";
import BrandStory from "../components/home/BrandStory";
import Certification from "../components/home/Certification";

const About = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-24 font-sans">
      {/* Hero Header with Animated Background Icons & Animated Gradient */}
      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "verified_user", top: "20%", left: "12%", size: "45px" },
            { icon: "badge", top: "25%", left: "82%", size: "50px" },
            { icon: "gavel", top: "70%", left: "10%", size: "40px" },
            { icon: "menu_book", top: "65%", left: "85%", size: "48px" },
            { icon: "public", top: "15%", left: "70%", size: "42px" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.04, 0.12, 0.04],
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
            animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B6924A]"
          >
            <span className="material-symbols-outlined text-[320px]">corporate_fare</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">info</span>
            UK Leadership & Standards
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            About <span className="text-[#B6924A] italic">Elysian Consulting</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Operating under internationally recognized principles of governance, professionalism, accountability, and quality. Connecting UK healthcare & leadership standards with in-country execution across Southern Africa and Europe.
          </p>
        </div>
      </section>

      <BrandStory />
      <Certification />
    </div>
  );
};

export default About;
