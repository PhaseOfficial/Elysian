import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const HomeCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#1E2A38] via-[#16222F] to-[#1E2A38] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/20">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <span className="material-symbols-outlined text-[400px]">public</span>
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">handshake</span>
            Partner With Us
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight text-white">
            Ready to Secure <span className="text-[#B6924A] italic">Independent Oversight</span> & Strategic Advisory?
          </h2>

          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our UK-backed advisory team today. Whether managing cross-border investments, property developments, or family welfare, we act as your trusted eyes and ears on the ground.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <a 
              href="https://wa.me/447449573231" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#20ba5a] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              <span>CHAT ON WHATSAPP</span>
            </a>
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-base hover:bg-white transition-all shadow-xl flex items-center justify-center">
              BOOK A CONSULTATION
            </Link>
            <Link to="/services" className="border border-white/30 text-white px-8 py-4 rounded-xl font-medium text-base hover:bg-white/10 transition-all flex items-center justify-center">
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
