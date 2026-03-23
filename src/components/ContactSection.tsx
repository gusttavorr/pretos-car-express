import { Phone, MessageCircle } from "lucide-react";

const PHONE = "(11) 99999-9999";
const WHATSAPP_URL = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá, vim pelo site e preciso de atendimento urgente")}`;

const ContactSection = () => (
  <section className="py-20 bg-section-dark" id="contato">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-section-dark-foreground">
        Entre em Contato
      </h2>
      <p className="text-section-dark-foreground/60 mb-10">
        Pretos'car — Guincho 24h em Guarulhos
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:+5511999999999`}
          className="inline-flex items-center justify-center gap-3 bg-card text-card-foreground px-8 py-4 rounded-lg text-lg font-bold hover:bg-muted transition-all"
        >
          <Phone className="w-5 h-5" />
          {PHONE}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-lg text-lg font-bold hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
