import { motion } from "framer-motion";
import { MessageCircle, Phone, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-tow.jpg";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e preciso de atendimento urgente")}`;

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="inicio">
    <img
      src={heroImage}
      alt="Guincho Pretos'car em ação"
      className="absolute inset-0 w-full h-full object-cover scale-105"
      loading="eager"
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="absolute inset-0 bg-grid opacity-40" />

    {/* Animated glow orbs */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
      style={{ background: "hsl(49, 100%, 50%)" }}
      animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl"
      style={{ background: "hsl(142, 70%, 45%)" }}
      animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 40, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="relative z-10 container max-w-4xl px-6 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
        <span className="text-sm font-medium text-muted-foreground">Atendimento 24h • Guarulhos e Região</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.1] text-balance"
      >
        Guincho Rápido
        <br />
        <span className="gradient-text">em Guarulhos</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
      >
        Atendimento imediato, preço justo e rastreamento em tempo real direto no seu WhatsApp.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all glow-whatsapp hover:scale-105 duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          Chamar no WhatsApp
        </a>
        <a
          href="tel:+5511999999999"
          className="inline-flex items-center justify-center gap-3 glass gradient-border px-8 py-4 rounded-xl text-lg font-bold text-foreground hover:bg-card transition-all hover:scale-105 duration-300"
        >
          <Phone className="w-5 h-5" />
          Ligar Agora
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#servicos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
    >
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.a>
  </section>
);

export default HeroSection;
