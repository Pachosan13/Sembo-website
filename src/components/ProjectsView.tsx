import { useState } from "react";
import { PROJECTS, COMPANY_NAP } from "../data";
import { ArrowRight, Filter, MapPin, Layers, User, X, Maximize2 } from "lucide-react";
import { useRouter } from "./Router";
import { motion, AnimatePresence } from "motion/react";

type CategoryFilter = "Todos" | "Comercial y Retail" | "Residencial y PH" | "Institucional y Salud" | "Industrial" | "Energía y Solar";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  client: string;
  system: string;
}

export default function ProjectsView() {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("Todos");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: CategoryFilter[] = [
    "Todos",
    "Comercial y Retail",
    "Residencial y PH",
    "Institucional y Salud",
    "Industrial",
    "Energía y Solar"
  ];

  // Filter project list dynamically
  const filteredProjects = activeFilter === "Todos"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  // Motion animation parameters
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
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
    <div className="w-full bg-brand-navy text-brand-text-light pb-28 noise-texture" id="projects-view">
      
      {/* Page Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-24 md:py-32 blueprint-grid overflow-hidden relative">
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            PORTAFOLIO DE OBRAS EJECUTADAS
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tighter leading-[0.95] text-balance">
            Proyectos electromecánicos de SEMCO en Panamá
          </h1>
          
          <div className="bg-brand-navy border-l-4 border-brand-cyan rounded-r-2xl p-8 mt-10 max-w-4xl shadow-2xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light text-pretty">
              En 15 años hemos ejecutado proyectos de bombeo, protección contra incendios, energía y control en algunos de los edificios e infraestructuras más importantes de Panamá — desde el Aeropuerto de Tocumen hasta las torres residenciales y centros comerciales de mayor escala del país.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-brand-navy-light/40 pb-8">
          <div className="flex items-center gap-2.5 text-xs font-mono text-brand-cyan uppercase font-semibold">
            <Filter className="w-4.5 h-4.5 text-brand-cyan" />
            <span>Filtrar por Especialidad:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-brand-cyan text-brand-navy font-bold shadow-lg shadow-brand-cyan/25"
                    : "bg-brand-navy-light/20 border border-brand-navy-light/60 text-slate-300 hover:text-white hover:bg-brand-navy-light/50 hover:border-brand-cyan/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter of shown items */}
        <div className="text-xs font-mono text-brand-acero uppercase mt-6 tracking-wider">
          Mostrando {filteredProjects.length} de {PROJECTS.length} registros electromecánicos
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-10"
        >
          {filteredProjects.map((p) => (
            <motion.div
              key={p.id}
              variants={itemFadeUp}
              className="bg-brand-navy/60 border border-brand-navy-light/60 hover:border-brand-cyan/40 hover:shadow-[0_20px_50px_rgba(18,181,201,0.08)] transition-all duration-500 ease-[0.22,1,0.36,1] rounded-xl overflow-hidden flex flex-col group"
              id={`project-card-${p.id}`}
            >
              {/* Image box with high-end contrast overlay */}
              <div 
                className="relative h-60 w-full bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                <img
                  src={p.imageUrl}
                  alt={`${p.name} - ${p.system}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                  loading="lazy"
                />
                
                {/* Visual hover overlay */}
                <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-5 py-2.5 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full shadow-lg flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ver Proyecto Ampliado</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-85 pointer-events-none"></div>
                <span className="absolute bottom-4 left-4 px-2.5 py-1 bg-brand-cyan/25 border border-brand-cyan/35 backdrop-blur-sm rounded text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider">
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 
                    className="text-lg sm:text-xl font-display font-bold text-white hover:text-brand-cyan transition-colors cursor-pointer leading-snug"
                    onClick={() => setSelectedProject(p)}
                  >
                    {p.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-acero uppercase">
                    <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>{p.location}</span>
                  </div>

                  <p className="text-base text-slate-300/95 leading-relaxed pt-1 line-clamp-3 font-light font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-navy-light/60 space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-brand-acero">
                    <User className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>Cliente: <strong className="text-slate-200 font-medium">{p.client}</strong></span>
                  </div>
                  <div className="flex items-start gap-2 text-brand-cyan font-semibold">
                    <Layers className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>Sistema: <strong className="text-white font-bold">{p.system}</strong></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Dynamic CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-navy-950 border border-brand-navy-light/60 p-12 md:p-16 rounded-2xl text-center space-y-8 relative overflow-hidden blueprint-grid shadow-2xl">
          <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-brand-cyan/15"></div>
          
          <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tighter leading-tight max-w-3xl mx-auto text-balance">
            ¿Quieres que tu proyecto electromecánico sea nuestro próximo caso de éxito?
          </h3>
          <p className="text-base sm:text-lg text-brand-acero max-w-3xl mx-auto leading-relaxed font-light">
            Nuestros ingenieros estructuran presupuestos detallados con análisis de costos unitarios y cronograma de Gantt para licitaciones y proyectos privados.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigate("/contacto")}
              className="px-8 py-4.5 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <span>Consultar Viabilidad de Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Modern High-End Project Modal (Lightbox) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-5xl bg-brand-navy border border-brand-cyan/25 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Corner cyan details */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-cyan z-25 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-cyan z-25 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-cyan z-25 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-cyan z-25 pointer-events-none"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-navy-950/80 border border-brand-cyan/20 hover:border-brand-cyan/60 rounded-full text-slate-300 hover:text-white transition-all z-30 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Photo */}
              <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] bg-black relative shrink-0">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-brand-navy/95 pointer-events-none"></div>
                
                <span className="absolute bottom-5 left-5 px-3 py-1.5 bg-brand-cyan text-brand-navy font-mono text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                  {selectedProject.category}
                </span>
              </div>

              {/* Right Side: Detailed specs */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase mb-2 font-semibold">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedProject.location}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug">
                      {selectedProject.name}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-mono text-brand-acero uppercase tracking-wider border-b border-brand-navy-light/60 pb-1.5 font-semibold">
                      DESCRIPCIÓN DEL PROYECTO
                    </h3>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Tech Specs */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-4 bg-navy-950/40 p-4 rounded-xl border border-brand-navy-light/40">
                      <User className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="block font-mono text-brand-acero uppercase tracking-widest text-[9px] mb-1 font-semibold">CLIENTE / CONTRATISTA</span>
                        <span className="text-sm text-slate-100 font-medium">{selectedProject.client}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-navy-950/40 p-4 rounded-xl border border-brand-navy-light/40">
                      <Layers className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="block font-mono text-brand-acero uppercase tracking-widest text-[9px] mb-1 font-semibold">SISTEMA ELECTROMECÁNICO</span>
                        <span className="text-sm text-brand-cyan font-bold">{selectedProject.system}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-brand-navy-light/60 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <span className="text-xs font-mono text-brand-acero uppercase font-semibold">
                    ESTÁNDAR DE INGENIERÍA COMPLETO
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      navigate("/contacto");
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 bg-brand-cyan/15 border border-brand-cyan/40 hover:bg-brand-cyan hover:text-brand-navy text-brand-cyan text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Cotizar Proyecto Similar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
