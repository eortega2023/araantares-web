import React, { useState } from 'react';
import { 
  Radio, 
  Crosshair, 
  Plane, 
  Eye, 
  Layers, 
  Compass, 
  CheckCircle2, 
  FileCheck, 
  Truck, 
  Headphones, 
  Calendar,
  MessageSquare,
  Play,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { RENTAL_EQUIPMENT_DATA, COMPANY_INFO } from '../data/companyData';
import { RentalEquipmentItem } from '../types';

interface RentalSectionProps {
  onQuoteEquipment: (equipmentName: string) => void;
}

export const RentalSection: React.FC<RentalSectionProps> = ({ onQuoteEquipment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<RentalEquipmentItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const categories = [
    { id: 'todos', label: 'Todos los Equipos' },
    { id: 'gnss', label: 'GPS Diferencial Trimble' },
    { id: 'estaciones', label: 'Estaciones y Teodolitos' },
    { id: 'drones', label: 'Drones Fotogramétricos' },
    { id: 'niveles', label: 'Niveles y Navegadores' },
  ];

  const filteredEquipment = RENTAL_EQUIPMENT_DATA.filter((item) => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'gnss') return item.id === 'trimble-r8s';
    if (selectedCategory === 'estaciones') return item.id === 'estaciones-totales' || item.id === 'teodolitos';
    if (selectedCategory === 'drones') return item.id === 'phantom-4-pro';
    if (selectedCategory === 'niveles') return item.id === 'niveles-topograficos' || item.id === 'gps-navegador';
    return true;
  });

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#cc0000]" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-[#cc0000]" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#cc0000]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#cc0000]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#cc0000]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#cc0000]" />;
      default:
        return <Crosshair className="w-6 h-6 text-[#cc0000]" />;
    }
  };

  const handleWhatsAppInquiry = (equipmentName: string) => {
    const text = `Hola ARA Y ANTARES SAC, deseo consultar la disponibilidad y costo de alquiler de: ${equipmentName} en Tacna.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="alquiler-equipos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-[#cc0000] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Disponibilidad Inmediata en Tacna</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#333333] tracking-tight">
            Alquiler de Equipos Topográficos
          </h2>
          <div className="w-20 h-1 bg-[#cc0000] mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Ponemos a disposición de empresas de ingeniería, mineras y contratistas nuestro parque de instrumentos de alta precisión con certificado de calibración vigente, accesorios de campo completos y opción de operador calificado.
          </p>
        </div>

        {/* Benefits bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="bg-[#f7f7f7] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-[#cc0000] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#333333]">Calibración Oficial</h4>
              <p className="text-[11px] text-gray-500">Certificados vigentes al día</p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
            <Truck className="w-6 h-6 text-[#cc0000] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#333333]">Entrega Inmediata</h4>
              <p className="text-[11px] text-gray-500">En Tacna y todo el sur</p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
            <Headphones className="w-6 h-6 text-[#cc0000] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#333333]">Soporte Técnico</h4>
              <p className="text-[11px] text-gray-500">Asesoría de ingenieros</p>
            </div>
          </div>

          <div className="bg-[#f7f7f7] border border-gray-200 p-4 rounded-xl flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#cc0000] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#333333]">Tarifas Flexibles</h4>
              <p className="text-[11px] text-gray-500">Por día, semana o mes</p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#cc0000] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Required Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              id={`rental-card-${item.id}`}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#cc0000]/40"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-[#cc0000] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {item.brand}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold text-gray-300">{item.category}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                      {getIcon(item.iconType)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#333333] group-hover:text-[#cc0000] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights / Specs */}
                  <div className="space-y-1.5 mb-5 pb-4 border-b border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Características Técnicas:
                    </span>
                    {item.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#cc0000] shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* What the kit includes */}
                  <div className="bg-[#f9f9f9] p-3 rounded-lg text-xs space-y-1 border border-gray-100">
                    <span className="font-bold text-[#333333] block text-[11px] uppercase tracking-wide">
                      El Kit de Alquiler Incluye:
                    </span>
                    <ul className="text-gray-600 space-y-1">
                      {item.includes.slice(0, 3).map((inc, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-1.5 text-[11px]">
                          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onQuoteEquipment(item.name)}
                  className="w-full bg-[#cc0000] hover:bg-[#a80000] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Cotizar Alquiler</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsAppInquiry(item.name)}
                  className="w-full bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 font-semibold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Consultar por WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video & Technical Assurance Showcase Card */}
        <div className="bg-[#1e1e1e] text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/80 border border-red-800/50 text-red-300 text-xs font-bold uppercase tracking-wider">
                <span>Video Informativo • Operaciones en Terreno</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Topografía de Alta Precisión y Fotogrametría Aérea en Tacna
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Observe nuestros equipos y cuadrillas en acción en proyectos reales en Tacna y el sur del Perú. Garantizamos precisión milimétrica mediante enlaces geodésicos a la Red Geodésica Nacional (IGN), procesamiento en Civil 3D y ortomosaicos de alta resolución con Drones Phantom 4 Pro.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cc0000]" />
                  Trimble R8s Geodésico
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cc0000]" />
                  Phantom 4 Pro V2.0
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cc0000]" />
                  Estaciones Totales Calibradas
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_INFO.youtubeVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#a80000] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Ver Video en YouTube</span>
                </a>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg border border-white/20 transition-all cursor-pointer"
                >
                  <span>Reproducir en la Página</span>
                </button>
              </div>
            </div>

            {/* Video preview / Embed container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-black aspect-video group">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${COMPANY_INFO.youtubeVideoId}`}
                  title="ARA & ANTARES SAC - Topografía y Equipos en Tacna"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-[11px] text-gray-400 text-center mt-2">
                Canal Oficial de ARA &amp; ANTARES SAC • Servicios de Topografía y Fotogrametría
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal if clicked */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-10 text-white bg-black/60 hover:bg-red-600 rounded-full p-2 transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${COMPANY_INFO.youtubeVideoId}?autoplay=1`}
                title="ARA & ANTARES SAC Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
