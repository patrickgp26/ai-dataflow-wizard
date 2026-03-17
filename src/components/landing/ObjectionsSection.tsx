import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const objections = [
  { q: "\"Sou iniciante, vou conseguir acompanhar?\"", a: "Sim. Cada módulo é passo a passo, do zero. Se você sabe o que é uma variável, você consegue." },
  { q: "\"Preciso saber programar em Python?\"", a: "Não. O curso usa scripts prontos para copiar e colar. Você aprende fazendo, não decorando sintaxe." },
  { q: "\"Isso funciona pra minha área?\"", a: "Se você trabalha com dados de marketing, vendas ou operações — sim. A arquitetura é universal." },
];

const ObjectionsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="font-mono text-xs text-accent tracking-wider uppercase mb-3 block">Sem barreiras</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Talvez você esteja pensando...
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {objections.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card-bright rounded-2xl p-6 md:p-8"
          >
            <p className="font-semibold text-foreground text-lg mb-3">{o.q}</p>
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed">{o.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionsSection;
