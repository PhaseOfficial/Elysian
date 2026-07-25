import { motion } from "framer-motion";

const FAQAndProfessionalBoundaries = () => {
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
      answer: "We provide secure, timestamped reports with geotagged evidence via our client portal. Frequency is tailored to client needs—ranging from real-time alerts for critical events to weekly, monthly, or quarterly comprehensive updates."
    },
    {
      question: "What qualifications do your on-ground representatives have?",
      answer: "Our team comprises professionals with backgrounds in project management, healthcare, social work, and law enforcement, all trained in our standardized observation, documentation, and reporting protocols."
    }
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#F7F4EE] py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-start mb-2 cursor-pointer hover:text-[#B6924A] transition-colors">
                    <h3 className="font-semibold text-[#1E2A38]">{item.question}</h3>
                    <span className="material-symbols-outlined text-[#B6924A]">expand_more</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-4">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Boundaries Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38] mb-6">
              Professional Boundaries & Ethics
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Elysian Consulting operates with uncompromising ethical standards and professional boundaries to ensure the integrity of our services. We maintain strict independence in all engagements, avoiding conflicts of interest that could compromise our objectivity or the trust placed in us by our clients.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-[#B6924A] mt-1 flex-shrink-0">shield</span>
                <div>
                  <h3 className="font-semibold text-[#1E2A38]">Independence & Objectivity</h3>
                  <p className="text-gray-600 text-sm">
                    We maintain complete operational and financial independence from the subjects of our oversight. Our findings are based solely on verifiable evidence collected through systematic, transparent methodologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-[#B6924A] mt-1 flex-shrink-0">privacy_tip</span>
                <div>
                  <h3 className="font-semibold text-[#1E2A38]">Confidentiality & Data Protection</h3>
                  <p className="text-gray-600 text-sm">
                    All client information and engagement details are handled with the strictest confidentiality. We employ industry-standard data protection measures to safeguard sensitive information throughout our engagement lifecycle.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-[#B6924A] mt-1 flex-shrink-0">gavel</span>
                <div>
                  <h3 className="font-semibold text-[#1E2A38]">Compliance & Legal Adherence</h3>
                  <p className="text-gray-600 text-sm">
                    Our operations comply with relevant international and local regulations. We work within established legal frameworks and maintain transparent communication with appropriate authorities when required by law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQAndProfessionalBoundaries;