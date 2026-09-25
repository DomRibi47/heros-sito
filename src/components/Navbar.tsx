import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'servizi', label: 'Servizi', href: '#servizi' },
    { id: 'chi-siamo', label: 'Chi Siamo', href: '#chi-siamo' },
    { id: 'compagnie', label: 'Compagnie', href: '#compagnie' },
    { id: 'rassegna', label: 'Rassegna Stampa', href: '#rassegna' },
    { id: 'area-clienti', label: 'Area Clienti', href: '#area-clienti' },
    { id: 'contatti', label: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1a365d]">HEROS</h1>
              <p className="text-xs text-gray-500 -mt-1">Broker Assicurativo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-[#c9a227] border-b-2 border-[#c9a227] pb-1'
                    : 'text-gray-700 hover:text-[#1a365d]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="bg-gradient-to-r from-[#c9a227] to-[#d4b445] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Richiedi Consulenza
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 fade-in">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsOpen(false);
                }}
                className="block py-3 px-4 text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 rounded-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="block mt-4 mx-4 text-center bg-gradient-to-r from-[#c9a227] to-[#d4b445] text-white px-5 py-3 rounded-full font-semibold"
            >
              Richiedi Consulenza
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
