import { motion } from "framer-motion";
import approachMeetingImg from "../../assets/stock/about-approach-meeting.jpg";

const AboutApproach = () => {
  const steps = [
    {
      number: 1,
      title: "Discover",
      desc: "Understanding your goals before recommending solutions.",
      details: "Every engagement begins with a detailed consultation to understand your objectives, challenges and expectations.",
      icon: "search"
    },
    {
      number: 2,
      title: "Assess",
      desc: "Evaluating opportunities, risks and priorities.",
      details: "We review your circumstances, identify risks and develop a tailored strategy.",
      icon: "assessment"
    },
    {
      number: 3,
      title: "Plan",
      desc: "Creating a tailored roadmap for delivery.",
      details: "We define the scope of work, responsibilities, timelines and reporting arrangements.",
      icon: "edit_note"
    },
    {
      number: 4,
      title: "Represent & Deliver",
      desc: "Your trusted presence on the ground.",
      details: "We provide consultancy, project oversight, operational support, homecare coordination, business monitoring and stakeholder engagement.",
      icon: "engineering"
    },
    {
      number: 5,
      title: "Verify",
      desc: "Independent oversight and quality assurance.",
      details: "We monitor progress, verify completed work and ensure agreed standards are maintained.",
      icon: "verified"
    },
    {
      number: 6,
      title: "Report & Improve",
      desc: "Keeping you informed every step of the way.",
      details: "We provide regular updates, evidence-based reports and practical recommendations.",
      icon: "monitoring"
    }
  ];

  const principles = [
    {
      title: "Tailored to You",
      desc: "Every solution is designed around your goals and priorities."
    },
    {
      title: "Independent Representation",
      desc: "We always act in your best interests."
    },
    {
      title: "Local Presence",
      desc: "Trusted professionals are on the ground when you can't be."
    },
    {
      title: "Transparent Reporting",
      desc: "Clear communication and evidence-based updates throughout."
    },
    {
      title: "UK Leadership & Professional Expertise",
      desc: "Our work is informed by UK governance, leadership and best practice."
    },
    {
      title: "Continuous Improvement",
      desc: "We evaluate outcomes and help build long-term success."
    }
  ];

  const commitments = [
    "Understand your needs before recommending solutions.",
    "Represent your interests with integrity.",
    "Deliver practical, measurable outcomes.",
    "Communicate openly and honestly.",
    "Uphold the highest standards of professionalism and accountability.",
    "Build relationships that last beyond a single project."
  ];

  const journey = [
    { label: "Initial Consultation" },
    { label: "Needs Assessment" },
    { label: "Tailored Proposal" },
    { label: "Project Delivery / Representation" },
    { label: "Independent Verification" },
    { label: "Reporting & Ongoing Support" }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Section intro + 6-step approach */}
      <section className="py-14 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto space-y-10">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">account_tree</span>
              Our Approach
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#1E2A38] leading-tight">
              A Structured Approach.
              <span className="block text-[#B6924A] italic mt-1">Personalised for Every Client.</span>
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-light leading-relaxed">
              From Strategy to Local Execution. Every client, project and situation is unique. We combine strategic thinking, trusted local representation and transparent reporting to deliver practical outcomes with professionalism, accountability and care.
            </p>
          </motion.div>

          {/* Methodology hero image */}
          <motion.div {...fadeIn} className="relative rounded-3xl overflow-hidden h-48 md:h-60 border-2 border-[#B6924A]/20 shadow-xl">
            <img
              src={approachMeetingImg}
              alt="Collaborative approach — strategy meeting and execution"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A38]/85 via-[#1E2A38]/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="max-w-lg space-y-2">
                <span className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#1E2A38]/90 px-3 py-1 rounded-full border border-[#B6924A]/40">
                  <span className="material-symbols-outlined text-sm">timeline</span>
                  Our Six-Step Approach
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Discover. Assess. Plan. Deliver. Verify. Improve.
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Six steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((s, idx) => (
              <motion.div
                key={s.number}
                {...fadeIn}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-3 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-5xl font-bold text-[#B6924A]/10 leading-none">
                  {s.number}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B6924A]">Step {s.number}</span>
                  <h3 className="text-base font-bold text-[#1E2A38] mt-0.5">{s.title}</h3>
                </div>
                <p className="text-[#1E2A38] font-semibold text-xs leading-snug">{s.desc}</p>
                <p className="text-gray-600 text-xs font-light leading-snug">{s.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Approach Works - Principles (3-column grid) */}
      <section className="py-14 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">task_alt</span>
              Why Our Approach Works
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38]">Six Principles That Underpin Every Engagement</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#F7F4EE] rounded-2xl p-5 border border-gray-100 hover:border-[#B6924A]/40 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1E2A38] text-[#B6924A] flex items-center justify-center text-xs font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-sm text-[#1E2A38] leading-tight">{p.title}</h3>
                </div>
                <p className="text-gray-700 font-light text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Elysian Commitment */}
      <section className="py-14 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <motion.div {...fadeIn} className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              The Elysian Commitment
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Every Engagement is Guided by Our Commitment to:
            </h2>
            <p className="text-white/70 font-light text-sm leading-relaxed">
              These commitments are not slogans — they are the standards we are measured against by every client on every project.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-7">
            <ul className="space-y-3">
              {commitments.map((c, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#16222F] border border-[#B6924A]/20 hover:border-[#B6924A]/50 transition-colors"
                >
                  <span className="material-symbols-outlined text-[#B6924A] mt-0.5 flex-shrink-0">check_circle</span>
                  <span className="text-white font-light text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* The Elysian Journey - Timeline */}
      <section className="py-14 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">timeline</span>
              The Elysian Journey
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38]">From First Call to Long-Term Partnership</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto font-light">
              A clear, transparent path that ensures you always know what&apos;s happening, why, and what&apos;s next.
            </p>
          </div>

          <div className="relative">
            {/* Connector line on desktop */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#B6924A]/20 via-[#B6924A] to-[#B6924A]/20 -z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {journey.map((j, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#1E2A38] text-[#B6924A] flex items-center justify-center border-4 border-[#B6924A] shadow-lg relative">
                    <span className="font-bold text-2xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#1E2A38] leading-tight max-w-[140px] mx-auto">
                    {j.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutApproach;
