/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Imagens organizadas na pasta public/images para correta exibição e build no Vercel
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Social from './components/Social';
import Faq from './components/Faq';
import Clinic from './components/Clinic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        
        <Features />
        <Social />
        <Faq />
        <Clinic />
        
        <div 
          className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
          style={{ backgroundImage: "url('/images/clinica-bg.webp')" }}
        >
          {/* Overlay com gradiente verde mais suave no mobile para clarear o fundo do formulário, e preto no desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#003318]/45 via-[#006932]/45 to-[#00140a]/85 md:from-black/80 md:via-black/80 md:to-black/80 z-0"></div>
          
          <div className="relative z-10">
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
