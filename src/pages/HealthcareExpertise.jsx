import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "../assets/stock/healthcare-expertise-hero.jpg";
import homecareImg from "../assets/stock/service-homecare.jpg";
import welfareImg from "../assets/stock/service-welfare-visit.jpg";
import familyLiaisonImg from "../assets/stock/service-family-liaison.jpg";
import medicationImg from "../assets/stock/service-medication.jpg";
import recoveryImg from "../assets/stock/service-recovery.jpg";
import coordinationImg from "../assets/stock/service-coordination.jpg";
import wellbeingImg from "../assets/stock/service-wellbeing-review.jpg";
import diasporaImg from "../assets/stock/service-diaspora.jpg";

const HealthcareExpertise = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Personalised Homecare",
      tag: "PERSON-CENTRED CARE",
      icon: "home_health",
      desc: "Supporting individuals to live safely, comfortably and independently in their own homes through person-centred care tailored to their unique needs.",
      img: homecareImg
    },
    {
      title: "Welfare & Wellbeing Visits",
      tag: "REGULAR CHECK-INS",
      icon: "volunteer_activism",
      desc: "Regular visits to check on your loved one's wellbeing, provide companionship and identify concerns early.",
      img: welfareImg
    },
    {
      title: "Family Liaison & Communication",
      tag: "KEEPING FAMILIES CONNECTED",
      icon: "forum",
      desc: "Keeping families informed through regular updates, progress reports and open communication wherever they are in the world.",
      img: familyLiaisonImg
    },
    {
      title: "Medication & Daily Living Support",
      tag: "INDEPENDENCE & DIGNITY",
      icon: "medication",
      desc: "Helping individuals manage daily routines, medication prompts, meal preparation, mobility and activities that promote independence.",
      img: medicationImg
    },
    {
      title: "Hospital Discharge & Recovery Support",
      tag: "SAFE RECOVERY AT HOME",
      icon: "local_hospital",
      desc: "Providing practical assistance following hospital discharge to support a safe and supported recovery at home.",
      img: recoveryImg
    },
    {
      title: "Care Coordination",
      tag: "PERSON-CENTRED PATHWAYS",
      icon: "groups",
      desc: "Working with healthcare professionals, carers and family members to ensure services remain coordinated and person-centred.",
      img: coordinationImg
    },
    {
      title: "Independent Wellbeing Reviews",
      tag: "OBJECTIVE WELFARE ASSESSMENTS",
      icon: "fact_check",
      desc: "Providing objective welfare visits and wellbeing assessments with honest recommendations.",
      img: wellbeingImg
    },
    {
      title: "Diaspora Family Support",
      tag: "OVERSEAS FAMILY OVERSIGHT",
      icon: "public",
      desc: "Offering trusted local support, regular communication and professional oversight for families living overseas.",
      img: diasporaImg
    }
  ];

  const commitments = [
    {
      title: "Compassionate Care",
      desc: "Treating every individual with dignity, kindness and respect.",
      icon: "favorite"
    },
    {
      title: "Trusted Local Presence",
      desc: "Providing dependable support when families cannot be there.",
      icon: "location_on"
    },
    {
      title: "Regular Family Updates",
      desc: "Keeping families informed through honest and timely communication.",
      icon: "notifications_active"
    },
    {
      title: "Person-Centred Care",
      desc: "Tailoring every care plan to the individual's needs and preferences.",
      icon: "person"
    },
    {
      title: "Professional Oversight",
      desc: "Delivering services with quality, accountability and safeguarding at the core.",
      icon: "verified_user"
    },
    {
      title: "Peace of Mind",
      desc: "Giving families confidence that their loved ones are safe, supported and never alone.",
      icon: "self_improvement"
    }
  ];

  const whoWeSupport = [
    "Older adults wishing to remain independent at home.",
    "Individuals recovering from illness or hospital admission.",
    "People living with long-term health conditions.",
    "Individuals requiring ongoing support with daily living.",
    "Families living abroad seeking trusted local oversight.",
    "Relatives requesting regular welfare checks and professional updates."
  ];

  const journey = [
    "Initial Consultation",
    "Care Assessment",
    "Personalised Care Plan",
    "Ongoing Care & Monitoring",
    "Family Updates"
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-32 font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Compassionate homecare — caregiver with elderly loved one"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A38] via-[#1E2A38]/85 to-[#0F172A]/90 mix-blend-multiply"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { icon: "volunteer_activism", top: "18%", left: "12%", size: "45px" },
            { icon: "family_restroom", top: "22%", left: "82%", size: "50px" },
            { icon: "favorite", top: "68%", left: "10%", size: "40px" },
            { icon: "health_and_safety", top: "65%", left: "85%", size: "48px" },
            { icon: "verified", top: "15%", left: "70%", size: "42px" }
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
              style={{ top: item.top, left: item.left, fontSize: item.size }}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 text-center">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">health_and_safety</span>
              Healthcare — Our Specialist Expertise
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Compassionate Care.
              <span className="block text-[#B6924A] italic mt-1">Trusted Support. Peace of Mind.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/85 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Supporting Loved Ones, Wherever You Are. Living abroad can make it difficult to provide the day-to-day support your loved ones need. Elysian Global provides trusted homecare and family support services that keep you connected and informed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider flex items-center gap-2"
              >
                <span>Speak to Our Team</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/447984937336"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center gap-2 uppercase tracking-wider shadow-xl"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Advisory Desk</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening narrative */}
      <section className="py-20 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed">
            Whether you are concerned about an ageing parent, a relative recovering from illness or a family member requiring ongoing assistance, Elysian Global provides trusted homecare and family support services that keep you connected and informed.
          </p>
          <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed">
            We combine <strong className="text-[#1E2A38] font-semibold">compassionate care with professional oversight</strong>, ensuring your loved ones receive the support they need while giving you confidence that someone you trust is looking after what matters most.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">home_health</span>
              Our Homecare & Family Support Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Specialist Support for Every Stage</h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto font-light">
              Eight focused services delivered with professional oversight and compassionate care — designed to support individuals, families and loved ones across every need and life stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-5 flex flex-col"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B6924A] bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/20">
                    {s.tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#1E2A38]">{s.title}</h3>
                <p className="text-gray-700 font-light text-sm leading-relaxed">{s.desc}</p>

                <div className="h-48 rounded-2xl overflow-hidden bg-[#1E2A38] relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/70 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Choose Elysian */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">verified</span>
              Our Commitment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Why Families Choose Elysian</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto font-light">
              Six commitments that shape how we support every individual and every family we work with.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#F7F4EE] rounded-3xl p-7 border border-gray-100 hover:border-[#B6924A]/40 transition-all space-y-3 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1E2A38]">{c.title}</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-24 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div {...fadeInUp} className="space-y-5">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">groups</span>
              Who We Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Individuals, Families and Loved Ones Across Every Life Stage
            </h2>
            <p className="text-white/80 font-light leading-relaxed">
              Our services are designed around the real situations where families need trusted, professional and compassionate support.
            </p>
          </motion.div>

          <motion.ul {...fadeInUp} className="space-y-3">
            {whoWeSupport.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#16222F] border border-[#B6924A]/20 hover:border-[#B6924A]/50 transition-colors"
              >
                <span className="material-symbols-outlined text-[#B6924A] mt-0.5 flex-shrink-0">check_circle</span>
                <span className="text-white font-light text-sm md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Our Care Journey - Timeline */}
      <section className="py-24 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/20">
              <span className="material-symbols-outlined text-sm">timeline</span>
              Our Care Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">A Clear Path From First Call to Ongoing Care</h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#B6924A]/30 via-[#B6924A] to-[#B6924A]/30 -z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {journey.map((step, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center space-y-3"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#1E2A38] text-[#B6924A] flex items-center justify-center border-4 border-[#B6924A] shadow-lg">
                    <span className="font-bold text-3xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#1E2A38] leading-tight max-w-[180px] mx-auto">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise to Families + Final CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <motion.div {...fadeInUp} className="space-y-5">
            <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/10 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
              <span className="material-symbols-outlined text-sm">favorite</span>
              Our Promise to Families
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-[#B6924A] italic">Safe, Supported & Never Alone.</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Entrusting the care of a loved one to someone else is never an easy decision. At Elysian Global, every visit, conversation and action is guided by compassion, professionalism and respect. Our commitment is not only to care for those you love, but also to give you confidence that they are safe, supported and never alone.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="bg-[#B6924A] text-[#1E2A38] px-8 py-4 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-xl uppercase tracking-wider"
            >
              Book a Family Consultation
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
    </div>
  );
};

export default HealthcareExpertise;
