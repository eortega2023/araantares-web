import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle2, Shield, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Background with engineering & topography imagery with subtle dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80"
          alt="Construcción y Topografía en Obras Civiles"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125"
          loading="eager"
        />
        {/* Modern multi-layer dark industrial gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#1a1a1a]/90 to-[#141414]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(#cc0000_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Industry Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#333333]/90 border border-gray-700 text-gray-200 text-xs sm:text-sm font-semibold mb-6 shadow-inner animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#cc0000]"></span>
          <span>Tacna y Sur del Perú • Minería, Construcción e Infraestructura</span>
        </div>

        {/* Impactful Title requested by user */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl">
          Topografía, Fotogrametría con Dron y{' '}
          <span className="text-[#cc0000] relative inline-block">
            Alquiler de Equipos Topográficos
            <span className="block h-1.5 w-full bg-[#cc0000] rounded-full mt-1 opacity-75"></span>
          </span>{' '}
          en Tacna
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl font-medium leading-relaxed">
          Equipo multidisciplinario de profesionales altamente calificados. Calidad y profesionalismo a precios económicos con disponibilidad inmediata de GPS Diferencial Trimble R8s, Drones Phantom 4 Pro y Estaciones Totales.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-rental-btn"
            onClick={() => scrollTo('alquiler-equipos')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#cc0000] hover:bg-[#a80000] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-red-900/40 transition-all duration-200 cursor-pointer group active:scale-95"
          >
            <span>Ver Alquiler de Equipos</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-services-btn"
            onClick={() => scrollTo('servicios')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white font-semibold text-base px-8 py-3.5 rounded-lg border-2 border-gray-400/60 hover:border-white transition-all duration-200 cursor-pointer"
          >
            <span>Servicios de Ingeniería</span>
          </button>

          <button
            id="hero-contact-btn"
            onClick={() => scrollTo('contacto')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white font-semibold text-sm px-4 py-3.5 transition-colors cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#cc0000]" />
            <span>Contáctanos</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-gray-800/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
          <div className="flex items-start gap-3 bg-white/5 backdrop-blur-xs p-3.5 rounded-lg border border-white/5">
            <Shield className="w-5 h-5 text-[#cc0000] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-sm font-bold">Garantía y Responsabilidad</h4>
              <p className="text-gray-400 text-xs mt-0.5">Control de calidad estricto en cada obra civil.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 backdrop-blur-xs p-3.5 rounded-lg border border-white/5">
            <Award className="w-5 h-5 text-[#cc0000] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-sm font-bold">Equipos de Última Generación</h4>
              <p className="text-gray-400 text-xs mt-0.5">GPS Diferencial, Drones RPAS y Estaciones Totales.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 backdrop-blur-xs p-3.5 rounded-lg border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-[#cc0000] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white text-sm font-bold">Asesoría Integral Gratuita</h4>
              <p className="text-gray-400 text-xs mt-0.5">Saneamiento legal, diseño y consultoría técnica.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
