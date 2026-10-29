import { useState, FormEvent } from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
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
    
    // Use an anchor click pattern for maximum compatibility with iframe sandboxes
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section 
      className="relative w-full py-24 overflow-hidden scroll-mt-0 bg-transparent" 
      id="contato"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        <div className="w-full bg-black/10 backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] border border-white/20 overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02]">
          <div className="p-8 md:p-12 lg:p-16 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Agende agora <br />sua avaliação</h2>
            <p className="text-white/90 mb-8 max-w-md">Preencha o formulário ao lado e entraremos em contato para agendar sua avaliação gratuita.</p>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/5543996419282" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary border border-white/20 shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon size={20} />
                </div>
                <span className="font-bold text-lg text-white">(43) 99641-9282</span>
              </a>
              <a 
                href="tel:+5543996419282" 
                className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary border border-white/20 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <span className="font-bold text-lg text-white">(43) 99641-9282</span>
              </a>
              <a 
                href="https://www.instagram.com/oralsinbelavistadoparaiso?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary border border-white/20 shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram size={18} />
                </div>
                <span className="font-bold text-sm md:text-base text-white break-all">@oralsinbelavistadoparaiso</span>
              </a>
              <a 
                href="https://www.facebook.com/oralsinbelavistadoparaiso?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary border border-white/20 shrink-0 group-hover:scale-105 transition-transform">
                  <Facebook size={18} />
                </div>
                <span className="font-bold text-sm md:text-base text-white break-all">Oral Sin Bela Vista do Paraíso</span>
              </a>
            </div>
          </div>
          <div className="p-8 md:p-12 md:w-1/2 border-t md:border-t-0 md:border-l border-white/10">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white text-sm font-bold mb-2">Nome Completo</label>
                <input 
                  className="w-full h-12 rounded-xl bg-white/10 border border-white/20 text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-white/50" 
                  placeholder="Digite seu nome" 
                  type="text" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2">Telefone (WhatsApp)</label>
                <input 
                  className="w-full h-12 rounded-xl bg-white/10 border border-white/20 text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-white/50" 
                  placeholder="(DDD) 99999-9999" 
                  type="tel" 
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-bold mb-2">Como podemos ajudar?</label>
                <select 
                  className="w-full h-12 rounded-xl bg-white/10 border border-white/20 text-white px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                  value={opcao}
                  onChange={(e) => setOpcao(e.target.value)}
                >
                  <option className="text-slate-900 bg-white" value="Quero agendar uma avaliação">Quero agendar uma avaliação</option>
                  <option className="text-slate-900 bg-white" value="Dúvidas sobre Implantes">Dúvidas sobre Implantes</option>
                  <option className="text-slate-900 bg-white" value="Outros tratamentos">Outros tratamentos</option>
                </select>
              </div>
              <button className="mt-4 w-full h-12 rounded-full bg-primary hover:bg-[#45b025] text-white font-bold text-lg transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2" type="submit">
                <WhatsAppIcon size={22} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
