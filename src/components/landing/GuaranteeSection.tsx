import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card-bright rounded-2xl p-8 md:p-12 text-center"
      >
        <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          7 dias de garantia incondicional
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Se por qualquer motivo você sentir que o curso não é para você, devolvemos 100% do seu investimento. Sem burocracia, sem perguntas.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
