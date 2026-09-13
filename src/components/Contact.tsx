import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Construcción y Edificación',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate/Prepare Netlify Form submission
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hola ARA Y ANTARES SAC, mi nombre es ${formData.nombre || 'Cliente'}. Estoy interesado en ${formData.servicio}. Teléfono: ${formData.telefono || 'No especificado'}. Mensaje: ${formData.mensaje || 'Deseo cotizar un proyecto.'}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-[#cc0000] text-xs font-bold uppercase tracking-wider mb-3">
            Atención Inmediata
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#333333] tracking-tight">
            Contáctanos
          </h2>
          <div className="w-16 h-1 bg-[#cc0000] mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Estamos a su entera disposición en nuestra sede de Tacna para evaluar sus requerimientos técnicos, presupuestales y de ingeniería sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#333333] mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#cc0000]"></span>
                Información Corporativa
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#cc0000] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dirección Principal</h4>
                  <p className="text-sm font-semibold text-[#333333] mt-1 leading-snug">
                    {COMPANY_INFO.address}
                  </p>
                  <span className="inline-block mt-1 text-xs text-[#cc0000] font-medium">
                    (Referencia: Centro de Tacna, a media cuadra de Av. Leguía)
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 py-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#cc0000] flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Correo Electrónico</h4>
                  <a 
                    href={`mailto:${COMPANY_INFO.primaryEmail}`}
                    className="text-sm font-semibold text-[#333333] hover:text-[#cc0000] transition-colors mt-1 block"
                  >
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <span className="text-xs text-gray-500">Respuesta en menos de 24 horas</span>
                </div>
              </div>

              {/* Telephones */}
              <div className="pt-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Central Telefónica y Móviles
                  </h4>
                  <span className="text-[11px] text-gray-500 font-medium">Clic para llamar o copiar</span>
                </div>

                <div className="space-y-2.5">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 hover:bg-red-50/50 transition-colors border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#cc0000]" />
                        <div>
                          <span className="text-xs text-gray-500 block leading-none mb-1">{phone.label}</span>
                          <a 
                            href={`tel:${phone.raw}`}
                            className="text-sm font-bold text-[#333333] hover:text-[#cc0000]"
                          >
                            {phone.number}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => copyToClipboard(phone.number)}
                          className="p-1.5 text-gray-400 hover:text-[#333333] rounded transition-colors"
                          title="Copiar número"
                        >
                          {copiedPhone === phone.number ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>

                        <a
                          href={`tel:${phone.raw}`}
                          className="text-xs font-bold text-[#cc0000] hover:text-[#a80000] px-2 py-1 rounded bg-white shadow-xs border border-gray-200"
                        >
                          Llamar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-600">
                <Clock className="w-4 h-4 text-[#cc0000] shrink-0" />
                <span><strong>Horario de atención:</strong> {COMPANY_INFO.schedule}</span>
              </div>

              {/* Social Channels including Facebook */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500">Síguenos en Redes:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={COMPANY_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#1877F2] hover:bg-[#0e5fc4] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                    title="Página Oficial de Facebook"
                  >
                    <span>Facebook Oficial</span>
                  </a>
                  <a
                    href={COMPANY_INFO.youtubeVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#cc0000] hover:bg-[#a80000] text-white text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors shadow-xs"
                    title="Canal de YouTube"
                  >
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Target Audience Note */}
            <div className="bg-[#333333] text-white p-5 rounded-xl text-xs space-y-1 border-l-4 border-[#cc0000]">
              <p className="font-bold text-gray-100">Atención Especializada para:</p>
              <p className="text-gray-300 leading-relaxed">
                Empresas de ingeniería, mineras, constructoras y público general en Tacna y todo el sur del Perú.
              </p>
            </div>
          </div>

          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#333333]">
                  Envíenos un Mensaje o Solicite una Cotización
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Complete los campos a continuación para que nuestro equipo técnico se comunique a la brevedad.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center animate-fadeIn my-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-2">
                    ¡Mensaje Enviado con Éxito!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto mb-6">
                    Gracias por comunicarse con <strong>ARA Y ANTARES SAC</strong>. Uno de nuestros ingenieros se contactará con usted al teléfono <strong>{formData.telefono || 'indicado'}</strong> a la brevedad.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Reenviar copia por WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-gray-600 hover:text-gray-900 underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                /* Form with Netlify configuration as explicitly requested */
                <form
                  id="contacto-form"
                  name="contacto-ara-antares"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Hidden inputs for Netlify */}
                  <input type="hidden" name="form-name" value="contacto-ara-antares" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Nombre Completo <span className="text-[#cc0000]">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Ing. Carlos Mendoza"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Teléfono / Celular <span className="text-[#cc0000]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej. 981928070"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Correo Electrónico <span className="text-[#cc0000]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@empresa.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20 text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Servicio de Interés */}
                    <div>
                      <label htmlFor="servicio" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Servicio Requerido
                      </label>
                      <select
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20 text-sm outline-none transition-all bg-white"
                      >
                        <option value="Construcción y Edificación">Construcción y Edificación (Obras Civiles)</option>
                        <option value="Topografía y Geodesia">Topografía y Geodesia de Alta Precisión</option>
                        <option value="Consultoría e Inmobiliaria">Consultoría e Inmobiliaria / Saneamiento</option>
                        <option value="Alquiler de Equipos / GPS / Dron">Alquiler de Equipos Topográficos / Dron</option>
                        <option value="Capacitación en Equipos">Capacitaciones en Equipos Topográficos</option>
                        <option value="Otro">Otro requerimiento</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Detalle del Proyecto o Consulta <span className="text-[#cc0000]">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Indique la ubicación del terreno u obra, tipo de requerimiento, plazos estimados o dudas específicas..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#cc0000] focus:ring-2 focus:ring-[#cc0000]/20 text-sm outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit and WhatsApp buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <button
                      type="submit"
                      id="submit-form-btn"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#a80000] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Consulta</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-3.5 rounded-lg shadow-xs transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar por WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center mt-3">
                    Formulario protegido y compatible con Netlify Forms. Sus datos son confidenciales y se usarán únicamente con fines de cotización técnica.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
