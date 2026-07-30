import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IndustriesWeSupport = () => {
  const industries = [
    {
      title: "Businesses & Corporations",
      desc: "Independent operational audits, compliance monitoring, local representation, meeting attendance, and cross-border project management.",
      icon: "storefront",
      tag: "COMMERCIAL & ENTERPRISE"
    },
    {
      title: "Overseas & Diaspora Investors",
      desc: "Capital protection, due diligence, milestone sign-offs, asset inspections, and transparent financial disbursement verification.",
      icon: "trending_up",
      tag: "INVESTMENT & ASSETS"
    },
    {
      title: "Diaspora Families & Individuals",
      desc: "Compassionate homecare coordination, elderly parent welfare visits, medical liaison, and peace-of-mind family updates.",
      icon: "family_restroom",
      tag: "FAMILY & WELFARE"
    },
    {
      title: "Property & Construction Developers",
      desc: "On-ground site inspections, contractor performance monitoring, materials verification, and photographic/video progress logs.",
      icon: "domain",
      tag: "CONSTRUCTION & REAL ESTATE"
    },
    {
      title: "Healthcare Institutions & Care Providers",
      desc: "UK NHS clinical governance, quality assurance audits, workforce capacity development, and regulatory compliance advisory.",
      icon: "medical_services",
      tag: "HEALTH & SOCIAL CARE"
    },
    {
      title: "International Organisations & NGOs",
      desc: "In-country project representation, stakeholder mediation, ethical oversight, and transparent field reporting.",
      icon: "public",
      tag: "GOVERNANCE & NGO"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">groups</span>
            Who We Serve
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38] tracking-tight">
            Industries We Support
          </h2>

          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Delivering trusted local representation, independent oversight, and professional advice across diverse sectors in Southern Africa and Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-[#F7F4EE] rounded-3xl p-8 border border-gray-200/80 hover:border-[#B6924A] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B6924A] bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/20">
                    {ind.tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors shadow-md">
                    <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1E2A38] group-hover:text-[#B6924A] transition-colors">
                  {ind.title}
                </h3>

                <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-black/5 flex items-center justify-between">
                <Link 
                  to="/who-we-support" 
                  className="text-xs font-bold text-[#1E2A38] group-hover:text-[#B6924A] flex items-center gap-1 uppercase tracking-wider transition-colors"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeSupport;
