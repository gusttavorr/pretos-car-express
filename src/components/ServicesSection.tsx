import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Bike, Clock, AlertTriangle, Shield, Wrench } from "lucide-react";

const services = [
  { icon: Car, title: "Guincho para Carros", desc: "Transporte seguro para veículos de todos os portes com equipamento moderno" },
  { icon: Bike, title: "Guincho para Motos", desc: "Reboque especializado para motocicletas com cuidado total" },
  { icon: Clock, title: "Atendimento 24 Horas", desc: "Disponíveis a qualquer hora, todos os dias da semana" },
  { icon: AlertTriangle, title: "Reboque Emergencial", desc: "Resposta rápida em situações de urgência e acidentes" },
  { icon: Shield, title: "Transporte Seguro", desc: "Seguro total durante o transporte do seu veículo" },
  { icon: Wrench, title: "Socorro Mecânico", desc: "Assistência mecânica no local para problemas simples" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 relative" id="servicos" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass gradient-border rounded-2xl p-8 hover:bg-card transition-all duration-500 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-500">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
