export default function ComeFunziona() {
  const steps = [
    {
      number: '01',
      title: 'Contatto Iniziale',
      description: 'Ci contatti via telefono, email, WhatsApp o tramite il form sul sito. Fissiamo un appuntamento per conoscerci.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Analisi dei Rischi',
      description: 'Analizziamo insieme le tue esigenze e i rischi da coprire. Valutiamo la tua situazione personale o aziendale.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Confronto Offerte',
      description: 'Confrontiamo le proposte di oltre 20 compagnie assicurative per trovare la soluzione migliore per te.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Proposta Personalizzata',
      description: 'Ti presentiamo la soluzione ottimale con un report dettagliato. Tu decidi con piena consapevolezza.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Assistenza Continua',
      description: 'Ti seguiamo nel tempo: gestione scadenze, rinnovi, modifiche e assistenza in caso di sinistro.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Come Funziona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4 font-display">
            Il nostro metodo di lavoro
          </h2>
          <p className="text-gray-600 text-lg">
            Un processo semplice e trasparente, pensato per offrirti la migliore 
            protezione con il minimo sforzo da parte tua.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227] to-[#c9a227]/20 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-[#c9a227]/20 flex items-center justify-center mx-auto hover:border-[#c9a227] transition-colors card-hover">
                    <div className="text-[#1a365d]">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#c9a227] to-[#d4b445] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#1a365d] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white rounded-2xl shadow-lg px-8 py-5 border border-gray-100">
            <div className="flex -space-x-2 mr-4">
              <div className="w-10 h-10 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">H</div>
              <div className="w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">✓</div>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1a365d]">Primo appuntamento gratuito</p>
              <p className="text-xs text-gray-500">Senza impegno, per conoscere le tue esigenze</p>
            </div>
            <a
              href="#contatti"
              className="ml-6 bg-gradient-to-r from-[#c9a227] to-[#d4b445] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
            >
              Prenota ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
