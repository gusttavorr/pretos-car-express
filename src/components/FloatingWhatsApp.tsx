import { MessageCircle } from "lucide-react";

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

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chamar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center shadow-2xl shadow-whatsapp/40 animate-pulse-whatsapp hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);

export default FloatingWhatsApp;
