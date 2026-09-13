import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hola ARA Y ANTARES SAC, me comunico desde su página web para solicitar información sobre sus servicios de construcción y topografía."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 hidden sm:flex items-center gap-3 bg-white p-3 rounded-xl shadow-xl border border-gray-100 max-w-xs animate-fadeIn relative">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <div>
            <p className="text-xs font-bold text-[#333333]">¿Necesita una cotización rápida?</p>
            <p className="text-[11px] text-gray-500">Estamos en línea en WhatsApp para Tacna y el sur.</p>
          </div>
          <button 
            onClick={() => setShowTooltip(false)} 
            className="text-gray-400 hover:text-gray-600 p-1"
            title="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="whatsapp-floating-btn"
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 relative group"
        aria-label="Contactar por WhatsApp a ARA Y ANTARES SAC"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#cc0000] text-[9px] text-white font-bold items-center justify-center">
            1
          </span>
        </span>
      </a>
    </div>
  );
};
