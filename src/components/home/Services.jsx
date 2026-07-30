import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Asset imports
import africanCarerImg from "../../assets/african carer with african elderly man.png";
import internationalCareImg from "../../assets/carer with an elderly white couple.png";
import projectAuditImg from "../../assets/d3.png";
import verificationOnSiteImg from "../../assets/verification on site.png";
import carerTeamImg from "../../assets/carer team.png";
import carerElderlyManImg from "../../assets/carerer with elderly man.png";
import carerElderlyWomanImg from "../../assets/carer with elderly woman.png";

const Services = () => {
  const featuredServices = [
    {
      title: "Consultancy & Advisory",
      category: "Strategic Planning",
      image: carerElderlyWomanImg,
      icon: "lightbulb",
      desc: "Tailored guidance for individuals, entrepreneurs, and institutions seeking to explore or expand operations across Southern Africa and Europe."
    },
    {
      title: "Project & Construction Oversight",
      category: "Capital Protection",
      image: projectAuditImg,
      icon: "fact_check",
      desc: "Ensuring your projects stay on track through independent site inspections, progress monitoring, quality observations and milestone verification."
    },
    {
      title: "Business Monitoring",
      category: "On-Ground Audits",
      image: verificationOnSiteImg,
      icon: "domain",
      desc: "Providing independent assessments of business operations, compliance, performance and service delivery to identify risks and improve accountability."
    },
    {
      title: "Investment Oversight",
      category: "Financial Verification",
      image: internationalCareImg,
      icon: "trending_up",
      desc: "Protecting your investments through independent verification, due diligence, asset inspections and ongoing monitoring to safeguard your financial interests."
    },
    {
      title: "Homecare & Family Welfare",
      category: "Compassionate Support",
      image: africanCarerImg,
      icon: "volunteer_activism",
      desc: "Supporting individuals and families through personalised homecare, welfare visits, care coordination and regular wellbeing updates."
    },
    {
      title: "Local Representation",
      category: "Stakeholder Liaison",
      image: carerTeamImg,
      icon: "handshake",
      desc: "Acting as your trusted representative on the ground by attending meetings, liaising with stakeholders, facilitating communication and resolving issues."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F7F4EE] relative z-10 border-b border-black/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#B6924A] font-semibold text-xs uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">view_carousel</span>
            Core Offerings
          </div>
          <h2 className="text-3xl md:text-5xl text-[#1E2A38] font-bold tracking-tight">
            Featured Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Independent oversight, trusted representation, and professional consultancy tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
            >
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden bg-[#1E2A38]">
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
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1E2A38] mb-2.5 group-hover:text-[#B6924A] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
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
        
        {/* Button to Services Page */}
        <div className="text-center pt-6">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E2A38] text-white rounded-xl font-bold text-xs md:text-sm hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all shadow-xl uppercase tracking-wider"
          >
            <span>View All Services</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
