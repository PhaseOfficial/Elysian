import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/elysian logo.PNG";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) => 
    `font-semibold text-sm px-4 py-2 transition-all duration-300 border-b-2 ${
      isActive ? "text-[#B6924A] border-[#B6924A]" : "text-[#1E2A38] border-transparent hover:text-[#B6924A]"
    }`;

  const mobileLinkClasses = ({ isActive }) => 
    `text-xl py-4 border-b border-white/10 w-full text-left flex justify-between items-center ${
      isActive ? "text-[#B6924A]" : "text-white/80"
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
      {/* Top Global Footprint & Trust Banner - Navy Blue (Mobile Optimized) */}
      <div className="bg-[#1E2A38] text-white/90 py-1.5 md:py-2 px-3 sm:px-6 md:px-12 flex justify-between items-center text-[10px] sm:text-xs tracking-wider uppercase border-b border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <span className="flex items-center gap-1.5 font-medium truncate">
            <span className="material-symbols-outlined text-xs text-[#B6924A] flex-shrink-0">public</span>
            <span className="hidden sm:inline">Southern Africa & United Kingdom</span>
            <span className="sm:hidden">S. Africa & UK</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5 border-l border-white/20 pl-4 font-medium flex-shrink-0">
            <span className="material-symbols-outlined text-xs text-[#B6924A]">verified</span>
            UK Leadership & Governance Standards
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 pl-2">
          <span className="hidden lg:inline text-white/60 font-light">Your Trusted Eyes & Ears on the Ground</span>
          <a 
            href="https://wa.me/447449573231" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 sm:gap-1.5 text-[#25D366] hover:text-white transition-colors font-bold whitespace-nowrap"
          >
            <FaWhatsapp className="text-xs sm:text-sm" />
            <span className="hidden xs:inline">WhatsApp Desk</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Navbar - White (Mobile Responsive) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 flex justify-between items-center px-3 sm:px-6 md:px-12 py-2.5 sm:py-3.5">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#1E2A38] p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Elysian Consulting Ltd Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain flex-shrink-0" />
            <div className="hidden sm:flex flex-col min-w-0">
              <span className="text-sm sm:text-lg md:text-xl text-[#1E2A38] font-bold tracking-tight uppercase truncate">
                ELYSIAN CONSULTING
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#B6924A] font-semibold tracking-widest uppercase -mt-0.5 truncate">
                International Advisory
              </span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/who-we-support" className={linkClasses}>
            Who We Support
          </NavLink>
          <NavLink to="/our-approach" className={linkClasses}>
            Our Approach
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <Link to="/contact" className="bg-[#1E2A38] text-white font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all flex items-center gap-1.5 shadow-md">
            <span>Book Consultation</span>
            <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#1E2A38] text-white shadow-2xl z-[100] lg:hidden flex flex-col p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Elysian Consulting" className="h-10 w-auto" />
                  <div className="flex flex-col">
                    <span className="text-base text-white font-bold uppercase">ELYSIAN</span>
                    <span className="text-[10px] text-[#B6924A] tracking-wider uppercase">Consulting Ltd</span>
                  </div>
                </div>
                <button onClick={toggleMenu} className="text-white/80 hover:text-white">
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              <nav className="flex flex-col flex-1 gap-1">
                <NavLink to="/" className={mobileLinkClasses} onClick={toggleMenu} end>
                  Home
                  <span className="material-symbols-outlined text-sm text-[#B6924A]">chevron_right</span>
                </NavLink>
                <NavLink to="/about" className={mobileLinkClasses} onClick={toggleMenu}>
                  About
                  <span className="material-symbols-outlined text-sm text-[#B6924A]">chevron_right</span>
                </NavLink>
                <NavLink to="/services" className={mobileLinkClasses} onClick={toggleMenu}>
                  Services
                  <span className="material-symbols-outlined text-sm text-[#B6924A]">chevron_right</span>
                </NavLink>
                <NavLink to="/who-we-support" className={mobileLinkClasses} onClick={toggleMenu}>
                  Who We Support
                  <span className="material-symbols-outlined text-sm text-[#B6924A]">chevron_right</span>
                </NavLink>
                <NavLink to="/our-approach" className={mobileLinkClasses} onClick={toggleMenu}>
                  Our Approach
                  <span className="material-symbols-outlined text-sm text-[#B6924A]">chevron_right</span>
                </NavLink>
                <NavLink to="/contact" className={mobileLinkClasses} onClick={toggleMenu}>
                  Contact
                  <span className="material-symbols-outlined text-sm text-[#B6924A]">chevron_right</span>
                </NavLink>
              </nav>

              <div className="mt-auto space-y-3 pt-6 border-t border-white/10">
                <a 
                  href="https://wa.me/447449573231" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white p-3.5 rounded-xl font-bold uppercase text-center text-sm shadow-lg hover:bg-[#20ba5a] transition-all"
                >
                  <FaWhatsapp className="text-lg" />
                  WHATSAPP ADVISORY
                </a>
                <Link 
                  to="/contact" 
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 bg-[#B6924A] text-[#1E2A38] p-3.5 rounded-xl font-bold uppercase text-center text-sm shadow-lg"
                >
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  BOOK CONSULTATION
                </Link>
                <p className="text-center text-xs text-white/60">United Kingdom & Southern Africa</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
