import { motion } from "framer-motion";
import verificationOnSiteImg from "../../assets/verification on site.png";

const FeaturedPillar = () => {
  const representativeExamples = [
    { text: "Building a property", icon: "domain" },
    { text: "Managing a business", icon: "storefront" },
    { text: "Supporting elderly parents", icon: "elderly" },
    { text: "Monitoring investments", icon: "trending_up" },
    { text: "Site inspections", icon: "fact_check" },
    { text: "Independent reporting", icon: "description" },
    { text: "Meeting representation", icon: "groups" },
    { text: "Contractor oversight", icon: "engineering" }
  ];

  const steps = [
    {
      step: "01",
      title: "Consultation & Planning",
      desc: "Every engagement begins with understanding your goals. We work with you to identify your requirements, define clear objectives and develop a tailored plan, whether you require consultancy, project oversight, business support, homecare coordination or local representation.",
      icon: "handshake"
    },
    {
      step: "02",
      title: "Local Representation & Professional Execution",
      desc: "Our experienced team becomes your trusted presence on the ground, delivering consultancy, independent oversight, project monitoring, operational support, inspections and stakeholder engagement while ensuring transparency, accountability and professional standards throughout.",
      icon: "verified_user"
    },
    {
      step: "03",
      title: "Verification, Reporting & Ongoing Support",
      desc: "Receive comprehensive reports, photographic and video evidence where appropriate, practical recommendations and regular progress updates, giving you complete confidence that your projects, investments, business interests or loved ones are being supported effectively.",
      icon: "analytics"
    }
  ];

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Heading Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">visibility</span>
            Independent Local Representative
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38] tracking-tight">
            Your Trusted Eyes and Ears on the Ground
          </h2>

          <h3 className="text-xl md:text-2xl text-[#B6924A] font-semibold tracking-wide">
            Protecting your interests when you can't be there.
          </h3>

          <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed pt-2">
            Whether you're managing a construction project, overseeing a business, supporting loved ones or investing from overseas, Elysian Global acts as your trusted local representative. We provide independent oversight, professional reporting and on-the-ground support, giving you confidence that your interests are being protected with transparency, accountability and integrity.
          </p>
        </div>

        {/* Showcase Grid: Client's Representative Examples */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 space-y-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A]">How We Represent You</span>
            <h4 className="text-2xl font-bold text-[#1E2A38]">As Your On-Ground Client Representative, We Assist With:</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {representativeExamples.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#F7F4EE] border border-gray-200/70 hover:border-[#B6924A] hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </div>
                <div className="flex items-center gap-2 text-[#1E2A38] font-bold text-sm">
                  <span className="text-[#B6924A] font-extrabold text-base">✓</span>
                  <span>{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image & 3-Step Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* On-Site Inspection Visual Card */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-white/40 relative h-[420px] md:h-[500px] bg-[#1E2A38] group">
            <img 
              src={verificationOnSiteImg} 
              alt="On-Ground Verification on Site - Elysian Independent Inspection" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1E2A38]/90 backdrop-blur-md rounded-2xl border border-[#B6924A]/40 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#B6924A] uppercase tracking-wider">Live On-Site Verification</span>
                <span className="text-xs text-white/80 font-light">Real-time inspection logs, geotagged evidence & audit reporting</span>
              </div>
            </div>
          </div>

          {/* 3 Steps Process */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A]">Our Service Execution Process</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1E2A38]">How We Work Together</h3>
            </div>

            <div className="space-y-4">
              {steps.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                    <span className="material-symbols-outlined text-xl">{node.icon}</span>
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#B6924A] uppercase tracking-widest">STEP {node.step}</span>
                      <h4 className="font-bold text-[#1E2A38] text-base">{node.title}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">{node.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedPillar;