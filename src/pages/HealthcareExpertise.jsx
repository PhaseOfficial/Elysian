import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "../assets/stock/healthcare-hero.jpg";
import featuredImg from "../assets/stock/healthcare-featured.jpg";
import impactImg from "../assets/stock/healthcare-impact.jpg";

const HealthcareExpertise = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const trustBadges = [
    { icon: "favorite", label: "Compassionate\nCare" },
    { icon: "verified_user", label: "Trusted &\nProfessional" },
    { icon: "person", label: "Person-Centred\nApproach" },
    { icon: "public", label: "Across Southern\nAfrica & Europe" }
  ];

  const featuredSubServices = [
    { icon: "home_health", title: "Homecare Support", desc: "Personalised support with daily living and personal care." },
    { icon: "volunteer_activism", title: "Welfare & Wellbeing Visits", desc: "Regular visits to check on wellbeing and provide companionship." },
    { icon: "local_hospital", title: "Hospital Discharge Support", desc: "Practical support for a safe recovery at home." },
    { icon: "groups", title: "Care Coordination", desc: "We coordinate with healthcare professionals and services." },
    { icon: "forum", title: "Family Liaison", desc: "We keep families informed with regular updates and communication." },
    { icon: "accessibility_new", title: "Daily Living Support", desc: "Assistance with meals, mobility, appointments and more." },
    { icon: "medication", title: "Medication Support", desc: "Medication reminders and management support." },
    { icon: "fact_check", title: "Independent Wellbeing Visits", desc: "Independent visits and assessments for your peace of mind." },
    { icon: "monitor_heart", title: "Care Monitoring", desc: "Ongoing monitoring and reporting to keep families reassured." }
  ];

  const whyFamilies = [
    "Compassionate & Dignified Care",
    "Trusted Local Presence",
    "Regular Family Updates",
    "Person-Centred Care Plans",
    "Professional & Reliable Team",
    "Peace of Mind, Every Day"
  ];

  const expertise = [
    {
      icon: "medical_services",
      title: "Healthcare Consultancy",
      desc: "Strategic advice and operational support to improve healthcare services and outcomes."
    },
    {
      icon: "health_and_safety",
      title: "Clinical Governance & Quality Assurance",
      desc: "Strengthening patient safety, compliance and quality through robust systems and audits."
    },
    {
      icon: "groups_3",
      title: "Workforce Development & Leadership",
      desc: "Building capable teams and strong leaders through training, mentoring and capacity building."
    },
    {
      icon: "domain",
      title: "Healthcare Infrastructure & Service Development",
      desc: "Supporting the design, improvement and sustainability of healthcare facilities and services."
    },
    {
      icon: "school",
      title: "Training & Capacity Building",
      desc: "Professional education and skills development for healthcare professionals."
    },
    {
      icon: "public",
      title: "International Health Partnerships",
      desc: "Collaborating with governments, NGOs and partners to strengthen health systems."
    }
  ];

  const stats = [
    { value: "500+", label: "Families\nSupported", icon: "family_restroom" },
    { value: "1,000+", label: "Home Visits\nCompleted", icon: "home_health" },
    { value: "50+", label: "Healthcare\nPartners", icon: "handshake" },
    { value: "2", label: "Continents\nServed", icon: "public" },
    { value: "25+", label: "Organisations\nSupported", icon: "apartment" },
    { value: "100%", label: "Commitment to\nQuality & Care", icon: "verified" }
  ];

  const approachSteps = [
    { icon: "search", title: "Assess", desc: "Understanding needs, challenges and priorities." },
    { icon: "lightbulb", title: "Design", desc: "Creating tailored solutions and care plans." },
    { icon: "settings", title: "Implement", desc: "Delivering with expertise, compassion and professionalism." },
    { icon: "monitor_heart", title: "Monitor", desc: "Continuous oversight and quality assurance." },
    { icon: "trending_up", title: "Improve", desc: "Continuous improvement for better outcomes and sustainable impact." }
  ];

  const expertiseAreas = [
    "UK Nursing",
    "Biomedical Science",
    "Clinical Governance",
    "Healthcare Leadership",
    "Quality Assurance",
    "Adult Social Care",
    "Workforce Development",
    "Service Improvement"
  ];

  const impactCards = [
    {
      icon: "volunteer_activism",
      title: "Supporting Families Across Borders",
      desc: "Helping diaspora families coordinate compassionate care and maintain regular communication with loved ones living in Southern Africa."
    },
    {
      icon: "health_and_safety",
      title: "Strengthening Healthcare Services",
      desc: "Supporting organisations to improve governance, workforce capability and quality assurance through practical consultancy and implementation."
    },
    {
      icon: "eco",
      title: "Building Sustainable Care",
      desc: "Working with partners to develop person-centred care services that improve health outcomes and strengthen communities."
    }
  ];

  return (
    <div className="bg-[#F7F4EE] min-h-screen pt-24 pb-24 font-sans">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Compassionate homecare — caregiver supporting an elderly loved one" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E2A38]/95 via-[#1E2A38]/85 to-[#0F172A]/95"></div>
        </div>

        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[#B6924A] text-xs font-semibold uppercase tracking-widest bg-[#B6924A]/15 px-4 py-1.5 rounded-full border border-[#B6924A]/30">
                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                Healthcare & Care Solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Healthcare &<br />
                <span className="text-[#B6924A] italic">Care Solutions</span>
              </h1>

              <p className="text-[#B6924A] text-sm md:text-base font-semibold uppercase tracking-widest">
                Supporting Better Healthcare Across Borders
              </p>

              <p className="text-white/85 text-base md:text-lg font-light leading-relaxed max-w-xl">
                We partner with families, healthcare providers, organisations and communities to deliver compassionate care, strengthen healthcare systems and improve lives across Southern Africa and Europe.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-[#B6924A] text-[#1E2A38] px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  Book a Consultation
                </Link>
                <Link
                  to="/about"
                  className="border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Learn More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#1E2A38]/80 backdrop-blur-md border border-[#B6924A]/30 rounded-2xl p-7 md:p-8 shadow-2xl">
                <span className="material-symbols-outlined text-[#B6924A] text-5xl mb-3 block">format_quote</span>
                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed italic">
                  Because every family deserves peace of mind. Every patient deserves dignity. Every organisation deserves the support to deliver exceptional care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="relative z-10 bg-white/5 backdrop-blur-sm border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B6924A]/15 text-[#B6924A] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">{b.icon}</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-white whitespace-pre-line leading-tight uppercase tracking-wide">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED FLAGSHIP SERVICE ===================== */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Featured Image */}
              <div className="lg:col-span-4 relative h-80 lg:h-auto min-h-[420px]">
                <img src={featuredImg} alt="Family supporting an elderly loved one with warmth and care" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
              </div>

              {/* Featured Content + Sub-services Grid */}
              <div className="lg:col-span-5 p-7 md:p-10 space-y-6 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-[#B6924A] text-[10px] font-bold uppercase tracking-widest bg-[#B6924A]/10 px-3 py-1 rounded-full border border-[#B6924A]/20">
                    <span className="material-symbols-outlined text-xs">favorite</span>
                    Our Featured Service
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A38] leading-tight">
                    Homecare, Family Support & Care Coordination
                  </h2>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    Helping families ensure their loved ones receive safe, compassionate and dignified care.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pt-3">
                  {featuredSubServices.slice(0, 6).map((s, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#B6924A]/10 text-[#B6924A] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">{s.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1E2A38] leading-tight">{s.title}</h4>
                        <p className="text-xs text-gray-600 font-light leading-snug mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pt-3 border-t border-gray-100">
                  {featuredSubServices.slice(6).map((s, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#B6924A]/10 text-[#B6924A] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">{s.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1E2A38] leading-tight">{s.title}</h4>
                        <p className="text-xs text-gray-600 font-light leading-snug mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Families Choose Elysian */}
              <div className="lg:col-span-3 bg-[#1E2A38] text-white p-7 md:p-8 flex flex-col">
                <div className="space-y-2 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B6924A]">Our Commitment</span>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    Why Families<br />Choose Elysian
                  </h3>
                </div>

                <ul className="space-y-3 flex-1">
                  {whyFamilies.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#B6924A] text-base flex-shrink-0 mt-0.5">check_circle</span>
                      <span className="text-xs md:text-sm text-white/90 font-light leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-6 bg-[#B6924A] text-[#1E2A38] py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-center hover:bg-white transition-all shadow-lg"
                >
                  Find Out More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== HEALTHCARE EXPERTISE ===================== */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div {...fadeInUp} className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Our Healthcare Expertise</h2>
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
              Complementary specialist services that strengthen healthcare systems and support organisations across borders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#F7F4EE] rounded-2xl p-7 border border-gray-100 hover:border-[#B6924A]/40 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center mb-4 group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#1E2A38] mb-2 group-hover:text-[#B6924A] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-[#1E2A38] text-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                We support health and care<br /><span className="text-[#B6924A]">across borders</span>
              </h2>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((s, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="text-center lg:text-left lg:border-l lg:border-white/10 lg:pl-5 first:lg:border-l-0 first:lg:pl-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#B6924A]/15 text-[#B6924A] flex items-center justify-center mx-auto lg:mx-0 mb-3">
                    <span className="material-symbols-outlined text-xl">{s.icon}</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#B6924A] mb-1">{s.value}</div>
                  <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider font-semibold whitespace-pre-line leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== HEALTHCARE APPROACH ===================== */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Approach Steps */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div {...fadeInUp} className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Our Healthcare Approach</h2>
              </motion.div>

              <div className="relative">
                <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-[#B6924A]/20 via-[#B6924A]/60 to-[#B6924A]/20"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
                  {approachSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      {...fadeInUp}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="text-center space-y-3 relative bg-white"
                    >
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#1E2A38] text-[#B6924A] flex items-center justify-center border-2 border-[#B6924A]/40 shadow-md">
                        <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#1E2A38] uppercase tracking-wider">{step.title}</h3>
                      <p className="text-xs text-gray-600 font-light leading-relaxed px-1">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Our Expertise Matters */}
            <motion.div {...fadeInUp} className="lg:col-span-4 bg-[#F7F4EE] rounded-3xl p-7 md:p-8 border border-gray-100 space-y-5">
              <div className="space-y-2">
                <p className="text-[#B6924A] text-xs font-bold uppercase tracking-widest">Proven. Trusted. Compassionate.</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#1E2A38] leading-tight">Why Our Healthcare Expertise Matters</h3>
              </div>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Our services are informed by extensive experience across:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2">
                {expertiseAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#B6924A] text-base flex-shrink-0 mt-0.5">check</span>
                    <span className="text-sm text-[#1E2A38] font-medium leading-snug">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== MAKING A DIFFERENCE ===================== */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38]">Making a Difference</h2>
              </div>

              <div className="space-y-4">
                {impactCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeInUp}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#1E2A38] text-[#B6924A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B6924A] group-hover:text-[#1E2A38] transition-colors">
                      <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base md:text-lg font-bold text-[#1E2A38] leading-tight">{card.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <motion.div {...fadeInUp} className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/40 h-[460px] lg:h-[520px] relative">
                <img src={impactImg} alt="Compassionate care and human connection" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1E2A38]/85 backdrop-blur-md rounded-2xl border border-[#B6924A]/40 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="material-symbols-outlined text-2xl">favorite</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#B6924A] uppercase tracking-wider">Compassion in Action</span>
                    <span className="text-white/80 text-xs font-light">Every visit. Every conversation. Every life we touch.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-[#1E2A38] via-[#16222F] to-[#1E2A38] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B6924A]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-[#B6924A] text-[#1E2A38] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">Let&apos;s Work Together for <span className="text-[#B6924A]">Better Health and Care</span></h2>
                  <p className="text-white/75 text-sm font-light leading-relaxed max-w-xl">
                    Whether you are a family seeking trusted support or an organisation seeking healthcare solutions, we are here to help.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="bg-[#B6924A] text-[#1E2A38] px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl flex items-center gap-2"
                >
                  Book a Consultation
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <a
                  href="https://wa.me/447984937336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-xl"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareExpertise;
