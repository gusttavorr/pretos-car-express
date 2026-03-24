import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border relative">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div>
          <p className="text-2xl font-black font-display text-foreground tracking-tight">
            PRETOS<span className="gradient-text">'CAR</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">Guincho 24h • São Paulo e Região</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+5511999999999" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" /> (11) 99999-9999
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Pretos'car. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          {["Início", "Serviços", "Orçamento", "Contato"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
