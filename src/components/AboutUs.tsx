import React from 'react';
import { Target, Compass, Users, CheckCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { ABOUT_CONTENT, COMPANY_INFO } from '../data/companyData';

export const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#cc0000] text-xs font-bold uppercase tracking-wider mb-3">
            Identidad y Compromiso
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#333333] tracking-tight">
            Sobre Nosotros
          </h2>
          <div className="w-16 h-1 bg-[#cc0000] mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            {ABOUT_CONTENT.presentation}
          </p>
        </div>

        {/* Misión and Visión Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Misión Card */}
          <div className="bg-[#f4f4f4] rounded-2xl p-8 sm:p-10 border-t-4 border-[#cc0000] shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#cc0000]">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#cc0000] uppercase tracking-wider">Propósito Fundamental</span>
                <h3 className="text-2xl font-black text-[#333333]">Nuestra Misión</h3>
              </div>
            </div>

            <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed italic border-l-2 border-gray-300 pl-4 my-4">
              "{ABOUT_CONTENT.mission}"
            </blockquote>

            <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#cc0000]" />
                <span>Calidad en materiales</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#cc0000]" />
                <span>Mano de obra responsable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#cc0000]" />
                <span>Cumplimiento en plazos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#cc0000]" />
                <span>Satisfacción garantizada</span>
              </div>
            </div>
          </div>

          {/* Visión Card */}
          <div className="bg-[#f4f4f4] rounded-2xl p-8 sm:p-10 border-t-4 border-[#333333] shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#333333]">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Proyección y Futuro</span>
                <h3 className="text-2xl font-black text-[#333333]">Nuestra Visión</h3>
              </div>
            </div>

            <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed italic border-l-2 border-gray-300 pl-4 my-4">
              "{ABOUT_CONTENT.vision}"
            </blockquote>

            <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#333333]" />
                <span>Integración de recursos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#333333]" />
                <span>Innovación tecnológica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#333333]" />
                <span>Confort y habitabilidad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#333333]" />
                <span>Liderazgo regional en Tacna</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Pillars & Location Banner */}
        <div className="bg-[#242424] text-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Tacna • Moquegua • Arequipa • Puno</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Compromiso Regional en el Sur del Perú
              </h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                Atendemos de manera directa a empresas de ingeniería, unidades mineras, constructoras y familias que buscan edificar o sanear sus predios con respaldo técnico y legal confiable.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <ShieldCheck className="w-7 h-7 text-[#cc0000] mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Rigor Normativo</h4>
                <p className="text-xs text-gray-400">Cumplimiento del Reglamento Nacional de Edificaciones y directivas del IGN.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <Users className="w-7 h-7 text-[#cc0000] mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Equipo Multidisciplinario</h4>
                <p className="text-xs text-gray-400">Ingenieros civiles, geodestas, arquitectos y asesores jurídicos inmobiliarios.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <Clock className="w-7 h-7 text-[#cc0000] mb-3" />
                <h4 className="text-base font-bold text-white mb-1">Precios Económicos</h4>
                <p className="text-xs text-gray-400">Excelente relación calidad-precio sin comprometer la seguridad ni la exactitud.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
