import { Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-secondary text-secondary-foreground">
    <div className="container text-center space-y-3">
      <p className="font-bold text-lg">Pretos'car</p>
      <div className="flex items-center justify-center gap-4 text-sm text-secondary-foreground/70">
        <a href="tel:+5511999999999" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
          <Phone className="w-4 h-4" /> (11) 99999-9999
        </a>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-whatsapp transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
      <p className="text-xs text-secondary-foreground/40">
        © {new Date().getFullYear()} Pretos'car. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
