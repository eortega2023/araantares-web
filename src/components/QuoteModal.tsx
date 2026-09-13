import React, { useState, useEffect } from 'react';
import { X, Calculator, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Construcción y Edificación'
}) => {
  const [servicio, setServicio] = useState(initialService);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [ubicacion, setUbicacion] = useState('Tacna');
  const [detalles, setDetalles] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServicio(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppQuote = () => {
    const text = `Hola ARA Y ANTARES SAC, deseo cotizar:\n- Servicio: ${servicio}\n- Nombre: ${nombre || 'Interesado'}\n- Celular: ${telefono || 'No especificado'}\n- Ubicación: ${ubicacion}\n- Detalles: ${detalles || 'Solicito cotización formal.'}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        id="quote-modal-container"
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Header decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#cc0000]"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-red-100 text-[#cc0000] flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#333333]">Cotizar Proyecto</h3>
            <p className="text-xs text-gray-500">ARA Y ANTARES SAC • Tacna y Sur del Perú</p>
          </div>
        </div>

        {isSuccess ? (
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              ¡Solicitud de Cotización Recibida!
            </h4>
            <p className="text-sm text-gray-600 mb-6">
              Nos pondremos en contacto con usted en breve para coordinar detalles técnicos y remitir la cotización.
            </p>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3 px-4 rounded-lg shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar copia inmediata a WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full text-xs font-semibold text-gray-500 hover:text-gray-800 py-2"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Servicio o Equipo Requerido
              </label>
              <select
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#cc0000] focus:ring-1 focus:ring-[#cc0000] outline-none"
              >
                <optgroup label="Geodesia y Certificación Oficial">
                  <option value="Puntos Geodésicos de Orden C (IGN)">Certificación de Puntos Geodésicos de Orden C (IGN)</option>
                  <option value="Topografía y Geodesia">Levantamiento Topográfico / Geodesia GNSS</option>
                  <option value="Fotogrametría con Dron">Fotogrametría con Dron y Ortomosaicos (RPAS)</option>
                </optgroup>
                <optgroup label="Alquiler de Equipos Topográficos">
                  <option value="GPS Diferencial Trimble R8s">Alquiler GPS Diferencial Trimble R8s (Base + Rover)</option>
                  <option value="Estaciones Totales de Precisión">Alquiler Estación Total de Precisión (Láser)</option>
                  <option value="Drones Phantom 4 Pro v2.0">Alquiler / Operación Dron Phantom 4 Pro V2.0</option>
                  <option value="Teodolitos Electrónicos">Alquiler Teodolito Electrónico Digital</option>
                  <option value="Niveles Topográficos">Alquiler Nivel Topográfico Automático</option>
                  <option value="GPS Navegador de Mano">Alquiler GPS Navegador de Mano (Garmin)</option>
                </optgroup>
                <optgroup label="Construcción e Inmobiliaria">
                  <option value="Construcción y Edificación">Construcción y Edificación (Viviendas / Obras Civiles)</option>
                  <option value="Consultoría e Inmobiliaria">Consultoría e Inmobiliaria / Saneamiento Legal</option>
                </optgroup>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Nombre o Razón Social <span className="text-[#cc0000]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Juan Pérez / Empresa Minera"
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:border-[#cc0000] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Teléfono / Celular <span className="text-[#cc0000]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ej. 981928070"
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:border-[#cc0000] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:border-[#cc0000] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Ubicación del Proyecto
                </label>
                <input
                  type="text"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                  placeholder="Ej. Tacna Centro / Ilo / Candarave"
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:border-[#cc0000] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Descripción breve del requerimiento
              </label>
              <textarea
                rows={3}
                value={detalles}
                onChange={(e) => setDetalles(e.target.value)}
                placeholder="Indique área aproximada en m2 o hectáreas, tipo de terreno, tiempo de entrega deseado..."
                className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-sm focus:border-[#cc0000] outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#a80000] text-white font-bold text-sm py-2.5 px-4 rounded-lg shadow cursor-pointer transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Solicitar Presupuesto</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-2.5 px-4 rounded-lg shadow-xs cursor-pointer transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Cotizar por WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
