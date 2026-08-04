import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

// Assets
import businessProjectAuditImg from "../assets/stock/business-project-audit.jpg";
import businessVerificationImg from "../assets/stock/business-verification.jpg";
import teamMeetingImg from "../assets/stock/team-meeting.jpg";
import carerAfricanImg from "../assets/stock/carer-elderly-african.jpg";
import carerElderlyManImg from "../assets/stock/carer-elderly-man.jpg";
import founderImg from "../assets/gin proffessional photo.jpeg";

const ServicesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Section 3 Services: From Strategy to Local Execution
  const strategyToExecutionServices = [
    {
      id: "project-construction-oversight",
      icon: "engineering",
      title: "Project & Construction Oversight",
      tag: "CAPITAL & SITE AUDITS",
      desc: "Ensuring your projects stay on track through independent site inspections, progress monitoring, quality observations and milestone verification, giving you confidence that work is being completed as planned.",
      features: ["Independent Site Inspections", "Milestone Sign-Off & Verification", "Quality Observations & Audits"],
      color: "bg-[#B6924A]/10 text-[#B6924A] border-[#B6924A]/20",
      img: businessProjectAuditImg
    },
    {
      id: "business-monitoring-audits",
      icon: "domain",
      title: "Business Monitoring & Operational Audits",
      tag: "COMPLIANCE & ACCOUNTABILITY",
      desc: "Providing independent assessments of business operations, compliance, performance and service delivery to identify risks, improve accountability and support informed decision-making.",
      features: ["Operational Performance Audits", "Risk & Compliance Assessments", "Financial Disbursal Controls"],
      color: "bg-[#1E2A38]/10 text-[#1E2A38] border-[#1E2A38]/20",
      img: businessVerificationImg
    },
    {
      id: "investment-oversight",
      icon: "trending_up",
      title: "Investment Oversight",
      tag: "FINANCIAL TRANSPARENCY",
      desc: "Protecting your investments through independent verification, due diligence, asset inspections and ongoing monitoring, ensuring transparency and safeguarding your financial interests.",
      features: ["Independent Verification", "Asset & Property Inspections", "Due Diligence & Progress Audits"],
      color: "bg-[#16222F]/10 text-[#16222F] border-[#16222F]/20",
      img: businessVerificationImg
    },
    {
      id: "local-representation-mediation",
      icon: "handshake",
      title: "Local Representation & Mediation",
      tag: "IN-COUNTRY LIAISON",
      desc: "Acting as your trusted representative on the ground by attending meetings, liaising with stakeholders, facilitating communication and resolving issues to protect your interests when you cannot be present.",
      features: ["Meeting Attendance & Representation", "Stakeholder & Contractor Liaison", "Dispute Resolution & Mediation"],
      color: "bg-[#1E2A38]/10 text-[#1E2A38] border-[#1E2A38]/20",
      img: teamMeetingImg
    },
    {
      id: "homecare-support-family-welfare",
      icon: "volunteer_activism",
      title: "Homecare Support & Family Welfare Visits",
      tag: "DIASPORA CARE COORDINATION",
      desc: "Supporting individuals and families through personalised homecare, welfare visits, care coordination and regular wellbeing updates, providing reassurance and peace of mind for loved ones living abroad.",
      features: ["Personalised Homecare Coordination", "Regular Wellbeing & Welfare Visits", "Caregiver Audits & Updates"],
      color: "bg-[#B6924A]/10 text-[#B6924A] border-[#B6924A]/20",
      img: carerAfricanImg
    },
    {
      id: "independent-reporting",
      icon: "description",
      title: "Independent Reporting",
      tag: "EVIDENCE-BASED AUDITS",
      desc: "Delivering clear, evidence-based reports, including written assessments, photographs, videos and practical recommendations, enabling you to make informed decisions with confidence.",
      features: ["Structured Written Assessments", "Photographic & Video Evidence", "Actionable Recommendations"],
      color: "bg-[#16222F]/10 text-[#16222F] border-[#16222F]/20",
      img: carerElderlyManImg
    }
  ];

  // Point 5: Healthcare & Care Services List
  const healthServicesList = [
    { title: "Clinical Governance & Quality Assurance", icon: "verified", desc: "Setting UK NHS-standard governance structures, policy frameworks, and risk management systems for health institutions." },
    { title: "Healthcare Consultancy & Advisory", icon: "medical_services", desc: "Strategic advice, facility operational planning, and service improvement for healthcare providers and NGOs." },
    { title: "Workforce Development & Leadership", icon: "groups_3", desc: "Capacity building, clinical training, leadership coaching, and standardized operating procedure implementation." },
    { title: "Care Infrastructure & Service Development", icon: "domain", desc: "Designing reablement pathways, supported living quality assurance, and specialized care infrastructure." },
    { title: "Homecare & Family Support", icon: "volunteer_activism", desc: "Doctor & hospital liaison, caregiver quality audits, and ongoing wellbeing visits for family members." }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      
      {/* 1. Header Section with Animated Icons & Background */}
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
            Professional Services Across Borders
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-light"
          >
            Tailored consultancy, trusted representation and independent support for individuals, families, businesses and organisations. Combining UK leadership, governance and professional expertise with dependable local execution across Southern Africa and Europe.
          </motion.p>
        </div>
      </section>

      {/* 2. From Strategy to Local Execution Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">view_carousel</span>
              Our Core Advisory & Oversight Pillars
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38] tracking-tight">
              From Strategy to Local Execution
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              Comprehensive operational, financial, and representative solutions for clients seeking dependable in-country oversight.
            </p>
          </div>

          <div className="space-y-12">
            {strategyToExecutionServices.map((s) => (
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
                    <div className="w-14 h-14 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md flex-shrink-0">
                      <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl text-[#1E2A38] font-bold tracking-tight">
                      {s.title}
                    </h3>
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
        </div>
      </section>

      {/* 3. Healthcare Consultancy & Care Solutions Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">medical_services</span>
              Clinical Governance & Quality Advisory
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38] tracking-tight">
              Healthcare Consultancy & Care Solutions
            </h2>

            <div className="space-y-3 text-gray-700 text-base md:text-lg font-light leading-relaxed">
              <p>
                Supporting healthcare organisations, care providers and families through clinical governance, workforce development, quality assurance and compassionate care across Southern Africa and Europe.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Elysian Global combines UK healthcare expertise, leadership and governance with practical local delivery to strengthen healthcare systems, improve service quality and support individuals and families with confidence.
              </p>
            </div>
          </div>

          {/* Health & Care Services Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1E2A38] text-center">Our Health & Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthServicesList.map((hs, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-[#F7F4EE] border border-gray-200 hover:border-[#B6924A] hover:bg-white transition-all shadow-sm space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors">
                    <span className="material-symbols-outlined text-lg">{hs.icon}</span>
                  </div>
                  <h4 className="font-bold text-[#1E2A38] text-base group-hover:text-[#B6924A] transition-colors">{hs.title}</h4>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">{hs.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Healthcare Leadership Section */}
          <div className="bg-[#1E2A38] rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-[#B6924A]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#B6924A]/40 w-48 h-60 shadow-xl">
                <img src={founderImg} alt="Jean Sigauke - UK Registered Nurse & Healthcare Leader" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38] via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-center p-1.5 bg-[#1E2A38]/90 rounded-lg">
                  <span className="text-xs font-bold text-[#B6924A] block">Jean Sigauke</span>
                  <span className="text-[9px] text-white/70 block uppercase">Founder & Healthcare Director</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-bold uppercase tracking-widest bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/30">
                <span className="material-symbols-outlined text-sm">verified</span>
                Credibility & Clinical Excellence
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Our Healthcare Leadership
              </h3>

              <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
                Our healthcare leadership is informed by <strong className="text-[#B6924A] font-semibold">Jean Sigauke</strong>, a UK Registered Nurse, Biomedical Scientist and healthcare leader with extensive experience in clinical governance, quality assurance, service improvement and healthcare leadership.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md">
                  Consult Healthcare Leadership
                </Link>
                <a 
                  href="https://wa.me/447984937336" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-md"
                >
                  <FaWhatsapp className="text-base" />
                  <span>WhatsApp Leadership Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Structured Delivery Framework */}
      <section className="py-24 px-6 md:px-12 bg-[#1E2A38] text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1 rounded-full border border-[#B6924A]/20">
              Methodology & Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our 3-Step Delivery Framework</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Consultation & Planning", desc: "Understanding your goals, defining requirements, and developing a tailored plan for consultancy, oversight, or representation." },
              { step: "02", title: "Local Representation & Execution", desc: "Our experienced team becomes your trusted presence on the ground, delivering oversight, inspections, and operational support." },
              { step: "03", title: "Verification, Reporting & Support", desc: "Receive comprehensive reports, photographic/video evidence, and regular progress updates for complete peace of mind." }
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#16222F] border border-white/10 space-y-3 hover:border-[#B6924A]/50 transition-colors">
                <span className="text-3xl font-extrabold text-[#B6924A]">{m.step}</span>
                <h3 className="font-bold text-lg text-white">{m.title}</h3>
                <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
