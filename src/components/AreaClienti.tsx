import { useState } from 'react';

export default function AreaClienti() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const polizze = [
    {
      tipo: 'RC Auto',
      compagno: 'Generali',
      premio: '€ 450,00',
      scadenza: '15/03/2026',
      stato: 'Attiva',
      targa: 'AB123CD',
    },
    {
      tipo: 'Multirischio Casa',
      compagno: 'Allianz',
      premio: '€ 320,00',
      scadenza: '20/06/2026',
      stato: 'Attiva',
      targa: '-',
    },
    {
      tipo: 'Infortuni',
      compagno: 'AXA',
      premio: '€ 180,00',
      scadenza: '10/09/2026',
      stato: 'Attiva',
      targa: '-',
    },
  ];

  if (!isLoggedIn) {
    return (
      <section id="area-clienti" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Info */}
            <div>
              <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Area Riservata
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-6 font-display">
                Area Clienti
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Accedi alla tua area riservata per gestire le tue polizze, consultare le scadenze, 
                scaricare documenti e richiedere assistenza in qualsiasi momento.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Scarica certificati e documenti</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Consulta le scadenze delle polizze</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Richiedi assistenza sinistri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Ricevi notifiche e promemoria</span>
                </div>
              </div>
            </div>

            {/* Right - Login Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Accedi</h3>
              <p className="text-gray-500 text-sm mb-8">Inserisci le tue credenziali per accedere</p>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                    placeholder="la-tua-email@esempio.it"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 transition-all"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 mr-2" />
                    <span className="text-sm text-gray-600">Ricordami</span>
                  </label>
                  <a href="#" className="text-sm text-[#c9a227] font-medium hover:underline">
                    Password dimenticata?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Accedi
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  Non sei ancora cliente?{' '}
                  <a href="#contatti" className="text-[#c9a227] font-semibold hover:underline">
                    Contattaci
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Dashboard (logged in)
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] font-display">Bentornato!</h2>
            <p className="text-gray-600">Ecco il riepilogo delle tue polizze</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="mt-4 sm:mt-0 text-sm text-gray-500 hover:text-[#c9a227] font-medium"
          >
            Esci →
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-sm text-gray-500">Polizze attive</p>
            <p className="text-2xl font-bold text-[#1a365d]">{polizze.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-sm text-gray-500">Premio totale</p>
            <p className="text-2xl font-bold text-[#c9a227]">€ 950</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-sm text-gray-500">Prossima scadenza</p>
            <p className="text-2xl font-bold text-[#1a365d]">15 Mar</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-sm text-gray-500">Sinistri aperti</p>
            <p className="text-2xl font-bold text-green-600">0</p>
          </div>
        </div>

        {/* Polizze Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-[#1a365d]">Le tue polizze</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Tipo</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Compagnia</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Premio</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Scadenza</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Stato</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Azioni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {polizze.map((polizza, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-[#1a365d] text-sm">{polizza.tipo}</p>
                        <p className="text-xs text-gray-500">{polizza.targa}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{polizza.compagno}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#1a365d]">{polizza.premio}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{polizza.scadenza}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {polizza.stato}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-sm text-[#c9a227] font-medium hover:underline">
                        Dettagli
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <p className="text-sm text-blue-700">
            <strong>Demo:</strong> Questa è un'area clienti dimostrativa. In produzione, sarà collegata 
            a un sistema di autenticazione reale con database delle polizze.
          </p>
        </div>
      </div>
    </section>
  );
}
