import { motion } from "framer-motion";
import BrandStory from "../components/home/BrandStory";
import Certification from "../components/home/Certification";
import founderImg from "../assets/gin proffessional photo.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

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

      {/* Founder Leadership Profile Spotlight */}
      <section className="py-20 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B6924A]/40 bg-[#1E2A38] relative h-[420px] md:h-[480px]">
              <img src={founderImg} alt="Jean Sigauke - Founder & Managing Director" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1E2A38]/90 backdrop-blur-md rounded-2xl border border-[#B6924A]/30 text-center">
                <h3 className="text-lg font-bold text-[#B6924A]">Jean Sigauke</h3>
                <p className="text-xs text-white/80 uppercase tracking-widest font-light">Founder & Managing Director</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">badge</span>
              Executive Leadership Profile
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
              Clinical Excellence, Entrepreneurial Leadership & International Vision
            </h2>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Registered Nurse (RN)",
                "Biomedical Scientist",
                "Entrepreneur",
                "International Healthcare Specialist",
                "UK NHS Governance Leader"
              ].map((badge, idx) => (
                <span key={idx} className="bg-[#1E2A38] text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide border border-white/10 shadow-sm">
                  ✓ {badge}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-base font-light leading-relaxed">
              With extensive healthcare leadership and operational development experience built in the United Kingdom, Jean Sigauke leads Elysian Consulting Ltd with an uncompromised commitment to clinical governance, operational efficiency, and ethical accountability.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <span className="text-3xl font-bold text-[#B6924A]">Decades</span>
                <p className="text-xs text-gray-500 font-light uppercase tracking-wider">Clinical & Healthcare Leadership</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-bold text-[#1E2A38]">UK & S. Africa</span>
                <p className="text-xs text-gray-500 font-light uppercase tracking-wider">Cross-Border Footprint</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-bold text-[#B6924A]">100%</span>
                <p className="text-xs text-gray-500 font-light uppercase tracking-wider">Independent Representation</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#1E2A38] text-white px-6 py-3.5 rounded-xl font-bold text-xs hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all uppercase tracking-wider flex items-center gap-2">
                <span>Speak to Jean Sigauke</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a 
                href="https://wa.me/447984937336" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold text-xs hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center gap-2"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp Advisory</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <BrandStory />
      <Certification />
    </div>
  );
};

export default About;

