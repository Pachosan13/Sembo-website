import { COMPANY_NAP } from "../data";
import { Shield, Target, Compass, Award, CheckCircle, ChevronRight, Eye } from "lucide-react";
import { useRouter } from "./Router";
import Logo from "./Logo";

export default function AboutView() {
  const { navigate } = useRouter();

  const values = [
    { title: "Excelencia técnica", desc: "Ingenieros calificados y metodologías avaladas que garantizan obras eficientes y conformes a norma." },
    { title: "Sostenibilidad", desc: "Integramos soluciones que minimizan el impacto ambiental y el consumo eléctrico desmedido." },
    { title: "Confianza", desc: "Construimos relaciones transparentes e inalterables con nuestros clientes en cada mantenimiento." },
    { title: "Innovación", desc: "Utilizamos plataformas digitales pioneras para entregar trazabilidad completa e inmediata en campo." },
    { title: "Puntualidad", desc: "Respetamos estrictamente los plazos de entrega pactados para evitar retrasos en obras o licitaciones." },
  ];

  return (
    <div className="w-full bg-brand-navy text-brand-text-light pb-20" id="about-view">
      
      {/* Header */}
      <section className="bg-navy-950 border-b border-brand-navy-light/40 py-16 blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-1">
              CONOCE NUESTRA TRAYECTORIA
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
              Sobre SEMCO — 15 años de ingeniería electromecánica en Panamá
            </h1>
          </div>
          <Logo height={56} textColor="white" className="self-start md:self-center" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Mission and Vision Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-brand-navy-light/40 border border-brand-navy-light rounded-lg space-y-4">
            <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/20 rounded inline-block">
              <Target className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2 className="text-lg font-display font-bold text-white">Nuestra Misión</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Brindar soluciones integrales en ingeniería electromecánica mediante el diseño, suministro, instalación y mantenimiento de sistemas de bombeo, supresión de incendios, plantas eléctricas y proyectos de eficiencia energética, creando valor con soluciones rentables, innovadoras y respetuosas con el medio ambiente.
            </p>
          </div>

          <div className="p-6 bg-brand-navy-light/40 border border-brand-navy-light rounded-lg space-y-4">
            <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/20 rounded inline-block">
              <Eye className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2 className="text-lg font-display font-bold text-white">Nuestra Visión</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Ser líderes en la industria de sistemas electromecánicos en Panamá y la región, reconocidos por nuestra innovación, compromiso con la sostenibilidad y excelencia técnica.
            </p>
          </div>
        </section>

        {/* History (literal text) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white flex items-center gap-2">
              <span className="w-6 h-1 bg-brand-cyan block"></span>
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                Hace 15 años comenzamos con un propósito claro: transformar ideas en soluciones prácticas e innovadoras en ingeniería electromecánica. Desde entonces nos especializamos en sistemas de bombeo, contra incendios, plantas eléctricas de emergencia y energía limpia. Contamos con ingenieros y técnicos altamente calificados.
              </p>
              <p>
                No solo construimos infraestructura; construimos relaciones y confianza con clientes residenciales, comerciales e industriales. Hoy miramos al futuro con la determinación de seguir liderando el sector con desarrollo sostenible — y ahora con tecnología de trazabilidad digital que ningún otro proveedor ofrece.
              </p>
            </div>
          </div>

          {/* Technical Blueprint Accent for History */}
          <div className="lg:col-span-5 bg-navy-950 border border-brand-navy-light p-6 rounded-lg blueprint-grid">
            <div className="space-y-4 font-mono text-xs text-brand-acero">
              <div className="border-l-2 border-brand-cyan pl-3 py-1">
                <span className="block text-white font-bold text-xs">2011 · FUNDACIÓN</span>
                <span className="text-[11px]">SEMCO inicia operaciones en Panamá, brindando servicios de mantenimiento de bombas residenciales.</span>
              </div>
              <div className="border-l-2 border-brand-cyan pl-3 py-1">
                <span className="block text-white font-bold text-xs">2016 · EXPANSIÓN NFPA</span>
                <span className="text-[11px]">Ampliamos el portafolio a sistemas de protección contra incendio y salas de bombas complejas.</span>
              </div>
              <div className="border-l-2 border-brand-cyan pl-3 py-1">
                <span className="block text-white font-bold text-xs">2021 · COBERTURA SOLAR</span>
                <span className="text-[11px]">Ejecutamos el gran proyecto de la Torre Argos con 658 paneles en alianza con Celsia.</span>
              </div>
              <div className="border-l-2 border-brand-cyan/40 pl-3 py-1">
                <span className="block text-brand-cyan font-bold text-xs">2026 · ERA DIGITAL</span>
                <span className="text-[11px]">Introducción exclusiva de la plataforma de trazabilidad digital para auditorías en tiempo real.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">Nuestros Valores Fundamentales</h2>
            <p className="text-xs text-brand-acero mt-2 font-mono uppercase tracking-wide">
              Los pilares de cada instalación y auditoría técnica
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-brand-navy-light/30 border border-brand-navy-light rounded-lg p-5 hover:border-brand-cyan/30 hover:bg-brand-navy-light/50 transition-all text-center space-y-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-brand-cyan/15 flex items-center justify-center text-brand-cyan font-display font-bold text-sm mx-auto">
                  0{idx + 1}
                </div>
                <h3 className="text-xs font-mono font-bold uppercase text-white tracking-wide">
                  {v.title}
                </h3>
                <p className="text-[11px] text-brand-acero leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certificaciones Badges Section */}
        <section className="p-8 bg-brand-navy-light border border-brand-navy-light rounded-lg text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <Award className="w-8 h-8 text-brand-cyan mx-auto mb-3" />
            <h2 className="text-lg font-display font-bold text-white">Idoneidades y Acreditaciones Oficiales</h2>
            <p className="text-xs text-brand-acero leading-relaxed mt-1">
              Todos nuestros ingenieros están inscritos en la Junta Técnica de Ingeniería y Arquitectura (JTIA) de la República de Panamá y son miembros activos de asociaciones de seguridad de renombre internacional.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2.5 bg-navy-950 border border-brand-navy-light rounded text-xs font-mono text-slate-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Miembro NFPA (National Fire Protection Association)</span>
            </div>
            <div className="px-4 py-2.5 bg-navy-950 border border-brand-navy-light rounded text-xs font-mono text-slate-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Personal Calificado con Idoneidad JTIA</span>
            </div>
            <div className="px-4 py-2.5 bg-navy-950 border border-brand-navy-light rounded text-xs font-mono text-slate-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-cyan" />
              <span>Aprobado por el Cuerpo de Bomberos de Panamá</span>
            </div>
          </div>
        </section>

        {/* final CTA */}
        <section className="text-center py-6 space-y-4">
          <h3 className="text-sm font-mono font-bold tracking-widest text-brand-cyan uppercase">
            MÁXIMO COMPROMISO
          </h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
            Permite que nuestro equipo técnico calificado estructure el plan de mantenimiento a la medida de tu edificación comercial, industrial o residencial.
          </p>
          <div>
            <button
              onClick={() => navigate("/contacto")}
              className="px-6 py-3 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded hover:bg-cyan-400 active:translate-y-0.5 transition-all text-center inline-flex items-center gap-2"
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
