import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const FAQAndProfessionalBoundaries = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openBoundary, setOpenBoundary] = useState(null);

  const faqItems = [
    {
      question: "How do you ensure independence and objectivity?",
      answer: "We operate as a strictly independent third party with no financial or operational ties to the projects, properties, or families we monitor. Our reports are based solely on verifiable evidence collected through our on-ground activities."
    },
    {
      question: "What regions do you cover for your on-ground services?",
      answer: "We provide services across Southern Africa (including Zimbabwe, South Africa, Botswana, and neighboring countries) and maintain partnerships with local professionals in key European markets for cross-border coordination."
    },
    {
      question: "How is reporting delivered and how frequently?",
      answer: "We provide secure, timestamped reports with geotagged evidence via our client portal. Frequency is tailored to client needs, ranging from real-time alerts for critical events to weekly, monthly, or quarterly comprehensive updates."
    },
    {
      question: "What qualifications do your on-ground representatives have?",
      answer: "Our team comprises professionals with backgrounds in project management, healthcare, social work, and law enforcement, all trained in our standardized observation, documentation, and reporting protocols."
    }
  ];

  const boundaries = [
    {
      icon: "shield",
      title: "Independence & Objectivity",
      desc: "We maintain complete operational and financial independence from the subjects of our oversight. Our findings are based solely on verifiable evidence collected through systematic, transparent methodologies."
    },
    {
      icon: "privacy_tip",
      title: "Confidentiality & Data Protection",
      desc: "All client information and engagement details are handled with the strictest confidentiality. We employ industry-standard data protection measures to safeguard sensitive information throughout our engagement lifecycle."
    },
    {
      icon: "gavel",
      title: "Compliance & Legal Adherence",
      desc: "Our operations comply with relevant international and local regulations. We work within established legal frameworks and maintain transparent communication with appropriate authorities when required by law."
    }
  ];

  const AccordionRow = ({ item, isOpen, onToggle, icon }) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center gap-3 p-4 bg-white hover:bg-[#F7F4EE] transition-colors text-left"
      >
        <span className="flex items-center gap-3 min-w-0">
          {icon && <span className="material-symbols-outlined text-[#B6924A] flex-shrink-0">{icon}</span>}
          <span className="font-semibold text-[#1E2A38] text-sm pr-2">{item.question || item.title}</span>
        </span>
        <span className={`material-symbols-outlined text-[#B6924A] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-4 pb-4 pt-1 text-gray-700 text-sm leading-relaxed border-t border-gray-100">
              {item.answer || item.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  AccordionRow.propTypes = {
    item: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    icon: PropTypes.string
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#F7F4EE] py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ Section - Accordion */}
          <div>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38]">
                Frequently Asked Questions
              </h2>
              <button
                onClick={() => setOpenFaq(openFaq === "all" ? null : "all")}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#B6924A] hover:text-[#1E2A38] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {openFaq === "all" ? "expand_less" : "expand_more"}
                </span>
                {openFaq === "all" ? "Collapse All" : "Expand All"}
              </button>
            </div>
            <div className="space-y-2">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === "all" || openFaq === index;
                return (
                  <AccordionRow
                    key={index}
                    item={item}
                    index={index}
                    isOpen={isOpen}
                    onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                );
              })}
            </div>
          </div>

          {/* Professional Boundaries Section - Accordion */}
          <div>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38]">
                Professional Boundaries & Ethics
              </h2>
              <button
                onClick={() => setOpenBoundary(openBoundary === "all" ? null : "all")}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#B6924A] hover:text-[#1E2A38] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {openBoundary === "all" ? "expand_less" : "expand_more"}
                </span>
                {openBoundary === "all" ? "Collapse All" : "Expand All"}
              </button>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Elysian Consulting operates with uncompromising ethical standards and professional boundaries to ensure the integrity of our services. We maintain strict independence in all engagements, avoiding conflicts of interest that could compromise our objectivity or the trust placed in us by our clients.
            </p>
            <div className="space-y-2">
              {boundaries.map((item, index) => {
                const isOpen = openBoundary === "all" || openBoundary === index;
                return (
                  <AccordionRow
                    key={index}
                    item={item}
                    index={index}
                    isOpen={isOpen}
                    onToggle={() => setOpenBoundary(openBoundary === index ? null : index)}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQAndProfessionalBoundaries;
