import React, { createContext, useContext, useState, useEffect } from "react";
import { RoutePath } from "../types";
import { SERVICES, GENERAL_FAQS } from "../data";

interface RouterContextProps {
  currentPath: RoutePath;
  navigate: (path: RoutePath) => void;
}

const RouterContext = createContext<RouterContextProps | undefined>(undefined);

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

interface RouterProviderProps {
  children: React.ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  // Read path on load, default to "/" if invalid or empty
  const getInitialPath = (): RoutePath => {
    let path = window.location.pathname as RoutePath;
    
    // Support hash fallback for seamless hosting and iframe constraints
    if (window.location.hash) {
      const hashPath = window.location.hash.replace("#", "") as RoutePath;
      if (isValidRoute(hashPath)) {
        return hashPath;
      }
    }

    if (isValidRoute(path)) {
      return path;
    }
    return "/";
  };

  const [currentPath, setCurrentPath] = useState<RoutePath>(getInitialPath());

  function isValidRoute(path: string): boolean {
    if (path === "/" || path === "/proyectos" || path === "/nosotros" || path === "/contacto" || path === "/preguntas-frecuentes") {
      return true;
    }
    if (path.startsWith("/servicios/")) {
      const slug = path.replace("/servicios/", "");
      return SERVICES.some((s) => s.slug === slug);
    }
    return false;
  }

  const navigate = (path: RoutePath) => {
    if (path === currentPath) return;
    
    // Update history pushState
    window.history.pushState(null, "", path);
    // Also update hash as a fallback to ensure robustness in standard sandboxes
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => {
      // Re-evaluate initial path
      let path = window.location.pathname as RoutePath;
      if (window.location.hash) {
        const hashPath = window.location.hash.replace("#", "") as RoutePath;
        if (isValidRoute(hashPath)) {
          path = hashPath;
        }
      }
      
      if (isValidRoute(path)) {
        setCurrentPath(path);
      } else {
        setCurrentPath("/");
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  // Update SEO Meta tags and inject JSON-LD dynamic schema
  useEffect(() => {
    let title = "SEMCO | Ingeniería y Mantenimiento Electromecánico en Panamá";
    let desc = "15 años en sistemas de bombeo, protección contra incendios NFPA, plantas eléctricas y control de motores en Panamá. Mantenimiento con trazabilidad digital. Solicita tu cotización.";
    let pageName = "Inicio";

    // Detect page metadata
    if (currentPath === "/") {
      title = "SEMCO | Ingeniería y Mantenimiento Electromecánico en Panamá";
      desc = "15 años en sistemas de bombeo, protección contra incendios NFPA, plantas eléctricas y control de motores en Panamá. Mantenimiento con trazabilidad digital. Solicita tu cotización.";
      pageName = "Inicio";
    } else if (currentPath === "/proyectos") {
      title = "Proyectos | SEMCO Ingeniería Electromecánica Panamá";
      desc = "Tocumen, Multiplaza, Westland Mall, Water on the Bay, Torre Argos y más. 15 años de proyectos electromecánicos en Panamá.";
      pageName = "Proyectos";
    } else if (currentPath === "/nosotros") {
      title = "Sobre SEMCO | 15 Años de Ingeniería Electromecánica en Panamá";
      desc = "SEMCO: 15 años en ingeniería electromecánica en Panamá. Misión, visión, certificaciones NFPA y Cuerpo de Bomberos.";
      pageName = "Sobre Nosotros";
    } else if (currentPath === "/contacto") {
      title = "Contacto | SEMCO Panamá +507 235-9876";
      desc = "Contacta a SEMCO para tu proyecto electromecánico en Panamá. Rio Abajo, Ciudad de Panamá. Tel +507 235-9876 · info@semco.com.pa.";
      pageName = "Contacto";
    } else if (currentPath === "/preguntas-frecuentes") {
      title = "Preguntas Frecuentes | Sistemas Electromecánicos y NFPA Panamá | SEMCO";
      desc = "Todo sobre mantenimiento NFPA 25, obligatoriedad, frecuencias de inspección y sistemas contra incendios en Panamá. Respuestas de SEMCO.";
      pageName = "Preguntas Frecuentes";
    } else if (currentPath.startsWith("/servicios/")) {
      const slug = currentPath.replace("/servicios/", "");
      const svc = SERVICES.find((s) => s.slug === slug);
      if (svc) {
        title = svc.seoTitle;
        desc = svc.seoDesc;
        pageName = svc.title;
      }
    }

    // Set Document Title
    document.title = title;

    // Set Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc);

    // Set Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://semco.com.pa${currentPath}`);

    // Set Open Graph Meta Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    // Set Open Graph Meta Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", desc);

    // Dynamic JSON-LD Schema.org Injection
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => script.remove());

    const schemas: any[] = [];

    // 1. Organization Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://semco.com.pa/#organization",
      "name": "SEMCO Panamá",
      "url": "https://semco.com.pa",
      "logo": "https://semco.com.pa/assets/logo.png",
      "foundingDate": "2011",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rio Abajo, Villa Rica, Local D15",
        "addressLocality": "Ciudad de Panamá",
        "addressCountry": "PA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+507-235-9876",
        "contactType": "customer service",
        "areaServed": "PA",
        "availableLanguage": "Spanish"
      }
    });

    // 2. LocalBusiness (ProfessionalService) Schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://semco.com.pa/#localbusiness",
      "name": "SEMCO Panamá",
      "description": "Empresa de ingeniería y proyectos electromecánicos en Panamá: sistemas de bombeo, protección contra incendios NFPA, plantas eléctricas, control de motores y energía solar.",
      "url": "https://semco.com.pa",
      "telephone": "+507-235-9876",
      "email": "info@semco.com.pa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rio Abajo, Villa Rica, Local D15",
        "addressLocality": "Ciudad de Panamá",
        "addressCountry": "PA"
      },
      "areaServed": { "@type": "Country", "name": "Panamá" },
      "foundingDate": "2011",
      "knowsAbout": [
        "NFPA 25",
        "NFPA 20",
        "NFPA 13",
        "Sistemas de bombeo",
        "Sistemas contra incendios",
        "Plantas eléctricas",
        "Centros de control de motores",
        "Energía solar fotovoltaica"
      ],
      "slogan": "Ingeniería electromecánica que no falla cuando más importa",
      "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    });

