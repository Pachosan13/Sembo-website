import { COMPANY_NAP } from "../data";
import { Shield, Target, Compass, Award, CheckCircle, ChevronRight, Eye } from "lucide-react";
import { useRouter } from "./Router";
import Logo from "./Logo";
import { motion } from "motion/react";

export default function AboutView() {
  const { navigate } = useRouter();

  const values = [
    { title: "Excelencia técnica", desc: "Ingenieros calificados y metodologías avaladas que garantizan obras eficientes y conformes a norma." },
    { title: "Sostenibilidad", desc: "Integramos soluciones que minimizan el impacto ambiental y el consumo eléctrico desmedido." },
    { title: "Confianza", desc: "Construimos relaciones transparentes e inalterables con nuestros clientes en cada mantenimiento." },
    { title: "Innovación", desc: "Utilizamos plataformas digitales pioneras para entregar trazabilidad completa e inmediata en campo." },
    { title: "Puntualidad", desc: "Respetamos estrictamente los plazos de entrega pactados para evitar retrasos en obras o licitaciones." },
  ];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="w-full bg-brand-navy text-brand-text-light pb-28 noise-texture" id="about-view">
      
      {/* Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-24 md:py-32 blueprint-grid overflow-hidden relative">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
          <div className="max-w-4xl">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
              CONOCE NUESTRA TRAYECTORIA
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tighter leading-[0.95] text-balance">
              Sobre SEMCO — 15 años de ingeniería electromecánica en Panamá
            </h1>
          </div>
          <Logo height={64} textColor="white" className="self-start md:self-center shrink-0" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-32">
        
        {/* Mission and Vision Grid */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemFadeUp} className="p-10 md:p-12 bg-brand-navy-light/20 border border-brand-navy-light/60 rounded-2xl space-y-6 shadow-xl">
            <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl inline-block">
              <Target className="w-7 h-7 text-brand-cyan" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">Nuestra Misión</h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light text-pretty">
              Brindar soluciones integrales en ingeniería electromecánica mediante el diseño, suministro, instalación y mantenimiento de sistemas de bombeo, supresión de incendios, plantas eléctricas y proyectos de eficiencia energética, creando valor con soluciones rentables, innovadoras y respetuosas con el medio ambiente.
            </p>
          </motion.div>

          <motion.div variants={itemFadeUp} className="p-10 md:p-12 bg-brand-navy-light/20 border border-brand-navy-light/60 rounded-2xl space-y-6 shadow-xl">
            <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl inline-block">
              <Eye className="w-7 h-7 text-brand-cyan" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">Nuestra Visión</h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light text-pretty">
              Ser líderes en la industria de sistemas electromecánicos en Panamá y la región, reconocidos por nuestra innovación, compromiso con la sostenibilidad y excelencia técnica.
            </p>
          </motion.div>
        </motion.section>

        {/* History (literal text) */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-cyan block"></span>
              Nuestra Historia
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light text-pretty">
              <p>
                Hace 15 años comenzamos con un propósito claro: transformar ideas en soluciones prácticas e innovadoras en ingeniería electromecánica. Desde entonces nos especializamos en sistemas de bombeo, contra incendios, plantas eléctricas de emergencia y energía limpia. Contamos con ingenieros y técnicos altamente calificados.
              </p>
              <p>
                No solo construimos infraestructura; construimos relaciones y confianza con clientes residenciales, comerciales e industriales. Hoy miramos al futuro con la determinación de seguir liderando el sector con desarrollo sostenible — y ahora con tecnología de trazabilidad digital que ningún otro proveedor ofrece.
              </p>
            </div>
          </div>

          {/* Technical Blueprint Accent for History */}
          <motion.div variants={itemFadeUp} className="lg:col-span-5 bg-navy-950 border border-brand-navy-light/60 p-8 rounded-2xl blueprint-grid shadow-2xl">
            <div className="space-y-6 font-mono text-xs text-brand-acero">
              <div className="border-l-4 border-brand-cyan pl-4 py-1.5">
                <span className="block text-white font-bold text-sm">2011 · FUNDACIÓN</span>
                <span className="text-xs mt-1 block font-light leading-relaxed">SEMCO inicia operaciones en Panamá, brindando servicios de mantenimiento de bombas residenciales.</span>
              </div>
              <div className="border-l-4 border-brand-cyan pl-4 py-1.5">
                <span className="block text-white font-bold text-sm">2016 · EXPANSIÓN NFPA</span>
                <span className="text-xs mt-1 block font-light leading-relaxed">Ampliamos el portafolio a sistemas de protección contra incendio y salas de bombas complejas.</span>
              </div>
              <div className="border-l-4 border-brand-cyan pl-4 py-1.5">
                <span className="block text-white font-bold text-sm">2021 · COBERTURA SOLAR</span>
                <span className="text-xs mt-1 block font-light leading-relaxed">Ejecutamos el gran proyecto de la Torre Argos con 658 paneles en alianza con Celsia.</span>
              </div>
              <div className="border-l-4 border-brand-cyan pl-4 py-1.5">
                <span className="block text-brand-cyan font-bold text-sm">2026 · ERA DIGITAL</span>
                <span className="text-xs mt-1 block font-light leading-relaxed">Introducción exclusiva de la plataforma de trazabilidad digital para auditorías en tiempo real.</span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Core Values */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tighter">Nuestros Valores Fundamentales</h2>
            <p className="text-sm text-brand-cyan mt-3 font-mono uppercase tracking-widest font-bold">
              Los pilares de cada instalación y auditoría técnica
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                variants={itemFadeUp}
                className="bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-2xl p-6 sm:p-8 hover:border-brand-cyan/40 hover:bg-brand-navy-light/30 transition-all duration-350 text-center space-y-4 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan font-display font-extrabold text-lg mx-auto border border-brand-cyan/25">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-mono font-bold uppercase text-white tracking-widest">
                  {v.title}
                </h3>
                <p className="text-base text-brand-acero leading-relaxed font-light">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Certificaciones Badges Section */}
        <section className="p-10 md:p-16 bg-brand-navy-light/35 border border-brand-navy-light/60 rounded-2xl text-center space-y-8 shadow-xl relative overflow-hidden blueprint-grid-fine">
          <div className="absolute top-0 left-0 w-12 h-12 border-b border-r border-brand-cyan/10"></div>
          <div className="max-w-3xl mx-auto space-y-4">
            <Award className="w-12 h-12 text-brand-cyan mx-auto" />
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tighter">Idoneidades y Acreditaciones Oficiales</h2>
            <p className="text-base sm:text-lg text-brand-acero leading-relaxed font-light text-pretty">
              Todos nuestros ingenieros están inscritos en la Junta Técnica de Ingeniería y Arquitectura (JTIA) de la República de Panamá y son miembros activos de asociaciones de seguridad de renombre internacional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3.5 bg-navy-950 border border-brand-navy-light/60 rounded-full text-xs font-mono text-slate-300 flex items-center gap-2.5">
              <CheckCircle className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
              <span>Miembro NFPA (National Fire Protection Association)</span>
            </div>
            <div className="px-6 py-3.5 bg-navy-950 border border-brand-navy-light/60 rounded-full text-xs font-mono text-slate-300 flex items-center gap-2.5">
              <CheckCircle className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
              <span>Personal Calificado con Idoneidad JTIA</span>
            </div>
            <div className="px-6 py-3.5 bg-navy-950 border border-brand-navy-light/60 rounded-full text-xs font-mono text-slate-300 flex items-center gap-2.5">
              <CheckCircle className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
              <span>Aprobado por el Cuerpo de Bomberos de Panamá</span>
            </div>
          </div>
        </section>

        {/* final CTA */}
        <section className="text-center py-10 space-y-6 max-w-3xl mx-auto">
          <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase">
            MÁXIMO COMPROMISO
          </h3>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light text-pretty">
            Permite que nuestro equipo técnico calificado estructure el plan de mantenimiento a la medida de tu edificación comercial, industrial o residencial.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/contacto")}
              className="px-8 py-4 bg-brand-cyan text-brand-navy font-display font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all text-center inline-flex items-center gap-2 cursor-pointer font-bold"
            >
              <span>Hablar con un Ingeniero Calificado</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>

    </div>
  );
}
