import { useState } from "react";
import { GENERAL_FAQS, COMPANY_NAP } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "./Router";

export default function FAQView() {
  const { navigate } = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <div className="w-full bg-brand-navy text-brand-text-light pb-28 noise-texture" id="faq-view">
      
      {/* Page Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-24 md:py-32 blueprint-grid overflow-hidden relative">
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            PREGUNTAS Y CRITERIOS TÉCNICOS
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tighter leading-[0.95] text-balance">
            Preguntas Frecuentes
          </h1>
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mt-6 max-w-3xl font-light">
            Resolvemos tus dudas sobre inspecciones del Cuerpo de Bomberos, normativas NFPA aplicables y buenas prácticas electromecánicas en Panamá.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-6">
        {GENERAL_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border overflow-hidden transition-all duration-300 rounded-2xl ${
                isOpen
                  ? "bg-brand-navy-light/25 border-brand-cyan/50 shadow-lg shadow-brand-cyan/5"
                  : "bg-brand-navy-light/10 border-brand-navy-light/60 hover:border-brand-navy-light/95"
              }`}
              id={`faq-accordion-item-${idx}`}
            >
              {/* Trigger Button */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-5 focus:outline-none focus:bg-brand-navy-light/35 cursor-pointer group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-panel-${idx}`}
                id={`faq-trigger-${idx}`}
              >
                <span className="flex items-start gap-4">
                  <HelpCircle className={`w-5.5 h-5.5 mt-0.5 shrink-0 ${isOpen ? "text-brand-cyan" : "text-brand-acero group-hover:text-brand-cyan"}`} />
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan leading-snug transition-colors">
                    {faq.question}
                  </span>
                </span>
                <span>
                  {isOpen ? (
                    <ChevronUp className="w-5.5 h-5.5 text-brand-cyan shrink-0 animate-pulse" />
                  ) : (
                    <ChevronDown className="w-5.5 h-5.5 text-brand-acero shrink-0 group-hover:text-brand-cyan" />
                  )}
                </span>
              </button>

              {/* Answer Panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="p-6 sm:p-8 pt-0 pl-11 sm:pl-16 text-base sm:text-lg text-slate-300/95 leading-relaxed border-t border-brand-navy-light/35 font-light">
                      <p className="border-l-2 border-brand-cyan pl-4 py-1.5 text-pretty">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      {/* Dynamic CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-navy-950 border border-brand-navy-light/60 p-10 md:p-14 rounded-2xl text-center space-y-6 relative overflow-hidden blueprint-grid shadow-2xl">
          <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-brand-cyan/15"></div>
          
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tighter leading-tight">
            ¿Tienes otra duda técnica o requieres un peritaje específico?
          </h3>
          <p className="text-base sm:text-lg text-brand-acero max-w-2xl mx-auto leading-relaxed font-light">
            Nuestro equipo de ingenieros con idoneidad JTIA ofrece consultoría y auditorías electromecánicas independientes para peritajes legales o licitaciones de PH.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/contacto")}
              className="px-8 py-4.5 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <span>Hablar con un Ingeniero Idóneo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
