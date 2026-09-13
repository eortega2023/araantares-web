import { ServiceItem, RentalEquipmentItem } from '../types';

export const COMPANY_INFO = {
  name: "ARA Y ANTARES SAC",
  slogan: "Topografía, Fotogrametría con Dron y Alquiler de Equipos Topográficos en Tacna",
  heroTitle: "Topografía, Fotogrametría con Dron y Alquiler de Equipos Topográficos en Tacna",
  address: "Avenida Patricio Melendez N° 525, 2do piso, Tacna - Perú",
  city: "Tacna, Perú",
  phones: [
    { label: "Central Fija", number: "(052) 426373", raw: "052426373", isLandline: true },
    { label: "Móvil / WhatsApp Principal", number: "981928070", raw: "51981928070", isMainWhatsapp: true },
    { label: "Móvil Operaciones", number: "991933211", raw: "51991933211" },
    { label: "Móvil Proyectos", number: "972866611", raw: "51972866611" },
  ],
  primaryEmail: "araantares@gmail.com",
  targetAudience: "Empresas de ingeniería, mineras, constructoras y público general en Tacna y sur del Perú.",
  whatsappNumber: "51981928070",
  schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
  year: 2026,
  youtubeVideoId: "n-UINY0Dlnw",
  youtubeVideoUrl: "https://www.youtube.com/watch?v=n-UINY0Dlnw",
  facebookUrl: "https://www.facebook.com/profile.php?id=61566847688138",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "topografia",
    title: "Topografía y Geodesia",
    shortDesc: "Levantamientos topográficos, control en planimetría, altimetría y volumétrico, certificación de puntos geodésicos.",
    fullDesc: "Determinación geométrica precisa de superficies terrestres mediante tecnología satelital GNSS e instrumental electrónico de última generación. Garantía de precisión milimétrica para ingeniería y minería.",
    iconName: "Compass",
    tag: "Alta Precisión",
    features: [
      "Levantamientos topográficos catastrales y de ingeniería",
      "Control de planimetría, altimetría y cálculo volumétrico de movimiento de tierras",
      "Certificación y posicionamiento de puntos geodésicos de orden 'C'",
      "Fotogrametría con dron (RPAS) y generación de ortofotos y nubes de puntos",
      "Control topográfico en obras civiles, viales e hidráulicas"
    ]
  },
  {
    id: "alquiler",
    title: "Alquiler de Equipos Topográficos",
    shortDesc: "Equipos de alta gama calibrados para entrega inmediata por día, semana o mes en Tacna y todo el sur.",
    fullDesc: "Ponemos a disposición de empresas y profesionales nuestro parque de instrumentos con certificado de calibración vigente, accesorios completos y soporte técnico.",
    iconName: "Layers",
    tag: "Entrega Inmediata",
    features: [
      "GPS Diferencial Trimble R8s (Base + Rover + Colector)",
      "Estaciones Totales de alta precisión con y sin prisma",
      "Drones Phantom 4 Pro v2.0 para fotogrametría profesional",
      "Teodolitos electrónicos digitales y niveles topográficos automáticos",
      "GPS Navegadores de mano para prospección y ruteo"
    ]
  },
  {
    id: "construccion",
    title: "Construcción y Edificación",
    shortDesc: "Diseño y construcción de viviendas, departamentos, obras civiles y saneamiento legal.",
    fullDesc: "Ejecutamos proyectos de infraestructura con los más altos estándares de calidad, seguridad y cumplimiento de plazos. Acompañamos desde el anteproyecto arquitectónico hasta la entrega y saneamiento legal final.",
    iconName: "Building2",
    tag: "Obras Civiles",
    features: [
      "Diseño arquitectónico y estructural sismorresistente",
      "Edificación de viviendas unifamiliares y multifamiliares",
      "Obras civiles públicas y privadas en Tacna y el sur",
      "Saneamiento físico-legal de predios y declaratorias de fábrica",
      "Supervisión y control técnico de ejecución de obra"
    ]
  },
  {
    id: "consultoria",
    title: "Consultoría e Inmobiliaria",
    shortDesc: "Asesoría gratuita para diseño, construcción y saneamiento legal. Consultoría en obras de irrigaciones.",
    fullDesc: "Soluciones integrales de consultoría técnica y corretaje inmobiliario. Facilitamos la compra, venta, tasación y habilitación de bienes raíces con soporte legal y técnico de primer nivel.",
    iconName: "Briefcase",
    tag: "Asesoría Gratuita",
    features: [
      "Asesoría gratuita para diseño, construcción y saneamiento legal",
      "Consultoría especializada en obras de irrigaciones y canales hidráulicos",
      "Gestión de licencias de edificación y habilitaciones urbanas",
      "Intermediación y asesoramiento en compra-venta de terrenos y propiedades",
      "Elaboración de expedientes técnicos y peritajes de ingeniería"
    ]
  }
];

