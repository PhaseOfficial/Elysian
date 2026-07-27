import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import verificationOnSiteImg from "../assets/verification on site.png";
import africanCarerImg from "../assets/african carer with african elderly man.png";
import projectAuditImg from "../assets/d3.png";
import carerElderlyManImg from "../assets/carerer with elderly man.png";

const DiasporaServices = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const diasporaPillars = [
    {
      title: "Investment & Capital Protection",
      tag: "FLAGSHIP OVERSEAS SERVICE",
      icon: "savings",
      desc: "Protecting financial investments for diaspora families and overseas investors through independent milestone verification, disbursement sign-offs, and financial audits.",
      features: ["Milestone Sign-Off Before Disbursal", "Financial Audit Reports", "Risk & Fraud Prevention"],
      img: projectAuditImg
    },
    {
      title: "Construction & Project Monitoring",
      tag: "LIVE ON-SITE AUDITS",
      icon: "domain",
      desc: "Acting as your eyes and ears on physical construction sites. We conduct unannounced site visits, contractor performance checks, and material inspections.",
      features: ["Site Inspection Logs", "Contractor Verification", "Video & Photo Audit Logs"],
      img: verificationOnSiteImg
    },
    {
      title: "Trusted Local Representation",
      tag: "OFFICIAL IN-COUNTRY LIAISON",
      icon: "handshake",
      desc: "Official representation for clients living in Europe, the UK, and abroad. We liaise with municipal authorities, legal representatives, contractors, and local stakeholders.",
      features: ["Formal Client Representation", "Dispute Mediation", "Stakeholder Negotiation"],
      img: carerElderlyManImg
    },
    {
      title: "Independent Inspections & Verification",
      tag: "REAL-TIME REPORTING",
      icon: "fact_check",
      desc: "Providing objective, unbiased physical and operational inspections for residential properties, commercial assets, and development projects.",
      features: ["Timestamped Photo/Video Proof", "Unbiased Progress Verification", "Detailed Written Audit Reports"],
      img: verificationOnSiteImg
    },
    {
      title: "Family Support & Welfare Coordination",
      tag: "REMOTE FAMILY CARE",
      icon: "volunteer_activism",
      desc: "Managing care coordination and welfare checks for elderly or vulnerable family members in Southern Africa on behalf of families living overseas.",
      features: ["Care Quality Oversight", "Medical Appointment Liaison", "Regular Welfare Status Updates"],
      img: africanCarerImg
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "public", top: "18%", left: "12%", size: "45px" },
            { icon: "handshake", top: "25%", left: "82%", size: "50px" },
            { icon: "domain", top: "70%", left: "10%", size: "40px" },
            { icon: "family_restroom", top: "65%", left: "85%", size: "48px" },
            { icon: "verified_user", top: "15%", left: "70%", size: "42px" }
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
            <span className="material-symbols-outlined text-[320px]">public</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">stars</span>
            Flagship Service Area
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Diaspora Support <span className="text-[#B6924A] italic">Services</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Your trusted eyes and ears on the ground. Empowering overseas clients and diaspora families with uncompromised project monitoring, investment protection, and local representation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider flex items-center gap-2">
              <span>Book a Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all shadow-xl flex items-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Advisory Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Flagship Pillars Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38]">Comprehensive Diaspora Protection</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
              Built specifically for individuals and families in Europe, the UK, and abroad managing projects or loved ones back home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diasporaPillars.map((d, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A] bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/20">
                      {d.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-2xl">{d.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E2A38]">{d.title}</h3>
                  <p className="text-gray-600 font-light text-xs leading-relaxed">{d.desc}</p>

                  <div className="h-44 rounded-2xl overflow-hidden bg-[#1E2A38] relative">
                    <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/70 via-transparent to-transparent"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {d.features.map((f, j) => (
                      <span key={j} className="bg-[#F7F4EE] px-3 py-1 rounded-lg text-[11px] font-medium text-[#1E2A38] border border-black/5">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link to="/contact" className="text-xs font-bold text-[#1E2A38] hover:text-[#B6924A] flex items-center gap-1 uppercase tracking-wider">
                    <span>Enquire About Diaspora Protection</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#1E2A38] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Build Something Meaningful Together</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-base">
            Never compromise on oversight or distance. Elysian provides total transparency for your investments and family.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all uppercase tracking-wider">
              Speak to Our Team
            </Link>
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Desk (+44 7984 937336)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiasporaServices;
