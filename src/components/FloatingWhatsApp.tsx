import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e preciso de atendimento urgente")}`;

const FloatingWhatsApp = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chamar no WhatsApp"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center shadow-2xl glow-whatsapp"
  >
    <MessageCircle className="w-7 h-7" />
    <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
  </motion.a>
);

export default FloatingWhatsApp;
