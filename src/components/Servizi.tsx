export default function Servizi() {
  const servizi = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'RC Auto & Moto',
      description: 'Confrontiamo le tariffe di oltre 20 compagnie per trovare la polizza RCA più conveniente per il tuo veicolo.',
      features: ['Preventivo immediato', 'Bonus malus', 'Cristalli e furto/incendio'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Casa & Famiglia',
      description: 'Proteggi la tua casa e i tuoi cari con soluzioni assicurative complete e personalizzate.',
      features: ['Multirischio casa', 'Responsabilità civile', 'Tutela legale'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Vita & Salute',
      description: 'Piani di protezione vita e polizze sanitarie per garantire serenità a te e alla tua famiglia.',
      features: ['Polizze caso vita', 'Assicurazione sanitaria', 'Piani pensione'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Aziende & PMI',
      description: 'Soluzioni assicurative dedicate alle imprese: dalla responsabilità civile alla tutela del patrimonio.',
      features: ['RC professionale', 'D&O', 'Property & Casualty'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Viaggi',
      description: 'Assicurazioni viaggio per partire tranquilli: copertura medica, bagagli e annullamento.',
      features: ['Copertura mondiale', 'Assistenza 24/7', 'Annullamento viaggio'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Cauzioni & Fideiussioni',
      description: 'Fideiussioni bancarie e assicurative per appalti, locazioni e obbligazioni contrattuali.',
      features: ['Fideiussioni assicurative', 'Cauzioni definitive', 'Tempistiche rapide'],
    },
  ];

  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            I Nostri Servizi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4 font-display">
            Soluzioni assicurative per ogni esigenza
          </h2>
          <p className="text-gray-600 text-lg">
            Offriamo una gamma completa di prodotti assicurativi, selezionati tra le migliori compagnie 
            per garantire la massima protezione al miglior prezzo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servizi.map((servizio, index) => (
            <div
              key={index}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:border-[#c9a227]/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-2xl flex items-center justify-center text-white mb-6">
                {servizio.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">{servizio.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{servizio.description}</p>
              <ul className="space-y-2">
                {servizio.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#c9a227] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contatti"
            className="inline-flex items-center bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Richiedi un preventivo gratuito
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
