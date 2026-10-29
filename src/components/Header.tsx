import { useState, useEffect } from 'react';
import { Menu, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out bg-dark-green/90 backdrop-blur-md border border-white/15 shadow-xl rounded-[2rem] md:rounded-full flex flex-wrap items-center justify-between whitespace-nowrap ${
      isScrolled 
        ? 'w-[calc(100%-2.5rem)] md:w-[calc(100%-6rem)] max-w-[1080px] px-5 py-1.5 md:py-2' 
        : 'w-[calc(100%-1.5rem)] md:w-[calc(100%-3rem)] max-w-[1280px] px-6 py-3 md:py-2.5'
    }`}>
      <div className="flex items-center gap-4 text-white">
        <img 
          alt="Oral Sin Logo" 
          className={`w-auto transition-all duration-300 ${isScrolled ? 'h-6 md:h-7' : 'h-8 md:h-9'}`} 
          src="/images/logo-oralsin-white.png" 
        />
      </div>
      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <nav className={`flex items-center transition-all duration-300 ${isScrolled ? 'gap-4' : 'gap-6'}`}>
          <a className="text-white hover:text-primary transition-colors text-xs font-bold uppercase leading-normal tracking-wider" href="#inicio">Início</a>
          <a className="text-white hover:text-primary transition-colors text-xs font-bold uppercase leading-normal tracking-wider" href="#tratamentos">Tratamentos</a>
          <a className="text-white hover:text-primary transition-colors text-xs font-bold uppercase leading-normal tracking-wider" href="#sobre">Doutor</a>
          <a className="text-white hover:text-primary transition-colors text-xs font-bold uppercase leading-normal tracking-wider" href="#historias">Depoimentos</a>
          <a className="text-white hover:text-primary transition-colors text-xs font-bold uppercase leading-normal tracking-wider" href="#faq">Dúvidas</a>
          <a className="text-white hover:text-primary transition-colors text-xs font-bold uppercase leading-normal tracking-wider" href="#clinica">Localização</a>
          <a className="text-white hover:text-primary transition-colors text-xs font-bold uppercase leading-normal tracking-wider" href="#contato">Contato</a>
        </nav>
        <a 
          href="tel:+5543996419282"
          className={`flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full transition-all duration-300 bg-primary hover:bg-[#45b025] text-white font-bold leading-normal tracking-[0.033em] uppercase ${
            isScrolled ? 'h-8 px-4 text-[10px]' : 'h-9 px-5 text-xs'
          }`}
        >
          <Phone size={14} fill="currentColor" />
          <span className="truncate">Fale Conosco Agora</span>
        </a>
      </div>
      <button 
        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={20} />
      </button>
      {isOpen && (
        <div className="w-full lg:hidden mt-3 flex flex-col items-center text-center gap-3 pb-3 border-t border-white/10 pt-3 px-2">
          <a className="w-full text-center text-white hover:text-primary transition-colors text-sm font-bold uppercase leading-normal tracking-wider" href="#inicio" onClick={() => setIsOpen(false)}>Início</a>
          <a className="w-full text-center text-white hover:text-primary transition-colors text-sm font-bold uppercase leading-normal tracking-wider" href="#tratamentos" onClick={() => setIsOpen(false)}>Tratamentos</a>
          <a className="w-full text-center text-white hover:text-primary transition-colors text-sm font-bold uppercase leading-normal tracking-wider" href="#sobre" onClick={() => setIsOpen(false)}>Doutor</a>
          <a className="w-full text-center text-white hover:text-primary transition-colors text-sm font-bold uppercase leading-normal tracking-wider" href="#historias" onClick={() => setIsOpen(false)}>Depoimentos</a>
          <a className="w-full text-center text-white hover:text-primary transition-colors text-sm font-bold uppercase leading-normal tracking-wider" href="#faq" onClick={() => setIsOpen(false)}>Dúvidas</a>
          <a className="w-full text-center text-white hover:text-primary transition-colors text-sm font-bold uppercase leading-normal tracking-wider" href="#clinica" onClick={() => setIsOpen(false)}>Localização</a>
          <a className="w-full text-center text-white hover:text-primary transition-colors text-sm font-bold uppercase leading-normal tracking-wider" href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
          <a 
            href="tel:+5543996419282"
            className="w-full flex items-center justify-center gap-2 rounded-full h-10 px-6 bg-primary text-white text-sm font-bold mt-2 cursor-pointer uppercase tracking-[0.033em] hover:bg-[#45b025] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={16} fill="currentColor" />
            Fale Conosco Agora
          </a>
        </div>
      )}
    </header>
  );
}
