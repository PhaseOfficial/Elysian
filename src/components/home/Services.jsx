import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Asset imports
import africanCarerImg from "../../assets/african carer with african elderly man.png";
import internationalCareImg from "../../assets/carer with an elderly white couple.png";
import projectAuditImg from "../../assets/d3.png";
import carerTeamImg from "../../assets/carer team.png";
import carerElderlyManImg from "../../assets/carerer with elderly man.png";
import carerElderlyWomanImg from "../../assets/carer with elderly woman.png";
import supportedLivingImg from "../../assets/supported-living.png";

const Services = () => {
  const servicePillars = [
    {
      title: "Consultancy & Advisory",
      category: "Strategic Planning",
      image: carerElderlyWomanImg,
      icon: "lightbulb",
      desc: "Navigating complex cross-border opportunities requires independent research and strategic clarity. We provide feasibility assessments, stakeholder mapping, and implementation strategies built on international governance principles."
    },
    {
      title: "Project & Investment Oversight",
      category: "Capital Protection",
      image: projectAuditImg,
      icon: "fact_check",
      desc: "Safeguard your investments from afar. We act as independent project stewards, ensuring funds are deployed appropriately, milestones are met before disbursements, and projects adhere to agreed specifications."
    },
    {
      title: "Building & Business Monitoring",
      category: "On-Ground Audits",
      image: projectAuditImg,
      icon: "domain",
      desc: "Whether constructing commercial property, residential developments, or launching a new venture, our on-ground teams conduct physical site inspections, contractor verification, and progress audits with uncompromised accuracy."
    },
    {
      title: "Local Representation & Mediation",
      category: "Stakeholder Liaison",
      image: carerElderlyManImg,
      icon: "handshake",
      desc: "Ensure your voice and interests are professionally represented in-country. We act as your official liaison, mediating with contractors, local authorities, legal teams, and community stakeholders."
    },
    {
      title: "Homecare & Family Support",
      category: "Diaspora Welfare",
      image: africanCarerImg,
      icon: "volunteer_activism",
      desc: "Distant caregiving requires reliable, compassionate, and audited support. We manage and monitor care arrangements, medical appointments, and family welfare, giving diaspora families complete peace of mind through regular updates."
    },
    {
      title: "Health & Social Care Consultancy",
      category: "UK Clinical Governance",
      image: internationalCareImg,
      icon: "medical_services",
      desc: "Drawing on decades of UK NHS and social care leadership, we assist healthcare providers, NGOs, and private operators to design, audit, and elevate care services to meet rigorous international standards."
    }
  ];

  return (
    <section className="py-28 px-6 md:px-12 bg-[#F7F4EE] relative z-10 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-[#B6924A] font-semibold text-xs uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">view_carousel</span>
            Our Core Pillars
          </div>
          <h2 className="text-3xl md:text-5xl text-[#1E2A38] font-bold tracking-tight">
            Tailored Advisory & On-Ground Oversight
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Delivering governance, accountability, and independent representation across Southern Africa and Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePillars.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden bg-[#1E2A38]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4 bg-[#1E2A38]/90 text-[#B6924A] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#B6924A]/30 backdrop-blur-sm">
                  {service.category}
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-xl">{service.icon}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#B6924A] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#1E2A38]">
                  <span className="text-[#B6924A] uppercase tracking-wider">Independent Delivery</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E2A38] text-white rounded-xl font-semibold text-sm hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all shadow-md uppercase tracking-wider"
          >
            <span>Explore Comprehensive Service Details</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
