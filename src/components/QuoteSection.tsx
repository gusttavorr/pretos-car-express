import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const QuoteSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", localizacao: "", mensagem: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de um orçamento.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nLocalização: ${form.localizacao}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-20 bg-section-dark" id="orcamento">
      <div className="container max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-section-dark-foreground">
          Solicite um Orçamento
        </h2>
        <p className="text-center text-section-dark-foreground/60 mb-10">
          Preencha e enviaremos direto pelo WhatsApp
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { key: "nome", label: "Nome", type: "text" },
            { key: "telefone", label: "Telefone", type: "tel" },
            { key: "localizacao", label: "Localização", type: "text" },
          ].map((f) => (
            <input
              key={f.key}
              type={f.type}
              placeholder={f.label}
              required
              value={form[f.key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-section-dark-foreground/10 border border-section-dark-foreground/20 text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ))}
          <textarea
            placeholder="Mensagem (opcional)"
            rows={3}
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className="w-full px-5 py-4 rounded-lg bg-section-dark-foreground/10 border border-section-dark-foreground/20 text-section-dark-foreground placeholder:text-section-dark-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:brightness-110 transition-all"
          >
            <Send className="w-5 h-5" />
            Solicitar Orçamento
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteSection;
