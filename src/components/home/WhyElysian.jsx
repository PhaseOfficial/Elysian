import { motion } from "framer-motion";

const WhyElysian = () => {
  const reasons = [
    {
      number: "01",
      title: "Trusted Representation",
      subtitle: "When you can't be there, we can.",
      desc: "Acting as your dedicated in-country liaison, safeguarding your interests across every project, asset, or family requirement.",
      icon: "handshake"
    },
    {
      number: "02",
      title: "Independent Oversight",
      subtitle: "Transparent monitoring and objective reporting.",
      desc: "Unbiased, evidence-based verification with photos, videos, and milestone sign-offs for total peace of mind.",
      icon: "fact_check"
    },
    {
      number: "03",
      title: "UK Leadership & Expertise",
      subtitle: "Applying UK leadership, governance and professional experience to deliver high-quality services and best practice.",
      desc: "Steered by UK healthcare & governance standards to ensure institutional rigor and strict compliance.",
      icon: "verified"
    },
    {
      number: "04",
      title: "Local Expertise",
      subtitle: "Combining local understanding with international perspectives to navigate cultural, operational and regulatory environments effectively.",
      desc: "Experienced local teams with deep regulatory, construction, business, and healthcare context across Southern Africa.",
      icon: "location_city"
    },
    {
      number: "05",
      title: "Cross-Border Expertise",
      subtitle: "Connecting overseas investors, organisations and diaspora families with trusted local expertise through seamless communication and dependable support.",
      desc: "Seamless communication and operational bridge linking overseas investors and diaspora families with local operations.",
      icon: "public"
    },
    {
      number: "06",
      title: "Tailored Solutions",
      subtitle: "Every client is unique.",
      desc: "We take the time to understand your goals and deliver bespoke solutions that meet your specific needs, whether you&apos;re managing a project, supporting loved ones or expanding your business.",
      icon: "tune"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">stars</span>
            The Elysian Advantage
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Why <span className="text-[#B6924A]">Elysian?</span>
          </h2>

          <p className="text-white/70 text-base md:text-lg font-light">
            Why organisations, investors and families choose Elysian Global
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#16222F] rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#B6924A]/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#B6924A]">{item.number}</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#B6924A]/15 text-[#B6924A] flex items-center justify-center group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#B6924A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#B6924A] uppercase tracking-wider">
                  {item.subtitle}
                </p>

                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyElysian;
