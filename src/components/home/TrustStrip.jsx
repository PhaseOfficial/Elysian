import { motion } from "framer-motion";
import cipzLogo from "../../assets/CIPZ Logo.png";

const TrustStrip = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#16222F] text-white px-6 py-4 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-medium tracking-wider uppercase">
        <div className="flex items-center space-x-3">
          <img src={cipzLogo} alt="CIPZ Logo - Zimbabwe Registration" className="h-8 w-auto object-contain bg-white/10 p-1 rounded" />
          <span className="text-white/90">Zimbabwe Legal Registration (CIPZ)</span>
        </div>
        <div className="flex items-center space-x-2 text-[#B6924A]">
          <span className="material-symbols-outlined text-base">verified</span>
          <span>UK Leadership & Governance Standards</span>
        </div>
        <div className="flex items-center space-x-2 text-white/80">
          <span className="material-symbols-outlined text-base">visibility</span>
          <span>Independent On-Ground Oversight</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustStrip;