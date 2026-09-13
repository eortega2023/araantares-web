/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GeodeticPoints } from './components/GeodeticPoints';
import { RentalSection } from './components/RentalSection';
import { Services } from './components/Services';
import { Equipment } from './components/Equipment';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('GPS Diferencial Trimble R8s');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col selection:bg-[#cc0000] selection:text-white">
      {/* Fixed Header with Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* a. Hero Section (Inicio con nuevo título) */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* b. Sección Especial de Puntos Geodésicos de Orden C (Certificados IGN) */}
        <GeodeticPoints onOpenQuoteModal={(service) => handleOpenQuoteModal(service)} />

        {/* c. Sección Especial para Alquiler de Equipos Topográficos */}
        <RentalSection onQuoteEquipment={(equip) => handleOpenQuoteModal(equip)} />

        {/* d. Sección Servicios (Grid de 3 columnas) */}
        <Services onSelectServiceForQuote={(service) => handleOpenQuoteModal(service)} />

        {/* e. Sección Topografía y Equipos (Detalle Técnico) */}
        <Equipment onQuoteEquipment={(equip) => handleOpenQuoteModal(equip)} />

        {/* f. Sección Sobre Nosotros (Misión y Visión) */}
        <AboutUs />

        {/* g. Sección Contacto (Formulario y Redes) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Button */}
      <WhatsAppButton />

      {/* Quotation Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedService}
      />
    </div>
  );
}

