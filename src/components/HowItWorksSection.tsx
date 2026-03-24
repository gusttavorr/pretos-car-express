import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "01", title: "Chame no WhatsApp", desc: "Envie sua localização e o tipo de veículo" },
  { icon: Truck, num: "02", title: "Guincho a Caminho", desc: "Nossa equipe parte imediatamente para você" },
  { icon: CheckCircle2, num: "03", title: "Resolvido!", desc: "Veículo transportado com segurança total" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-radial-glow relative overflow-hidden" ref={ref}>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">( Processo )</span>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-foreground">
            Como <span className="gradient-text">funciona</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative text-center group"
            >
              {/* Large number */}
              <div className="relative z-10 mx-auto mb-6">
                <span className="text-7xl md:text-8xl font-black font-display text-muted/50 leading-none select-none">
                  {s.num}
                </span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-primary/10 gradient-border flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[250px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
