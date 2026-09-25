import { useState } from 'react';

export default function Calcolatore() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipoVeicolo: '',
    targa: '',
    classe: '',
    dataNascita: '',
    provincia: '',
    utilizzo: '',
    copertura: [] as string[],
    nome: '',
    email: '',
    telefono: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value: string) => {
    const current = formData.copertura;
    if (current.includes(value)) {
      setFormData({ ...formData, copertura: current.filter(v => v !== value) });
    } else {
      setFormData({ ...formData, copertura: [...current, value] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In produzione: invio dati al backend via API
    // fetch('/api/preventivo', { method: 'POST', body: JSON.stringify(formData) })
  };

  const classiMU = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

  if (submitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-[#1a365d]/5 to-[#2c5282]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4 font-display">Richiesta inviata!</h2>
            <p className="text-gray-600 text-lg mb-6">
              Grazie per la tua richiesta. Un nostro consulente ti contatterà entro <strong>24 ore lavorative</strong> con 
              il preventivo personalizzato confrontando le offerte di oltre 20 compagnie.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 text-left mb-6">
              <h4 className="font-semibold text-[#1a365d] mb-3">Riepilogo richiesta:</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-gray-500">Veicolo:</span> <span className="font-medium">{formData.tipoVeicolo || '-'}</span></div>
                <div><span className="text-gray-500">Targa:</span> <span className="font-medium">{formData.targa || '-'}</span></div>
                <div><span className="text-gray-500">Classe:</span> <span className="font-medium">{formData.classe || '-'}</span></div>
                <div><span className="text-gray-500">Provincia:</span> <span className="font-medium">{formData.provincia || '-'}</span></div>
              </div>
            </div>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setFormData({ tipoVeicolo: '', targa: '', classe: '', dataNascita: '', provincia: '', utilizzo: '', copertura: [] as string[], nome: '', email: '', telefono: '' }); }}
              className="text-[#c9a227] font-semibold hover:underline"
            >
              Richiedi un altro preventivo
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a365d]/5 to-[#2c5282]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#c9a227]/10 text-[#c9a227] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Preventivo Rapido
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4 font-display">
            Calcola la tua RC Auto
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Compila il form in pochi passaggi. Confronteremo le offerte di oltre 20 compagnie 
            per trovarti il prezzo migliore.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                step >= s ? 'bg-[#c9a227] text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-16 sm:w-24 h-1 mx-2 rounded ${step > s ? 'bg-[#c9a227]' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Veicolo */}
            {step === 1 && (
              <div className="fade-in">
                <h3 className="text-xl font-bold text-[#1a365d] mb-6">🚗 Informazioni sul veicolo</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo di veicolo *</label>
                    <select name="tipoVeicolo" value={formData.tipoVeicolo} onChange={handleChange} required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20">
                      <option value="">Seleziona...</option>
                      <option value="auto">Autovettura</option>
                      <option value="moto">Motociclo</option>
                      <option value="camion">Camion/Furgone</option>
                      <option value="camper">Camper</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Targa *</label>
                    <input type="text" name="targa" value={formData.targa} onChange={handleChange} required
                      placeholder="es. AB123CD"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 uppercase" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Classe di merito (CU) *</label>
                    <select name="classe" value={formData.classe} onChange={handleChange} required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20">
                      <option value="">Seleziona...</option>
                      {classiMU.map(c => <option key={c} value={c}>Classe {c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Utilizzo del veicolo *</label>
                    <select name="utilizzo" value={formData.utilizzo} onChange={handleChange} required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20">
                      <option value="">Seleziona...</option>
                      <option value="casa-lavoro">Casa-Lavoro</option>
                      <option value="pleasure">Pleasure (solo svago)</option>
                      <option value="lavoro">Uso professionale</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={() => setStep(2)}
                    className="bg-gradient-to-r from-[#c9a227] to-[#d4b445] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Avanti →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Coperture */}
            {step === 2 && (
              <div className="fade-in">
                <h3 className="text-xl font-bold text-[#1a365d] mb-6">🛡️ Coperture desiderate</h3>
                <p className="text-gray-600 mb-6">Seleziona le garanzie aggiuntive che ti interessano:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { value: 'rc', label: 'RC Auto (obbligatoria)', required: true },
                    { value: 'furto', label: 'Furto e Incendio' },
                    { value: 'cristalli', label: 'Cristalli' },
                    { value: 'kasko', label: 'Kasko' },
                    { value: 'infortuni', label: 'Infortuni conducente' },
                    { value: 'assistenza', label: 'Assistenza stradale' },
                    { value: 'tutela', label: 'Tutela legale' },
                    { value: 'atti', label: 'Atti vandalici' },
                    { value: 'eventi', label: 'Eventi naturali' },
                  ].map((item) => (
                    <label key={item.value} className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.copertura.includes(item.value) ? 'border-[#c9a227] bg-[#c9a227]/5' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input type="checkbox" checked={formData.copertura.includes(item.value)} onChange={() => handleCheckbox(item.value)}
                        className="w-5 h-5 text-[#c9a227] rounded mr-3" />
                      <span className="font-medium text-gray-700">{item.label}</span>
                      {item.required && <span className="ml-auto text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">Obbligatoria</span>}
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={() => setStep(1)}
                    className="text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                    ← Indietro
                  </button>
                  <button type="button" onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-[#c9a227] to-[#d4b445] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Avanti →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contatti */}
            {step === 3 && (
              <div className="fade-in">
                <h3 className="text-xl font-bold text-[#1a365d] mb-6">📧 I tuoi contatti</h3>
                <p className="text-gray-600 mb-6">Inserisci i tuoi dati per ricevere il preventivo personalizzato:</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome e Cognome *</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required
                      placeholder="Mario Rossi"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="mario@email.it"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefono *</label>
                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required
                      placeholder="+39 333 1234567"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Provincia *</label>
                    <input type="text" name="provincia" value={formData.provincia} onChange={handleChange} required
                      placeholder="es. Roma"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data di nascita</label>
                    <input type="date" name="dataNascita" value={formData.dataNascita} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20" />
                  </div>
                </div>
                <div className="mt-6 flex items-start space-x-2">
                  <input type="checkbox" required className="mt-1 rounded border-gray-300" />
                  <span className="text-xs text-gray-500">
                    Acconsento al trattamento dei dati personali per ricevere il preventivo richiesto. *
                  </span>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={() => setStep(2)}
                    className="text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                    ← Indietro
                  </button>
                  <button type="submit"
                    className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Richiedi Preventivo Gratuito
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#1a365d] mb-1">Come funziona il preventivo?</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le tariffe RC Auto variano in base a molti fattori (veicolo, conducente, storico, compagnia). 
                Per questo motivo, il nostro sistema raccoglie i tuoi dati e li confronta con oltre 20 compagnie 
                per fornirti il preventivo più preciso e conveniente. Riceverai la risposta entro 24 ore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
