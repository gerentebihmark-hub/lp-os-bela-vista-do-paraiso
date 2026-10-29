import { useState, useEffect } from 'react';
import { UserCheck, Smile, Award, ArrowRight, HeartPulse, Timer, BriefcaseMedical, Wand2, ShieldCheck, Dna, Users, CreditCard, ChevronLeft, ChevronRight, ArrowLeftRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Features() {
  const [virtualIndex, setVirtualIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [sliderPosition, setSliderPosition] = useState(50);

  const stories = [
    '/images/story-1.webp',
    '/images/story-2.webp',
    '/images/story-3.webp',
    '/images/story-4.webp',
    '/images/story-5.webp'
  ];

  const prefixLength = 3;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const clonedStories = [
    ...stories.slice(-prefixLength),
    ...stories,
    ...stories.slice(0, prefixLength)
  ];

  const nextSlide = () => {
    setVirtualIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setVirtualIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (virtualIndex >= stories.length + prefixLength) {
      setIsTransitioning(false);
      setVirtualIndex(virtualIndex - stories.length);
    } else if (virtualIndex < prefixLength) {
      setIsTransitioning(false);
      setVirtualIndex(virtualIndex + stories.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="w-full bg-transparent">
      <div className="w-full relative py-16 border-b border-border-light shadow-inner overflow-hidden">
        {/* Background Layer with reduced opacity */}
        <div className="absolute inset-0 bg-custom-image opacity-[0.15] pointer-events-none" />
        {/* Radial wash to fade the details even more in the middle of the section */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 85%)' }}
        />
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col gap-12 relative z-10">
          <section className="flex flex-col gap-10 scroll-mt-16 md:scroll-mt-20" id="tratamentos">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-dark-green text-3xl md:text-4xl font-black leading-tight tracking-wider uppercase flex items-center justify-center gap-3">
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
            Nossos Tratamentos
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
          </h2>
          <p className="text-dark-green/80 text-lg font-semibold leading-relaxed">
            Oferecemos soluções completas para a sua saúde bucal com tecnologia de ponta e profissionais especializados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: HeartPulse, 
              title: 'Implantes Dentários', 
              desc: 'Soluções definitivas para repor dentes perdidos com segurança e conforto.',
              message: 'Olá, gostaria de saber mais sobre Implantes Dentários.',
              image: '/images/tratamento-implantes.webp'
            },
            { 
              icon: Timer, 
              title: 'Carga Imediata', 
              desc: 'Seu sorriso novo em até 72 horas. Agilidade para quem não pode esperar.',
              message: 'Olá, gostaria de saber mais sobre o tratamento de Carga Imediata.',
              image: '/images/tratamento-carga-imediata.webp'
            },
            { 
              icon: BriefcaseMedical, 
              title: 'Prótese Dentária', 
              desc: 'Devolvendo a função mastigatória e a estética natural do seu sorriso.',
              message: 'Olá, gostaria de receber mais informações sobre Prótese Dentária.',
              image: '/images/tratamento-protese.webp'
            },
            { 
              icon: Wand2, 
              title: 'Estética Dental', 
              desc: 'Facetas, lentes de contato e clareamento para um sorriso radiante.',
              message: 'Olá, gostaria de saber mais sobre os procedimentos de Estética Dental (facetas, lentes, clareamento).',
              image: '/images/tratamento-estetica.webp'
            }
          ].map((t, i) => (
            <div key={i} className="flex flex-col gap-5 rounded-3xl border border-border-light bg-surface-light p-5 hover:-translate-y-1 transition-transform duration-300 shadow-sm overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-inner border border-border-light">
                <img 
                  src={t.image} 
                  alt={t.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex items-center gap-3 mt-1">
                <div className="w-10 h-10 rounded-full bg-dark-green/10 flex items-center justify-center shrink-0">
                  <t.icon className="text-dark-green" size={20} />
                </div>
                <h3 className="text-dark-green text-lg font-bold leading-tight">{t.title}</h3>
              </div>
              
              <div className="flex flex-col gap-2 flex-grow">
                <p className="text-dark-green/80 text-sm font-medium leading-relaxed">{t.desc}</p>
              </div>
              
              <a 
                href={`https://wa.me/5543996419282?text=${encodeURIComponent(t.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-3 rounded-xl bg-primary hover:bg-[#45b025] text-white hover:scale-[1.02] transition-all font-bold text-sm cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppIcon size={16} />
                Saiba Mais
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <a 
            href={`https://wa.me/5543996419282?text=${encodeURIComponent("Olá, gostaria de conhecer todos os tratamentos disponíveis na Oral Sin Bela Vista do Paraíso.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-primary hover:bg-[#45b025] font-bold hover:scale-105 transition-all duration-300 cursor-pointer text-base px-8 py-4 rounded-full shadow-md"
          >
            <WhatsAppIcon size={20} />
            Ver todos os tratamentos
          </a>
        </div>
      </section>

      <section className="pb-8 scroll-mt-16 md:scroll-mt-20" id="sobre">
        <div className="bg-surface-light border border-border-light rounded-[2rem] overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-dark-green mb-4">Liberdade para sorrir!</h2>
                <p className="text-dark-green/80 text-lg leading-relaxed font-medium">
                  Na Oral Sin, acreditamos que um sorriso saudável transforma vidas. Nossa equipe multidisciplinar utiliza o que há de mais moderno na odontologia para garantir seu conforto e segurança.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: 'Certificação ISO', desc: 'Qualidade garantida em processos.' },
                  { icon: Dna, title: 'Tecnologia 3D', desc: 'Precisão absoluta no diagnóstico.' },
                  { icon: Users, title: 'Equipe Especializada', desc: 'Profissionais experientes.' },
                  { icon: CreditCard, title: 'Facilidade de Pagamento', desc: 'Parcelamento acessível.' }
                ].map((i, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="min-w-10 w-10 h-10 rounded-full bg-dark-green/10 flex items-center justify-center text-dark-green">
                      <i.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-dark-green font-bold mb-1">{i.title}</h4>
                      <p className="text-sm text-dark-green/80 font-medium">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[400px] bg-cover bg-top relative animate-fade-in" style={{ backgroundImage: "url('/images/dra-lidiane.jpg')" }}>
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-border-light min-w-[200px]">
                <p className="text-dark-green font-extrabold text-lg leading-tight">Dra. Lidiane Martins</p>
                <p className="text-dark-green/80 text-xs font-bold tracking-wider">Responsável Técnica | CRO PR-28007</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 flex flex-col gap-8 scroll-mt-6 md:scroll-mt-8" id="historias">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-dark-green text-3xl md:text-4xl font-black leading-tight tracking-wider uppercase flex items-center justify-center gap-3">
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
            Histórias Reais
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
          </h2>
          <div className="flex flex-col gap-1">
            <p className="text-dark-green font-extrabold text-lg md:text-xl leading-relaxed">
              Quando o bem-estar e a autoestima se unem, o sorriso aparece!
            </p>
            <p className="text-dark-green/70 text-sm md:text-base font-medium">
              Veja alguns casos reais de pessoas que voltaram a sorrir.
            </p>
          </div>
        </div>

        <div className="relative w-full px-2">
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-dark-green flex items-center justify-center shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-border-light"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider Wrapper */}
          <div className="overflow-hidden mx-4 md:mx-8">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ 
                transform: `translateX(-${virtualIndex * (100 / visibleSlides)}%)` 
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {clonedStories.map((src, index) => (
                <div 
                  key={index} 
                  className="px-3 shrink-0"
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-lg border border-border-light hover:shadow-xl transition-all duration-300 bg-white group">
                    <img 
                      src={src} 
                      alt={`Caso Real ${index + 1}`} 
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-dark-green flex items-center justify-center shadow-lg hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-border-light"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Before/After Slider */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-dark-green tracking-tight">Antes e Depois</h3>
            <p className="text-dark-green/70 text-sm md:text-base font-medium mt-1">Arraste a linha central para comparar os resultados de perto.</p>
          </div>
          
          <div className="w-full max-w-3xl aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative group select-none border border-border-light bg-slate-100">
            {/* Depois (Base Image) */}
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/depois.webp')" }}>
              <div className="absolute top-6 right-6 bg-[#00e6b0] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">Depois</div>
            </div>
            {/* Antes (Clipped Reveal Image) */}
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`, backgroundImage: "url('/images/antes.webp')" }}>
              <div className="absolute top-6 left-6 bg-[#1e293b]/80 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">Antes</div>
            </div>
            {/* Slider Handle & Divider Line */}
            <div className="absolute top-0 bottom-0 flex flex-col items-center pointer-events-none z-10" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
              <div className="w-0.5 h-full bg-white/80 shadow-sm" />
              <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20">
                <ArrowLeftRight className="text-dark-green" size={24} />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-3 flex items-center gap-3 shadow-xl max-w-[220px] pointer-events-none z-30">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-dark-green font-bold text-sm">Transformação Real</span>
                <span className="text-dark-green/70 text-[10px] leading-tight font-medium">Carga imediata em até 72h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
