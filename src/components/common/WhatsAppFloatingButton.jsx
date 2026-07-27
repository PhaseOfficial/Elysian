import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/447984937336"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 group hover:bg-[#20ba5a] transition-all border-2 border-white/20"
      title="Chat with Elysian Advisory Desk on WhatsApp (+44 7984 937336)"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-1">
        WhatsApp Desk
      </span>
    </motion.a>
  );
};

export default WhatsAppFloatingButton;
