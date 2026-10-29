import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '5543996419282';
  const text = encodeURIComponent('Olá! Gostaria de falar com um especialista sobre os tratamentos da Oral Sin.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip text showing on hover */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3 group"
        id="floating-whatsapp-container"
      >
        <span 
          id="floating-whatsapp-label"
          className={`bg-dark-green text-white text-xs md:text-sm font-extrabold px-4 py-2.5 rounded-full shadow-lg border border-white/20 transition-all duration-300 transform origin-right whitespace-nowrap ${
            isHovered 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:scale-100'
          }`}
        >
          FALE COM UM ESPECIALISTA
        </span>
        
        {/* Floating Button */}
        <div 
          id="floating-whatsapp-button"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer relative"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
          <WhatsAppIcon size={28} className="relative z-10 text-white" />
        </div>
      </a>
    </div>
  );
}
