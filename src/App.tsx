import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servizi from './components/Servizi';
import Calcolatore from './components/Calcolatore';
import ComeFunziona from './components/ComeFunziona';
import ChiSiamo from './components/ChiSiamo';
import Compagnie from './components/Compagnie';
import RassegnaStampa from './components/RassegnaStampa';
import Testimonianze from './components/Testimonianze';
import AreaClienti from './components/AreaClienti';
import Newsletter from './components/Newsletter';
import Contatti from './components/Contatti';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Servizi />
        <Calcolatore />
        <ComeFunziona />
        <ChiSiamo />
        <Compagnie />
        <RassegnaStampa />
        <Testimonianze />
        <AreaClienti />
        <Newsletter />
        <Contatti />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
