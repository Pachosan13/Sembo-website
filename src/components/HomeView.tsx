import { useState, useEffect, useRef } from "react";
import { useRouter } from "./Router";
import { SERVICES, PROJECTS, CLIENTS, SECTORS, COMPANY_NAP } from "../data";
import { Flame, Droplets, Zap, Cpu, Sun, Briefcase, CheckCircle2, ChevronRight, Activity, Award, Check, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { RoutePath } from "../types";

// Import custom generated hero asset
import heroBackground from "../assets/images/hero_background_1783450504616.jpg";
import inspirationalEngineering from "../assets/images/inspirational_engineering_1783453963594.jpg";

// Animated counter component for stats
function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Extract prefix, suffix, and target number
  // Match prefix (anything non-digit at start), digits, suffix (anything non-digit at end)
  const match = value.match(/^([^\d]*?)(\d+)([^\d]*)$/);
  
  if (!match) {
    return <span>{value}</span>;
  }

  const prefix = match[1] || "";
  const target = parseInt(match[2], 10);
  const suffix = match[3] || "";

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element); // Only animate once when entering view
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const duration = 1800; // 1.8 seconds animation
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function - easeOutQuad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * (end - start) + start);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, isInView]);

  return (
    <span ref={elementRef}>
      {prefix}
      {isInView ? count : "0"}
      {suffix}
    </span>
  );
}

