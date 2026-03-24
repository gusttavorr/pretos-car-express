import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navigation } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 relative" id="localizacao" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">( Localização )</span>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-foreground leading-[0.95] mb-6">
              Onde<br />
              <span className="gradient-text">atuamos</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-8">
              Atendemos toda São Paulo e região metropolitana com rapidez e eficiência.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-foreground font-bold text-sm">Endereço</p>
                  <p className="text-muted-foreground text-sm">Rua Presidente Epitácio, 133 — Jardim Maragogipe, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-foreground font-bold text-sm">Cobertura</p>
                  <p className="text-muted-foreground text-sm">São Paulo, ABC, Guarulhos, Osasco e +15 cidades</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Rua+Presidente+Epitácio+133+Jardim+Maragogipe+São+Paulo+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all glow-primary hover:scale-105 duration-300"
            >
              <Navigation className="w-4 h-4" />
              Traçar Rota
            </a>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-border h-[400px] lg:h-[500px]"
          >
            <iframe
              title="Localização Pretos'car - São Paulo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-46.5388!3d-23.5098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f2e0e0e0e0f%3A0x0!2sRua+Presidente+Epit%C3%A1cio%2C+133+-+Jardim+Maragogipe%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
