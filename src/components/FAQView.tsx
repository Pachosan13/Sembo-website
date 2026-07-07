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
    <div className="w-full bg-brand-navy text-brand-text-light pb-20" id="faq-view">
      
      {/* Page Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-16 blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-1">
            PREGUNTAS Y CRITERIOS TÉCNICOS
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h1>
          <p className="text-xs sm:text-sm text-brand-acero leading-relaxed mt-2 max-w-xl">
            Resolvemos tus dudas sobre inspecciones del Cuerpo de Bomberos, normativas NFPA aplicables y buenas prácticas electromecánicas en Panamá.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-4">
        {GENERAL_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "bg-brand-navy-light/45 border-brand-cyan/50 shadow-lg"
                  : "bg-brand-navy-light/20 border-brand-navy-light hover:border-brand-navy-light/95"
              }`}
              id={`faq-accordion-item-${idx}`}
            >
              {/* Trigger Button */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left p-5 flex justify-between items-center gap-4 focus:outline-none focus:bg-brand-navy-light/50"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-panel-${idx}`}
                id={`faq-trigger-${idx}`}
              >
                <span className="flex items-start gap-3">
                  <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${isOpen ? "text-brand-cyan" : "text-brand-acero"}`} />
                  <span className="text-sm font-semibold text-white group-hover:text-brand-cyan leading-snug">
                    {faq.question}
                  </span>
                </span>
                <span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-cyan shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-acero shrink-0" />
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
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-5 pt-0 pl-11 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-brand-navy-light/35 font-sans">
                      <p className="border-l-2 border-brand-cyan pl-4 py-1">
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-navy-950 border border-brand-navy-light p-8 rounded-lg text-center space-y-4 relative overflow-hidden blueprint-grid">
          <h3 className="text-base font-display font-bold text-white">
            ¿Tienes otra duda técnica o requieres un peritaje específico?
          </h3>
          <p className="text-xs text-brand-acero max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de ingenieros con idoneidad JTIA ofrece consultoría y auditorías electromecánicas independientes para peritajes legales o licitaciones de PH.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/contacto")}
              className="px-5 py-2.5 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-cyan-400 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 mx-auto focus:outline-none"
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
