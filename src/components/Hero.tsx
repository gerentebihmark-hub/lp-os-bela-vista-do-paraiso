import { useState, FormEvent } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { UserCheck, Smile, Award, Sparkles, MapPin } from 'lucide-react';

const TICKER_ITEMS = [
  { text: "A Nº 1 em Implantes no Brasil", icon: Award },
  { text: "Mais de 20 Anos de Experiência", icon: UserCheck },
  { text: "+ de 3 Milhões de Sorrisos Transformados", icon: Smile },
  { text: "Tecnologia de Ponta e Sedação Consciente", icon: Sparkles },
  { text: "A Maior Rede do País (+500 Clínicas)", icon: MapPin },
];

export default function Hero() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [opcao, setOpcao] = useState('Quero agendar uma avaliação');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !telefone.trim()) {
      alert('Por favor, preencha seu nome completo e seu telefone.');
      return;
    }
    const message = `Olá! Meu nome é ${nome.trim()} (WhatsApp: ${telefone.trim()}). Estou enviando esta mensagem através do formulário do site. Assunto: "${opcao}".`;
    const url = `https://wa.me/5543996419282?text=${encodeURIComponent(message)}`;
    
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section 
      className="relative w-full bg-[#00140a] pt-28 sm:pt-32 lg:pt-40 pb-0 bg-cover bg-no-repeat animate-fade-in scroll-mt-16 md:scroll-mt-20 overflow-hidden" 
      id="inicio"
    >
      {/* Background image: control height on mobile to prevent stretching, full height on desktop */}
      <div className="absolute inset-x-0 top-0 h-[780px] md:h-full hero-bg-responsive z-0" />

      {/* Main custom gradient overlay on both mobile and desktop */}
      <div className="absolute inset-x-0 top-0 h-[780px] md:h-full hero-overlay-custom z-0" />

      <div className="relative z-10 max-w-[1280px] mx-auto pl-4 md:pl-6 lg:pl-8 pr-4 md:pr-10 lg:pr-20">
        
        {/* Responsive Grid: Left Column has Headline, Description, and Form. Right Column has the Mini Cards list. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-end items-center">
          
          {/* Left Column: Headline, Description and Form */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left select-none max-w-xl md:max-w-2xl mx-auto lg:mx-0">
            
            {/* Spacer to create negative space on the top of the hero, letting the couple's faces appear clearly */}
            <div className="h-[280px] sm:h-[320px] lg:hidden w-full shrink-0 z-10" />

            {/* Headline and Description */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-white sm:whitespace-nowrap text-center lg:text-left">
                Sorria Novamente em 1 Dia
              </h1>
              <p className="text-white/95 text-lg md:text-xl font-semibold leading-relaxed max-w-xl text-center lg:text-left">
                Recupere sua autoestima e qualidade de vida com implantes dentários de carga imediata. Tecnologia avançada e conforto para você.
              </p>
            </div>

            {/* White Form Card aligned to the left */}
            <div className="w-full max-w-[480px] bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 flex flex-col justify-center">
              <div className="mb-6 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  Inicie sua Transformação
                </h3>
                <p className="text-white/80 text-sm mt-2 font-medium">
                  Envie seus dados para agendar sua avaliação gratuita com nossa equipe especialista.
                </p>
              </div>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-center lg:text-left text-white/95 text-sm font-bold mb-2">Nome Completo</label>
                  <input 
                    className="w-full h-12 rounded-xl bg-white border border-border-light text-dark-green font-semibold px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-dark-green/50 text-center lg:text-left" 
                    placeholder="Digite seu nome" 
                    type="text" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-center lg:text-left text-white/95 text-sm font-bold mb-2">Telefone (WhatsApp)</label>
                  <input 
                    className="w-full h-12 rounded-xl bg-white border border-border-light text-dark-green font-semibold px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-dark-green/50 text-center lg:text-left" 
                    placeholder="(DDD) 99999-9999" 
                    type="tel" 
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-center lg:text-left text-white/95 text-sm font-bold mb-2">Como podemos ajudar?</label>
                  <select 
                    className="w-full h-12 rounded-xl bg-white border border-border-light text-dark-green font-semibold px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-center lg:text-left"
                    value={opcao}
                    onChange={(e) => setOpcao(e.target.value)}
                  >
                    <option className="text-dark-green" value="Quero agendar uma avaliação">Quero agendar uma avaliação</option>
                    <option className="text-dark-green" value="Dúvidas sobre Implantes">Dúvidas sobre Implantes</option>
                    <option className="text-dark-green" value="Outros tratamentos">Outros tratamentos</option>
                  </select>
                </div>
                <button className="mt-4 w-full h-12 rounded-full bg-primary hover:bg-[#45b025] text-white font-bold text-xs sm:text-sm md:text-base whitespace-nowrap px-4 transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2" type="submit">
                  <WhatsAppIcon size={18} />
                  Enviar Mensagem via WhatsApp
                </button>
              </form>
            </div>

          </div>

          {/* Right Column (Mini Cards List) */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full max-w-md lg:max-w-none justify-center lg:justify-start lg:pl-12 select-none mx-auto lg:mx-0">
            
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4 bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-xl hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <UserCheck className="text-white" size={24} />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-white text-2xl font-black tracking-tight leading-none">15.000+</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wide mt-1">Implantes Realizados</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4 bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-xl hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <Smile className="text-white" size={24} />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-white text-2xl font-black tracking-tight leading-none">10.000+</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wide mt-1">Pacientes Satisfeitos</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4 bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-xl hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <Award className="text-white" size={24} />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-white text-2xl font-black tracking-tight leading-none">20+</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wide mt-1">Anos de Experiência</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Rotating Marquee Footer with Glass Effect */}
      <div className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-4 mt-16 md:mt-20 overflow-hidden relative select-none">
        {/* Gradient overlays for smooth fade on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#032812]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#032812]/50 to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {/* First set of items */}
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`set1-${idx}`} className="flex items-center gap-4 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={16} />
              </div>
              <span className="text-white font-bold tracking-wide text-sm md:text-base">{item.text}</span>
              {/* Decorative separator */}
              <span className="text-white/20 ml-8 font-light text-xl">•</span>
            </div>
          ))}
          {/* Duplicate set for seamless continuous loop */}
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`set2-${idx}`} className="flex items-center gap-4 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={16} />
              </div>
              <span className="text-white font-bold tracking-wide text-sm md:text-base">{item.text}</span>
              {/* Decorative separator */}
              <span className="text-white/20 ml-8 font-light text-xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
