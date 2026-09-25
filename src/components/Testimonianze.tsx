import { useState } from 'react';

export default function Testimonianze() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marco Bianchi',
      role: 'Imprenditore',
      text: 'Heros mi ha seguito nella gestione delle polizze aziendali con grande professionalità. Risparmio del 30% rispetto al precedente intermediario e un servizio impeccabile.',
      rating: 5,
      avatar: 'MB',
    },
    {
      name: 'Laura Rossi',
      role: 'Libera professionista',
      text: 'Finalmente un broker che ascolta davvero le esigenze del cliente. Mi hanno trovato una polizza sanitaria perfetta per le mie necessità, a un prezzo competitivo.',
      rating: 5,
      avatar: 'LR',
    },
    {
      name: 'Giuseppe Verdi',
      role: 'Famiglia',
      text: 'Assistenza sinistri eccezionale. Dopo un incidente stradale, Heros mi ha guidato in ogni passo della gestione del sinistro. Consigliatissimi!',
      rating: 5,
      avatar: 'GV',
    },
    {
      name: 'Anna Colombo',
      role: 'Proprietaria immobile',
      text: 'Grazie a Heros ho trovato la polizza multirischio perfetta per il mio appartamento. Preventivo chiaro, nessuna sorpresa, e un prezzo molto competitivo.',
      rating: 5,
      avatar: 'AC',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimonianze
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4 font-display">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-gray-600 text-lg">
            La soddisfazione dei nostri clienti è la nostra migliore referenza.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card-hover bg-white border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? 'border-[#c9a227] shadow-lg ring-2 ring-[#c9a227]/20'
                  : 'border-gray-100 hover:border-[#c9a227]/30'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1a365d] text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <p className="text-3xl font-bold text-[#c9a227]">4.9/5</p>
            <p className="text-sm text-gray-600 mt-1">Valutazione media</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <p className="text-3xl font-bold text-[#c9a227]">98%</p>
            <p className="text-sm text-gray-600 mt-1">Clienti soddisfatti</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <p className="text-3xl font-bold text-[#c9a227]">2000+</p>
            <p className="text-sm text-gray-600 mt-1">Polizze gestite</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <p className="text-3xl font-bold text-[#c9a227]">15+</p>
            <p className="text-sm text-gray-600 mt-1">Anni di attività</p>
          </div>
        </div>
      </div>
    </section>
  );
}
