import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import AboutMission from "../components/about/AboutMission";
import AboutApproach from "../components/about/AboutApproach";
import AboutPromise from "../components/about/AboutPromise";
import BrandStory from "../components/home/BrandStory";
import Certification from "../components/home/Certification";
import aboutHeroImg from "../assets/stock/about-hero-global.jpg";

const About = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-24 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImg}
            alt="Elysian Global — international professional team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E2A38]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A38] via-[#16222F]/90 to-[#0F172A]/90 mix-blend-multiply"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "public", top: "18%", left: "12%", size: "45px" },
            { icon: "verified_user", top: "22%", left: "82%", size: "50px" },
            { icon: "handshake", top: "68%", left: "10%", size: "40px" },
            { icon: "shield", top: "65%", left: "85%", size: "48px" },
            { icon: "account_tree", top: "15%", left: "70%", size: "42px" }
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
              style={{ top: item.top, left: item.left, fontSize: item.size }}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 text-center">
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">info</span>
              UK Leadership & Professional Standards
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              About <span className="text-[#B6924A] italic">Elysian Global</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-white/85 max-w-3xl mx-auto font-light leading-relaxed"
            >
              A trusted partner for what matters most. Connecting international clients with dependable local execution across <strong className="font-semibold text-white">Southern Africa & Europe</strong> through independent oversight, professional expertise and UK governance standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider flex items-center gap-2"
              >
                <span>Book Consultation</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/447984937336"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider shadow-xl"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Advisory</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <AboutMission />
      <AboutApproach />
      <AboutPromise />
      <BrandStory />
      <Certification />
    </div>
  );
};

export default About;
