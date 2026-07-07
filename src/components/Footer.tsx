import { Link, useRouter } from "./Router";
import { SERVICES, COMPANY_NAP } from "../data";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { RoutePath } from "../types";
import Logo from "./Logo";

export default function Footer() {
  const { navigate } = useRouter();

  const quickLinks = [
    { label: "Inicio", path: "/" as RoutePath },
    { label: "Proyectos (Portafolio)", path: "/proyectos" as RoutePath },
    { label: "Sobre Nosotros", path: "/nosotros" as RoutePath },
    { label: "Preguntas Frecuentes", path: "/preguntas-frecuentes" as RoutePath },
    { label: "Contacto y Ubicación", path: "/contacto" as RoutePath },
  ];

  return (
    <footer className="bg-navy-950 text-brand-text-light pt-16 pb-8 border-t border-brand-navy-light" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & NAP */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Logo height={44} textColor="white" />
            </Link>
            <p className="text-xs text-brand-acero leading-relaxed mt-2">
              Ingeniería electromecánica de alto rendimiento para infraestructuras residenciales, comerciales e industriales en Panamá. Especialistas en sistemas críticos desde 2011.
            </p>
            <div className="space-y-2.5 pt-3">
              <div className="flex items-start gap-2.5 text-xs text-brand-acero">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>{COMPANY_NAP.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-acero">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`tel:${COMPANY_NAP.telephoneSchema}`} className="hover:text-brand-cyan transition-colors font-mono">
                  {COMPANY_NAP.telephone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-acero">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${COMPANY_NAP.email}`} className="hover:text-brand-cyan transition-colors">
                  {COMPANY_NAP.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-acero">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{COMPANY_NAP.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-brand-cyan mb-5 border-b border-brand-navy-light pb-2">
              SERVICIOS ELECTROMECÁNICOS
            </h3>
            <ul className="space-y-2 text-xs text-brand-acero">
              {SERVICES.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/servicios/${svc.slug}` as RoutePath}
                    className="hover:text-brand-cyan transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-brand-cyan translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-brand-cyan mb-5 border-b border-brand-navy-light pb-2">
              ACCESO RÁPIDO
            </h3>
            <ul className="space-y-2 text-xs text-brand-acero">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-cyan transition-colors flex items-center gap-1 group py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-cyan/40 group-hover:bg-brand-cyan group-hover:scale-125 transition-all"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Sello y Confianza */}
          <div className="bg-brand-navy-light/20 p-5 rounded-lg border border-brand-navy-light/40 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-brand-cyan flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" /> GARANTÍA TÉCNICA
            </h3>
            <p className="text-[11px] text-brand-acero leading-relaxed">
              Cada uno de nuestros ingenieros y técnicos posee idoneidad avalada y certificaciones vigentes, lo que garantiza instalaciones que aprueban todas las normativas de inspección nacionales.
            </p>
            <div className="bg-navy-950/80 p-3 rounded border border-brand-navy-light/30">
              <span className="block text-[10px] font-mono tracking-widest text-brand-cyan font-bold uppercase mb-1">
                Trazabilidad Total
              </span>
              <span className="text-[10px] text-slate-300 leading-snug">
                El único proveedor en Panamá con registro digital fotográfico inalterable de mantenimiento preventivo.
              </span>
            </div>
          </div>

        </div>

        {/* Divider with Blueprint touch */}
        <div className="my-10 border-t border-brand-navy-light/40 relative">
          <div className="absolute right-0 top-0 translate-y-[-50%] bg-navy-950 px-2 text-[9px] font-mono text-brand-cyan">
            SEMCO_PANAMA_EST_2011
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-brand-acero text-center md:text-left">
            <p>© 2026 SEMCO Panamá. Todos los derechos reservados. RUC 1234567-1-891011 DV 12.</p>
            <p className="text-[10px] text-brand-acero/65 mt-1">
              Desarrollado en estricto apego con normas de accesibilidad WCAG AA y optimizado para SEO semántico y AEO.
            </p>
          </div>

          {/* Certification Stamps / Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-2.5 py-1 bg-navy-950 border border-brand-navy-light/80 rounded text-[9px] font-mono text-slate-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              MIEMBRO NFPA
            </span>
            <span className="px-2.5 py-1 bg-navy-950 border border-brand-navy-light/80 rounded text-[9px] font-mono text-slate-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              APROBADO BOMBEROS PA
            </span>
            <span className="px-2.5 py-1 bg-navy-950 border border-brand-navy-light/80 rounded text-[9px] font-mono text-slate-300">
              EQUIPOS UL | FM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
