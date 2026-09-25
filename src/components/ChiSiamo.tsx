export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-10 shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-2xl font-bold">Heros</p>
                    <p className="text-white/60">Broker Assicurativo</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-[#c9a227] text-2xl font-bold">15+</p>
                    <p className="text-white/70 text-sm">Anni esperienza</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-[#c9a227] text-2xl font-bold">2000+</p>
                    <p className="text-white/70 text-sm">Clienti attivi</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-[#c9a227] text-2xl font-bold">98%</p>
                    <p className="text-white/70 text-sm">Soddisfazione</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-[#c9a227] text-2xl font-bold">24h</p>
                    <p className="text-white/70 text-sm">Tempo risposta</p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-white/80 text-sm italic">
                    "Il nostro obiettivo è proteggere ciò che è importante per i nostri clienti, 
                    offrendo soluzioni personalizzate e un servizio di eccellenza."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a227]/20 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#1a365d]/10 rounded-3xl -z-10"></div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Chi Siamo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-6 font-display">
              Il tuo partner di fiducia nel mondo assicurativo
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Heros nasce dalla passione per il mondo assicurativo e dalla volontà di offrire 
              ai clienti un servizio di consulenza indipendente e personalizzato. Come broker, 
              non siamo legati a nessuna compagnia: lavoriamo per te.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Il nostro team di professionisti qualificati ti accompagna in ogni fase: dall'analisi 
              dei rischi alla stipula della polizza, fino all'assistenza in caso di sinistro. 
              La nostra indipendenza ci permette di confrontare le offerte di oltre 20 compagnie 
              assicurative per trovare sempre la soluzione migliore.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Indipendenza</h4>
                  <p className="text-gray-600 text-sm">Lavoriamo solo nell'interesse del cliente, senza legami con le compagnie</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Competenza</h4>
                  <p className="text-gray-600 text-sm">Team certificato e aggiornato sulle normative e prodotti assicurativi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Dedizione</h4>
                  <p className="text-gray-600 text-sm">Assistenza personalizzata e presenza costante nel rapporto con il cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
