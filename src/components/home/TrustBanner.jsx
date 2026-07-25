import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import emergencyImg from "../../assets/emergency.png";
import carerElderlyWomanImg from "../../assets/carer with elderly woman.png";

const TrustBanner = () => {
  const trustItems = [
    { title: "UK Governance Standards", desc: "Our advisory framework is anchored in UK NHS, healthcare, and corporate governance principles." },
    { title: "Independent Representation", desc: "100% objective oversight—we represent your interests exclusively without third-party bias." },
    { title: "Structured Progress Reporting", desc: "Receive transparent audit logs, site photos, video updates, and financial verification." },
    { title: "Cross-Border Footprint", desc: "Seamless coordination across Southern Africa and the UK to bridge distance and eliminate risk." }
  ];

  return (
    <section className="py-24 bg-[#1E2A38] text-white px-6 md:px-12 relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Why Choose Elysian */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Uncompromised Integrity
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Why Overseas Clients & Diaspora Families Trust <span className="text-[#B6924A] italic">Elysian</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustItems.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[#16222F] border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-[#B6924A] flex-shrink-0 flex items-center justify-center text-[#1E2A38]">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column: Emergency & Urgent Response Card (emergency.png) */}
        <div className="lg:col-span-5 bg-white text-[#1E2A38] rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative">
          <div className="h-48 relative overflow-hidden bg-[#1E2A38]">
            <img src={emergencyImg} alt="Rapid Advisory & On-Ground Emergency Liaison" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
          </div>

          <div className="p-8 text-center space-y-4 -mt-6 relative z-10">
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#1E2A38]">Urgent Support or On-Ground Inquiry?</h3>
            <p className="text-gray-600 text-xs font-light">
              Our direct advisory desk is available for rapid project escalation, emergency family welfare checks, or urgent site visits.
            </p>
            
            <div className="flex flex-col gap-3 pt-2">
              <a 
                href="https://wa.me/447449573231" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white py-4.5 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
              >
                <FaWhatsapp className="text-xl" />
                Direct WhatsApp Advisory (+44 7449 573231)
              </a>
              <a 
                href="tel:+263785770586" 
                className="bg-[#1E2A38] text-white py-3.5 rounded-xl font-medium text-xs hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                +263 78 577 0586
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustBanner;
