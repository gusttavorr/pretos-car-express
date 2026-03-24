import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const PHONE = "(11) 99999-9999";
const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e preciso de atendimento urgente")}`;

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-radial-glow-bottom relative" id="contato" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />

          <div className="relative z-10">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">( Contato )</span>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-foreground mb-3">
              Precisa de <span className="gradient-text">guincho?</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-base">
              Pretos'car — Guincho 24h em São Paulo e Região
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5511999999999"
                className="group inline-flex items-center justify-center gap-3 glass rounded-full px-8 py-4 text-base font-bold text-foreground hover:bg-secondary transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:brightness-110 transition-all glow-primary hover:scale-105 duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
