import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rafael M.", role: "Analista de Marketing", text: "Em 2 semanas eu tinha um pipeline funcionando com dados reais das minhas campanhas. Nunca imaginei que seria tão direto.", avatar: "RM" },
  { name: "Camila S.", role: "Cientista de Dados Jr.", text: "O módulo de IA com Agno foi surreal. Sair do curso com um agente funcionando no WhatsApp é outro nível.", avatar: "CS" },
  { name: "Lucas T.", role: "Freelancer de BI", text: "Comecei a oferecer esse serviço para clientes. O ROI do curso se pagou no primeiro projeto.", avatar: "LT" },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="font-mono text-xs text-primary tracking-wider uppercase mb-3 block">Depoimentos</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Quem já construiu seu pipeline
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card-bright rounded-2xl p-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
