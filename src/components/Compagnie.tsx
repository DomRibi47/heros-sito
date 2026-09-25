export default function Compagnie() {
  const compagnie = [
    { name: 'Generali', color: '#003876' },
    { name: 'Allianz', color: '#003781' },
    { name: 'AXA', color: '#00008f' },
    { name: 'UnipolSai', color: '#005eb8' },
    { name: 'Reale Mutua', color: '#c8102e' },
    { name: 'Cattolica', color: '#003366' },
    { name: 'Sara Assicurazioni', color: '#003d7a' },
    { name: 'Zurich', color: '#003399' },
    { name: 'Lloyd Adriatico', color: '#004b87' },
    { name: 'Groupama', color: '#6d2077' },
    { name: 'Helvetia', color: '#00534c' },
    { name: 'Italia Assicurazioni', color: '#0066b3' },
  ];

  return (
    <section id="compagnie" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            I Nostri Partner
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4 font-display">
            Le migliori compagnie assicurative
          </h2>
          <p className="text-gray-600 text-lg">
            Collaboriamo con le principali compagnie assicurative italiane e internazionali 
            per offrirti sempre la soluzione più adatta alle tue esigenze.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {compagnie.map((compagnia, index) => (
            <div
              key={index}
              className="card-hover bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#c9a227]/30 hover:bg-white"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg"
                style={{ backgroundColor: compagnia.color }}
              >
                {compagnia.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-[#1a365d] text-sm">{compagnia.name}</h3>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1a365d] to-[#2c5282] rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Perché scegliere un broker?</h3>
              <p className="text-white/80 leading-relaxed">
                Un broker assicurativo lavora esclusivamente per te. A differenza di un agente 
                legato a una singola compagnia, il broker confronta le offerte di molteplici 
                assicuratori per trovare la polizza migliore per le tue specifiche esigenze.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Confronto tra 20+ compagnie</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Consulenza indipendente</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Assistenza sinistri dedicata</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/90">Nessun costo aggiuntivo per te</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
