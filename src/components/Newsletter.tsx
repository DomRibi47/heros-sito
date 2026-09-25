import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative px-8 py-16 sm:px-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
                  <svg className="w-4 h-4 text-[#c9a227] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-white/90">Newsletter</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
                  Resta aggiornato sul mondo assicurativo
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Iscriviti alla nostra newsletter per ricevere aggiornamenti su normative, 
                  offerte esclusive e consigli per la tua protezione assicurativa.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center text-white/80">
                    <svg className="w-5 h-5 text-[#c9a227] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Novità normative e fiscali</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <svg className="w-5 h-5 text-[#c9a227] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Offerte esclusive per iscritti</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <svg className="w-5 h-5 text-[#c9a227] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Guide e consigli utili</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <svg className="w-5 h-5 text-[#c9a227] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Reminder scadenze polizze</span>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div>
                {subscribed ? (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Iscrizione completata!</h3>
                    <p className="text-white/70">
                      Grazie per esserti iscritto. Riceverai presto le nostre novità.
                    </p>
                    <button
                      onClick={() => setSubscribed(false)}
                      className="mt-4 text-[#c9a227] text-sm font-medium hover:underline"
                    >
                      Iscriviti con un'altra email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-2">Iscriviti ora</h3>
                    <p className="text-white/60 text-sm mb-6">
                      Ricevi la newsletter settimanale gratuitamente
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Il tuo nome"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#c9a227] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="La tua email"
                          required
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#c9a227] transition-colors"
                        />
                      </div>
                      <div className="flex items-start space-x-2">
                        <input type="checkbox" required className="mt-1 rounded border-white/30" />
                        <span className="text-white/60 text-xs">
                          Acconsento al trattamento dei dati personali secondo la privacy policy e a ricevere comunicazioni commerciali
                        </span>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#c9a227] to-[#d4b445] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        Iscriviti alla Newsletter
                      </button>
                    </div>
                    
                    <p className="text-white/40 text-xs mt-4 text-center">
                      Puoi cancellarti in qualsiasi momento
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
