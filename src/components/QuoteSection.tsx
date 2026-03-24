import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";

const QuoteSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", localizacao: "", mensagem: "" });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de um orçamento.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nLocalização: ${form.localizacao}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputClass =
    "w-full px-5 py-4 rounded-2xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-sm";

  return (
    <section className="py-24 md:py-32 relative" id="orcamento" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">( Orçamento )</span>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-foreground leading-[0.95] mb-6">
              Solicite um<br />
              <span className="gradient-text">orçamento grátis</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-8">
              Preencha o formulário e enviaremos sua solicitação direto pelo WhatsApp. Resposta em menos de 5 minutos.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-lg">⚡</span>
              </div>
              <div>
                <p className="text-foreground font-bold text-sm">Resposta imediata</p>
                <p className="text-muted-foreground text-xs">Orçamento sem compromisso</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8 md:p-10 space-y-4"
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
              className="w-full group flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-bold hover:brightness-110 transition-all glow-primary hover:scale-[1.02] duration-300"
            >
              <Send className="w-4 h-4" />
              Solicitar Orçamento
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
