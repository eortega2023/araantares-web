import React from 'react';
import { Building2, Compass, Briefcase, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#cc0000]" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#cc0000]" />;
      case 'Briefcase':
        return <Briefcase className="w-8 h-8 text-[#cc0000]" />;
      default:
        return <Building2 className="w-8 h-8 text-[#cc0000]" />;
    }
  };

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#cc0000] text-xs font-bold uppercase tracking-wider mb-3">
            Especialidades Técnicas
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#333333] tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-1 bg-[#cc0000] mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Soluciones integrales de ingeniería, topografía de precisión y corretaje inmobiliario adaptadas a las exigencias normativas y técnicas del sur del Perú.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-[#cc0000]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#cc0000] to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-red-50 group-hover:bg-[#cc0000] transition-colors duration-300 flex items-center justify-center shadow-inner">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(getIcon(service.iconName), {
                        className: "w-8 h-8 text-[#cc0000] group-hover:text-white transition-colors duration-300"
                      })}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#cc0000] transition-colors duration-200 mb-3">
                  {service.title}
                </h3>

                {/* Primary Description requested by user */}
                <p className="text-gray-700 font-medium text-sm leading-relaxed mb-6 bg-[#f4f4f4] p-3.5 rounded-lg border-l-4 border-[#cc0000]">
                  {service.shortDesc}
                </p>

                {/* Detailed Features List */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Alcance del Servicio:</p>
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#cc0000] shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link / Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  id={`cotizar-servicio-${service.id}`}
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-[#333333] hover:text-[#cc0000] py-2.5 px-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-all duration-200 cursor-pointer"
                >
                  <span>Solicitar cotización</span>
                  <ArrowUpRight className="w-4 h-4 text-[#cc0000]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Note */}
        <div className="mt-12 bg-[#f4f4f4] border border-gray-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#333333]">
              ¿Tiene un proyecto especial o requiere una propuesta técnica a medida?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Realizamos visitas técnicas de evaluación en Tacna, Ilo, Moquegua y todo el sur peruano sin costo inicial.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForQuote('Asesoría Integral')}
            className="shrink-0 bg-[#cc0000] hover:bg-[#a80000] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Consultar con un Ingeniero
          </button>
        </div>
      </div>
    </section>
  );
};
