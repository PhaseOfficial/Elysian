import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import TrustBanner from "../components/home/TrustBanner";
import FeaturedPillar from "../components/home/FeaturedPillar";
import HomeCTA from "../components/home/HomeCTA";

const WhoWeSupport = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-24 font-sans">
      {/* Hero Header with Animated Background Icons & Animated Gradient */}
      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "groups", top: "18%", left: "12%", size: "45px" },
            { icon: "family_restroom", top: "25%", left: "82%", size: "50px" },
            { icon: "domain", top: "70%", left: "10%", size: "40px" },
            { icon: "handshake", top: "65%", left: "85%", size: "48px" },
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
            <span className="material-symbols-outlined text-[320px]">diversity_3</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">groups</span>
            Client Representation
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Who We <span className="text-[#B6924A] italic">Support</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Acting as trusted eyes and ears on the ground for overseas investors, commercial entities, diaspora families, and international health & social care organizations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="https://wa.me/447449573231" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-[#25D366]/20"
            >
              <FaWhatsapp className="text-xl" />
              <span>Connect on WhatsApp (+44 7449 573231)</span>
            </a>
          </div>
        </div>
      </section>

      <FeaturedPillar />
      <TrustBanner />
      <HomeCTA />
    </div>
  );
};

export default WhoWeSupport;
