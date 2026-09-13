import React, { useState } from 'react';
import { 
  Radio, 
  Plane, 
  Crosshair, 
  Layers, 
  Eye, 
  Cpu, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle,
  FileCheck2,
  Terminal,
  Activity
} from 'lucide-react';
import { EQUIPMENT_DATA, TECHNICAL_PILLARS } from '../data/companyData';

interface EquipmentProps {
  onQuoteEquipment: (equipName: string) => void;
}

export const Equipment: React.FC<EquipmentProps> = ({ onQuoteEquipment }) => {
  const [activeEquipment, setActiveEquipment] = useState<string>(EQUIPMENT_DATA[0].id);

  const getEquipmentIcon = (iconType: string) => {
    switch (iconType) {
      case 'Satellite':
        return <Radio className="w-6 h-6 text-[#cc0000]" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#cc0000]" />;
      case 'Eye':
        return <Crosshair className="w-6 h-6 text-[#cc0000]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#cc0000]" />;
      case 'Focus':
        return <Eye className="w-6 h-6 text-[#cc0000]" />;
      default:
        return <Crosshair className="w-6 h-6 text-[#cc0000]" />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-[#cc0000]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-[#cc0000]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#cc0000]" />;
      default:
        return <Activity className="w-8 h-8 text-[#cc0000]" />;
    }
  };

  return (
    <section id="topografia" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f4f4f4] border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#cc0000] text-xs font-bold uppercase tracking-wider mb-3">
            Topografía y Geodesia Especializada
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#333333] tracking-tight">
            Equipos de Alta Precisión
          </h2>
          <div className="w-16 h-1 bg-[#cc0000] mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Contamos con tecnología de vanguardia certificada y calibrada periódicamente para garantizar tolerancia milimétrica en todo tipo de levantamientos y controles topográficos.
          </p>
        </div>

        {/* Equipment Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {EQUIPMENT_DATA.map((equip) => (
            <div
              key={equip.id}
              id={`equipment-card-${equip.id}`}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                    {getEquipmentIcon(equip.iconType)}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                    {equip.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#333333] mb-2">
                  {equip.name}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {equip.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Especificaciones Clave:
                  </span>
                  {equip.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-1.5 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <FileCheck2 className="w-3.5 h-3.5" /> Calibración Vigente
                </span>
                <button
                  onClick={() => onQuoteEquipment(equip.name)}
                  className="text-xs font-bold text-[#cc0000] hover:text-[#990000] hover:underline cursor-pointer"
                >
                  Consultar disponibilidad →
                </button>
              </div>
            </div>
          ))}

          {/* Special summary card for mining & construction companies */}
          <div className="bg-[#262626] text-white rounded-xl p-6 shadow-md flex flex-col justify-between border border-[#383838]">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#cc0000] flex items-center justify-center mb-4 text-white">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-red-300 bg-red-950/60 px-2.5 py-1 rounded-md inline-block mb-3">
                Soporte en Terreno
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Alquiler de Equipos y Brigadas Topográficas
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                Disponibilidad inmediata de cuadrillas de topografía completas (topógrafo especialista, asistentes y equipos calibrados) para obras de cualquier envergadura en Tacna y departamentos vecinos.
              </p>
            </div>
            <button
              onClick={() => onQuoteEquipment('Brigada Topográfica Completa')}
              className="w-full mt-4 bg-[#cc0000] hover:bg-[#a80000] text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer text-center"
            >
              Solicitar Cotización de Brigada
            </button>
          </div>
        </div>

        {/* Technical Highlights Section (Software, Training, Quality Control) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#333333]">
              Capacidad Técnica, Software y Certificación
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Complementamos el instrumental de campo con estricto rigor metodológico y procesamiento digital avanzado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECHNICAL_PILLARS.map((pillar, idx) => (
              <div key={idx} className="bg-[#f9f9f9] rounded-xl p-6 border border-gray-200 hover:border-[#cc0000]/50 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center mb-4">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="text-base font-bold text-[#333333] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Software badges list */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-gray-600">
            <span className="text-gray-400 font-bold uppercase tracking-wider">Software Compatible:</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">AutoCAD 2026</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">Autodesk Civil 3D</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">ArcGIS / QGIS</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">Agisoft Metashape</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">Pix4Dmapper</span>
          </div>
        </div>
      </div>
    </section>
  );
};
