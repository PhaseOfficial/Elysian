import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import founderImg from "../../assets/gin proffessional photo.jpeg";
import trustBordersImg from "../../assets/stock/about-trust-borders.jpg";
import purposeStrategyImg from "../../assets/stock/about-purpose-strategy.jpg";

const AboutMission = () => {
  const values = [
    {
      title: "Integrity",
      desc: "We act honestly and ethically.",
      icon: "verified_user"
    },
    {
      title: "Accountability",
      desc: "We deliver on our commitments.",
      icon: "task_alt"
    },
    {
      title: "Excellence",
      desc: "We pursue the highest standards.",
      icon: "workspace_premium"
    },
    {
      title: "Transparency",
      desc: "Open communication builds trust.",
      icon: "visibility"
    },
    {
      title: "Collaboration",
      desc: "We work with our clients as partners.",
      icon: "handshake"
    },
    {
      title: "Compassion",
      desc: "People remain at the heart of what we do.",
      icon: "favorite"
    }
  ];

  const differentiators = [
    {
      title: "International Perspective",
      desc: "Global thinking with local understanding.",
      icon: "public"
    },
    {
      title: "Trusted Representation",
      desc: "A professional presence protecting your interests.",
      icon: "shield_person"
    },
    {
      title: "Independent Oversight",
      desc: "Transparent monitoring and evidence-based reporting.",
      icon: "fact_check"
    },
    {
      title: "UK Leadership & Professional Expertise",
      desc: "Applying UK governance and best practice.",
      icon: "school"
    },
    {
      title: "Collaborative Partnerships",
      desc: "Working alongside clients to achieve shared success.",
      icon: "groups"
    },
    {
      title: "Results That Matter",
      desc: "Practical outcomes that create confidence and value.",
      icon: "insights"
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Building Trust Across Borders - Intro */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6 order-2 lg:order-1 space-y-3">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">public</span>
              Building Trust Across Borders
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
              More Than Consultancy.
              <span className="block text-[#B6924A] italic mt-1">A Trusted Partner for What Matters Most.</span>
            </h2>
            <p className="text-gray-700 text-sm font-light leading-relaxed">
              At Elysian Global, we believe that distance should never be a barrier to opportunity, progress or peace of mind. We bridge the gap between international clients and trusted local execution, providing professional services that help individuals, families, businesses and organisations confidently manage projects, investments, healthcare initiatives and operational activities across Southern Africa and Europe.
            </p>
            <p className="text-gray-700 text-sm font-light leading-relaxed">
              Whether you&apos;re expanding a business, overseeing a construction project, protecting an investment or supporting loved ones from abroad, we become your <strong className="text-[#1E2A38] font-semibold">trusted partner on the ground</strong> — combining strategic thinking with practical execution to deliver confidence, accountability and measurable results.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[320px] md:h-[400px]">
              <img
                src={trustBordersImg}
                alt="Cross-border professional work and digital collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1E2A38]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1E2A38]/85 backdrop-blur-md rounded-2xl border border-[#B6924A]/30">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#B6924A] text-3xl">public</span>
                  <div>
                    <span className="block text-white font-bold tracking-wide">Southern Africa & Europe</span>
                    <span className="block text-white/70 text-xs uppercase tracking-widest">UK Leadership Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose + Our Difference */}
      <section className="py-12 px-6 md:px-12 bg-[#F7F4EE] border-y border-[#1E2A38]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            {...fadeIn}
            className="bg-white rounded-3xl p-7 border border-gray-100 shadow-xl space-y-3"
          >
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">flag</span>
              Our Purpose
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1E2A38] leading-tight">
              Connecting Global Vision with Local Excellence.
            </h3>
            <p className="text-gray-700 text-sm font-light leading-relaxed">
              Elysian Global was founded to bridge the gap between international clients and dependable local execution through independent oversight, trusted representation and professional expertise.
            </p>
            <img
              src={purposeStrategyImg}
              alt="Strategic planning and purpose"
              className="w-full h-40 object-cover rounded-2xl border border-gray-100 mt-1"
            />
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#1E2A38] rounded-3xl p-7 border border-[#B6924A]/30 shadow-xl space-y-3 text-white"
          >
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">compare_arrows</span>
              Our Difference
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Unlike Traditional Consultancies, We Don&apos;t Stop at Advice.
            </h3>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              We combine consultancy with practical implementation, independent oversight and trusted local representation — ensuring every recommendation is supported by action.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {[
                { icon: "lightbulb", label: "Consultancy" },
                { icon: "build", label: "Implementation" },
                { icon: "visibility", label: "Oversight" },
                { icon: "workspace_premium", label: "Representation" }
              ].map((it, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#16222F] border border-[#B6924A]/20 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#B6924A] text-base">{it.icon}</span>
                  <span className="text-xs font-semibold text-white">{it.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight - Jean Sigauke */}
      <section className="py-12 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B6924A]/40 bg-[#1E2A38] relative h-[360px] md:h-[420px]">
              <img src={founderImg} alt="Jean Sigauke - Founder & Managing Director" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 p-3 bg-[#1E2A38]/90 backdrop-blur-md rounded-2xl border border-[#B6924A]/30 text-center">
                <h3 className="text-base font-bold text-[#B6924A]">Jean Sigauke</h3>
                <p className="text-[10px] text-white/80 uppercase tracking-widest font-light">Founder & Managing Director</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">badge</span>
              Meet Our Founder
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38] leading-tight">
              Experience, Governance & a Genuine Cross-Border Commitment
            </h2>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Registered Nurse (RN)",
                "Biomedical Scientist",
                "Entrepreneur",
                "International Healthcare Specialist",
                "UK NHS Governance Leader"
              ].map((badge, idx) => (
                <span key={idx} className="bg-[#1E2A38] text-white px-3 py-1 rounded-lg text-[11px] font-semibold tracking-wide border border-white/10 shadow-sm">
                  ✓ {badge}
                </span>
              ))}
            </div>

            <p className="text-gray-700 text-sm font-light leading-relaxed">
              Jean Sigauke founded Elysian Consultancy t/a Elysian Global from a belief that people managing responsibilities across borders deserve a trusted partner who protects their interests with integrity, professionalism and accountability. Her UK healthcare, governance and leadership experience continues to shape the organisation&apos;s values and approach.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100">
              <div className="space-y-1">
                <span className="text-2xl font-bold text-[#B6924A]">Decades</span>
                <p className="text-[11px] text-gray-500 font-light uppercase tracking-wider">Clinical & Leadership Experience</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-[#1E2A38]">UK & S. Africa</span>
                <p className="text-[11px] text-gray-500 font-light uppercase tracking-wider">Cross-Border Footprint</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-[#B6924A]">100%</span>
                <p className="text-[11px] text-gray-500 font-light uppercase tracking-wider">Independent Representation</p>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-[#1E2A38] text-white px-5 py-3 rounded-xl font-bold text-xs hover:bg-[#B6924A] hover:text-[#1E2A38] transition-all uppercase tracking-wider flex items-center gap-2">
                <span>Speak to Jean Sigauke</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/447984937336"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold text-xs hover:bg-[#20ba5a] transition-all uppercase tracking-wider flex items-center gap-2"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp Advisory</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">diamond</span>
              Our Values
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38]">The Principles That Guide Every Engagement</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto font-light">
              Everything we do is anchored in a clear set of values that shape how we serve our clients and represent their interests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">{v.icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#1E2A38]">{v.title}</h3>
                <p className="text-gray-600 text-xs font-light leading-snug">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Elysian */}
      <section className="py-12 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              Our Difference
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38]">Why Clients Choose Elysian</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto font-light">
              Six distinct reasons international clients, families and organisations trust us with their most important projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((d, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#F7F4EE] rounded-2xl p-4 border border-gray-100 hover:border-[#B6924A]/40 transition-all space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">{d.icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#1E2A38] leading-tight">{d.title}</h3>
                <p className="text-gray-600 text-xs font-light leading-snug">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMission;
