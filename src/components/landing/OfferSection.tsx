import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";

const stack = [
  "Curso completo (acesso vitalício)",
  "Projeto prático do zero ao deploy",
  "Templates de Dashboards Power BI",
  "Scripts de Automação Agno/WhatsApp",
];

const OfferSection = () => (
  <section id="oferta" className="py-20 md:py-28">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, hsl(0 0% 98%), hsl(0 0% 94%))",
          color: "hsl(240 10% 3.9%)",
        }}
      >
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">Oferta especial</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "hsl(240 10% 3.9%)" }}>
            Tudo o que você precisa para construir seu pipeline
          </h2>

          <ul className="flex flex-col gap-3 mb-10">
            {stack.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-base" style={{ color: "hsl(240 5% 25%)" }}>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mb-8">
            <p className="text-sm line-through" style={{ color: "hsl(240 5% 55%)" }}>De R$ 997</p>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-5xl md:text-6xl font-extrabold" style={{ color: "hsl(240 10% 3.9%)" }}>
                12x R$ 49,70
              </span>
            </div>
            <p className="text-sm mt-2" style={{ color: "hsl(240 5% 45%)" }}>
              ou R$ 497 à vista
            </p>
          </div>

          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full rounded-xl py-5 font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
            style={{
              backgroundColor: "hsl(217 91% 60%)",
              color: "white",
              boxShadow: "0 4px 16px hsla(217, 91%, 60%, 0.4)",
            }}
          >
            Garantir minha vaga agora
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="text-center text-xs mt-4" style={{ color: "hsl(240 5% 55%)" }}>
            7 dias de garantia incondicional. Risco zero.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
