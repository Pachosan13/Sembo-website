import { ServiceItem, ProjectItem, FAQItem } from "./types";

// Import custom generated engineering assets
import solarRoofArgos from "./assets/images/solar_roof_argos_1783450627549.jpg";
import firePumpNfpa from "./assets/images/fire_pump_nfpa_1783450516110.jpg";
import waterBoosterSystem from "./assets/images/water_booster_system_1783450528989.jpg";
import dieselGeneratorAts from "./assets/images/diesel_generator_ats_1783450602544.jpg";

export const COMPANY_NAP = {
  name: "SEMCO Panamá",
  tagline: "Ingeniería y mantenimiento electromecánico que no falla cuando más importa",
  address: "Rio Abajo, Villa Rica, Local D15, Ciudad de Panamá, Panamá",
  telephone: "+507 235-9876",
  telephoneSchema: "+507-235-9876",
  email: "info@semco.com.pa",
  whatsapp: "https://wa.me/5072359876?text=Hola%20SEMCO%20Panam%C3%A1,%20necesito%20una%20evaluaci%C3%B3n%20técnica.",
  hours: "Lun-Vie 8:00am - 5:00pm",
  foundedYear: "2011",
  experienceYears: 15
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "sistemas-contra-incendio-panama",
    title: "Sistemas contra incendios",
    seoTitle: "Sistemas Contra Incendios en Panamá NFPA UL FM | SEMCO",
    seoDesc: "Diseño, instalación e inspección NFPA 25 de sistemas contra incendios en Panamá. Salas de bombas NFPA 20, rociadores, certificados por Bomberos. Cotiza con SEMCO.",
    summary: "Diseño, instalación e inspección NFPA 25. Salas de bombas NFPA 20 y rociadores NFPA 13. Certificados por el Cuerpo de Bomberos.",
    iconName: "Flame",
    answerFirst: "SEMCO diseña, instala, inspecciona y mantiene sistemas de protección contra incendios en Panamá conforme a las normas NFPA, con especialistas certificados por el Benemérito Cuerpo de Bomberos. Cubrimos rociadores (NFPA 13), tuberías verticales (NFPA 14), bombas contra incendio (NFPA 20) e inspección y mantenimiento (NFPA 25).",
    includes: [
      "Diseño y cálculo hidráulico conforme a normas",
      "Salas de bombas contra incendio certificadas (NFPA 20)",
      "Sistemas de rociadores automáticos (NFPA 13)",
      "Sistemas de tuberías verticales y mangueras (NFPA 14)",
      "Sistemas de presurización de escaleras de emergencia",
      "Inspección, prueba y mantenimiento digital NFPA 25",
      "Certificación de idoneidad ante el Cuerpo de Bomberos de Panamá"
    ],
    certifications: ["NFPA", "UL", "FM", "Cuerpo de Bomberos de Panamá"],
    sectors: ["Propiedad horizontal (PH)", "Edificios residenciales", "Centros comerciales", "Hoteles", "Hospitales e instituciones", "Industrias", "Desarrolladores y contratistas"],
    faqs: [
      {
        question: "¿Es obligatorio tener y mantener un sistema contra incendio en Panamá?",
        answer: "Sí. El Benemérito Cuerpo de Bomberos de Panamá exige sistemas de protección contra incendios en edificios comerciales, industriales y residenciales de gran escala, y su mantenimiento conforme a las normas NFPA adoptadas en el país. Un sistema sin mantenimiento vigente puede invalidar el permiso de ocupación."
      },
      {
        question: "¿Cada cuánto se debe inspeccionar un sistema contra incendio? (NFPA 25)",
        answer: "Depende del componente. Según la norma NFPA 25: pruebas de bombas contra incendio (semanal o mensual según motorización), inspección visual de rociadores y válvulas (mensual o trimestral), pruebas de alarmas (semestral) e inspección y mantenimiento general de todo el sistema (anual). SEMCO arma el calendario de frecuencias y lo ejecuta con registro digital."
      },
      {
        question: "¿Qué es una sala de bombas contra incendio y qué debe tener?",
        answer: "Es el corazón del sistema contra incendio. Aloja la bomba principal (eléctrica o diésel), la bomba jockey (para mantener la presión estable ante microfugas) y los controladores automáticos correspondientes. Su diseño, caudal y componentes deben cumplir rigurosamente con la norma NFPA 20 para garantizar la presión adecuada ante una emergencia."
      }
    ]
  },
  {
    slug: "sistemas-de-bombeo-panama",
    title: "Sistemas de bombeo de agua",
    seoTitle: "Sistemas de Bombeo de Agua en Panamá | SEMCO",
    seoDesc: "Bombas de agua potable, presión constante, reforzadores y achique para edificios e industrias en Panamá. Instalación y mantenimiento. SEMCO, 15 años.",
    summary: "Agua potable, presión constante, reforzadores y sistemas de achique. Diseñados para una operación eficiente sin pérdida de presión.",
    iconName: "Droplets",
    answerFirst: "Diseñamos, instalamos y mantenemos sistemas de bombeo de agua potable, presión constante, reforzadores y sistemas de achique (freático, pluvial, sanitario y de elevadores) para edificios residenciales, comerciales e industriales en Panamá.",
    includes: [
      "Bombas de agua potable y sistemas de transferencia de tanque a tanque",
      "Sistemas de presión constante con variadores de frecuencia (VFD)",
      "Sistemas de bombeo booster (reforzadores de presión)",
      "Sistemas de achique para control freático, pluvial y sanitario",
      "Sistemas de drenaje de pozos de elevadores",
      "Mantenimiento preventivo y correctivo de bombas e impulsores",
      "Suministro de bombas de agua certificadas y repuestos de alta calidad"
    ],
    certifications: ["Certificaciones de eficiencia", "Instalaciones conforme a código", "Garantía de fábrica"],
    sectors: ["Propiedad horizontal (PH)", "Torres residenciales", "Centros comerciales", "Complejos corporativos", "Hospitales", "Planta e instalaciones industriales"],
    faqs: [
      {
        question: "¿Qué es un sistema de presión constante y por qué es mejor?",
        answer: "Es un sistema que utiliza variadores de frecuencia (VFD) para ajustar la velocidad de los motores de las bombas en tiempo real según la demanda real de agua del edificio. Esto garantiza una presión uniforme en todos los pisos (incluso en las horas pico) y ahorra hasta un 40% de energía eléctrica, reduciendo además el desgaste de tuberías y motores."
      },
      {
        question: "¿Para qué sirve un sistema de achique y cuándo requiere mantenimiento?",
        answer: "Los sistemas de achique desalojan el agua acumulada en sótanos, pozos de elevador y áreas freáticas. Requieren mantenimiento preventivo trimestral debido a que están expuestos a sedimentos, residuos y condiciones húmedas que pueden trabar las aspas de las bombas o dañar los sensores de flotador, causando inundaciones costosas."
      }
    ]
  },
  {
    slug: "plantas-electricas-panama",
    title: "Plantas eléctricas de emergencia",
    seoTitle: "Plantas Eléctricas de Emergencia en Panamá | SEMCO",
    seoDesc: "Suministro, instalación y mantenimiento de plantas eléctricas de respaldo con ATS en Panamá. Continuidad de energía garantizada. SEMCO.",
    summary: "Suministro, instalación, transferencia automática (ATS) y mantenimiento preventivo de generadores eléctricos de respaldo.",
    iconName: "Zap",
    answerFirst: "Suministramos, instalamos y mantenemos plantas eléctricas de respaldo con transferencia automática (ATS) para garantizar continuidad absoluta de energía en edificios residenciales, comercios, hospitales e industrias de todo Panamá. Aseguramos que la luz no se vaya cuando más importa.",
    includes: [
      "Suministro e instalación de generadores eléctricos diésel y gas de las mejores marcas",
      "Integración de interruptores de transferencia automática (ATS) y tableros de sincronismo",
      "Mantenimiento preventivo periódico (cambios de filtros, aceite, refrigerante e inspección de baterías)",
      "Monitoreo de parámetros de operación y control de transferencia en vacío y con carga",
      "Servicio técnico de emergencia disponible para clientes con contrato de mantenimiento"
    ],
    certifications: ["Pruebas con banco de carga", "Instaladores certificados", "Cumplimiento de códigos eléctricos"],
    sectors: ["PH residenciales", "Oficinas y centros de negocios", "Supermercados y retail", "Hospitales y clínicas", "Data centers", "Plantas industriales"],
    faqs: [
      {
        question: "¿Qué es un interruptor de transferencia automática (ATS)?",
        answer: "Es el dispositivo electromecánico que detecta de inmediato la pérdida de energía de la red pública, ordena el arranque del generador eléctrico de emergencia y traslada la carga del edificio a la planta en cuestión de segundos. Al retornar la red de servicios públicos, devuelve la carga de manera fluida y detiene la planta tras una etapa de enfriamiento."
      },
      {
        question: "¿Con qué frecuencia se debe dar mantenimiento a una planta eléctrica?",
        answer: "Se recomienda un mantenimiento preventivo mensual o bimestral para plantas de respaldo comercial y residencial. Esto incluye revisar el estado de la batería de arranque, nivel y calidad de combustible, filtros, mangueras de refrigerante y realizar un arranque simulado para asegurar que todo responda inmediatamente en caso de apagón."
      }
    ]
  },
  {
    slug: "centros-de-control-de-motores-panama",
    title: "Centros de control de motores (MCC)",
    seoTitle: "Centros de Control de Motores (MCC) en Panamá | SEMCO",
    seoDesc: "Integración y mantenimiento de centros de control de motores, variadores y arrancadores para sistemas críticos en Panamá. SEMCO.",
    summary: "Integración, tableros de control y sistemas de arranque de motores eficientes. Sistemas de automatización industrial.",
    iconName: "Cpu",
    answerFirst: "Integramos, instalamos y mantenemos centros de control de motores (MCC), tableros de automatización y sistemas de arranque (contactor/térmica, arrancador suave y variador de frecuencia) para la gestión eficiente, segura y confiable de motores de alto rendimiento en sistemas críticos.",
    includes: [
      "Diseño y fabricación de tableros eléctricos y de control a medida",
      "Integración y programación de variadores de frecuencia (VFD) de última generación",
      "Sistemas de arranque suave (soft starters) para mitigar golpes de ariete e incrementos de corriente",
      "Supervisión, protecciones térmicas, de sobrevoltaje y cortocircuito integradas",
      "Pruebas de aislamiento, pruebas de secuencia y puesta en marcha técnica"
    ],
    certifications: ["Cumplimiento de código NEC", "Sistemas UL-508A", "Pruebas de aislamiento FAT/SAT"],
    sectors: ["Plantas de bombeo de agua", "Sistemas de climatización (HVAC)", "Procesos industriales", "Silos y transportadores", "Infraestructura municipal"],
    faqs: [
      {
        question: "¿Qué ventajas ofrece un arrancador suave frente a un arranque directo?",
        answer: "El arrancador suave eleva de manera progresiva el voltaje aplicado al motor, controlando la corriente de arranque y limitando el torque mecánico. Esto evita las altísimas corrientes de inserción que penalizan las empresas eléctricas, elimina el dañino 'golpe de ariete' en tuberías de bombeo y extiende radicalmente la vida útil de poleas, acoples y bobinados."
      },
      {
        question: "¿Qué es un Centro de Control de Motores (MCC)?",
        answer: "Es un conjunto de uno o más paneles que contienen secciones modulares que permiten controlar un grupo de motores desde una sola ubicación centralizada. Agrupa arrancadores, interruptores, variadores, protecciones y sistemas de bus de comunicación de forma segura y optimizada para el personal técnico."
      }
    ]
  },
  {
    slug: "energia-solar-panama",
    title: "Energía solar y eficiencia",
    seoTitle: "Energía Solar y Eficiencia Energética en Panamá | SEMCO",
    seoDesc: "Sistemas solares fotovoltaicos y auditorías de eficiencia energética en Panamá. Instalamos la Torre Argos (658 paneles). SEMCO.",
    summary: "Sistemas fotovoltaicos comerciales e industriales y auditorías energéticas. Soluciones de ahorro sostenible comprobado.",
    iconName: "Sun",
    answerFirst: "Diseñamos e instalamos sistemas solares fotovoltaicos y ejecutamos auditorías detalladas de eficiencia energética para reducir significativamente el consumo eléctrico y la huella de carbono de edificios comerciales, propiedades horizontales e industrias en Panamá.",
    includes: [
      "Estudio de factibilidad solar, análisis de perfil de consumo y sombreado",
      "Ingeniería de sistemas fotovoltaicos autoconsumo, híbridos y con baterías",
      "Suministro e instalación de paneles solares de alta eficiencia, estructuras de aluminio y microinversores",
      "Auditorías de eficiencia energética (iluminación, climatización, fuerzas motrices)",
      "Gestión de trámites de interconexión con las distribuidoras eléctricas de Panamá (ENSA, Naturgy)"
    ],
    certifications: ["Ingenieros idóneos ante JTIA", "Diseños conformes a normativas de interconexión panameñas"],
    sectors: ["Oficinas corporativas", "Propiedades horizontales y áreas comunes", "Centros comerciales", "Plantas industriales y bodegas", "Hoteles y resorts"],
    faqs: [
      {
        question: "¿Cuál es el caso de éxito de SEMCO en energía solar en Panamá?",
        answer: "Nuestro principal hito es el sistema fotovoltaico instalado para Celsia en la prestigiosa Torre Argos en Ciudad de Panamá. Diseñamos e instalamos un sistema integral con 658 paneles solares, su estructura de soporte de aluminio de alta resistencia al viento, toda la canalización eléctrica bajo normas NEC, e inversores centrales para inyectar energía limpia directamente al edificio."
      },
      {
        question: "¿Cómo se legaliza un sistema solar fotovoltaico interconectado en Panamá?",
        answer: "SEMCO se encarga del trámite completo. Involucra la elaboración de planos firmados por ingenieros idóneos, solicitud del permiso de construcción municipal, inspección de bomberos y el trámite formal de interconexión y cambio de medidor bidireccional con Naturgy o ENSA bajo el reglamento de autoconsumo nacional."
      }
    ]
  },
  {
    slug: "gerencia-de-proyectos-panama",
    title: "Gerencia de proyectos y consultoría",
    seoTitle: "Gerencia de Proyectos Electromecánicos en Panamá | SEMCO",
    seoDesc: "Gerencia de proyectos, análisis de riesgos, capacitación y consultoría electromecánica en Panamá. SEMCO, tu aliado técnico.",
    summary: "Planificación de principio a fin, análisis de riesgos y capacitación técnica especializada. Aseguramos la entrega a tiempo.",
    iconName: "Briefcase",
    answerFirst: "Administramos proyectos electromecánicos de principio a fin: planificación rigurosa, supervisión técnica en campo, análisis exhaustivos de riesgos, capacitación de personal técnico y auditorías independientes. Somos el aliado de confianza que asegura que su inversión se ejecute a tiempo, dentro del presupuesto y en estricta conformidad con las normas vigentes.",
    includes: [
      "Gerencia técnica y administrativa de proyectos electromecánicos de alta envergadura",
      "Análisis de riesgos, ingeniería de valor y optimización de planos técnicos",
      "Auditorías técnicas independientes de sistemas instalados por terceros",
      "Capacitación en sitio para personal de mantenimiento del edificio o condominio",
      "Elaboración de manuales de operación específicos para sistemas críticos"
    ],
    certifications: ["Metodología PMI", "Ingenieros con idoneidad JTIA", "Certificaciones específicas de marcas líderes"],
    sectors: ["Desarrolladores inmobiliarios", "Empresas constructoras y contratistas generales", "Administradores de propiedades residenciales y PH", "Entidades gubernamentales e instituciones de salud"],
    faqs: [
      {
        question: "¿Qué es la gerencia de proyectos electromecánica?",
        answer: "Consiste en la dirección experta de la ingeniería, adquisiciones, instalación, pruebas y entrega de sistemas complejos (como climatización, bombeo, contra incendio y electricidad). Garantiza que las diferentes disciplinas no entren en conflicto espacial o funcional, optimizando materiales y plazos de entrega."
      },
      {
        question: "¿Por qué es importante capacitar al personal de mantenimiento del PH?",
        answer: "Los sistemas electromecánicos modernos son costosos y sofisticados. Capacitar al personal local previene fallas catastróficas por manipulación incorrecta, asegura una respuesta rápida ante alarmas reales y ayuda a realizar los checklists de rutina que protegen las garantías de fábrica y prolongan la vida útil de los equipos."
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "torre-argos",
    name: "Celsia — Torre Argos",
    category: "Energía y Solar",
    location: "Ciudad de Panamá",
    description: "Instalación del sistema fotovoltaico con 658 paneles solares, estructura de soporte de aluminio, canalización eléctrica y conexiones interconectadas a la red.",
    imageUrl: solarRoofArgos,
    client: "Celsia / Torre Argos",
    system: "Energía solar fotovoltaica"
  },
  {
    id: "hospital-anita-moreno",
    name: "IBT Group — Salud pública",
    category: "Institucional y Salud",
    location: "La Villa de Los Santos",
    description: "Instalaciones electromecánicas complejas en MINSA CAPS de Pesé, Ocú y Las Tablas, junto con la gerencia del proyecto y la capacitación del personal médico-técnico en el Hospital Anita Moreno.",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
    client: "IBT Group / Ministerio de Salud",
    system: "Sistemas hidrosanitarios, eléctricos y de control"
  },
  {
    id: "aeropuerto-tocumen",
    name: "Aeropuerto Internacional de Tocumen",
    category: "Institucional y Salud",
    location: "Tocumen, Panamá",
    description: "Subcontratistas expertos a cargo de la instalación y pruebas del sistema hidrosanitario y de drenaje pluvial del aeropuerto internacional más importante de Centroamérica.",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    client: "Contratista General Tocumen",
    system: "Sistemas Hidrosanitarios y de Bombeo Críticos"
  },
  {
    id: "san-francisco-bay",
    name: "Grupo Divisa — San Francisco Bay",
    category: "Residencial y PH",
    location: "San Francisco, Ciudad de Panamá",
    description: "Instalación y mantenimiento preventivo continuo de los sistemas de protección contra incendios y salas de bombas de agua potable para las Torres 100, 200, 300 y 400.",
    imageUrl: firePumpNfpa,
    client: "Grupo Divisa / Administración PH",
    system: "Sistemas Contra Incendios NFPA 25 y Bombeo de Presión Constante"
  },
  {
    id: "water-on-the-bay",
    name: "Water on the Bay",
    category: "Residencial y PH",
    location: "Avenida Balboa, Ciudad de Panamá",
    description: "Ingeniería electromecánica aplicada en una torre residencial de 75 pisos de altura. Implementación de sistemas avanzados de bombeo booster de agua y automatización contra incendio.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    client: "Promotora Inmobiliaria",
    system: "Bombeo de alta presión y Rociadores automáticos"
  },
  {
    id: "paseo-de-las-casas",
    name: "Paseo de las Casas",
    category: "Residencial y PH",
    location: "Buenaventura, Coclé",
    description: "Equipamiento de salas de bombas de agua potable e instalaciones contra incendios para un exclusivo desarrollo residencial de 12 torres de condominios.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    client: "Desarrollo Turístico Buenaventura",
    system: "Redes hidrosanitarias y Tanques de almacenamiento de reserva"
  },
  {
    id: "ocean-lake",
    name: "Ocean Lake",
    category: "Residencial y PH",
    location: "Buenaventura, Coclé",
    description: "Diseño e instalación de sistemas de presión constante y automatización de redes de bombeo para un complejo residencial de lujo con 18 villas de alto estándar.",
    imageUrl: waterBoosterSystem,
    client: "Desarrollador Inmobiliario",
    system: "Bombeo de agua potable automatizado con control VFD"
  },
  {
    id: "multiplaza-pacifica",
    name: "Multiplaza Pacífica",
    category: "Comercial y Retail",
    location: "Punta Pacífica, Ciudad de Panamá",
    description: "Mantenimiento integral correctivo y preventivo electromecánico y de tuberías principales para la 3ª Etapa de ampliación de este centro comercial icónico.",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop",
    client: "Grupo Roble",
    system: "Sistemas Hidrosanitarios, Climatización y Contra Incendios"
  },
  {
    id: "marriott-multiplaza",
    name: "Marriott Multiplaza",
    category: "Comercial y Retail",
    location: "Punta Pacífica, Ciudad de Panamá",
    description: "Mantenimiento preventivo especializado en el sistema de calderas, agua caliente y red de bombeo de agua potable para garantizar una experiencia de confort ininterrumpida a los huéspedes.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    client: "Marriott Hotels Group",
    system: "Sistemas de Calderas y Redes de Bombeo Hidrosanitario"
  },
  {
    id: "westland-mall",
    name: "Westland Mall",
    category: "Comercial y Retail",
    location: "Arraiján, Panamá Oeste",
    description: "Planificación de rutinas NFPA 25, mantenimiento preventivo de plantas eléctricas de respaldo críticas, tableros de transferencia automática y red general contra incendios.",
    imageUrl: dieselGeneratorAts,
    client: "Administración Westland",
    system: "Plantas de Emergencia, Tableros ATS y Sistema Contra Incendio"
  },
  {
    id: "brisas-507",
    name: "Brisas 507",
    category: "Comercial y Retail",
    location: "Brisas del Golf, Panamá",
    description: "Diseño, suministro de tableros eléctricos e instalación del sistema de bombeo de presión constante para este centro comercial moderno de locales selectos.",
    imageUrl: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=800&auto=format&fit=crop",
    client: "Promotora Comercial",
    system: "Bombeo e Instalaciones Eléctricas de Distribución"
  },
  {
    id: "apolo-interplaza",
    name: "Apolo Interplaza",
    category: "Comercial y Retail",
    location: "Zona Libre de Colón, Colón",
    description: "Diseño e instalación de sistemas de extinción de incendios a base de rociadores y sala de bombas contra incendio certificada en zona de alto tránsito comercial y logístico.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    client: "Apolo Logistics",
    system: "Sistema Contra Incendios y Rociadores de Diluvio"
  },
  {
    id: "oceania-business-plaza",
    name: "Oceanía Business Plaza",
    category: "Comercial y Retail",
    location: "Punta Pacífica, Ciudad de Panamá",
    description: "Mantenimiento preventivo sistemático de la red de protección contra incendios de un complejo corporativo premium de tres torres integradas de 55, 45 y 8 pisos.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    client: "Asociación de Copropietarios",
    system: "Red general NFPA 25, Alarmas y Sistema de Rociadores"
  },
  {
    id: "aqua-cristalina",
    name: "Planta embotelladora Aqua Cristalina",
    category: "Industrial",
    location: "Provincia de Panamá",
    description: "Instalación de centros de control de motores y variadores de frecuencia de alta potencia para optimizar el bombeo de pozos profundos de extracción de agua mineral de la planta.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    client: "Aqua Cristalina S.A.",
    system: "Sistemas Eléctricos Industriales y Control VFD"
  },
  {
    id: "aqua-cai",
    name: "Planta embotelladora AquaCai",
    category: "Industrial",
    location: "Provincia de Panamá",
    description: "Montaje electromecánico del sistema de filtrado avanzado, red hidráulica de distribución interna y tableros de control neumático para llenadoras de alta velocidad.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    client: "AquaCai Panamá",
    system: "Instalación electromecánica de producción"
  },
  {
    id: "galeras-howard",
    name: "Galeras Howard",
    category: "Industrial",
    location: "Panamá Pacífico",
    description: "Ingeniería y ejecución de sistemas de detección de calor/humo, rociadores automáticos y plantas de energía para un complejo logístico compuesto por 3 galeras industriales de 15,000 m² cada una.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    client: "Howard Logistics Developers",
    system: "Protección contra Incendios NFPA 13, Detección de humo y Generación Diésel"
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: "¿Es obligatorio tener y mantener un sistema contra incendio en Panamá?",
    answer: "Sí. El Benemérito Cuerpo de Bomberos de Panamá exige sistemas de protección contra incendios en edificios comerciales, industriales y residenciales de gran escala, y su mantenimiento conforme a las normas NFPA adoptadas en el país. Un sistema sin mantenimiento vigente puede invalidar el permiso de ocupación."
  },
  {
    question: "¿Cada cuánto se debe inspeccionar un sistema contra incendio? (NFPA 25)",
    answer: "Depende del componente. Según la norma NFPA 25: pruebas de bombas contra incendio (semanal o mensual según motorización), inspección visual de rociadores y válvulas (mensual o trimestral), pruebas de alarmas (semestral) e inspección y mantenimiento general de todo el sistema (anual). SEMCO arma el calendario de frecuencias y lo ejecuta con registro digital."
  },
  {
    question: "¿Qué normas NFPA aplican en Panamá?",
    answer: "Las principales normas NFPA de referencia y adopción obligatoria en Panamá son: NFPA 13 (diseño e instalación de rociadores automáticos), NFPA 14 (tuberías verticales y mangueras), NFPA 20 (instalación de bombas contra incendio estacionarias), NFPA 25 (inspección, prueba y mantenimiento de sistemas hidráulicos de protección) y NFPA 72 (código nacional de alarmas de incendio y señalización)."
  },
  {
    question: "¿Qué es una sala de bombas contra incendio?",
    answer: "Es el corazón del sistema contra incendio. Aloja la bomba principal (eléctrica o diésel), la bomba jockey (para mantener la presión estable ante microfugas) y los controladores automáticos correspondientes. Su diseño, caudal y componentes deben cumplir rigurosamente con la norma NFPA 20 para garantizar la presión adecuada ante una emergencia."
  },
  {
    question: "¿Qué hace diferente al mantenimiento de SEMCO?",
    answer: "Cada inspección técnica queda registrada en nuestra plataforma digital de trazabilidad en tiempo real. Esto incluye un checklist completo bajo norma NFPA 25, evidencia fotográfica por cada subsistema e informes firmados digitalmente por el cliente con historial inalterable de auditoría. Se acabó el PDF suelto que se pierde; tienes el historial de tu edificio siempre disponible. Ningún otro proveedor en Panamá ofrece esta trazabilidad digital."
  },
  {
    question: "¿SEMCO diseña e instala, o solo da mantenimiento?",
    answer: "Ofrecemos soluciones integrales cubriendo el ciclo electromecánico completo: consultoría y diseño técnico inicial, suministro de equipos de marcas líderes certificadas, instalación profesional en campo, pruebas de aceptación y puesta en marcha técnica, y planes integrales de mantenimiento preventivo y correctivo."
  },
  {
    question: "¿Qué tipo de proyectos maneja SEMCO?",
    answer: "Atendemos propiedades horizontales (PH) residenciales de alta densidad, edificios comerciales corporativos, centros comerciales (retail), hoteles de cadenas internacionales, instalaciones hospitalarias e industriales, y servimos como subcontratistas expertos para grandes firmas constructoras y desarrolladores en Panamá."
  },
  {
    question: "¿En qué zonas de Panamá trabaja SEMCO?",
    answer: "Prestamos servicios técnicos y ejecutamos proyectos en toda la extensión de la República de Panamá, operando desde nuestra sede central ubicada en Rio Abajo, Ciudad de Panamá."
  },
  {
    question: "¿Qué otros servicios además de contra incendio ofrece SEMCO?",
    answer: "Además de protección contra incendios, nos especializamos en sistemas avanzados de bombeo de agua potable, plantas eléctricas de emergencia de respaldo (diésel/gas), interruptores de transferencia automática (ATS), centros de control de motores (MCC) con variadores de velocidad, sistemas solares fotovoltaicos para autoconsumo y consultoría de ingeniería/gerencia de proyectos."
  }
];

export const SECTORS = [
  "Propiedad horizontal (PH)",
  "Edificios residenciales",
  "Centros comerciales",
  "Hoteles y resorts",
  "Hospitales e instituciones",
  "Industrias y manufactura",
  "Desarrolladores y contratistas"
];

export const CLIENTS = [
  "Aeropuerto de Tocumen",
  "Multiplaza Pacífica",
  "Marriott Hotels",
  "Westland Mall",
  "Water on the Bay",
  "Torre Argos (Celsia)",
  "IBT Group",
  "Grupo Divisa"
];
