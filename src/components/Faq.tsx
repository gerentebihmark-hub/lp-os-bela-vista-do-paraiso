import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O procedimento de implante dentário dói?",
    answer: "Não, o procedimento é totalmente indolor. Utilizamos anestesia local avançada e oferecemos a opção de sedação consciente, onde o paciente relaxa profundamente e dorme durante todo o processo, acordando com o tratamento realizado sem traumas ou incômodos."
  },
  {
    question: "O que é o implante de carga imediata? Como funciona?",
    answer: "A carga imediata é uma técnica moderna onde os dentes provisórios ou definitivos de altíssima qualidade são fixados ao implante em até 24 horas após a cirurgia. Diferente do método tradicional que exige esperar meses, o paciente recupera a mastigação, a fala e a estética em apenas um dia."
  },
  {
    question: "Quem tem perda óssea pode fazer implantes?",
    answer: "Sim! Atualmente dispomos de técnicas avançadas, enxertos ósseos de rápida recuperação e implantes especiais que permitem a fixação segura dos dentes mesmo em pacientes com pouca estrutura óssea. Uma avaliação detalhada com nossa equipe especialista apontará a solução ideal para o seu caso."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#e4e5e7] py-20 scroll-mt-2 md:scroll-mt-3" id="faq">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
          <h2 className="text-dark-green text-3xl md:text-4xl font-black leading-tight tracking-wider uppercase flex items-center justify-center gap-3">
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
            Perguntas Frequentes
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
          </h2>
          <p className="text-dark-green/80 text-base md:text-lg font-semibold leading-relaxed">
            Entenda como funciona o tratamento que vai devolver sua autoestima, mastigação e o prazer de sorrir novamente sem preocupações.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-primary/50 shadow-lg ring-1 ring-primary/10' 
                    : 'border-border-light hover:border-dark-green/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 cursor-pointer select-none"
                >
                  <span className="text-base md:text-lg font-black leading-snug text-dark-green">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-primary text-white rotate-180' : 'bg-dark-green/5 text-dark-green'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                {/* Expandable answer */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-8 md:px-8 md:pb-8 text-dark-green/80 text-sm md:text-base leading-relaxed font-bold border-t border-dashed border-border-light pt-4 mx-6 md:mx-8">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
