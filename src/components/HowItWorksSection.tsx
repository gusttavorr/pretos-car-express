import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, MapPin, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Chame no WhatsApp", desc: "Envie sua localização e o tipo de veículo pelo WhatsApp" },
  { icon: MapPin, title: "Receba a Localização", desc: "Acompanhe em tempo real a chegada do nosso guincho" },
  { icon: Truck, title: "Guincho a Caminho", desc: "Nossa equipe parte imediatamente para o seu local" },
  { icon: CheckCircle2, title: "Problema Resolvido", desc: "Seu veículo transportado com segurança total" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-radial-glow relative" ref={ref}>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Simples e rápido</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3">
            Como <span className="gradient-text">Funciona</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 gradient-border flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">Passo {i + 1}</span>
              <h3 className="text-base font-bold text-foreground mt-2 mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
