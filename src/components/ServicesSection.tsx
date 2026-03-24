import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Bike, Clock, AlertTriangle, Shield, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Car, title: "Guincho Carros", desc: "Transporte seguro para todos os portes", accent: true },
  { icon: Bike, title: "Guincho Motos", desc: "Reboque especializado com cuidado total" },
  { icon: Clock, title: "24 Horas", desc: "Disponíveis a qualquer hora, todos os dias" },
  { icon: AlertTriangle, title: "Emergencial", desc: "Resposta rápida em urgências e acidentes", accent: true },
  { icon: Shield, title: "Seguro Total", desc: "Seguro completo durante o transporte" },
  { icon: Wrench, title: "Socorro Mecânico", desc: "Assistência mecânica no local" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 relative" id="servicos" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="container relative">
        {/* Section header - Dribbble asymmetric style */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">( Serviços )</span>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-foreground leading-[0.95]">
              O que<br />
              <span className="gradient-text">oferecemos</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed"
          >
            Soluções completas de guincho e reboque para qualquer situação em São Paulo e região.
          </motion.p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bento-card group cursor-default ${
                s.accent ? "lg:row-span-1 bg-gradient-to-br from-primary/5 to-transparent" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
