import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const AboutPromise = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Our Vision for the Future */}
      <section className="py-12 px-6 md:px-12 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
          <motion.div {...fadeIn} className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">visibility</span>
              Our Vision for the Future
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38] leading-tight">
              Becoming a Leading Cross-Border Professional Services Organisation
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto">
              To become one of the leading professional services organisations supporting cross-border projects, investments, healthcare and family welfare across Southern Africa and Europe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Elysian Promise + Closing CTA */}
      <section className="py-14 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#B6924A]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <motion.div {...fadeIn} className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">verified</span>
              The Elysian Promise
            </div>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              <span className="text-[#B6924A] italic">Wherever You Are in the World,</span>
              <span className="block">Someone Is Looking After What Matters Most.</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re managing a project, protecting an investment, supporting a loved one or building something new, we are committed to representing your interests with integrity, professionalism and transparency.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider flex items-center gap-2"
            >
              <span>Start Your Engagement</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <a
              href="https://wa.me/447984937336"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp (+44 7984 937336)</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPromise;
