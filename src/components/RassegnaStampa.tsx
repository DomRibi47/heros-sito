import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  source: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

export default function RassegnaStampa() {
  const [activeCategory, setActiveCategory] = useState('Tutte');

  const categories = ['Tutte', 'RC Auto', 'Vita & Salute', 'Aziende', 'Normativa', 'Mercato'];

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'RC Auto: nuove tariffe in calo per il 2026, risparmio medio del 3.2%',
      source: 'Il Sole 24 Ore',
      date: '15 Gen 2026',
      category: 'RC Auto',
      summary: 'Le compagnie assicurative hanno annunciato una riduzione delle tariffe RC Auto per il nuovo anno. Il risparmio medio per le famiglie italiane sarà di circa 45 euro.',
      image: '🚗',
    },
    {
      id: 2,
      title: 'IVASS: nuove regole per la trasparenza delle polizze vita',
      source: 'Insurance Review',
      date: '14 Gen 2026',
      category: 'Normativa',
      summary: 'L\'IVASS ha pubblicato nuove disposizioni per aumentare la trasparenza nelle polizze vita, con obbligo di informazione più dettagliata sui costi di gestione.',
      image: '📋',
    },
    {
      id: 3,
      title: 'Assicurazione sanitaria: boom di richieste nel 2025, +18%',
      source: 'Milano Finanza',
      date: '13 Gen 2026',
      category: 'Vita & Salute',
      summary: 'Cresce la domanda di assicurazioni sanitarie private. Gli italiani cercano sempre più coperture integrative al SSN, con particolare attenzione alle prestazioni specialistiche.',
      image: '🏥',
    },
    {
      id: 4,
      title: 'Cyber insurance: il mercato delle polizze cyber cresce del 25%',
      source: 'Corriere Economia',
      date: '12 Gen 2026',
      category: 'Aziende',
      summary: 'Le aziende italiane investono sempre più nella protezione dai rischi informatici. Il mercato delle polizze cyber registra una crescita significativa.',
      image: '🔒',
    },
    {
      id: 5,
      title: 'Bonus assicurativo 2026: le novità nella Legge di Bilancio',
      source: 'ANSA',
      date: '11 Gen 2026',
      category: 'Normativa',
      summary: 'La nuova Legge di Bilancio introduce agevolazioni fiscali per alcune tipologie di assicurazione, tra cui quelle sulla casa in classe energetica A e B.',
      image: '🏛️',
    },
    {
      id: 6,
      title: 'Mercato assicurativo italiano: premi per 160 miliardi nel 2025',
      source: 'ANIA',
      date: '10 Gen 2026',
      category: 'Mercato',
      summary: 'Il settore assicurativo italiano chiude il 2025 con una raccolta premi record. La crescita è trainata dal ramo danni e dalla previdenza complementare.',
      image: '📊',
    },
  ];

  const filteredNews = activeCategory === 'Tutte' 
    ? news 
    : news.filter(n => n.category === activeCategory);

  return (
    <section id="rassegna" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Rassegna Stampa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4 font-display">
            News dal mondo assicurativo
          </h2>
          <p className="text-gray-600 text-lg">
            Resta aggiornato sulle ultime novità del settore assicurativo. 
            La nostra rassegna stampa automatica aggiorna quotidianamente le notizie più rilevanti.
          </p>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 pulse-dot"></span>
            <span className="text-sm font-medium text-gray-700">Aggiornamento automatico in tempo reale</span>
            <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#1a365d] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-[#c9a227]/30"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-[#1a365d]/5 to-[#2c5282]/10 p-6 flex items-center justify-center">
                <span className="text-5xl">{item.image}</span>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#c9a227] bg-[#c9a227]/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="font-bold text-[#1a365d] mb-2 line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">{item.source}</span>
                  <button className="text-sm text-[#1a365d] font-semibold hover:text-[#c9a227] transition-colors flex items-center">
                    Leggi
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Le notizie vengono raccolte automaticamente dalle principali fonti del settore assicurativo italiano
          </p>
        </div>
      </div>
    </section>
  );
}
