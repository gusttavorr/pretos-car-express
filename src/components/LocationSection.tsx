import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navigation } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 relative" id="localizacao" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Onde atuamos</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3">
            Nossa <span className="gradient-text">Localização</span>
          </h2>
          <p className="text-muted-foreground mt-3">Atendemos toda São Paulo e região</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden gradient-border mb-8"
        >
          <iframe
            title="Localização Pretos'car - São Paulo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-46.5388!3d-23.5098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f2e0e0e0e0f%3A0x0!2sRua+Presidente+Epit%C3%A1cio%2C+133+-+Jardim+Maragogipe%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="flex justify-center">
          <a
            href="https://maps.google.com/?q=Guarulhos,SP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 transition-all glow-primary hover:scale-105 duration-300"
          >
            <Navigation className="w-5 h-5" />
            Traçar Rota
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
