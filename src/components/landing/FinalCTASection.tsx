import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pare de apenas olhar para os dados.{" "}
          <span className="text-gradient-primary">Comece a construir sistemas.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Este não é um curso de teoria. É um blueprint de engenharia. Você entra com a vontade e sai com um pipeline em produção.
        </p>
        <a
          href="#oferta"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-5 font-semibold text-lg text-primary-foreground glow-primary hover:glow-primary-hover hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200"
        >
          Começar agora
          <ArrowRight className="h-5 w-5" />
        </a>
        <p className="text-sm text-muted-foreground mt-6">
          Vagas limitadas • 7 dias de garantia
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
