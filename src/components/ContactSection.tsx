import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "(11) 99999-9999";
const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e preciso de atendimento urgente")}`;

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-radial-glow relative" id="contato" ref={ref}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Fale conosco</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3 mb-3">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-muted-foreground mb-10">Pretos'car — Guincho 24h em São Paulo e Região</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+5511999999999"
            className="inline-flex items-center justify-center gap-3 glass gradient-border px-8 py-4 rounded-xl text-lg font-bold text-foreground hover:bg-card transition-all hover:scale-105 duration-300"
          >
            <Phone className="w-5 h-5" />
            {PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all glow-whatsapp hover:scale-105 duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
