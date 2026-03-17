import { motion } from "framer-motion";
import { Database, BarChart3, Bot, MessageSquare, ArrowRight, Cloud } from "lucide-react";

const steps = [
  { icon: Cloud, label: "Facebook Ads API", sub: "Extração", color: "text-primary" },
  { icon: Database, label: "Airbyte", sub: "Ingestão", color: "text-primary" },
  { icon: Database, label: "PostgreSQL + Docker", sub: "Armazenamento", color: "text-accent" },
  { icon: BarChart3, label: "Power BI", sub: "Visualização", color: "text-primary" },
  { icon: Bot, label: "Agno AI", sub: "Inteligência", color: "text-accent" },
  { icon: MessageSquare, label: "WhatsApp", sub: "Automação", color: "text-accent" },
];

const ArchitectureSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-primary tracking-wider uppercase mb-3 block">Arquitetura</span>
        <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
          De API a Automação: <span className="text-gradient-accent">O Fluxo Completo</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Um pipeline de ponta a ponta que extrai, processa, visualiza e automatiza decisões com IA.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 md:gap-4"
          >
            <div className="glass-card-bright rounded-xl p-4 md:p-5 text-center min-w-[130px]">
              <step.icon className={`h-7 w-7 mx-auto mb-2 ${step.color}`} />
              <p className="text-sm font-semibold text-foreground">{step.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{step.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
