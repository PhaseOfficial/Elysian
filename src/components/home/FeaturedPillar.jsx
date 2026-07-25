import { motion } from "framer-motion";
import verificationOnSiteImg from "../../assets/verification on site.png";

const FeaturedPillar = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#F7F4EE] py-16 px-6 md:px-12 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
            <span className="material-symbols-outlined text-sm">visibility</span>
            Independent On-Ground Oversight
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E2A38]">
            Your Eyes and Ears on the Ground
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            We act as your independent representative to monitor progress, audit operations, and safeguard your interests with total transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Feature Showcase Image - verification on site.png */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-white/40 relative h-[380px] md:h-[480px] bg-[#1E2A38] group">
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

          {/* Process Diagram Column */}
          <div className="lg:col-span-6 space-y-4">
            {[
              {
                step: "01",
                title: "Remote Client Engagement",
                desc: "Overseas investors, businesses, or families instruct specific project audit parameters, milestone targets, or family care expectations.",
                icon: "person"
              },
              {
                step: "02",
                title: "Elysian Independent Oversight",
                desc: "Our on-ground specialists execute physical site visits, financial disbursal audits, and objective compliance inspections without third-party bias.",
                icon: "shield"
              },
              {
                step: "03",
                title: "On-Ground Verification & Live Reporting",
                desc: "Delivering timestamped video/photo evidence, structured written audit logs, and progress verification straight to your client desk.",
                icon: "fact_check"
              }
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center flex-shrink-0 font-bold shadow-sm">
                  <span className="material-symbols-outlined text-xl">{node.icon}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#B6924A] uppercase tracking-widest">STEP {node.step}</span>
                    <h4 className="font-bold text-[#1E2A38] text-base">{node.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">{node.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPillar;