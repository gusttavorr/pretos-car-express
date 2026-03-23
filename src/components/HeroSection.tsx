import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tow.jpg";

const WHATSAPP_MSG = `🚛 Pretos'car Guincho 24h

Olá! Recebemos sua mensagem 👋
Já vamos te atender o mais rápido possível.

Para agilizar seu atendimento, por favor envie:
📍 Sua localização
🚗 Tipo de veículo
⚠️ Situação (pane, batida, etc.)

Assim que confirmado, enviaremos a localização do nosso guincho em tempo real para você acompanhar a chegada.

📞 Atendimento rápido em Guarulhos e região.`;

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const HeroSection = () => (
  <section
    className="relative min-h-[90vh] flex items-center justify-center text-center"
    id="inicio"
  >
    <img
      src={heroImage}
      alt="Guincho Pretos'car em ação"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div
      className="absolute inset-0"
      style={{ background: "var(--hero-overlay)" }}
    />
    <div className="relative z-10 container max-w-3xl px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary-foreground mb-4 leading-tight text-balance">
        Guincho 24h em Guarulhos
        <span className="block text-primary mt-2 text-3xl md:text-5xl">
          Pretos'car
        </span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
        Atendimento rápido, preço justo e suporte imediato
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-5 rounded-lg text-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-whatsapp/30"
      >
        <MessageCircle className="w-6 h-6" />
        Chamar no WhatsApp
      </a>
    </div>
  </section>
);

export default HeroSection;
