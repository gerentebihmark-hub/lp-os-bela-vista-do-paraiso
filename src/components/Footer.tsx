import React, { useState } from 'react';
import { Share2, Instagram, Facebook, Youtube, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    const shareUrl = typeof window !== 'undefined' ? window.location.href : "https://belavistadoparaiso.oralsinbrasil.com.br/";
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Erro ao copiar link:", err);
      });
  };

  return (
    <footer 
      className="relative w-full text-white py-12 px-4 md:px-10 lg:px-40 overflow-hidden bg-transparent"
    >
      {/* Gradiente verde que se sobrepõe suavemente à imagem escurecida apenas na área do rodapé */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-green/55 to-dark-green/95 z-0"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-4 text-white">
            <img alt="Oral Sin Logo" className="h-8 w-auto" src="/images/logo-oralsin-white.png" />
          </div>
          <div className="flex items-center gap-3 relative">
            {copied && (
              <span className="absolute -top-9 right-0 bg-primary text-white text-xs px-2.5 py-1 rounded-md shadow-md font-bold whitespace-nowrap animate-fade-in">
                Link Copiado!
              </span>
            )}
            <button 
              onClick={handleShare}
              title="Compartilhar página (Copiar Link)"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:scale-105 transition-all flex items-center justify-center text-white border border-white/20 shadow-sm cursor-pointer"
            >
              {copied ? <Check size={18} /> : <Share2 size={18} />}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 pb-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Menu</h4>
            <div className="flex flex-col gap-2 text-white/70 text-sm">
              <a className="hover:text-primary transition-colors" href="#inicio">Início</a>
              <a className="hover:text-primary transition-colors" href="#sobre">Sobre</a>
              <a className="hover:text-primary transition-colors" href="#tratamentos">Tratamentos</a>
              <a className="hover:text-primary transition-colors" href="#contato">Contato</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold">Contato e Redes</h4>
            <div className="flex flex-col gap-2 text-white/70 text-sm">
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="https://www.instagram.com/oralsinbelavistadoparaiso?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} />
                <span>@oralsinbelavistadoparaiso</span>
              </a>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="https://www.facebook.com/oralsinbelavistadoparaiso?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                <Facebook size={16} />
                <span>Oral Sin Bela Vista do Paraíso</span>
              </a>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="https://wa.me/5543996419282" target="_blank" rel="noopener noreferrer">
                <span className="text-primary font-bold">✆</span>
                <span>(43) 99641-9282</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-2">
            <h4 className="text-white font-bold">Certificações e Prêmios</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <img 
                src="/images/selo-2019.webp" 
                alt="Selo Melhores Franquias do Brasil 2019" 
                className="w-14 h-14 object-contain"
                referrerPolicy="no-referrer"
              />
              <img 
                src="/images/selo-2020.webp" 
                alt="Selo Melhores Franquias do Brasil 2020" 
                className="w-14 h-14 object-contain"
                referrerPolicy="no-referrer"
              />
              <img 
                src="/images/selo-2022.webp" 
                alt="Selo Melhores Franquias do Brasil 2022" 
                className="w-14 h-14 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p>© 2026 Oral Sin Bela Vista do Paraíso. Todos os direitos reservados.</p>
            <p className="opacity-70">Responsável Técnica: Dra. Lidiane Martins | CRO PR-28007</p>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-primary transition-colors" href="#">Política de Privacidade</a>
            <a className="hover:text-primary transition-colors" href="#">Termos de Uso</a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 pt-4">
          <img 
            src="/images/logo-bmk.png" 
            alt="BMK Logo" 
            className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </footer>
  );
}
