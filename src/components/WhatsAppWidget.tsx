import { useState, useEffect } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl p-4 w-64 border border-gray-100 fade-in">
          <button onClick={() => setShowTooltip(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-sm text-gray-700 font-medium">Ciao! 👋</p>
          <p className="text-xs text-gray-500 mt-1">Hai bisogno di una consulenza assicurativa? Scrivici su WhatsApp!</p>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-80 border border-gray-100 overflow-hidden fade-in">
          {/* Header */}
          <div className="bg-[#25D366] p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M5.777 2.026C2.578 3.871 0 7.254 0 11.265c0 2.306.727 4.444 1.967 6.212L.05 24l6.752-1.77a11.196 11.196 0 005.2 1.27c6.213 0 11.25-5.037 11.25-11.25S18.215 1 12.002 1c-2.307 0-4.445.727-6.225 1.026z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Heros Assicurazioni</p>
              <p className="text-white/80 text-xs">Online • Risponde in pochi minuti</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 bg-gray-50 space-y-3">
            <div className="bg-white rounded-xl p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-gray-700">Ciao! 👋 Benvenuto su Heros Assicurazioni.</p>
              <p className="text-xs text-gray-400 mt-1">Ora</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-gray-700">Come possiamo aiutarti oggi? Puoi chiederci informazioni su:</p>
              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                <li>🚗 RC Auto</li>
                <li>🏠 Casa & Famiglia</li>
                <li>❤️ Vita & Salute</li>
                <li>🏢 Aziende</li>
              </ul>
              <p className="text-xs text-gray-400 mt-1">Ora</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-100">
            <a
              href="https://wa.me/393331234567?text=Ciao!%20Vorrei%20informazioni%20sui%20vostri%20servizi%20assicurativi."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white text-center py-3 rounded-xl font-semibold text-sm hover:bg-[#20bd5a] transition-colors"
            >
              Avvia conversazione
            </a>
            <p className="text-xs text-gray-400 text-center mt-2">
              Powered by WhatsApp Business
            </p>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-700 rotate-0' : 'bg-[#25D366] pulse-dot'
        }`}
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
            <path d="M5.777 2.026C2.578 3.871 0 7.254 0 11.265c0 2.306.727 4.444 1.967 6.212L.05 24l6.752-1.77a11.196 11.196 0 005.2 1.27c6.213 0 11.25-5.037 11.25-11.25S18.215 1 12.002 1c-2.307 0-4.445.727-6.225 1.026z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
