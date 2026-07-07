import { useRouter } from "./Router";
import { SERVICES, COMPANY_NAP } from "../data";
import { Flame, Droplets, Zap, Cpu, Sun, Briefcase, CheckCircle, Shield, Layers, HelpCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

// Import custom engineering assets for service views
import solarRoofArgos from "../assets/images/solar_roof_argos_1783450627549.jpg";
import firePumpNfpa from "../assets/images/fire_pump_nfpa_1783450516110.jpg";
import waterBoosterSystem from "../assets/images/water_booster_system_1783450528989.jpg";
import dieselGeneratorAts from "../assets/images/diesel_generator_ats_1783450602544.jpg";
import heroBackground from "../assets/images/hero_background_1783450504616.jpg";

export default function ServiceView() {
  const { currentPath, navigate } = useRouter();

  // Extract slug from current path
  const slug = currentPath.replace("/servicios/", "");
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-32 text-center space-y-6 max-w-lg mx-auto" id="service-not-found">
        <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">Servicio no encontrado</h1>
        <p className="text-sm text-brand-acero leading-relaxed">El enlace que has seguido podría estar desactualizado o haber cambiado en el sistema.</p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-brand-cyan text-brand-navy font-display font-bold text-xs rounded-full uppercase tracking-wider hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all cursor-pointer"
        >
          Regresar al Inicio
        </button>
      </div>
    );
  }

  // Get service icons dynamically
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-12 h-12 text-brand-cyan" />;
      case "Droplets": return <Droplets className="w-12 h-12 text-brand-cyan" />;
      case "Zap": return <Zap className="w-12 h-12 text-brand-cyan" />;
      case "Cpu": return <Cpu className="w-12 h-12 text-brand-cyan" />;
      case "Sun": return <Sun className="w-12 h-12 text-brand-cyan" />;
      case "Briefcase": return <Briefcase className="w-12 h-12 text-brand-cyan" />;
      default: return <Flame className="w-12 h-12 text-brand-cyan" />;
    }
  };

  const getServiceImage = (serviceSlug: string) => {
    switch (serviceSlug) {
      case "sistemas-contra-incendio-panama":
        return firePumpNfpa;
      case "sistemas-de-bombeo-panama":
        return waterBoosterSystem;
      case "plantas-electricas-panama":
        return dieselGeneratorAts;
      case "energia-solar-panama":
        return solarRoofArgos;
      case "centros-de-control-de-motores-panama":
        return heroBackground;
      default:
        return heroBackground;
    }
  };

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="w-full bg-brand-navy text-brand-text-light pb-28 noise-texture" id={`service-view-${slug}`}>
      
      {/* Dynamic Header / Hero */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-24 md:py-32 blueprint-grid overflow-hidden relative">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left/Text Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-8"
            >
              <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="p-4 bg-brand-navy rounded-xl border border-brand-navy-light/60 shadow-xl shrink-0">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-1">
                    Servicio Especializado · SEMCO
                  </span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tighter leading-[0.95] text-balance">
                    {service.title}
                  </h1>
                </div>
              </motion.div>

              {/* Answer-First Section */}
              <motion.div 
                variants={itemFadeUp}
                className="bg-brand-navy border-l-4 border-brand-cyan rounded-r-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 translate-x-[40%] translate-y-[40%] w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none"></div>
                <h2 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-3">
                  Resumen Técnico y Cumplimiento
                </h2>
                <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-light text-pretty">
                  {service.answerFirst}
                </p>
              </motion.div>
            </motion.div>

            {/* Right/Visual Image Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
              className="lg:col-span-5"
            >
              <div className="relative group border border-brand-cyan/25 rounded-2xl overflow-hidden shadow-2xl bg-brand-navy-light/20 p-2.5">
                {/* Tech frame corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-cyan z-20"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-cyan z-20"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-cyan z-20"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-cyan z-20"></div>

                <div className="relative h-72 sm:h-80 w-full bg-slate-900 rounded-xl overflow-hidden">
                  <img
                    src={getServiceImage(service.slug)}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-brand-navy/90 border border-brand-cyan/30 rounded text-xs font-mono text-brand-cyan font-bold uppercase tracking-widest">
                    SISTEMA REAL
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main content grid */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: What's included, Certs & Sectors */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* 1. What is included */}
            <motion.div variants={itemFadeUp} className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white flex items-center gap-3">
                <Layers className="w-8 h-8 text-brand-cyan shrink-0" />
                ¿Qué incluye nuestro servicio especializado?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.includes.map((inc, index) => (
                  <div
                    key={index}
                    className="p-6 bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-2xl hover:border-brand-cyan/40 hover:bg-brand-navy-light/25 transition-all duration-300 flex items-start gap-4 shadow-lg shadow-brand-navy/30"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">{inc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Normas, Certificaciones y Sellos */}
            <motion.div variants={itemFadeUp} className="p-8 sm:p-10 bg-navy-950/40 border border-brand-navy-light/60 rounded-2xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-brand-cyan/10"></div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-brand-cyan" />
                Estándares de Calidad y Códigos Aplicables
              </h3>
              <p className="text-base sm:text-lg text-brand-acero leading-relaxed font-light">
                Nuestros proyectos de {service.title} son diseñados y ejecutados cumpliendo con las más estrictas directrices nacionales e internacionales. Esto asegura auditorías aprobadas, cobertura de pólizas de seguro e inspecciones exitosas.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {service.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-brand-navy-light border border-brand-navy-light/85 rounded-xl text-xs sm:text-sm font-mono font-bold text-brand-orange shadow-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 3. FAQ específico del servicio */}
            {service.faqs && service.faqs.length > 0 && (
              <motion.div variants={itemFadeUp} className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-brand-cyan shrink-0" />
                  Preguntas frecuentes del servicio
                </h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-8 bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-2xl space-y-4 hover:border-brand-navy-light/95 transition-colors"
                    >
                      <h4 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                        <span className="text-brand-cyan font-mono text-sm mt-1">0{index + 1}.</span>
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-base sm:text-lg text-slate-300 leading-relaxed pl-7 font-light">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* Right Column: Sidebar (Sectors & CTA Card) */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Target Sectors card */}
            <motion.div variants={itemFadeUp} className="bg-brand-navy-light/20 border border-brand-navy-light/60 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-6 border-b border-brand-navy-light/40 pb-3 font-semibold">
                SECTORES DE APLICACIÓN
              </h3>
              <ul className="space-y-4 text-base sm:text-lg text-slate-300 font-light">
                {service.sectors.map((sector, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0"></span>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quote CTA card */}
            <motion.div variants={itemFadeUp} className="bg-navy-950 border border-brand-cyan/25 rounded-2xl p-8 sm:p-10 space-y-6 relative overflow-hidden blueprint-grid shadow-2xl">
              <div className="absolute top-0 right-0 w-12 h-12 border-b border-l border-brand-cyan/20"></div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-snug">
                ¿Necesitas cotizar {service.title}?
              </h3>
              
              <p className="text-base text-brand-acero leading-relaxed font-light">
                Contamos con personal idóneo para realizar levantamientos técnicos y memorias de cálculo detalladas en Ciudad de Panamá y a nivel nacional.
              </p>

              {/* Unique feature checklist */}
              <div className="space-y-4 text-base text-slate-300 py-1 font-light">
                <div className="flex items-center gap-3">
                  <span className="text-brand-cyan font-bold text-lg">✓</span>
                  <span>Evaluación técnica de campo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-cyan font-bold text-lg">✓</span>
                  <span>Checklist con trazabilidad digital</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-cyan font-bold text-lg">✓</span>
                  <span>Estricto cumplimiento NFPA / Bomberos</span>
                </div>
              </div>

              <div className="space-y-3 pt-3">
                <button
                  onClick={() => navigate("/contacto")}
                  className="w-full py-4 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Solicitar cotización</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_NAP.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-4 bg-green-500 text-white font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-green-600 transition-all text-center cursor-pointer shadow-lg shadow-green-500/10"
                >
                  Consultar vía WhatsApp
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

    </div>
  );
}