export const RENTAL_EQUIPMENT_DATA: RentalEquipmentItem[] = [
  {
    id: "trimble-r8s",
    name: "GPS Diferencial Trimble R8s",
    category: "Receptor GNSS Geodésico",
    brand: "Trimble",
    badge: "Máxima Precisión",
    description: "Sistema GNSS de doble frecuencia para geodesia satelital y posicionamiento cinemático en tiempo real (RTK) y estático con precisión milimétrica.",
    specs: [
      "Chipset avanzado Trimble Maxwell 6 con 440 canales",
      "Soporte multicelular: GPS, GLONASS, Galileo y BeiDou",
      "Tecnología de rastreo satelital Trimble 360",
      "Precisión estática de alta resolución: 3 mm + 0.1 ppm RMS",
      "Modo RTK de base y móvil con radio UHF integrada"
    ],
    includes: [
      "2 Receptores Trimble R8s (Base y Rover)",
      "Controlador / Colector de datos con software Trimble Access",
      "Trípode de aluminio, base nivelante y jalón de fibra de carbono",
      "Baterías de litio de alta duración + cargador múltiple",
      "Certificado de calibración oficial vigente"
    ],
    idealFor: "Puntos geodésicos IGN de orden 'C', catastro minero y apoyo fotogramétrico.",
    iconType: "Radio",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "estaciones-totales",
    name: "Estaciones Totales de Precisión",
    category: "Topografía Electro-Óptica",
    brand: "Leica / Topcon / Trimble",
    badge: "Alta Productividad",
    description: "Instrumentos de alta velocidad de lectura láser y precisión angular para levantamiento y replanteo de obras de edificación, puentes y túneles.",
    specs: [
      "Precisión angular disponible: 1\", 2\" y 5\" segundos",
      "Alcance con prisma hasta 3,000 m y sin prisma hasta 500 m / 1000 m",
      "Doble pantalla retroiluminada con teclado alfanumérico",
      "Compensador biaxial de líquido para auto-nivelación rápida",
      "Memoria interna y descarga directa USB / Bluetooth a Civil 3D"
    ],
    includes: [
      "Estación Total calibrada con plomada láser",
      "Trípode pesado de madera/aluminio de máxima estabilidad",
      "1 o 2 prismas con portaprismas basculante y jalón telescópico",
      "2 baterías recargables y cargador de carga rápida",
      "Maletín de transporte hermético de alto impacto"
    ],
    idealFor: "Obras civiles, montaje de estructuras metálicas y control de deformaciones.",
    iconType: "Crosshair",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "phantom-4-pro",
    name: "Drones Phantom 4 Pro v2.0",
    category: "RPAS Fotogramétrico",
    brand: "DJI",
    badge: "Sensor Mecánico 1\"",
    description: "Aeronave pilotada por control remoto optimizada para fotogrametría aérea y topografía con sensor CMOS de 1 pulgada y obturador mecánico.",
    specs: [
      "Sensor de 20 Megapíxeles con obturador mecánico (sin distorsión)",
      "Sistema de transmisión OcuSync HD con cambio automático de frecuencia",
      "Detección y evasión de obstáculos en 5 direcciones",
      "Tiempo de vuelo hasta 30 minutos por batería",
      "Resolución en tierra (GSD) centimétrica en ortomosaicos"
    ],
    includes: [
      "Dron DJI Phantom 4 Pro V2.0",
      "Control remoto con soporte para tablet/smartphone",
      "3 Baterías de vuelo inteligentes para cubrir amplias extensiones",
      "Juego de hélices de bajo ruido + juego de repuesto",
      "Cargador múltiple de baterías y mochila de transporte rígida"
    ],
    idealFor: "Ortofotomosaicos, nubes de puntos 3D, curvas de nivel y cálculo volumétrico.",
    iconType: "Plane",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "teodolitos",
    name: "Teodolitos Electrónicos",
    category: "Medición Angular Digital",
    brand: "Topcon / Sokkia / South",
    badge: "Fácil Operación",
    description: "Instrumentos de medición angular digital diseñados para alineación rápida de ejes estructurales, control de verticalidad y replanteos.",
    specs: [
      "Precisión angular de 2 a 5 segundos de arco",
      "Pantalla LCD dual grande con teclado simple",
      "Plomada óptica y láser para centrado inmediato sobre el hito",
      "Protección contra polvo y salpicaduras de agua en obra",
      "Batería recargable y compartimento para pilas estándar"
    ],
    includes: [
      "Teodolito electrónico calibrado",
      "Trípode de aluminio resistente",
      "Mira topográfica de aluminio de 5 metros con nivel esférico",
      "Cargador y juego de baterías",
      "Maletín de transporte acolchado"
    ],
    idealFor: "Edificación de viviendas, colocación de columnas y obras viales.",
    iconType: "Eye",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "niveles-topograficos",
    name: "Niveles Topográficos",
    category: "Altimetría y Nivelación",
    brand: "Sokkia / Bosch / Leica",
    badge: "Compensador Automático",
    description: "Niveles ópticos automáticos con compensador magnético amortiguado para control de rasantes, pendientes de canales y tuberías.",
    specs: [
      "Aumento óptico de 24x y 32x para visión nítida a larga distancia",
      "Compensador magnético automático con bloqueo de transporte",
      "Precisión de nivelación de 1.0 mm a 1.5 mm por kilómetro de doble nivelación",
      "Círculo horizontal graduado en 360° para ángulos básicos",
      "Lente con recubrimiento antirreflejante de alta luminosidad"
    ],
    includes: [
      "Nivel óptico automático calibrado",
      "Trípode de aluminio con plato circular",
      "Mira estadimétrica de 5 metros con funda de transporte",
      "Plomada de cordel y llave de ajuste",
      "Maletín de protección para transporte en obra"
    ],
    idealFor: "Obras de saneamiento, canales de irrigación y pavimentación.",
    iconType: "Layers",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gps-navegador",
    name: "GPS Navegador de Mano",
    category: "Navegación y Prospección",
    brand: "Garmin",
    badge: "Portátil de Campo",
    description: "Receptores portátiles de alta sensibilidad para reconocimiento preliminar de predios, geolocalización de vértices y trazo de rutas en campo.",
    specs: [
      "Receptor GPS y GLONASS de alta sensibilidad con antena Quad Helix",
      "Pantalla a color de 2.6\" visible bajo luz solar directa",
      "Almacenamiento de hasta 5,000 waypoints y 200 tracks guardados",
      "Brújula electrónica de 3 ejes y altímetro barométrico",
      "Compatibilidad con mapas topográficos y vista de satélite"
    ],
    includes: [
      "GPS Navegador de mano Garmin",
      "Cable USB para transferencia de datos GPX / KML a AutoCAD",
      "Juego de baterías recargables de larga duración",
      "Funda protectora para trabajo rudo en campo",
      "Mosquetón y correa de seguridad"
    ],
    idealFor: "Inspecciones iniciales de terrenos, senderismo de ingeniería y minería.",
    iconType: "Compass",
    image: "https://images.unsplash.com/photo-1516216628859-9bcceabb84ca?auto=format&fit=crop&w=800&q=80"
  }
];

