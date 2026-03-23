import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => (
  <section className="py-20 bg-muted" id="localizacao">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Localização
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Atendemos toda Guarulhos e região
      </p>

      <div className="rounded-lg overflow-hidden shadow-lg mb-8">
        <iframe
          title="Localização Pretos'car - Guarulhos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117042.54576529387!2d-46.57!3d-23.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8b2fdd692b77%3A0xdaea8cf7a78cfa1f!2sGuarulhos%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://maps.google.com/?q=Guarulhos,SP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
        >
          <Navigation className="w-5 h-5" />
          Traçar Rota
        </a>
      </div>

      <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-2">
          Veja onde nosso guincho está agora
        </h3>
        <p className="text-muted-foreground mb-4">
          Acompanhe a localização em tempo real do nosso guincho
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          <MapPin className="w-4 h-4" />
          Ver localização em tempo real
        </a>
      </div>
    </div>
  </section>
);

export default LocationSection;
