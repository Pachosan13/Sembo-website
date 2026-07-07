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
    <header className="sticky top-0 z-40 w-full bg-brand-navy border-b border-brand-navy-light shadow-md" id="app-header">
      {/* Top Banner with phone and hours */}
      <div className="hidden sm:block w-full bg-navy-950/80 text-brand-acero py-1.5 px-4 text-xs border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
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
              <Logo height={46} textColor="white" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => {
              if (item.label === "Servicios") {
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors focus:outline-none rounded-md ${
                        currentPath.startsWith("/servicios/")
                          ? "text-brand-cyan bg-brand-navy-light/40"
                          : "text-brand-text-light hover:text-brand-cyan hover:bg-brand-navy-light/25"
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      Servicios
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          className="absolute left-0 mt-0 w-80 bg-brand-navy border border-brand-navy-light rounded-lg shadow-xl py-2 z-50 overflow-hidden"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                        >
                          <div className="px-4 py-2 border-b border-brand-navy-light/55 mb-1 bg-brand-navy-light/10">
                            <span className="text-xs font-mono tracking-wider text-brand-cyan font-bold uppercase block">
                              Áreas de Especialización
                            </span>
                          </div>
                          {SERVICES.map((svc) => (
                            <Link
                              key={svc.slug}
                              to={`/servicios/${svc.slug}` as RoutePath}
                              className="flex items-start gap-3 px-4 py-2.5 hover:bg-brand-navy-light/40 transition-colors group"
                            >
                              <div className="mt-0.5 p-1.5 bg-brand-navy-light/50 rounded group-hover:bg-brand-cyan/10 transition-colors">
                                {getServiceIcon(svc.iconName)}
                              </div>
                              <div>
                                <span className="block text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors">
                                  {svc.title}
                                </span>
                                <span className="block text-[10px] text-brand-acero leading-snug mt-0.5 group-hover:text-slate-300">
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

              return (
                <Link
                  key={idx}
                  to={item.path!}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    currentPath === item.path
                      ? "text-brand-cyan bg-brand-navy-light/40"
                      : "text-brand-text-light hover:text-brand-cyan hover:bg-brand-navy-light/25"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => navigate("/contacto")}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase bg-brand-cyan text-brand-navy rounded-md hover:bg-cyan-400 hover:shadow-md active:translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            >
              <FileText className="w-3.5 h-3.5" /> Solicitar cotización
            </button>
            <a
              href={COMPANY_NAP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase border border-green-500 text-green-400 rounded-md hover:bg-green-500/10 hover:text-green-300 transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <Phone className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => navigate("/contacto")}
              className="flex items-center gap-1 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase bg-brand-cyan text-brand-navy rounded hover:bg-cyan-400 transition-colors"
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
              <div className="text-center text-[10px] text-brand-acero pt-2">
                Sede Rio Abajo, Local D15 · Tel: +507 235-9876
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
