import { useState } from "react";
import { PROJECTS, COMPANY_NAP } from "../data";
import { ArrowRight, Filter, MapPin, Layers, User } from "lucide-react";
import { useRouter } from "./Router";

type CategoryFilter = "Todos" | "Comercial y Retail" | "Residencial y PH" | "Institucional y Salud" | "Industrial" | "Energía y Solar";

export default function ProjectsView() {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("Todos");

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

  return (
    <div className="w-full bg-brand-navy text-brand-text-light pb-20" id="projects-view">
      
      {/* Page Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-16 blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-1">
            PORTAFOLIO DE OBRAS EJECUTADAS
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            Proyectos electromecánicos de SEMCO en Panamá
          </h1>
          
          <div className="bg-brand-navy border-l-2 border-brand-cyan rounded-r-lg p-5 mt-6 max-w-3xl">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              En 15 años hemos ejecutado proyectos de bombeo, protección contra incendios, energía y control en algunos de los edificios e infraestructuras más importantes de Panamá — desde el Aeropuerto de Tocumen hasta las torres residenciales y centros comerciales de mayor escala del país.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-navy-light pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase">
            <Filter className="w-4.5 h-4.5 text-brand-cyan" />
            <span>Filtrar por Especialidad:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-medium tracking-wide transition-all ${
                  activeFilter === cat
                    ? "bg-brand-cyan text-brand-navy font-semibold"
                    : "bg-brand-navy-light/40 border border-brand-navy-light text-slate-300 hover:text-white hover:bg-brand-navy-light/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter of shown items */}
        <div className="text-[10px] font-mono text-brand-acero uppercase mt-3">
          Mostrando {filteredProjects.length} de {PROJECTS.length} registros electromecánicos
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="bg-brand-navy-light/20 border border-brand-navy-light hover:border-brand-cyan/40 hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden flex flex-col group"
              id={`project-card-${p.id}`}
            >
              {/* Image box with high-end contrast overlay */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={`${p.name} - ${p.system}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-80"></div>
                <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-brand-cyan/25 border border-brand-cyan/30 backdrop-blur-sm rounded text-[9px] font-mono text-brand-cyan font-bold uppercase tracking-wider">
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {p.name}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-acero uppercase">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span>{p.location}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-navy-light/60 space-y-2 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-brand-acero">
                    <User className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    <span>Cliente: <strong className="text-slate-200 font-medium">{p.client}</strong></span>
                  </div>
                  <div className="flex items-start gap-1.5 text-brand-cyan">
                    <Layers className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>Sistema: <strong className="text-white font-semibold">{p.system}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-navy-950 border border-brand-navy-light p-8 rounded-lg text-center space-y-5 relative overflow-hidden blueprint-grid">
          <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-brand-cyan/15"></div>
          
          <h3 className="text-lg sm:text-xl font-display font-bold text-white">
            ¿Quieres que tu proyecto electromecánico sea nuestro próximo caso de éxito?
          </h3>
          <p className="text-xs sm:text-sm text-brand-acero max-w-2xl mx-auto leading-relaxed">
            Nuestros ingenieros estructuran presupuestos detallados con análisis de costos unitarios y cronograma de Gantt para licitaciones y proyectos privados.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/contacto")}
              className="px-6 py-3 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-cyan-400 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 mx-auto"
            >
              <span>Consultar Viabilidad de Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
