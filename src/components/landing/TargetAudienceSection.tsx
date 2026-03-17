import { motion } from "framer-motion";
import { BarChart3, Megaphone, Lightbulb, Briefcase } from "lucide-react";

const audiences = [
  { icon: BarChart3, title: "Analistas de Dados", desc: "Que querem dominar pipelines modernos e sair do Excel." },
  { icon: Megaphone, title: "Profissionais de Marketing", desc: "Que precisam de dados estruturados para tomar decisões melhores." },
  { icon: Lightbulb, title: "Pessoas entrando em Dados/IA", desc: "Que querem um projeto real no portfólio, não só certificados." },
  { icon: Briefcase, title: "Freelancers e Consultores", desc: "Que querem oferecer soluções completas de dados para clientes." },
];

const TargetAudienceSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="font-mono text-xs text-primary tracking-wider uppercase mb-3 block">Para quem é</span>
        <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
          Feito para quem quer <span className="text-gradient-primary">construir de verdade</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card rounded-2xl p-6"
          >
            <a.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetAudienceSection;
