import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowDown, Zap, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-tow.jpg";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e preciso de atendimento urgente")}`;

const badges = [
  { icon: Zap, label: "Resposta em 5 min" },
  { icon: Shield, label: "Seguro total" },
  { icon: Clock, label: "24h / 7 dias" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden noise" id="inicio">
    {/* Background image */}
    <img
      src={heroImage}
      alt="Guincho Pretos'car em ação"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(0,0%,4%,0.3) 0%, hsla(0,0%,4%,0.7) 40%, hsla(0,0%,4%,0.95) 80%, hsl(0,0%,4%) 100%)" }} />
    <div className="absolute inset-0 bg-dots opacity-30" />

    {/* Floating glow */}
    <motion.div
      className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
      style={{ background: "hsl(46, 100%, 50%)" }}
      animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="relative z-10 container pb-16 pt-32 md:pt-40 md:pb-24">
      {/* Top badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {badges.map((b) => (
          <div key={b.label} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
            <b.icon className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{b.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Main heading - Dribbble-style oversized typography */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="font-display font-black tracking-tighter leading-[0.9]">
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground block">GUINCHO</span>
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text block">RÁPIDO</span>
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mt-4 block tracking-normal leading-normal">
            em São Paulo e Região
          </span>
        </h1>
      </motion.div>

      {/* Description + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <p className="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed">
          Atendimento imediato com preço justo. Solicite agora pelo WhatsApp e receba rastreamento em tempo real.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:brightness-110 transition-all glow-primary hover:scale-105 duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
            <span className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="tel:+5511999999999"
            className="inline-flex items-center justify-center gap-3 glass rounded-full px-8 py-4 text-base font-bold text-foreground hover:bg-secondary transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#servicos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-10 h-10 rounded-full glass flex items-center justify-center"
      >
        <ArrowDown className="w-4 h-4 text-muted-foreground" />
      </motion.div>
    </motion.a>
  </section>
);

export default HeroSection;
