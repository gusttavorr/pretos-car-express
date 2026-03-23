import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e preciso de atendimento urgente")}`;

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
