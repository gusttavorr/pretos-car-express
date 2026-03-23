import { Car, Bike, Clock, AlertTriangle } from "lucide-react";

const services = [
  { icon: Car, title: "Guincho para Carros", desc: "Transporte seguro para veículos de todos os portes" },
  { icon: Bike, title: "Guincho para Motos", desc: "Reboque especializado para motocicletas" },
  { icon: Clock, title: "Atendimento 24 Horas", desc: "Disponíveis a qualquer hora, todos os dias" },
  { icon: AlertTriangle, title: "Reboque Emergencial", desc: "Resposta rápida em situações de urgência" },
];

const ServicesSection = () => (
  <section className="py-20 bg-background" id="servicos">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
