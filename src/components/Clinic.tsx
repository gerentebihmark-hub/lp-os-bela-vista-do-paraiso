import { MapPin, Navigation } from 'lucide-react';

export default function Clinic() {
  return (
    <section className="w-full py-20 bg-[#e4e5e7] scroll-mt-2 md:scroll-mt-3" id="clinica">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-dark-green text-3xl md:text-4xl font-black leading-tight tracking-wider uppercase flex items-center justify-center gap-3">
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
            Nossa Clínica
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-dark-green/80">
            <MapPin className="text-dark-green shrink-0" size={20} />
            <p className="text-base md:text-lg font-semibold leading-relaxed">
              Rua Brasílio de Araújo, 803 - Res. Dr Alvin Werner, Bela Vista do Paraíso - PR
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-[2rem] overflow-hidden h-[450px] w-full bg-cover bg-center border border-border-light shadow-lg" style={{ backgroundImage: "url('/images/clinica-fachada.png')" }}>
          </div>
          <div className="bg-surface-light rounded-[2rem] p-2 border border-border-light h-[450px] shadow-sm overflow-hidden">
            <div className="w-full h-full rounded-3xl bg-slate-200 relative overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Oral+Sin+Implantes+Rua+Bras%C3%ADlio+de+Ara%C3%BAjo%2C+803+-+Bela+Vista+do+Para%C3%ADso+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Oral Sin Bela Vista do Paraíso"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl border border-border-light flex items-center justify-between shadow-lg z-10">
                <div>
                  <p className="text-text-main font-bold text-sm">Ver no mapa</p>
                  <p className="text-text-muted text-xs">Abrir no Google Maps</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Oral+Sin+Implantes+Rua+Bras%C3%ADlio+de+Ara%C3%BAjo%2C+803+-+Res.+Dr+Alvin+Werner%2C+Bela+Vista+do+Para%C3%ADso+-+PR%2C+86130-000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-green flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer"
                >
                  <Navigation size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