// Alias for backwards-compatibility
export const EQUIPMENT_DATA = RENTAL_EQUIPMENT_DATA;

export const TECHNICAL_PILLARS = [
  {
    title: "Software de Ingeniería Avanzado",
    desc: "Procesamiento de datos topográficos y nubes de puntos con software líder de la industria: AutoCAD, Civil 3D, ArcGIS y Agisoft Metashape.",
    icon: "Cpu"
  },
  {
    title: "Capacitaciones Especializadas",
    desc: "Talleres y capacitaciones prácticas personalizadas para operar equipos topográficos modernos dirigidos a ingenieros, técnicos y estudiantes.",
    icon: "GraduationCap"
  },
  {
    title: "Control de Calidad en Obra",
    desc: "Supervisión rigurosa de tolerancias dimensionales, verticalidad, planimetría y ensayos técnicos para garantizar la durabilidad de la estructura.",
    icon: "ShieldCheck"
  }
];

export const ABOUT_CONTENT = {
  presentation: "Conformada por un equipo multidisciplinario de profesionales altamente calificados de gran experiencia. Nuestro objetivo es brindar el mejor servicio técnico y profesional en el campo de la construcción, inmobiliaria e información geográfica.",
  mission: "Proveer con satisfacción a nuestros clientes los servicios en la rama de edificación de obras civiles e información geográfica, con la mejor calidad, tanto en materiales y mano de obra responsable; en el mejor tiempo propuesto para que nuestro cliente, sea nuestra mejor recomendación.",
  vision: "Abrir nuestra mente a la integración de todos los recursos dentro de la industria de la construcción innovando tecnología y confort al servicio de nuestros clientes."
};

