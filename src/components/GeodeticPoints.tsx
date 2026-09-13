import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Compass, 
  FileCheck2, 
  Award, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Radio, 
  Landmark, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Info,
  Maximize2
} from 'lucide-react';
import { GEODETIC_CERTIFICATION_DATA, BROCHURE_GALLERY_DATA, COMPANY_INFO } from '../data/companyData';

interface GeodeticPointsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const GeodeticPoints: React.FC<GeodeticPointsProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'proceso' | 'entregables' | 'aplicaciones' | 'galeria'>('proceso');
  const [selectedImage, setSelectedImage] = useState<typeof BROCHURE_GALLERY_DATA[0] | null>(null);

  const handleWhatsappQuote = (topic: string) => {
    const text = encodeURIComponent(
      `Hola ARA Y ANTARES SAC, requiero información y cotización para la Certificación de Puntos Geodésicos de Orden C ante el IGN (${topic}). Ubicación de obra: Tacna.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="puntos-geodesicos" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#cc0000] text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-[#cc0000]" />
            Certificación Oficial IGN • Orden "C"
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#262626] tracking-tight leading-tight">
            Puntos Geodésicos de Orden <span className="text-[#cc0000]">"C"</span>
          </h2>
          <div className="w-20 h-1 bg-[#cc0000] mx-auto mt-4 mb-5 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Monumentación, rastreo satelital diferencial con GPS geodésico y tramitación completa ante el{' '}
            <strong className="text-[#333333] font-bold">Instituto Geográfico Nacional (IGN)</strong> con validez legal vinculante para SUNARP, minería y obras públicas en Tacna y todo el sur del Perú.
          </p>
        </div>

        {/* Hero Feature Banner */}
        <div className="bg-gradient-to-br from-[#1c1c1c] via-[#262626] to-[#171717] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#cc0000] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  REGGEN • IGN
                </span>
                <span className="bg-white/10 text-gray-200 text-xs font-medium px-3 py-1 rounded-md">
                  SIRGAS-Perú (WGS84) • Zona 19 Sur
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Validez SUNARP &amp; INGEMMET
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                ¿Qué es un Punto Geodésico de Orden "C" certificado por el IGN?
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Es un hito físico de concreto con placa de bronce oficial, cuyas coordenadas tridimensionales de alta precisión han sido enlazadas a la <strong className="text-white">Red Geodésica Geocéntrica Nacional (REGGEN)</strong> mediante receptores GNSS geodésicos de doble frecuencia. Cada punto cuenta con la aprobación técnica y la emisión de la <strong className="text-white">Ficha Oficial del IGN</strong>, siendo requisito obligatorio por ley para sanear predios, catastros municipales y megaproyectos de ingeniería.
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 font-medium uppercase">Precisión RMS</p>
                  <p className="text-base sm:text-lg font-bold text-white">&lt; 5 mm</p>
                  <span className="text-[10px] text-gray-400">Milimétrica estática</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 font-medium uppercase">Tiempo Rastreo</p>
                  <p className="text-base sm:text-lg font-bold text-white">2 a 4 hrs</p>
                  <span className="text-[10px] text-gray-400">Sesión continua GNSS</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 font-medium uppercase">Enlace Base</p>
                  <p className="text-base sm:text-lg font-bold text-white">ERP Tacna</p>
                  <span className="text-[10px] text-gray-400">Estación IGN TN01</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                  <p className="text-[11px] text-gray-400 font-medium uppercase">Legalidad</p>
                  <p className="text-base sm:text-lg font-bold text-[#25D366]">100% Legal</p>
                  <span className="text-[10px] text-gray-400">Ley Catastral 28294</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  id="btn-cotizar-puntos-geodesicos-hero"
                  onClick={() => onOpenQuoteModal("Puntos Geodésicos de Orden C (IGN)")}
                  className="bg-[#cc0000] hover:bg-[#b00000] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg hover:shadow-red-900/30 flex items-center gap-2"
                >
                  <FileCheck2 className="w-4 h-4" />
                  Solicitar Cotización de Puntos Geodésicos
                </button>
                <button
                  id="btn-whatsapp-geodesicos"
                  onClick={() => handleWhatsappQuote("Orden C")}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all border border-white/20 flex items-center gap-2"
                >
                  <Radio className="w-4 h-4 text-[#25D366]" />
                  Consultar con Ingeniero por WhatsApp
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl group">
                <img 
                  src="/geodesic_monument.jpg" 
                  alt="Hito de Punto Geodésico de Orden C certificado con IGN" 
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="inline-block bg-[#cc0000] text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider mb-1 w-fit">
                    Hito Normado en Campo
                  </span>
                  <p className="text-white text-sm font-bold">
                    Establecimiento de Punto Geodésico con GPS Diferencial Trimble R8s
                  </p>
                  <p className="text-gray-300 text-xs">
                    Placa de bronce incrustada en hito de concreto ciclópeo • Tacna, Perú
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 border-b border-gray-200 pb-4">
          <button
            id="tab-proceso-geodesico"
            onClick={() => setActiveTab('proceso')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'proceso'
                ? 'bg-[#cc0000] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            1. Proceso de Certificación (6 Fases)
          </button>
          <button
            id="tab-entregables-geodesico"
            onClick={() => setActiveTab('entregables')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'entregables'
                ? 'bg-[#cc0000] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            2. Entregables Oficiales IGN
          </button>
          <button
            id="tab-aplicaciones-geodesico"
            onClick={() => setActiveTab('aplicaciones')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'aplicaciones'
                ? 'bg-[#cc0000] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Landmark className="w-4 h-4" />
            3. Aplicaciones Legales y Mineras
          </button>
          <button
            id="tab-galeria-brochure"
            onClick={() => setActiveTab('galeria')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'galeria'
                ? 'bg-[#cc0000] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            4. Operaciones en Campo (Brochure)
          </button>
        </div>

        {/* Tab 1: Proceso Paso a Paso */}
        {activeTab === 'proceso' && (
          <div className="space-y-10">
            <div className="bg-red-50/70 border-l-4 border-[#cc0000] p-4 sm:p-5 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#cc0000] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  <strong>Flujo Técnico Riguroso:</strong> Cada etapa cumple estrictamente la <em>Directiva Técnica del Instituto Geográfico Nacional (IGN)</em> para el establecimiento de la Red Geodésica Horizontal en el sistema SIRGAS-Perú (WGS84).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GEODETIC_CERTIFICATION_DATA.phases.map((phase) => (
                <div 
                  key={phase.step}
                  className="bg-[#fafafa] hover:bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#cc0000]/50"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#cc0000] bg-red-100/60 w-12 h-12 rounded-xl flex items-center justify-center font-mono">
                        {phase.step}
                      </span>
                      <span className="text-[11px] font-bold text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-md">
                        {phase.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#cc0000] transition-colors">
                      {phase.title}
                    </h4>

                    <div className="inline-block bg-white border border-gray-200 px-2 py-0.5 rounded text-xs font-semibold text-[#cc0000] mb-3">
                      ✦ {phase.highlight}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200 text-[11px] font-bold text-gray-400 flex items-center justify-between">
                    <span>Fase {phase.step} de 06</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Specifications of Hito Geodésico */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 mt-10">
              <h4 className="text-xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#cc0000]" />
                Especificaciones del Hito Geodésico Oficial (Norma IGN)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <h5 className="font-bold text-[#333333] mb-1.5 text-sm">Dimensiones del Bloque</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    0.40 m x 0.40 m en la base superior, con profundidad mínima de 0.60 m. Concreto ciclópeo f'c = 175 - 210 kg/cm² reforzado, sobresaliendo 0.10 m sobre el terreno natural para fácil visualización.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <h5 className="font-bold text-[#333333] mb-1.5 text-sm">Disco / Placa de Bronce</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Placa metálica de bronce de 8 cm a 10 cm de diámetro incrustada con vástago de anclaje. Grabado indeleble con código oficial asignado, siglas de la entidad, fecha y cruz central con flecha orientada al norte.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <h5 className="font-bold text-[#333333] mb-1.5 text-sm">Par de Azimut Obligatorio</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Cada punto geodésico de orden C debe contar con un punto de referencia acimutal (visada directa e intervisible) a una distancia mínima de 300 m a 500 m para orientar estaciones totales en futuros replanteos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Entregables Oficiales */}
        {activeTab === 'entregables' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-[#333333]">Entregables Oficiales del Proyecto</h3>
              <p className="text-sm text-gray-600 mt-1">
                Paquete técnico y documental completo que recibe el cliente al culminar el servicio, garantizando la aprobación ante cualquier entidad pública o privada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GEODETIC_CERTIFICATION_DATA.deliverables.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-[#cc0000] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#cc0000] flex items-center justify-center mb-4 font-bold text-lg">
                      {index + 1}
                    </div>
                    <h4 className="text-base font-bold text-[#333333] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-emerald-600 gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Incluido en el expediente final
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
              <div>
                <h4 className="text-lg font-bold text-white">¿Necesitas certificar puntos geodésicos para tu expediente de SUNARP o Mina?</h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  Atendemos en Tacna, Moquegua, Arequipa y Puno con equipos Trimble R8s calibrados y personal colegiado.
                </p>
              </div>
              <button
                onClick={() => onOpenQuoteModal("Certificación IGN Orden C")}
                className="bg-[#cc0000] hover:bg-[#a80000] text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm whitespace-nowrap shadow-lg"
              >
                Solicitar Cotización Inmediata
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Aplicaciones */}
        {activeTab === 'aplicaciones' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-[#333333]">Aplicaciones Legales, Mineras e Industriales</h3>
              <p className="text-sm text-gray-600 mt-1">
                Los puntos geodésicos de orden "C" son el estándar obligatorio para amarrar la cartografía a la Red Geodésica Oficial del Perú.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GEODETIC_CERTIFICATION_DATA.useCases.map((useCase, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all hover:border-[#cc0000]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#333333] text-white flex items-center justify-center mb-4">
                    <Landmark className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-base font-bold text-[#333333] mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Legal References Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
              <h4 className="text-base font-bold text-[#333333] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#cc0000]" />
                Marco Normativo y Base Legal
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {GEODETIC_CERTIFICATION_DATA.legalBasis.map((law, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#cc0000] font-bold">✓</span>
                    <span>{law}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: Galería del Brochure */}
        {activeTab === 'galeria' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-[#cc0000] uppercase tracking-wider">Brochure Corporativo</span>
              <h3 className="text-2xl font-bold text-[#333333] mt-1">Operaciones de Campo e Instrumental</h3>
              <p className="text-sm text-gray-600 mt-1">
                Fotografías de nuestros trabajos en terreno: geodesia satelital, control de obras civiles, fotogrametría con dron y gabinete en Civil 3D.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BROCHURE_GALLERY_DATA.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                      {item.badge}
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5" /> Ampliar Detalle
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#cc0000] uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-base font-bold text-[#333333] group-hover:text-[#cc0000] transition-colors leading-snug mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium mb-2">{item.subtitle}</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#cc0000]">
                      <span>Ver detalles técnicos</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for Expanded Brochure Image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors text-lg font-bold"
              >
                ✕
              </button>

              <div className="h-72 sm:h-96 relative bg-black">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#cc0000] text-white text-xs font-bold px-3 py-1 rounded-md uppercase">
                  {selectedImage.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-1">{selectedImage.title}</h3>
                <p className="text-sm text-gray-500 font-semibold mb-3">{selectedImage.subtitle}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">{selectedImage.desc}</p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    ARA &amp; ANTARES SAC • Operaciones en Tacna y Sur del Perú
                  </div>
                  <button
                    onClick={() => {
                      const service = selectedImage.title;
                      setSelectedImage(null);
                      onOpenQuoteModal(service);
                    }}
                    className="bg-[#cc0000] hover:bg-[#b00000] text-white font-bold px-5 py-2.5 rounded-lg text-xs transition-colors"
                  >
                    Cotizar este Servicio →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-16 bg-[#f4f4f4] rounded-2xl p-8 border border-gray-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-[#333333]">
              ¿Tienes un requerimiento de Puntos Geodésicos en Tacna?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Coordinamos la visita de campo, verificación de línea base e ingreso del expediente al IGN sin demoras.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal("Puntos Geodésicos de Orden C (IGN)")}
              className="bg-[#cc0000] hover:bg-[#a80000] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md"
            >
              Cotizar con Ingeniero
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hola ARA Y ANTARES SAC, requiero cotización para establecimiento y certificación de Puntos Geodésicos de Orden C ante el IGN.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20b857] text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
