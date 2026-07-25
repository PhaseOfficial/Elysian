import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Assets
import projectAuditImg from "../assets/d3.png";
import verificationOnSiteImg from "../assets/verification on site.png";
import africanCarerImg from "../assets/african carer with african elderly man.png";
import internationalCareImg from "../assets/carer with an elderly white couple.png";
import carerTeamImg from "../assets/carer team.png";
import carerElderlyManImg from "../assets/carerer with elderly man.png";
import reablementImg from "../assets/reablement.png";
import supportedLivingImg from "../assets/supported-living.png";
import livingImg from "../assets/living.png";
import mentalHealthImg from "../assets/mental-health.png";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      id: "consultancy-advisory",
      icon: "lightbulb",
      title: "Consultancy & Advisory Services",
      tag: "STRATEGIC PLANNING",
      desc: "Tailored guidance for individuals, entrepreneurs, and institutions seeking to explore or expand operations in Southern Africa and Europe.",
      features: ["Needs & Feasibility Assessments", "Market Entry & Sector Research", "Implementation Planning"],
      color: "bg-[#1E2A38]/10 text-[#1E2A38] border-[#1E2A38]/20",
      img: carerElderlyManImg
    },
    {
      id: "project-oversight",
      icon: "fact_check",
      title: "Project & Investment Oversight",
      tag: "CAPITAL PROTECTION",
      desc: "Protecting capital for overseas investors and diaspora families through independent project monitoring, milestone verification, and disbursement controls.",
      features: ["Milestone Sign-off", "Financial & Progress Audits", "Risk Mitigation"],
      color: "bg-[#B6924A]/10 text-[#B6924A] border-[#B6924A]/20",
      img: projectAuditImg
    },
    {
      id: "building-monitoring",
      icon: "domain",
      title: "Building & Business Monitoring",
      tag: "ON-GROUND AUDITS",
      desc: "Acting as your eyes and ears on physical construction sites or emerging business operations, providing transparent photo, video, and written progress reports.",
      features: ["Site Inspection Logs", "Contractor Performance Verification", "On-Site Financial Audits"],
      color: "bg-[#16222F]/10 text-[#16222F] border-[#16222F]/20",
      img: verificationOnSiteImg
    },
    {
      id: "local-representation",
      icon: "handshake",
      title: "Local Representation & Mediation",
      tag: "IN-COUNTRY LIAISON",
      desc: "Professional representation for clients abroad. We act as official in-country liaisons with local authorities, contractors, legal representatives, and stakeholders.",
      features: ["Stakeholder Negotiation", "Formal Representation", "Dispute Mediation"],
      color: "bg-[#1E2A38]/10 text-[#1E2A38] border-[#1E2A38]/20",
      img: carerTeamImg
    },
    {
      id: "homecare-support",
      icon: "volunteer_activism",
      title: "Homecare & Family Support Services",
      tag: "DIASPORA FAMILY WELFARE",
      desc: "Managing care coordination and welfare monitoring for elderly or vulnerable family members in Southern Africa on behalf of families living in Europe and abroad.",
      features: ["Care Quality Oversight", "Medical Appointment Coordination", "Regular Family Welfare Reports"],
      color: "bg-[#B6924A]/10 text-[#B6924A] border-[#B6924A]/20",
      img: africanCarerImg
    },
    {
      id: "healthcare-consultancy",
      icon: "medical_services",
      title: "Health & Social Care Consultancy",
      tag: "UK CLINICAL GOVERNANCE",
      desc: "Bringing UK NHS and social care experience to assist healthcare institutions and providers with service design, quality audits, workforce planning, and compliance.",
      features: ["Clinical Care Design", "Quality & Policy Audits", "Workforce Capacity Building"],
      color: "bg-[#16222F]/10 text-[#16222F] border-[#16222F]/20",
      img: internationalCareImg
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      {/* Header Section with Animated Icon Background & Animated Gradient */}
      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "public", top: "15%", left: "10%", size: "45px" },
            { icon: "fact_check", top: "25%", left: "85%", size: "50px" },
            { icon: "domain", top: "70%", left: "8%", size: "40px" },
            { icon: "handshake", top: "65%", left: "80%", size: "48px" },
            { icon: "volunteer_activism", top: "40%", left: "92%", size: "35px" },
            { icon: "medical_services", top: "12%", left: "70%", size: "42px" }
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
            <span className="material-symbols-outlined text-[320px]">shield</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20"
          >
            <span className="material-symbols-outlined text-sm">public</span>
            Southern Africa & Europe Footprint
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Services & <span className="text-[#B6924A] italic">Independent Oversight</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed font-light"
          >
            Bridging international professional standards with on-ground execution. Whether you are safeguarding investments, auditing a development project, or coordinating family care from abroad, Elysian provides uncompromised transparency.
          </motion.p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((s) => (
            <motion.div 
              key={s.id}
              {...fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border ${s.color}`}>
                  {s.tag}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl text-[#1E2A38] font-bold tracking-tight">
                    {s.title}
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed text-base font-light">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {s.features.map((f, j) => (
                    <span key={j} className="bg-[#F7F4EE] px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#1E2A38] border border-black/5">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl h-[300px] md:h-[360px] relative overflow-hidden group shadow-lg bg-[#1E2A38]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 right-6">
                  <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-6 py-3 rounded-xl font-bold text-xs hover:bg-white transition-all shadow-md uppercase tracking-wider flex items-center gap-2">
                    <span>Enquire About Service</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialized Healthcare & Social Care Governance Showcase */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-[#1E2A38]">Specialized Care Governance Capabilities</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto font-light">
              Benchmarked against UK healthcare standards for supported living, reablement, and mental health service design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { img: reablementImg, title: "Reablement Services", desc: "Short-term care support design focusing on independence." },
              { img: supportedLivingImg, title: "Supported Living", desc: "Quality assurance audits for residential care providers." },
              { img: livingImg, title: "Residential Care Setup", desc: "Operational planning & facility compliance guidance." },
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

      {/* Structured Approach */}
      <section className="py-24 px-6 md:px-12 bg-[#1E2A38] text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1 rounded-full border border-[#B6924A]/20">
              Methodology & Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our 6-Step Delivery Framework</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {[
              { step: "01", title: "Consultation", desc: "Understanding client goals and requirements." },
              { step: "02", title: "Assessment", desc: "Identifying required resources and expertise." },
              { step: "03", title: "Scope & Proposal", desc: "Clear outline of timelines, deliverables, and fees." },
              { step: "04", title: "Research & Action", desc: "On-ground fieldwork, auditing, and coordination." },
              { step: "05", title: "Reporting", desc: "Structured written progress and financial updates." },
              { step: "06", title: "Implementation", desc: "Guiding agreed recommendations into practice." }
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#16222F] border border-white/10 space-y-3">
                <span className="text-2xl font-bold text-[#B6924A]">{m.step}</span>
                <h3 className="font-bold text-sm text-white">{m.title}</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