export const GEODETIC_CERTIFICATION_DATA = {
  title: "Puntos Geodésicos de Orden \"C\"",
  subtitle: "Certificación Oficial con el Instituto Geográfico Nacional (IGN)",
  badge: "Norma Técnica Geodésica Nacional • REGGEN • SIRGAS-Perú WGS84",
  intro: "En ARA & ANTARES SAC realizamos el establecimiento, monumentación, posicionamiento estático diferencial y la gestión completa para la Certificación Oficial de Puntos Geodésicos de Orden 'C' ante el Instituto Geográfico Nacional (IGN), otorgando respaldo técnico y legal indiscutible para proyectos de ingeniería, minería, catastro y saneamiento físico-legal en Tacna y el sur del Perú.",
  legalBasis: [
    "Ley N° 28294 - Sistema Nacional Integrado de Información Catastral Predial",
    "Norma Técnica del Instituto Geográfico Nacional (IGN) para Levantamientos Geodésicos Verticales y Horizontales",
    "Red Geodésica Geocéntrica Nacional (REGGEN) - Marco de Referencia Geocéntrico Nacional SIRGAS-Perú (WGS84)",
    "Resoluciones Jefaturales del IGN para aprobación y registro de Puntos Geodésicos"
  ],
  phases: [
    {
      step: "01",
      title: "Planeamiento y Reconocimiento de Campo",
      badge: "Fase Previa",
      highlight: "Intervisibilidad y Cielo Despejado",
      desc: "Evaluación topográfica y de seguridad del terreno. Verificación de máscara de elevación (< 10°) sin efecto multipath, ausencia de interferencias electromagnéticas y selección de pares de puntos (punto base y azimut) con intervisibilidad permanente."
    },
    {
      step: "02",
      title: "Monumentación Normada del Hito",
      badge: "Construcción",
      highlight: "Concreto Ciclópeo + Placa de Bronce",
      desc: "Excavación y fundición de hito de concreto ciclópeo de 0.40 x 0.40 m x 0.60 m de profundidad (o anclaje en roca viva fija). Incrustación del disco o placa de bronce oficial con código alfanumérico, nombre de la entidad, fecha y cruz con flecha orientada al norte magnético/geográfico."
    },
    {
      step: "03",
      title: "Rastreo Satelital GNSS Geodésico",
      badge: "Campo",
      highlight: "Trimble R8s Multifrecuencia",
      desc: "Estacionamiento forzado con trípodes de precisión y niveles esféricos. Sesión de lectura satelital continua en modo estático (mínimo 2 a 4 horas simultáneas) enlazada directamente a las Estaciones de Rastreo Permanente (ERP) oficiales del IGN más cercanas (ej. Estación Tacna TN01)."
    },
    {
      step: "04",
      title: "Post-Procesamiento y Ajuste Geodésico",
      badge: "Gabinete",
      highlight: "Efemérides Precisas IGS",
      desc: "Descarga de archivos crudos RINEX. Procesamiento de líneas base geodésicas en software especializado (Trimble Business Center) utilizando efemérides orbitales precisas IGS y modelos de calibración de antenas, garantizando errores RMS milimétricos (tolerancia < 5 mm)."
    },
    {
      step: "05",
      title: "Elaboración del Expediente Técnico",
      badge: "Documentación",
      highlight: "Monografía Oficial + Memoria",
      desc: "Estructuración integral del expediente según formato del IGN: memoria descriptiva, monografía de cada punto geodésico con fotografías en los 4 puntos cardinales, croquis de acceso, reportes de procesamiento de vectores, archivos RINEX crudos y coordenadas UTM WGS84 (Zona 19 Sur) y elipsoidales."
    },
    {
      step: "06",
      title: "Tramitación y Certificación IGN",
      badge: "Validación Legal",
      highlight: "Resolución y Ficha Oficial IGN",
      desc: "Ingreso formal del expediente por mesa de partes del Instituto Geográfico Nacional (IGN). Seguimiento y subsanación técnica con los ingenieros de la Dirección de Geodesia hasta la emisión de la Certificación Oficial / Ficha Técnica Oficial del IGN."
    }
  ],
  deliverables: [
    {
      title: "Certificado Oficial emitido por el IGN",
      desc: "Documento oficial del Estado Peruano que valida las coordenadas geodésicas del punto ante cualquier autoridad pública o privada."
    },
    {
      title: "Ficha Técnica Monográfica",
      desc: "Ficha descriptiva con coordenadas oficiales, altitud ortométrica, elipsoidal, croquis y fotografías detalladas de ubicación."
    },
    {
      title: "Memoria Descriptiva de Geodesia",
      desc: "Informe técnico completo de la metodología de campo y gabinete, firmado por Ingeniero Geodesta / Colegiado."
    },
    {
      title: "Reportes de Procesamiento de Líneas Base",
      desc: "Registro matemático del ajuste de la red con precisión milimétrica y enlace a la estación ERP del IGN."
    },
    {
      title: "Archivos Digitales Crudos (RINEX y Nativo)",
      desc: "Paquete digital completo con los registros de observación satelital continua de las sesiones de campo."
    },
    {
      title: "Hito Físico de Concreto con Placa de Bronce",
      desc: "Monumento permanente edificado en el terreno listo para servir de base a cualquier levantamiento o replanteo futuro."
    }
  ],
  useCases: [
    {
      title: "Saneamiento Físico-Legal y SUNARP",
      desc: "Georreferenciación de predios matrices, parcelaciones, inmatriculación y rectificación de áreas y linderos con valor registral vinculante."
    },
    {
      title: "Minería y Concesiones (INGEMMET)",
      desc: "Monumentación de hitos de vértices de concesiones mineras, pads de lixiviación, botaderos y control de taludes bajo fiscalización de OSINERGMIN y OEFA."
    },
    {
      title: "Infraestructura Vial y Obras Públicas",
      desc: "Puntos de partida y control para carreteras (MTC), puentes, represas, túneles, canales de irrigación y defensas ribereñas."
    },
    {
      title: "Catastro Urbano y Rural Municipal",
      desc: "Homologación de la cartografía distrital o provincial a la Red Geodésica Geocéntrica Nacional (REGGEN)."
    },
    {
      title: "Apoyo Fotogramétrico para Drones (RPAS)",
      desc: "Puntos de control terrestre (GCP) de máxima exactitud para calibrar ortomosaicos, curvas de nivel y modelos digitales de elevación."
    }
  ]
};

