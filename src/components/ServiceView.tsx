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
      <div className="py-24 text-center space-y-4 max-w-lg mx-auto" id="service-not-found">
        <h1 className="text-xl font-display font-extrabold text-white">Servicio no encontrado</h1>
        <p className="text-xs text-brand-acero">El enlace que has seguido podría estar desactualizado o haber cambiado.</p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-brand-cyan text-brand-navy font-mono text-xs font-bold rounded uppercase tracking-wider"
        >
          Regresar al Inicio
        </button>
      </div>
    );
  }
  // Get service icons dynamically
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-10 h-10 text-brand-cyan" />;
      case "Droplets": return <Droplets className="w-10 h-10 text-brand-cyan" />;
      case "Zap": return <Zap className="w-10 h-10 text-brand-cyan" />;
      case "Cpu": return <Cpu className="w-10 h-10 text-brand-cyan" />;
      case "Sun": return <Sun className="w-10 h-10 text-brand-cyan" />;
      case "Briefcase": return <Briefcase className="w-10 h-10 text-brand-cyan" />;
      default: return <Flame className="w-10 h-10 text-brand-cyan" />;
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

  return (
    <div className="w-full bg-brand-navy text-brand-text-light pb-20" id={`service-view-${slug}`}>
      
      {/* Dynamic Header / Hero */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-12 md:py-16 blueprint-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-navy rounded-lg border border-brand-navy-light shadow-md shrink-0">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-0.5">
                    Servicio Especializado · SEMCO
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                    {service.title}
                  </h1>
                </div>
              </div>

              {/* Answer-First Section (SEO/AEO critical optimization) */}
              <div className="bg-brand-navy border-l-4 border-brand-cyan rounded-r-lg p-6 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-[40%] translate-y-[40%] w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none"></div>
                <h2 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-2">
                  Resumen Técnico y Cumplimiento
                </h2>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-sans">
                  {service.answerFirst}
                </p>
              </div>
            </div>

            {/* Right/Visual Image Content */}
            <div className="lg:col-span-5">
              <div className="relative group border border-brand-cyan/20 rounded-lg overflow-hidden shadow-2xl bg-brand-navy-light/20 p-2.5">
                {/* Tech frame corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-cyan"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-cyan"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-cyan"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-cyan"></div>

                <div className="relative h-64 w-full bg-slate-900 rounded overflow-hidden">
                  <img
                    src={getServiceImage(service.slug)}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-brand-navy/80 border border-brand-cyan/30 rounded text-[9px] font-mono text-brand-cyan font-bold uppercase tracking-widest">
                    SISTEMA REAL
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: What's included, Certs & Sectors */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. What is included */}
            <div className="space-y-6">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-cyan" />
                ¿Qué incluye nuestro servicio especializado?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.includes.map((inc, index) => (
                  <div
                    key={index}
                    className="p-4 bg-brand-navy-light/35 border border-brand-navy-light/60 rounded hover:border-brand-cyan/30 transition-all flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-relaxed">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Normas, Certificaciones y Sellos */}
            <div className="p-6 bg-navy-950/40 border border-brand-navy-light/65 rounded-lg space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase flex items-center gap-2">
                <Shield className="w-4.5 h-4.5 text-brand-cyan" />
                Estándares de Calidad y Códigos Aplicables
              </h3>
              <p className="text-xs text-brand-acero leading-relaxed">
                Nuestros proyectos de {service.title} son diseñados y ejecutados cumpliendo con las más estrictas directrices nacionales e internacionales. Esto asegura auditorías aprobadas, cobertura de pólizas de seguro e inspecciones exitosas.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {service.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-brand-navy-light border border-brand-navy-light/80 rounded text-xs font-mono font-bold text-brand-orange"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. FAQ específico del servicio */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-cyan" />
                  Preguntas frecuentes del servicio
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="p-5 bg-brand-navy-light/20 border border-brand-navy-light rounded-lg space-y-2.5"
                    >
                      <h4 className="text-sm font-semibold text-white flex items-start gap-2">
                        <span className="text-brand-cyan font-mono text-xs">0{index + 1}.</span>
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed pl-5">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sidebar (Sectors & CTA Card) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Target Sectors card */}
            <div className="bg-brand-navy-light/40 border border-brand-navy-light rounded-lg p-6">
              <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase mb-4 border-b border-brand-navy-light pb-2">
                SECTORES DE APLICACIÓN
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {service.sectors.map((sector, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0"></span>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote CTA card */}
            <div className="bg-navy-950 border border-brand-cyan/20 rounded-lg p-6 space-y-4 relative overflow-hidden blueprint-grid">
              <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-brand-cyan/20"></div>
              
              <h3 className="text-base font-display font-bold text-white">
                ¿Necesitas cotizar {service.title}?
              </h3>
              
              <p className="text-xs text-brand-acero leading-relaxed">
                Contamos con personal idóneo para realizar levantamientos técnicos y memorias de cálculo detalladas en Ciudad de Panamá y a nivel nacional.
              </p>

              {/* Unique feature checklist */}
              <div className="space-y-2 text-xs text-slate-300 py-1">
                <div className="flex items-center gap-2">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Evaluación técnica de campo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Checklist con trazabilidad digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-cyan font-bold">✓</span>
                  <span>Estricto cumplimiento NFPA / Bomberos</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => navigate("/contacto")}
                  className="w-full py-3 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-cyan-400 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Solicitar cotización</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={COMPANY_NAP.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-3 bg-green-500 text-white font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-green-600 transition-all text-center"
                >
                  Consultar vía WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
