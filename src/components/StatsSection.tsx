import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Star, Truck } from "lucide-react";

const stats = [
  { icon: Truck, value: 2500, suffix: "+", label: "Atendimentos realizados" },
  { icon: Clock, value: 20, suffix: " min", label: "Tempo médio de chegada" },
  { icon: MapPin, value: 15, suffix: "+", label: "Cidades atendidas" },
  { icon: Star, value: 4.9, suffix: "", label: "Avaliação dos clientes", decimals: 1 },
];

const AnimatedCounter = ({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black gradient-text">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-radial-glow relative" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass gradient-border rounded-2xl p-6 md:p-8 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
