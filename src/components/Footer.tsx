import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ChevronRight,
  ShieldCheck,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Puntos Geodésicos (IGN)', href: '#puntos-geodesicos' },
    { name: 'Alquiler de Equipos', href: '#alquiler-equipos' },
    { name: 'Nuestros Servicios', href: '#servicios' },
    { name: 'Topografía y Geodesia', href: '#topografia' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Contáctanos', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#141414] text-gray-300 pt-16 pb-12 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: Brand presentation */}
          <div className="space-y-4">
            <Logo isDark={true} />

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Empresa líder en Tacna y el sur del Perú especializada en topografía, fotogrametría aérea con dron, alquiler de equipos topográficos calibrados y ejecución de obras civiles con soporte de ingeniería.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={COMPANY_INFO.youtubeVideoUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-md bg-[#282828] hover:bg-[#cc0000] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube ARA Y ANTARES SAC"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-md bg-[#282828] hover:bg-[#cc0000] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook ARA Y ANTARES SAC"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-md bg-[#282828] hover:bg-[#cc0000] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn ARA Y ANTARES SAC"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-md bg-[#282828] hover:bg-[#cc0000] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram ARA Y ANTARES SAC"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#cc0000] pl-2">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#cc0000] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#cc0000] pl-2">
              Áreas de Operación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-1.5 shrink-0" />
                <span>Edificación de Obras Civiles y Viviendas</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-1.5 shrink-0" />
                <span>Geodesia Satelital GPS Diferencial (GNSS)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-1.5 shrink-0" />
                <span>Fotogrametría con Dron (RPAS)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-1.5 shrink-0" />
                <span>Saneamiento Físico-Legal de Predios</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-1.5 shrink-0" />
                <span>Consultoría en Obras de Irrigaciones</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] mt-1.5 shrink-0" />
                <span>Capacitaciones para Operar Equipos</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#cc0000] pl-2">
              Sede Central Tacna
            </h4>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-[#cc0000] shrink-0 mt-1" />
              <span>{COMPANY_INFO.address}</span>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
              <Phone className="w-4 h-4 text-[#cc0000] shrink-0 mt-1" />
              <div>
                <p>Fijo: (052) 426373</p>
                <p>Móviles: 981928070 / 991933211 / 972866611</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
              <Mail className="w-4 h-4 text-[#cc0000] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.primaryEmail}
              </a>
            </div>

            <div className="pt-2">
              <div className="bg-[#242424] p-2.5 rounded-lg border border-gray-800 text-[11px] text-gray-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Empresa registrada y habilitada para contrataciones en el sur del Perú.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p id="copyright-text">
            Copyright © {COMPANY_INFO.year} <strong className="text-gray-400">ARA Y ANTARES SAC</strong>. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span>Razón Social: ARA Y ANTARES S.A.C.</span>
            <span>Tacna, Perú</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#282828] hover:bg-[#cc0000] text-gray-300 hover:text-white transition-colors cursor-pointer"
              title="Volver arriba"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