export default function HomeView() {
  const { navigate } = useRouter();
  
  // Parallax scroll setup
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  // Get service icons dynamically
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-8 h-8 text-brand-cyan" />;
      case "Droplets": return <Droplets className="w-8 h-8 text-brand-cyan" />;
      case "Zap": return <Zap className="w-8 h-8 text-brand-cyan" />;
      case "Cpu": return <Cpu className="w-8 h-8 text-brand-cyan" />;
      case "Sun": return <Sun className="w-8 h-8 text-brand-cyan" />;
      case "Briefcase": return <Briefcase className="w-8 h-8 text-brand-cyan" />;
      default: return <Flame className="w-8 h-8 text-brand-cyan" />;
    }
  };

  const stats = [
    { value: "15", label: "Años de experiencia" },
    { value: "+40", label: "Proyectos ejecutados" },
    { value: "8", label: "Sistemas electromecánicos" },
    { value: "100%", label: "Trazabilidad digital" },
  ];

  // Pick the 3 main featured projects requested: Argos, Tocumen, and IBT Group
  const featuredProjects = PROJECTS.filter(p => 
    p.id === "torre-argos" || p.id === "hospital-anita-moreno" || p.id === "aeropuerto-tocumen"
  );

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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="w-full bg-brand-navy text-brand-text-light overflow-hidden noise-texture" id="home-view">
      
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-[95vh] flex items-center bg-navy-950 py-24 md:py-36 border-b border-brand-navy-light/60 overflow-hidden"
      >
        {/* Immersive high-end background photography with low opacity & gradient blending */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="SEMCO Mechanical Engineering"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-12 filter brightness-[0.7] mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/95 to-navy-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-transparent to-brand-navy"></div>
        </motion.div>

        {/* Brand Glow Aura Behind Title */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen"></div>

        {/* Blueprint grid patterns layered on top of image but under content */}
        <div className="absolute inset-0 opacity-12 pointer-events-none z-5 blueprint-grid"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-1/2 border border-brand-cyan/5 blueprint-grid-fine pointer-events-none z-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8 space-y-8"
            >
              {/* Eyebrow */}
              <motion.div 
                variants={itemFadeUp}
                className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 rounded text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase"
              >
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                INGENIERÍA ELECTROMECÁNICA · 15 AÑOS EN PANAMÁ
              </motion.div>

              {/* Title with Word Slide Reveal Effect */}
              <motion.div variants={itemFadeUp} className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-white leading-[0.92] text-balance antialiased">
                  Ingeniería y mantenimiento electromecánico que <span className="text-brand-cyan">no falla</span> cuando más importa
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemFadeUp}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed text-pretty font-light"
              >
                Diseño, instalación y mantenimiento de sistemas de bombeo, protección contra incendios NFPA, plantas eléctricas y control de motores. 15 años protegiendo la infraestructura de Panamá — ahora con <strong className="text-white font-semibold">trazabilidad digital</strong> en cada mantenimiento.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemFadeUp}
                className="flex flex-col sm:flex-row gap-5 pt-4"
              >
                <button
                  onClick={() => navigate("/contacto")}
                  className="px-8 py-4 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full shadow-lg hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all text-center focus:outline-none focus:ring-2 focus:ring-brand-cyan cursor-pointer"
                >
                  Solicitar cotización
                </button>
                <button
                  onClick={() => navigate("/proyectos")}
                  className="px-8 py-4 border border-brand-acero/60 text-white hover:text-brand-cyan hover:border-brand-cyan font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-brand-navy-light/25 transition-all text-center focus:outline-none focus:ring-2 focus:ring-brand-cyan cursor-pointer"
                >
                  Ver proyectos
                </button>
              </motion.div>

              {/* Official Badges */}
              <motion.div 
                variants={itemFadeUp}
                className="pt-8 border-t border-brand-navy-light/40 space-y-4"
              >
                <span className="block text-xs font-mono text-brand-acero tracking-widest uppercase">
                  Sistemas e instalaciones alineados con:
                </span>
                <div className="flex flex-wrap gap-3.5 items-center">
                  <div className="px-3 py-1.5 bg-brand-navy-light/40 border border-brand-navy-light rounded text-xs font-mono font-semibold text-brand-orange flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    NFPA Member
                  </div>
                  <div className="px-3 py-1.5 bg-brand-navy-light/40 border border-brand-navy-light rounded text-xs font-mono font-semibold text-slate-300">
                    Sello UL Listed
                  </div>
                  <div className="px-3 py-1.5 bg-brand-navy-light/40 border border-brand-navy-light rounded text-xs font-mono font-semibold text-slate-300">
                    Aprobación FM Global
                  </div>
                  <div className="px-3 py-1.5 bg-brand-navy-light/40 border border-brand-navy-light rounded text-xs font-mono font-semibold text-brand-cyan">
                    Cuerpo de Bomberos de Panamá
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual Blueprint & Showcase Photo Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 22 }}
              className="lg:col-span-4 relative block mt-8 lg:mt-0"
            >
              <div className="relative group border border-brand-cyan/25 rounded-lg overflow-hidden shadow-2xl bg-brand-navy-light/30 p-2.5">
                {/* Tech frame corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-cyan z-20"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-cyan z-20"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-cyan z-20"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-cyan z-20"></div>

                <div className="relative h-64 sm:h-72 lg:h-[380px] w-full bg-slate-900 rounded overflow-hidden">
                  <img
                    src={heroBackground}
                    alt="Sistemas Electromecánicos SEMCO"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                  
                  {/* Status Overlay - Real technical data, no fake version logs */}
                  <div className="absolute bottom-4 left-4 right-4 bg-navy-950/95 border border-brand-cyan/25 rounded p-4 backdrop-blur-md space-y-2 text-left">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-brand-cyan font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                        NORMATIVA NFPA 25 / NFPA 20
                      </span>
                      <span className="text-brand-acero font-semibold">PANAMÁ</span>
                    </div>
                    <p className="text-xs text-slate-200 font-sans leading-relaxed">
                      Inspecciones y tableros bajo cumplimiento NFPA. Sistemas electromecánicos de alta confiabilidad en todo Panamá.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-brand-navy-light/50 border-b border-brand-navy-light/80 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-brand-navy/60">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={itemFadeUp}
                className={`pt-6 lg:pt-0 ${idx === 0 || idx === 1 ? "pt-0" : ""}`}
              >
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-brand-cyan tracking-tight tabular-nums">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs text-brand-acero font-mono mt-2 uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. SECCIÓN "QUÉ HACEMOS" (6 Tarjetas de Servicios) */}
      <section className="py-28 md:py-36 bg-brand-navy border-b border-brand-navy-light/40 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(18,181,201,0.04),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
              ESPECIALIDADES DE INGENIERÍA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight text-balance">
              Soluciones robustas en sistemas electromecánicos críticos
            </h2>
            <div className="w-20 h-1 bg-brand-cyan mx-auto mt-6"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {SERVICES.map((svc) => (
              <motion.div
                key={svc.slug}
                variants={itemFadeUp}
                className="group relative bg-brand-navy-light/20 border border-brand-navy-light/60 rounded-xl p-8 hover:bg-brand-navy-light/50 hover:border-brand-cyan/40 hover:shadow-[0_20px_50px_rgba(18,181,201,0.1)] transition-all duration-500 ease-[0.22,1,0.36,1] flex flex-col justify-between"
              >
                {/* Top content */}
                <div>
                  <div className="p-4 bg-brand-navy-light rounded-lg inline-block mb-6 group-hover:bg-brand-cyan/15 group-hover:scale-105 transition-all duration-300">
                    {getServiceIcon(svc.iconName)}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-6 font-light">
                    {svc.summary}
                  </p>
                </div>

                {/* Link button with drawing underline */}
                <button
                  onClick={() => navigate(`/servicios/${svc.slug}` as RoutePath)}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-cyan uppercase hover:text-cyan-400 cursor-pointer"
                >
                  <span className="link-hover">Saber más</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INSPIRATIONAL ENGINEERING FULL CARD */}
      <section className="relative py-36 md:py-44 px-8 bg-navy-950 border-t border-b border-brand-cyan/15 overflow-hidden">
        {/* Background image with parallax-like scaling & dark moody overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={inspirationalEngineering}
            alt="Ingeniería de Precisión SEMCO"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy"></div>
          {/* Subtle blueprint line detail */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[1px] bg-brand-cyan/5 border-dashed border-t border-brand-cyan/10 pointer-events-none"></div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Icon/Accent box */}
          <motion.div 
            variants={itemFadeUp}
            className="p-5 bg-navy-950/80 border border-brand-cyan/30 rounded-full shrink-0 shadow-2xl backdrop-blur-md"
          >
            <Quote className="w-10 h-10 text-brand-cyan" />
          </motion.div>

          <div className="space-y-6 text-center md:text-left">
            <motion.span 
              variants={itemFadeUp}
              className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block"
            >
              FILOSOFÍA DE TRABAJO · SEMCO
            </motion.span>
            
            <motion.blockquote 
              variants={itemFadeUp}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-white italic leading-relaxed text-pretty"
            >
              "La ingeniería electromecánica de alto rendimiento no consiste solo en ensamblar sistemas hidráulicos y eléctricos; consiste en diseñar el latido invisible, seguro y continuo que sostiene las obras más emblemáticas de Panamá."
            </motion.blockquote>
            
            <motion.div 
              variants={itemFadeUp}
              className="flex items-center justify-center md:justify-start gap-3 pt-4"
            >
              <div className="w-10 h-[1.5px] bg-brand-cyan"></div>
              <span className="text-xs font-mono text-brand-acero uppercase tracking-widest font-semibold">
                Compromiso con la Precisión, Seguridad y Normas NFPA
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical frame border details to match blueprint grid feel */}
        <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-brand-cyan/20"></div>
        <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-brand-cyan/20"></div>
        <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-brand-cyan/20"></div>
        <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-brand-cyan/20"></div>
      </section>

      {/* 4. SECCIÓN DIFERENCIADOR — Mantenimiento con trazabilidad digital */}
      <section className="bg-brand-navy-light/40 py-28 md:py-36 border-t border-b border-brand-navy-light/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Screen Terminal mockup */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-navy-950 rounded-xl border border-brand-cyan/25 overflow-hidden shadow-2xl relative">
                {/* Window header */}
                <div className="bg-brand-navy border-b border-brand-navy-light/60 px-4 py-3 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-brand-cyan font-bold tracking-widest">SEMCO_AUDIT_LOGS</span>
                  <div className="w-4"></div>
                </div>

                <div className="p-6 space-y-4 font-mono text-xs">
                  <div className="flex justify-between text-brand-acero border-b border-brand-navy-light/40 pb-2.5">
                    <span>REGISTRO: #PA-507-2026</span>
                    <span>ESTADO: FIRMADO</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-brand-cyan block font-semibold">[SISTEMA CONTRA INCENDIOS - NFPA 25]</span>
                    <div className="grid grid-cols-12 gap-1 bg-brand-navy-light/35 p-2 rounded">
                      <span className="col-span-8 text-slate-300">Prueba semanal arranque bombas</span>
                      <span className="col-span-4 text-green-400 text-right">✓ OK</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 bg-brand-navy-light/35 p-2 rounded">
                      <span className="col-span-8 text-slate-300">Medición presión succión</span>
                      <span className="col-span-4 text-slate-200 text-right">120 PSI</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 bg-brand-navy-light/35 p-2 rounded">
                      <span className="col-span-8 text-slate-300">Evidencia fotográfica tomada</span>
                      <span className="col-span-4 text-green-400 text-right">✓ JPG_INCLUIDO</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-navy-light/40 space-y-1.5 text-xs text-brand-acero">
                    <p className="text-slate-300">Auditor responsable: <strong className="text-white font-medium">Técnico certificado SEMCO</strong></p>
                    <p>Firma digital cliente: PH_SAN_FRANCISCO_ADMIN_OK</p>
                  </div>

                  <div className="flex justify-center pt-3">
                    <span className="px-3 py-1.5 bg-brand-cyan/15 border border-brand-cyan/40 text-brand-cyan rounded text-[10px] font-bold tracking-wider">
                      HISTORIAL TOTAL CONSERVADO EN LA NUBE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Informative text */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 order-1 lg:order-2 space-y-8"
            >
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block mb-3">
                  TECNOLOGÍA EN CAMPO
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight tracking-tight text-balance">
                  El único mantenimiento electromecánico en Panamá que puedes auditar en tiempo real
                </h2>
              </div>

              <p className="text-slate-300 font-light leading-relaxed text-base md:text-lg text-pretty">
                Cada inspección que hacemos queda registrada en nuestra plataforma digital: checklist NFPA 25 completo, evidencia fotográfica por sistema e informe firmado por el cliente. Se acabó el PDF suelto que se pierde. Tienes el historial de tu edificio, siempre disponible y con trazabilidad total. Ningún otro proveedor en Panamá lo ofrece.
              </p>

              <div className="space-y-4 pt-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded mt-1">
                    <Check className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-bold uppercase text-white tracking-wide">Checklist NFPA 25 digital</h4>
                    <p className="text-xs text-brand-acero leading-relaxed mt-1">
                      Evaluación estricta de componentes de acuerdo con las normativas internacionales adoptadas en Panamá.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded mt-1">
                    <Check className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-bold uppercase text-white tracking-wide">Evidencia fotográfica por sistema</h4>
                    <p className="text-xs text-brand-acero leading-relaxed mt-1">
                      Registro visual del estado de las válvulas, medidores, tableros y plantas antes y después de cada servicio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded mt-1">
                    <Check className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-bold uppercase text-white tracking-wide">Informe firmado con historial</h4>
                    <p className="text-xs text-brand-acero leading-relaxed mt-1">
                      Firma in situ en tableta digital e integración directa con el servidor seguro de SEMCO.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. SECCIÓN CLIENTES / OBRAS (Fila de Nombres Marquee) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-navy-950 border-b border-brand-navy-light/40 overflow-hidden relative"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-[10px] font-mono tracking-widest text-brand-acero uppercase block">
            CONFIANZA COMPROBADA EN INSTALACIONES DE GRAN ESCALA
          </span>
        </div>

        <div className="flex overflow-hidden">
          {/* Repeating marquee list for double size scrolling */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-display font-semibold text-brand-acero tracking-wide py-2">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
              <span key={idx} className="flex items-center gap-2 hover:text-brand-cyan transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                {client}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. SECCIÓN SECTORES QUE ATENDEMOS (Chips) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-brand-navy-light/30">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            CAMPO DE ACCIÓN
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight text-balance">
            Sectores que atendemos
          </h2>
          <div className="w-12 h-0.5 bg-brand-cyan/50 mx-auto mt-4"></div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {SECTORS.map((sector, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUp}
              className="px-6 py-3 bg-brand-navy-light/20 border border-brand-navy-light/50 hover:border-brand-cyan/40 hover:bg-brand-navy-light/45 transition-all duration-300 rounded-full text-sm font-light text-slate-200 shadow-md flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan shrink-0" />
              <span>{sector}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 7. SECCIÓN PROYECTOS DESTACADOS (3 Tarjetas) */}
      <section className="py-28 md:py-36 bg-brand-navy-light/30 border-t border-b border-brand-navy-light/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
                RECONOCIMIENTO TÉCNICO
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight text-balance leading-tight">
                Proyectos electromecánicos destacados
              </h2>
            </div>
            <button
              onClick={() => navigate("/proyectos")}
              className="text-xs font-mono font-bold text-brand-cyan hover:text-cyan-400 flex items-center gap-1.5 uppercase cursor-pointer"
            >
              <span className="link-hover">Ver portafolio completo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          >
            {featuredProjects.map((p) => (
              <motion.div
                key={p.id}
                variants={itemFadeUp}
                className="bg-brand-navy/60 border border-brand-navy-light/60 rounded-xl overflow-hidden flex flex-col hover:border-brand-cyan/40 hover:shadow-[0_20px_50px_rgba(18,181,201,0.08)] transition-all duration-500 ease-[0.22,1,0.36,1] group"
              >
                {/* Image Placeholder with high contrast and overlay */}
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={`${p.name} - ${p.system}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent"></div>
                  <span className="absolute bottom-4 left-4 px-2.5 py-1 bg-brand-cyan/20 border border-brand-cyan/40 backdrop-blur-sm rounded text-[10px] font-mono text-brand-cyan font-bold uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>

                {/* Body details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-[11px] font-mono text-brand-acero mt-1.5 uppercase font-semibold tracking-wider">
                      {p.location}
                    </p>
                    <p className="text-sm text-slate-300/90 leading-relaxed mt-3 line-clamp-3 font-light">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-navy-light/60 text-xs font-mono text-brand-cyan font-semibold">
                    Sistema: {p.system}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 8. FAQ RESUMEN (con link a la página de preguntas frecuentes) */}
      <section className="py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-brand-navy-light/20">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-3">
            RESOLVIENDO DUDAS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight text-balance">
            Preguntas frecuentes sobre normativas en Panamá
          </h2>
          <div className="w-16 h-0.5 bg-brand-cyan/50 mx-auto mt-4"></div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <motion.div variants={itemFadeUp} className="p-6 bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-xl">
            <h4 className="text-base font-semibold text-white">¿Es obligatorio tener y mantener un sistema contra incendio en Panamá?</h4>
            <p className="text-sm text-slate-300 leading-relaxed mt-3 font-light">
              Sí. El Benemérito Cuerpo de Bomberos de Panamá exige sistemas de protección contra incendios en edificios comerciales, industriales y residenciales de gran escala, y su mantenimiento conforme a las normas NFPA adoptadas en el país. Un sistema sin mantenimiento vigente puede invalidar el permiso de ocupación.
            </p>
          </motion.div>

          <motion.div variants={itemFadeUp} className="p-6 bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-xl">
            <h4 className="text-base font-semibold text-white">¿Cada cuánto se debe inspeccionar un sistema contra incendio? (NFPA 25)</h4>
            <p className="text-sm text-slate-300 leading-relaxed mt-3 font-light">
              Depende del componente. Según la norma NFPA 25: pruebas de bombas contra incendio (semanal o mensual según motorización), inspección visual de rociadores y de válvulas (mensual o trimestral), pruebas de alarmas (semestral) e inspección y mantenimiento general de todo el sistema (anual).
            </p>
          </motion.div>

          <motion.div variants={itemFadeUp} className="p-6 bg-brand-navy-light/15 border border-brand-navy-light/60 rounded-xl">
            <h4 className="text-base font-semibold text-white">¿Qué hace diferente al mantenimiento de SEMCO?</h4>
            <p className="text-sm text-slate-300 leading-relaxed mt-3 font-light">
              Cada inspección técnica queda registrada en nuestra plataforma digital de trazabilidad en tiempo real. Esto incluye un checklist completo bajo norma NFPA 25, evidencia fotográfica por cada subsistema e informes firmados digitalmente por el cliente.
            </p>
          </motion.div>
        </motion.div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/preguntas-frecuentes")}
            className="text-xs font-mono font-bold text-brand-cyan hover:text-cyan-400 border border-brand-cyan/30 hover:border-brand-cyan/60 rounded-full px-6 py-3 uppercase transition-all cursor-pointer"
          >
            Ver todas las preguntas y respuestas
          </button>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="relative bg-navy-950 border-t border-brand-navy-light/60 py-28 px-4 blueprint-grid">
        <div className="absolute inset-0 bg-brand-navy/92 z-0"></div>
        <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight tracking-tight text-balance">
            ¿Tu edificio necesita un aliado electromecánico serio?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light text-pretty leading-relaxed">
            Evita multas de bomberos, fallas en el suministro de agua y paros imprevistos de energía. Agenda hoy mismo una evaluación técnica de tus instalaciones críticas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
            <button
              onClick={() => navigate("/contacto")}
              className="px-8 py-4 bg-brand-cyan text-brand-navy font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all text-center focus:outline-none cursor-pointer"
            >
              Solicitar cotización
            </button>
            <a
              href={COMPANY_NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white font-display font-bold text-xs tracking-wider uppercase rounded-full hover:bg-green-600 transition-all text-center cursor-pointer"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
