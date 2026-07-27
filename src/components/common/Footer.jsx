import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/elysian logo.PNG";

const Footer = () => {
  return (
    <footer className="bg-[#16222F] text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Elysian Consulting Ltd Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white uppercase">ELYSIAN CONSULTING</span>
              <span className="text-[10px] text-[#B6924A] uppercase tracking-widest -mt-1">International Professional Services</span>
            </div>
          </div>
          
          <p className="text-white/70 text-sm max-w-md leading-relaxed font-light">
            Connecting UK leadership, healthcare governance, and high professional standards with on-ground execution, project monitoring, and family care oversight across Southern Africa and Europe.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
              title="Chat on WhatsApp (+44 7984 937336)"
            >
              <FaWhatsapp size={20} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#B6924A] uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-white/70 font-light">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/who-we-support" className="hover:text-white transition-colors">Who We Support</Link></li>
            <li><Link to="/our-approach" className="hover:text-white transition-colors">Our Approach</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#B6924A] uppercase tracking-wider">Regional Offices</h3>
          <ul className="space-y-3 text-xs text-white/70 font-light">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#B6924A] text-sm mt-0.5">location_on</span>
              <span>Southern Africa: Zimbabwe & Regional Hubs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#B6924A] text-sm mt-0.5">public</span>
              <span>Europe: United Kingdom</span>
            </li>
            <li className="flex items-center gap-2 pt-2">
              <FaWhatsapp className="text-[#25D366] text-base" />
              <a href="https://wa.me/447984937336" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors font-medium text-[#25D366]">WhatsApp: +44 7984 937336</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#B6924A] text-sm">call</span>
              <a href="tel:+447984937336" className="hover:text-white transition-colors">+44 7984 937336</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <p>© 2026 Elysian Consulting Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Governance Statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