    // 3. BreadcrumbList Schema
    const breadcrumb: any = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://semco.com.pa/"
        }
      ]
    };

    if (currentPath !== "/") {
      breadcrumb.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": `https://semco.com.pa${currentPath}`
      });
    }
    schemas.push(breadcrumb);

    // 4. Page-specific Schema: Service or FAQPage
    if (currentPath === "/" || currentPath === "/preguntas-frecuentes") {
      // FAQ Schema (9 questions)
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": GENERAL_FAQS.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      });
    }

    if (currentPath.startsWith("/servicios/")) {
      const slug = currentPath.replace("/servicios/", "");
      const svc = SERVICES.find((s) => s.slug === slug);
      if (svc) {
        // Service Schema
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": svc.title,
          "serviceType": "Engineering and Maintenance Service",
          "provider": {
            "@type": "ProfessionalService",
            "name": "SEMCO Panamá",
            "url": "https://semco.com.pa"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Panamá"
          },
          "description": svc.seoDesc
        });

        // Also add the service FAQ subschema
        if (svc.faqs && svc.faqs.length > 0) {
          schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": svc.faqs.map((f) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          });
        }
      }
    }

    // Inject all scripts to document head
    schemas.forEach((schemaObj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps {
  to: RoutePath;
  children: React.ReactNode;
  className?: string;
  id?: string;
  [key: string]: any;
}

export function Link({ to, children, className, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
