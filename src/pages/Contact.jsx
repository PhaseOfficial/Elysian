import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import emergencyImg from "../assets/emergency.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    residence: "United Kingdom",
    service: "Consultancy & Advisory",
    message: ""
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "447449573231";
    const text = `*Consultation Request - Elysian Consulting Ltd*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Residence:* ${formData.residence}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      {/* Header Section with Animated Icon Background */}
      <section className="py-24 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden text-center space-y-6">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "call", top: "18%", left: "12%", size: "45px" },
            { icon: "chat", top: "25%", left: "82%", size: "50px" },
            { icon: "contact_mail", top: "70%", left: "10%", size: "40px" },
            { icon: "support_agent", top: "65%", left: "85%", size: "48px" },
            { icon: "verified_user", top: "15%", left: "70%", size: "42px" },
            { icon: "public", top: "75%", left: "75%", size: "38px" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.04, 0.12, 0.04],
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
            animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B6924A]"
          >
            <span className="material-symbols-outlined text-[320px]">headset_mic</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20"
          >
            <span className="material-symbols-outlined text-sm">contact_mail</span>
            Direct Advisory Desk
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Book a Consultation with <span className="text-[#B6924A] italic">Elysian</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discuss your project, investment oversight, or family care coordination requirements with our international advisory team.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <motion.div {...fadeInUp} className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[#1E2A38] flex items-center justify-center text-[#B6924A]">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1E2A38] uppercase">Direct Advisory Line</h3>
                  <p className="text-xs text-gray-500 font-light">Call for consultation or rapid on-ground response.</p>
                  <a href="tel:+447449573231" className="text-lg font-bold text-[#1E2A38] hover:text-[#B6924A] transition-colors block pt-1">+44 7449 573231</a>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <FaWhatsapp className="text-2xl" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1E2A38] uppercase">WhatsApp Advisory Desk</h3>
                  <p className="text-xs text-gray-500 font-light">Instant messaging for international clients.</p>
                  <a href="https://wa.me/447449573231" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#25D366] hover:underline flex items-center gap-1.5 pt-1">
                    <FaWhatsapp className="text-base" />
                    <span>Chat Directly (+44 7449 573231)</span>
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[#1E2A38] flex items-center justify-center text-[#B6924A]">
                  <span className="material-symbols-outlined text-2xl">public</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1E2A38] uppercase">Regional Footprint</h3>
                  <p className="text-xs text-gray-600 font-light">
                    Operating across Southern Africa & Europe (United Kingdom).
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Emergency & Rapid Response Image Banner */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/20 relative bg-[#1E2A38]">
              <img src={emergencyImg} alt="Emergency & Rapid Advisory Desk" className="w-full h-52 object-cover opacity-80" />
              <div className="p-6 text-white space-y-2">
                <h4 className="font-bold text-base text-[#B6924A]">Independent On-Ground Representation</h4>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  We act as your objective eyes and ears on the ground, ensuring total transparency for your investments and family responsibilities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl text-[#1E2A38] font-bold tracking-tight">Request an Initial Consultation</h2>
                <p className="text-xs text-gray-500 font-light">Complete the details below to initiate your inquiry with our senior advisory team.</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#1E2A38] uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#F7F4EE] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#B6924A] outline-none" 
                      placeholder="e.g. Jean Sigauke" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#1E2A38] uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#F7F4EE] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#B6924A] outline-none" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#1E2A38] uppercase tracking-wider">Telephone / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#F7F4EE] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#B6924A] outline-none" 
                      placeholder="+44 ... or +263 ..." 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#1E2A38] uppercase tracking-wider">Country of Residence</label>
                    <input 
                      type="text" 
                      name="residence"
                      value={formData.residence}
                      onChange={handleChange}
                      className="w-full bg-[#F7F4EE] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#B6924A] outline-none" 
                      placeholder="e.g. United Kingdom" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#1E2A38] uppercase tracking-wider">Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#F7F4EE] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#B6924A] outline-none cursor-pointer"
                  >
                    <option>Consultancy & Advisory Services</option>
                    <option>Project & Investment Oversight</option>
                    <option>Building & Business Monitoring</option>
                    <option>Local Representation & Mediation</option>
                    <option>Homecare & Family Support Services</option>
                    <option>Health & Social Care Consultancy</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#1E2A38] uppercase tracking-wider">Brief Description of Inquiry</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#F7F4EE] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#B6924A] outline-none" 
                    placeholder="Outline your project, location, and specific requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#20ba5a] transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>SUBMIT VIA WHATSAPP ADVISORY</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
