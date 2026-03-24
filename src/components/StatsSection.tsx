import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Star, Truck } from "lucide-react";

const stats = [
  { icon: Truck, value: 2500, suffix: "+", label: "Atendimentos", decimals: 0 },
  { icon: Clock, value: 20, suffix: "min", label: "Tempo médio", decimals: 0 },
  { icon: MapPin, value: 15, suffix: "+", label: "Cidades", decimals: 0 },
  { icon: Star, value: 4.9, suffix: "", label: "Avaliação", decimals: 1 },
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
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-6 relative overflow-hidden" ref={ref}>
      {/* Marquee-style ticker */}
      <div className="overflow-hidden border-y border-border py-6">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black font-display gradient-text leading-none">
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-border ml-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
