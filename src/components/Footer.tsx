import { Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center space-y-4">
      <p className="text-xl font-black text-foreground">
        Pretos<span className="gradient-text">'car</span>
      </p>
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="tel:+5511999999999" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
          <Phone className="w-4 h-4" /> (11) 99999-9999
        </a>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-whatsapp transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
      <p className="text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} Pretos'car. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
