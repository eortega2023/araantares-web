import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Puntos Geodésicos', href: '#puntos-geodesicos', badge: 'IGN' },
    { name: 'Alquiler de Equipos', href: '#alquiler-equipos', highlight: true },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Topografía', href: '#topografia' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar for contact info */}
      <div className="bg-[#191919] text-gray-200 text-xs sm:text-sm py-2 px-4 border-b border-[#333333] hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#cc0000]" />
              Av. Patricio Melendez N° 525, 2do piso, Tacna - Perú
            </span>
            <a 
              href={`mailto:${COMPANY_INFO.primaryEmail}`} 
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#cc0000]" />
              {COMPANY_INFO.primaryEmail}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:052426373" 
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#cc0000]" />
              (052) 426373
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#25D366] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              981928070 (WhatsApp)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        id="main-nav" 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-100' 
            : 'bg-white py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with uploaded corporate symbol */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group cursor-pointer"
            id="brand-logo-link"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 flex items-center gap-1.5 ${
                  link.highlight 
                    ? 'text-[#cc0000] font-bold hover:text-[#a80000]' 
                    : 'text-[#333333] hover:text-[#cc0000]'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#cc0000] hover:after:w-full after:transition-all after:duration-300`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="bg-red-100 text-[#cc0000] text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-red-200 leading-none">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-quote-btn"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#a80000] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Calculator className="w-4 h-4" />
              <span>Cotizar Equipo / Obra</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quote-btn-header"
              onClick={onOpenQuoteModal}
              className="sm:hidden bg-[#cc0000] text-white text-xs font-bold px-2.5 py-1.5 rounded-md"
            >
              Cotizar
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#333333] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#cc0000]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer" 
            className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn"
          >
            <div className="space-y-1 divide-y divide-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between py-3 text-base font-semibold ${
                    link.highlight ? 'text-[#cc0000] font-bold' : 'text-[#333333]'
                  } hover:text-[#cc0000] transition-colors`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.badge && (
                      <span className="bg-red-100 text-[#cc0000] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-red-200">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#b30000] text-white font-bold py-3 px-4 rounded-lg shadow cursor-pointer text-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>Cotizar Proyecto o Equipo</span>
              </button>

              <div className="bg-gray-50 p-3 rounded-lg text-xs space-y-1.5 text-gray-600">
                <p className="font-semibold text-[#333333] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#cc0000]" />
                  Avenida Patricio Melendez N° 525, 2do piso
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#cc0000]" />
                  (052) 426373 / 981928070 / 991933211 / 972866611
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
