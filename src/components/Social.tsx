import { useState } from 'react';
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    name: "Arnaldo de Souza",
    role: "Implante Dentário",
    text: "O tratamento foi excelente do início ao fim. O doutor me passou muita segurança e não senti absolutamente nada de dor durante o procedimento do implante. O atendimento da equipe é nota 10, sempre muito solícitos e educados.",
    rating: 5,
    location: "São Paulo - SP",
    verified: "Reclame Aqui"
  },
  {
    name: "Regina Maria C.",
    role: "Prótese Protocolo",
    text: "Estava há anos com vergonha de sorrir. Fazer o tratamento de protocolo na Oral Sin devolveu não apenas o meu sorriso, mas minha mastigação e auto-estima. A clínica é limpa, moderna e a forma de pagamento facilitou muito.",
    rating: 5,
    location: "São Caetano do Sul, SP",
    verified: "Reclame Aqui"
  },
  {
    name: "Carlos Eduardo N.",
    role: "Implante e Estética",
    text: "Super recomendo a Oral Sin! Fui muito bem recebido desde a recepção até os cirurgiões. Todo o processo foi muito rápido e transparente. Se você tem dúvidas, pode ir sem medo, eles são profissionais espetaculares.",
    rating: 5,
    location: "São Caetano do Sul, SP",
    verified: "Reclame Aqui"
  },
  {
    name: "Tereza Cristina F.",
    role: "Tratamento de Implantes",
    text: "Minha experiência foi simplesmente perfeita. Eu tinha muito medo de dentista, mas a paciência e dedicação do doutor me acalmaram. Hoje tenho orgulho do meu sorriso e recomendo a Oral Sin para toda a minha família.",
    rating: 5,
    location: "São Paulo - SP",
    verified: "Reclame Aqui"
  },
  {
    name: "João Roberto S.",
    role: "Prótese sobre Implante",
    text: "Fiquei impressionado com a tecnologia da clínica e a agilidade. Em poucas consultas meu sorriso estava completo novamente. Um atendimento humanizado de altíssima qualidade que merece nota máxima.",
    rating: 5,
    location: "Santo André - SP",
    verified: "Reclame Aqui"
  }
];

export default function Social() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
  };

  // Circular array helper for responsive rendering
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(REVIEWS[(currentIndex + i) % REVIEWS.length]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div className="w-full">
      <section className="py-20 bg-dark-green text-white" id="depoimentos">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
          
          {/* Section Header */}
          <div className="flex flex-col items-start text-left gap-1 mb-12 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mt-1">Depoimentos em Vídeo</h2>
            <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl">
              Assista à história real de quem resgatou o prazer de sorrir e mastigar com total liberdade.
            </p>
          </div>

          {/* Main Video testimonial */}
          <div className="rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden shadow-2xl mb-16">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-8/12 bg-cover bg-center min-h-[500px] relative group overflow-hidden bg-black flex items-stretch">
                <iframe
                  className="w-full h-full min-h-[500px] border-0"
                  src="https://www.youtube.com/embed/v7jwKkhkWwo"
                  title="Depoimento Oral Sin - Margarida"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="md:w-4/12 p-10 md:p-12 flex flex-col justify-center bg-white/10 backdrop-blur-md">
                <div className="flex gap-1 text-primary mb-6">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={24} fill="currentColor" />)}
                </div>
                <h3 className="text-3xl font-black text-white mb-8 leading-tight italic">
                  "Minha vida mudou completamente depois do tratamento."
                </h3>
                <div>
                  <p className="text-primary font-black text-xl">Margarida</p>
                  <p className="text-white/80 text-sm font-bold uppercase tracking-widest mt-1">Paciente</p>
                </div>
              </div>
            </div>
          </div>

          {/* New Carousel of Comments */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-white/10 pt-16">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mt-1">Opiniões Reais de Pacientes</h3>
                <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl">
                  A Oral Sin é líder em satisfação, reconhecida pela excelência no tratamento e carinho com as pessoas. Veja o que dizem nossos pacientes.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center text-white border border-white/10 shadow-sm cursor-pointer"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center text-white border border-white/10 shadow-sm cursor-pointer"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1 text-[#f59e0b]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/95 text-sm md:text-base leading-relaxed italic mb-6">
                    "{visibleReviews[0].text}"
                  </p>
                </div>
                <div>
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <p className="text-primary font-bold text-base">{visibleReviews[0].name}</p>
                    <div className="flex justify-between items-center mt-1 text-xs text-white/60">
                      <span>{visibleReviews[0].role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="hidden md:flex bg-white/5 border border-white/10 rounded-2xl p-6 flex-col justify-between backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1 text-[#f59e0b]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/95 text-sm md:text-base leading-relaxed italic mb-6">
                    "{visibleReviews[1].text}"
                  </p>
                </div>
                <div>
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <p className="text-primary font-bold text-base">{visibleReviews[1].name}</p>
                    <div className="flex justify-between items-center mt-1 text-xs text-white/60">
                      <span>{visibleReviews[1].role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="hidden lg:flex bg-white/5 border border-white/10 rounded-2xl p-6 flex-col justify-between backdrop-blur-sm hover:bg-white/10 transition-all duration-300 shadow-lg min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1 text-[#f59e0b]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/95 text-sm md:text-base leading-relaxed italic mb-6">
                    "{visibleReviews[2].text}"
                  </p>
                </div>
                <div>
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <p className="text-primary font-bold text-base">{visibleReviews[2].name}</p>
                    <div className="flex justify-between items-center mt-1 text-xs text-white/60">
                      <span>{visibleReviews[2].role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
