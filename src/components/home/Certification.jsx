import { motion } from "framer-motion";
import cipzLogo from "../../assets/CIPZ Logo.png";

const Certification = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#16222F] text-white relative overflow-hidden border-y border-[#B6924A]/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col items-center lg:items-start space-y-3">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1 rounded-full border border-[#B6924A]/30">
            <span className="material-symbols-outlined text-sm">verified</span>
            Institutional Governance & Compliance
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-center lg:text-left tracking-tight">
            Registered Legal Operations in Zimbabwe & UK
          </h3>
          <p className="text-white/70 text-sm max-w-xl text-center lg:text-left font-light">
            Elysian Consulting Ltd is officially registered in Zimbabwe with the Department of Deeds, Companies and Intellectual Property (CIPZ) and operates under strict UK leadership and governance standards.
          </p>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="flex-shrink-0"
        >
          <a 
            href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=75158A0212026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-xl text-[#1E2A38] border border-white/20"
          >
            <img src={cipzLogo} alt="CIPZ Logo - Companies & Intellectual Property Office of Zimbabwe" className="h-16 w-auto object-contain" />
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-sm font-bold text-[#1E2A38] uppercase tracking-wide">Zimbabwe Corporate Registration</span>
              <span className="text-xs text-gray-500 font-light">Companies & Intellectual Property Office of Zimbabwe (CIPZ)</span>
              <div className="pt-2 flex items-center gap-1.5 text-[#B6924A] font-bold text-xs justify-center sm:justify-start group-hover:underline">
                <span>VERIFY ZIMBABWE REGISTRATION</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