export const BROCHURE_GALLERY_DATA = [
  {
    id: "puntos-geodesicos",
    title: "Certificación de Puntos Geodésicos de Orden C",
    subtitle: "Receptor GNSS Trimble R8s sobre hito de concreto con placa de bronce",
    category: "Geodesia Satelital",
    desc: "Establecimiento y enlace geodésico a la Red Geodésica Geocéntrica Nacional del IGN en Tacna.",
    image: "/geodesic_monument.jpg",
    badge: "IGN Certificado"
  },
  {
    id: "equipo-terreno",
    title: "Operaciones de Campo en Minería e Infraestructura",
    subtitle: "Topógrafos e Ingenieros equipados con Estación Total y Dron RPAS",
    category: "Topografía Especializada",
    desc: "Personal calificado con EPP completo, equipos calibrados y soporte de ingeniería en terreno.",
    image: "/survey_fieldwork.jpg",
    badge: "Personal Calificado"
  },
  {
    id: "control-planimetria",
    title: "Control en Planimetría y Altimetría",
    subtitle: "Medición angular y de rasantes con Estación Total y Nivel",
    category: "Control Topográfico",
    desc: "Verificación de ejes estructurales, verticalidad de columnas y cotas de vaciado en obra civil.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    badge: "Tolerancia Milimétrica"
  },
  {
    id: "control-volumetrico",
    title: "Control Volumétrico y Movimiento de Tierras",
    subtitle: "Nivelación de plataformas, excavaciones y taludes",
    category: "Obras Civiles",
    desc: "Cálculo preciso de volúmenes de corte y relleno para valorizaciones y avance de obra.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    badge: "Corte y Relleno"
  },
  {
    id: "fotogrametria-dron",
    title: "Levantamiento Fotogramétrico RPAS",
    subtitle: "Vuelos aerofotogramétricos de alta resolución con Dron Phantom 4 Pro",
    category: "Fotogrametría Aérea",
    desc: "Generación de ortomosaicos georreferenciados, curvas de nivel y nubes de puntos 3D.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    badge: "Sensor 20 MP"
  },
  {
    id: "procesamiento-civil3d",
    title: "Procesamiento de Datos en Civil 3D",
    subtitle: "Diseño vial, perfiles longitudinales y secciones transversales",
    category: "Ingeniería de Gabinete",
    desc: "Modelado digital del terreno, plataformas industriales y expedientes técnicos de ingeniería.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    badge: "CAD & Civil 3D"
  }
];


