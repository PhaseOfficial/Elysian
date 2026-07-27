import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import verificationOnSiteImg from "../assets/verification on site.png";
import internationalCareImg from "../assets/carer with an elderly white couple.png";
import projectAuditImg from "../assets/d3.png";

const Insights = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const articles = [
    {
      id: "cross-border-investment-oversight",
      category: "DIASPORA & INVESTMENT",
      title: "Safeguarding Overseas Capital: The Power of Independent Milestone Verification",
      date: "July 2026",
      readTime: "5 min read",
      excerpt: "How overseas investors and diaspora families can mitigate construction risk, prevent fraud, and ensure funds are disbursed only after verified physical milestones.",
      img: verificationOnSiteImg
    },
    {
      id: "uk-clinical-governance-benchmarks",
      category: "HEALTHCARE GOVERNANCE",
      title: "Applying UK NHS Clinical Governance Standards in Southern Africa",
      date: "July 2026",
      readTime: "7 min read",
      excerpt: "An executive analysis by Jean Sigauke (RN, Biomedical Scientist) on elevating healthcare quality assurance, patient safety protocols, and workforce capacity.",
      img: internationalCareImg
    },
    {
      id: "navigating-market-entry",
      category: "BUSINESS CONSULTANCY",
      title: "Navigating Market Entry: Connecting European Capital with Regional Execution",
      date: "June 2026",
      readTime: "6 min read",
      excerpt: "Strategic roadmap for European companies expanding into Southern Africa, focusing on regulatory compliance, stakeholder mapping, and in-country representation.",
      img: projectAuditImg
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 animate-hero-gradient text-white relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "newspaper", top: "18%", left: "12%", size: "45px" },
            { icon: "menu_book", top: "25%", left: "82%", size: "50px" },
            { icon: "lightbulb", top: "70%", left: "10%", size: "40px" },
            { icon: "analytics", top: "65%", left: "85%", size: "48px" },
            { icon: "public", top: "15%", left: "70%", size: "42px" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.20, 0.45, 0.20],
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
            animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B6924A]"
          >
            <span className="material-symbols-outlined text-[320px]">newspaper</span>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">lightbulb</span>
            Thought Leadership & Executive Articles
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Insights & <span className="text-[#B6924A] italic">Governance</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Market intelligence, clinical governance frameworks, cross-border investment protection guides, and professional regulatory insights.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Latest Industry Publications</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
              Expert perspectives on healthcare standards, investment oversight, and international business execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-shadow"
              >
                <div>
                  <div className="h-52 overflow-hidden bg-[#1E2A38] relative">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-[#B6924A] text-[#1E2A38] font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500 font-light">
                      <span>{article.date}</span>
                      <span>• {article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1E2A38] group-hover:text-[#B6924A] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-light text-xs leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-gray-50 mt-4">
                  <Link to="/contact" className="text-xs font-bold text-[#1E2A38] hover:text-[#B6924A] flex items-center gap-1 uppercase tracking-wider">
                    <span>Read Advisory Article</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#1E2A38] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Build Something Meaningful Together</h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-base">
            Have questions regarding cross-border governance, healthcare audits, or investment oversight? Speak to our executive team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all uppercase tracking-wider">
              Book a Consultation
            </Link>
            <a 
              href="https://wa.me/447984937336" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Advisory (+44 7984 937336)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
