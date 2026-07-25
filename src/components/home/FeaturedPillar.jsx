import { motion } from "framer-motion";

const FeaturedPillar = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#F7F4EE] py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">
            Your Eyes and Ears on the Ground
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We act as your independent representative—monitoring progress, auditing operations, and safeguarding your interests with total transparency.
          </p>
        </div>

        <div className="relative h-96 md:h-120">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/assets/d3.png"
              alt="On-ground verification"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Process Flow */}
          <div className="relative h-full">
            {/* Connecting lines */}
            <div className="absolute inset-0">
              <div className="h-0.5 bg-[--accent-color: #B6924A] bg-[length:200%_100%] bg-gradient-to-r from-[#B6924A]/30 to-[#B6924A]/30">
                <div className="h-full w-1/3 bg-[#B6924A]"></div>
              </div>

              {/* Vertical connectors */}
              <div className="flex h-full justify-between items-stretch">
                <div className="w-0.5 bg-[#B6924A]/30"></div>
                <div className="w-0.5 bg-[#B6924A]/30"></div>
              </div>
            </div>

            {/* Nodes */}
            <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
              {/* Node 1: Remote Client */}
              <motion.div
                key="node1"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
              >
                <div className="w-12 h-12 rounded-full bg-[#B6924A]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#B6924A] text-xl">person</span>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#1E2A38]">Remote Client</h4>
                  <p className="text-sm text-gray-600">Overseas investors, businesses, or families</p>
                </div>
              </motion.div>

              {/* Node 2: Elysian Oversight */}
              <motion.div
                key="node2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
              >
                <div className="w-12 h-12 rounded-full bg-[#B6924A]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#B6924A] text-xl">shield</span>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#1E2A38]">Elysian Oversight</h4>
                  <p className="text-sm text-gray-600">Independent monitoring & verification</p>
                </div>
              </motion.div>

              {/* Node 3: On-Ground Verification & Live Reporting */}
              <motion.div
                key="node3"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
              >
                <div className="w-12 h-12 rounded-full bg-[#B6924A]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#B6924A] text-xl">security</span>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#1E2A38]">On-Ground Verification</h4>
                  <p className="text-sm text-gray-600">Real-time reporting & documentation</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPillar;