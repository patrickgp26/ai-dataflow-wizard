import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dashboardImg from "@/assets/dashboard-mockup.png";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const bullets = [
  "Projeto prático do zero ao deploy",
  "Sem precisar de experiência avançada",
  "Arquitetura usada por empresas reais",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-pulse-glow" />
    </div>

    <div className="container relative z-10 py-20 md:py-28">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-muted-foreground tracking-wide">PIPELINE DE DADOS + IA</span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
            Construa um pipeline de dados com IA e Power BI.{" "}
            <span className="text-gradient-primary">Transforme dados em decisões.</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-[60ch] mb-8 leading-relaxed">
            Aprenda do zero a extrair, tratar e visualizar dados do Meta Ads, integrando agentes de IA ao WhatsApp em um ambiente de produção real.
          </motion.p>

          <motion.ul variants={item} className="flex flex-col gap-3 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm md:text-base text-foreground/90">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground glow-primary hover:glow-primary-hover hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200"
            >
              Quero construir meu pipeline
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-sm text-muted-foreground">
            +1.200 alunos construindo stacks modernas de dados
          </motion.p>
        </motion.div>

        {/* Right - Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="rounded-2xl overflow-hidden shadow-deep border border-foreground/5">
            <img src={dashboardImg} alt="Dashboard de marketing com métricas de campanhas" className="w-full h-auto" />
          </div>
          {/* Floating label */}
          <div className="absolute -bottom-4 -left-4 glass-card-bright rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-accent" />
            <span className="font-mono text-xs text-foreground/80">Pipeline ativo • Sync OK</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
