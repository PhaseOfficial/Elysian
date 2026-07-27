import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import internationalCareImg from "../assets/carer with an elderly white couple.png";
import reablementImg from "../assets/reablement.png";
import supportedLivingImg from "../assets/supported-living.png";
import livingImg from "../assets/living.png";
import mentalHealthImg from "../assets/mental-health.png";

const Healthcare = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const pillars = [
    {
      title: "Quality Improvement",
      tag: "CLINICAL AUDITS & ASSURANCE",
      icon: "verified",
      desc: "Systematic evaluation of healthcare operations, care delivery standards, and patient safety protocols benchmarked against UK NHS regulatory frameworks.",
      features: ["Clinical Care Quality Audits", "Patient Safety Protocols", "Continuous Service Evaluation"],
      img: internationalCareImg
    },
    {
      title: "Operational Consultancy",
      tag: "SERVICE DESIGN & WORKFLOW",
      icon: "settings_suggest",
      desc: "Optimizing operational workflows for hospitals, care homes, and clinical providers to enhance service efficiency and regulatory compliance.",
      features: ["Workflow Optimization", "Care Facility Operational Planning", "Compliance Systems"],
      img: livingImg
    },
    {
      title: "Workforce Solutions",
      tag: "CAPACITY BUILDING & TRAINING",
      icon: "groups_3",
      desc: "Developing healthcare workforce capacity through structured clinical training, leadership coaching, and international best practice implementation.",
      features: ["Clinical Staff Capacity Building", "Healthcare Leadership Coaching", "Standardized Operating Procedures"],
      img: reablementImg
    },
    {
      title: "Clinical Governance Support",
      tag: "UK NHS STANDARDS & COMPLIANCE",
      icon: "gavel",
      desc: "Embedding robust clinical governance structures, policy frameworks, and risk management systems across health and social care institutions.",
      features: ["Clinical Governance Frameworks", "Policy & Procedure Design", "Risk Management Systems"],
      img: supportedLivingImg
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "medical_services", top: "18%", left: "12%", size: "45px" },
            { icon: "health_and_safety", top: "25%", left: "82%", size: "50px" },
            { icon: "clinical_notes", top: "70%", left: "10%", size: "40px" },
            { icon: "vaccines", top: "65%", left: "85%", size: "48px" },
            { icon: "verified", top: "15%", left: "70%", size: "42px" }
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
            <span className="material-symbols-outlined text-[320px]">medical_services</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">health_and_safety</span>
            UK Clinical Governance & Quality Assurance
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Healthcare <span className="text-[#B6924A] italic">Consultancy</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Elevating healthcare providers, clinical institutions, and social care organizations across Southern Africa and Europe through UK leadership, quality improvement, and clinical governance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider flex items-center gap-2">
              <span>Speak to Our Team</span>
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

      {/* Main Healthcare Pillars */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Specialized Healthcare Governance Pillars</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
              Led by Jean Sigauke (Registered Nurse & Biomedical Scientist), bringing UK NHS clinical governance standards to cross-border health institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A] bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/20">
                      {p.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E2A38]">{p.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{p.desc}</p>

                  <div className="h-48 rounded-2xl overflow-hidden bg-[#1E2A38] relative">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/70 via-transparent to-transparent"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.features.map((f, j) => (
                      <span key={j} className="bg-[#F7F4EE] px-3 py-1 rounded-lg text-xs font-medium text-[#1E2A38] border border-black/5">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link to="/contact" className="text-xs font-bold text-[#1E2A38] hover:text-[#B6924A] flex items-center gap-1 uppercase tracking-wider">
                    <span>Enquire About Healthcare Advisory</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Care Showcase */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-[#1E2A38]">Care Infrastructure & Service Design</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto font-light">
              Designing, auditing, and supporting modern health & social care operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { img: reablementImg, title: "Reablement Services", desc: "Short-term care support design focusing on client independence." },
              { img: supportedLivingImg, title: "Supported Living QA", desc: "Quality assurance audits for residential care providers." },
              { img: livingImg, title: "Residential Care Setup", desc: "Operational planning and facility compliance guidance." },
              { img: mentalHealthImg, title: "Mental Health Advisory", desc: "Care pathways and wellbeing coordination frameworks." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl bg-[#F7F4EE] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden bg-[#1E2A38]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-[#1E2A38] text-base">{item.title}</h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#1E2A38] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Build Something Meaningful Together</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-base">
            Partner with Elysian to elevate your healthcare institution's clinical governance, quality assurance, and operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all uppercase tracking-wider">
              Book a Consultation
            </Link>
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp (+44 7984 937336)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
