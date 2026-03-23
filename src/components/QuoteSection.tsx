import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const QuoteSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", localizacao: "", mensagem: "" });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de um orçamento.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nLocalização: ${form.localizacao}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputClass = "w-full px-5 py-4 rounded-xl glass gradient-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <section className="py-20 md:py-28 relative" id="orcamento" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container max-w-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Rápido e fácil</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3">
            Solicite um <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-muted-foreground mt-3">Preencha e enviaremos direto pelo WhatsApp</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {[
            { key: "nome", label: "Seu nome", type: "text" },
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
              className={inputClass}
            />
          ))}
          <textarea
            placeholder="Mensagem (opcional)"
            rows={3}
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all glow-primary hover:scale-[1.02] duration-300"
          >
            <Send className="w-5 h-5" />
            Solicitar Orçamento
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteSection;
