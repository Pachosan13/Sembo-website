import { useState, useEffect } from "react";
import { Link, useRouter } from "./Router";
import { SERVICES, COMPANY_NAP } from "../data";
import { Menu, X, ChevronDown, Phone, FileText, Flame, Droplets, Zap, Cpu, Sun, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RoutePath } from "../types";
import Logo from "./Logo";

export default function Header() {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for sticky transparent header transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [currentPath]);

  const navItems = [
    { label: "Inicio", path: "/" as RoutePath },
    { label: "Servicios", path: null }, // Handled separately
    { label: "Proyectos", path: "/proyectos" as RoutePath },
    { label: "Nosotros", path: "/nosotros" as RoutePath },
    { label: "Preguntas", path: "/preguntas-frecuentes" as RoutePath },
    { label: "Contacto", path: "/contacto" as RoutePath },
  ];

  // Helper to get icon for services
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-4 h-4 text-brand-cyan" />;
      case "Droplets": return <Droplets className="w-4 h-4 text-brand-cyan" />;
      case "Zap": return <Zap className="w-4 h-4 text-brand-cyan" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-brand-cyan" />;
      case "Sun": return <Sun className="w-4 h-4 text-brand-cyan" />;
      case "Briefcase": return <Briefcase className="w-4 h-4 text-brand-cyan" />;
      default: return <Flame className="w-4 h-4 text-brand-cyan" />;
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      scrolled 
        ? "bg-brand-navy/90 backdrop-blur-lg border-b border-brand-navy-light/60 shadow-[0_12px_40px_rgba(5,20,36,0.6)] py-1" 
        : "bg-brand-navy/30 backdrop-blur-sm border-b border-brand-navy-light/10 py-3"
    }`} id="app-header">
      {/* Top Banner with phone and hours */}
      <div className={`hidden sm:block w-full bg-navy-950/40 text-brand-acero px-4 text-xs border-b border-brand-navy-light/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
        scrolled ? "h-0 py-0 opacity-0 border-b-transparent" : "h-9 py-1.5 opacity-100"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              Sede Central: {COMPANY_NAP.address}
            </span>
            <span>| Horario: {COMPANY_NAP.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY_NAP.telephoneSchema}`} className="hover:text-brand-cyan transition-colors flex items-center gap-1 font-mono">
              <Phone className="w-3.5 h-3.5" /> {COMPANY_NAP.telephone}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Logo height={48} textColor="white" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, idx) => {
              if (item.label === "Servicios") {
                const isActive = currentPath.startsWith("/servicios/");
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none rounded-full premium-focus relative ${
                        isActive
                          ? "text-brand-cyan bg-brand-navy-light/45"
                          : "text-brand-text-light hover:text-brand-cyan"
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span className={isActive ? "" : "link-hover"}>Servicios</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          className="absolute left-0 mt-1 w-80 bg-brand-navy border border-brand-navy-light rounded-2xl shadow-2xl py-3.5 z-50 overflow-hidden backdrop-blur-xl"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 py-2 border-b border-brand-navy-light/55 mb-2 bg-brand-navy-light/10">
                            <span className="text-xs font-mono tracking-widest text-brand-cyan font-bold uppercase block">
                              Áreas de Especialización
                            </span>
                          </div>
                          {SERVICES.map((svc) => (
                            <Link
                              key={svc.slug}
                              to={`/servicios/${svc.slug}` as RoutePath}
                              className="flex items-start gap-4 px-5 py-3 hover:bg-brand-navy-light/45 transition-colors group"
                            >
                              <div className="mt-0.5 p-2 bg-brand-navy-light/50 rounded-lg group-hover:bg-brand-cyan/10 transition-colors border border-brand-navy-light/60">
                                {getServiceIcon(svc.iconName)}
                              </div>
                              <div>
                                <span className="block text-sm font-semibold text-white group-hover:text-brand-cyan transition-colors">
                                  {svc.title}
                                </span>
                                <span className="block text-xs text-brand-acero leading-relaxed mt-1 group-hover:text-slate-300 font-light">
                                  {svc.summary}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = currentPath === item.path;
              return (
                <Link
                  key={idx}
                  to={item.path!}
                  className={`px-4 py-2.5 text-sm font-semibold transition-colors rounded-full premium-focus relative ${
                    isActive
                      ? "text-brand-cyan bg-brand-navy-light/45"
                      : "text-brand-text-light hover:text-brand-cyan"
                  }`}
                >
                  <span className={isActive ? "" : "link-hover"}>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => navigate("/contacto")}
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold tracking-wider uppercase bg-brand-cyan text-brand-navy rounded-full hover:bg-cyan-400 hover:shadow-cyan-400/20 active:translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-cyan cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" /> Solicitar cotización
            </button>
            <a
              href={COMPANY_NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold tracking-wider uppercase border border-green-500 text-green-400 rounded-full hover:bg-green-500/10 hover:text-green-300 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => navigate("/contacto")}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold tracking-wider uppercase bg-brand-cyan text-brand-navy rounded-full hover:bg-cyan-400 transition-colors cursor-pointer"
            >
              Cotizar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-brand-text-light hover:text-brand-cyan hover:bg-brand-navy-light/30 transition-colors focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden w-full bg-brand-navy-light border-t border-brand-navy/60 px-4 pt-4 pb-6 space-y-3 z-50 absolute"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                if (item.label === "Servicios") {
                  return (
                    <div key={idx} className="border-b border-brand-navy/30 py-1">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-brand-text-light hover:text-brand-cyan"
                      >
                        <span>Servicios</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {mobileServicesOpen && (
                        <div className="pl-4 mt-1 space-y-1 bg-brand-navy/40 rounded-md py-2 px-1">
                          {SERVICES.map((svc) => (
                            <Link
                              key={svc.slug}
                              to={`/servicios/${svc.slug}` as RoutePath}
                              className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                                currentPath === `/servicios/${svc.slug}`
                                  ? "text-brand-cyan bg-brand-navy-light"
                                  : "text-slate-300 hover:text-brand-cyan"
                              }`}
                            >
                              {getServiceIcon(svc.iconName)}
                              <span>{svc.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={idx}
                    to={item.path!}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors border-b border-brand-navy/30 ${
                      currentPath === item.path
                        ? "text-brand-cyan bg-brand-navy/50"
                        : "text-brand-text-light hover:text-brand-cyan"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_NAP.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-2 py-2.5 text-xs font-bold tracking-wider uppercase bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                <Phone className="w-4 h-4" /> WhatsApp Directo
              </a>
              <div className="text-center text-xs text-brand-acero pt-2">
                Sede Rio Abajo, Local D15 · Tel: +507 235-9876
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
