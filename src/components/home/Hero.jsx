import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import d3Img from "../../assets/d3.png";
import logo from "../../assets/elysian logo.PNG";

const Hero = ({ fadeInUp, staggerContainer, floatAnimation }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-36 pb-24 px-6 md:px-12 overflow-hidden animate-hero-gradient text-white border-b border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          {/* Prominent Company Brand Emblem */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
            <img src={logo} alt="Elysian Consulting Ltd Logo" className="h-16 md:h-20 w-auto object-contain bg-white/10 p-2.5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md" />
            <div className="flex flex-col text-left">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">ELYSIAN CONSULTING</span>
              <span className="text-xs text-[#B6924A] font-semibold tracking-widest uppercase">International Advisory & Oversight</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#B6924A]/15 px-4 py-2 rounded-full text-[#B6924A] text-xs font-semibold uppercase tracking-widest border border-[#B6924A]/30 mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6924A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B6924A]"></span>
            </span>
            UNITED KINGDOM LEADERSHIP & GOVERNANCE STANDARDS
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15]">
            International Standards. Independent Oversight. Local Execution.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
            Your Trusted Eyes and Ears on the Ground in Southern Africa & Europe. Combining UK healthcare, governance, and leadership standards with in-country execution for overseas investors, businesses, and diaspora families.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:bg-white transition-all flex items-center gap-3">
              SPEAK TO OUR TEAM
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link to="/our-approach" className="border border-white/30 text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 transition-all flex items-center gap-3">
              OUR APPROACH
              <span className="material-symbols-outlined text-sm">visibility</span>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-6 md:gap-8 pt-8 border-t border-white/15 justify-center lg:justify-start">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl text-[#B6924A] font-bold">100%</span>
              <span className="text-xs text-white/70 uppercase tracking-wider">Independent Oversight</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl text-white font-bold">UK</span>
              <span className="text-xs text-white/70 uppercase tracking-wider">Healthcare Governance</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl text-[#B6924A] font-bold">Cross-Border</span>
              <span className="text-xs text-white/70 uppercase tracking-wider">Europe & S. Africa</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Image Card - d3.png */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#16222F]">
            <img src={d3Img} alt="Independent On-Ground Project Oversight and Building Audit" className="w-full h-[450px] md:h-[550px] object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38] via-transparent to-transparent"></div>
            
            {/* Floating Overlay Badge */}
            <motion.div 
              {...floatAnimation}
              className="absolute bottom-6 left-6 right-6 p-5 bg-[#1E2A38]/90 backdrop-blur-md rounded-2xl border border-[#B6924A]/40 flex items-center gap-4 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B6924A] flex items-center justify-center text-[#1E2A38] flex-shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-2xl font-bold">verified_user</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#B6924A] font-bold uppercase tracking-wider text-xs">Trusted On-Ground Representative</span>
                <span className="text-white/80 text-xs">Real-Time Verification, Site Audits & Reporting</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
