import { motion } from "framer-motion";
import { Server, Database, BarChart3, Bot, MessageSquare, Workflow } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const modules = [
  { num: "01", icon: Server, title: "Infraestrutura Imbatível", desc: "Configure uma VM Linux, instale Docker e prepare seu ambiente de produção do zero.", topics: ["Criação e acesso à VM", "Instalação do Docker e Docker Compose", "Configuração de rede e segurança"] },
  { num: "02", icon: Workflow, title: "Ingestão Escalável com Airbyte", desc: "Configure o Airbyte para extrair dados automaticamente da API do Facebook Ads.", topics: ["Deploy do Airbyte via Docker", "Conexão com Facebook Ads API", "Agendamento de syncs automáticos"] },
  { num: "03", icon: Database, title: "Modelagem no PostgreSQL", desc: "Estruture seus dados de marketing em um banco relacional pronto para análise.", topics: ["Schema de dados otimizado", "Tratamento e limpeza de dados", "Views e queries analíticas"] },
  { num: "04", icon: BarChart3, title: "Dashboards no Power BI", desc: "Crie dashboards profissionais que transformam dados brutos em insights visuais.", topics: ["Conexão direta com PostgreSQL", "Criação de medidas DAX", "Design de relatórios executivos"] },
  { num: "05", icon: Bot, title: "Agente de IA com Agno", desc: "Construa um agente inteligente que interpreta seus dados e gera insights automaticamente.", topics: ["Configuração do framework Agno", "Integração com LLMs", "Prompts otimizados para dados"] },
  { num: "06", icon: MessageSquare, title: "Integração com WhatsApp", desc: "Conecte seu agente de IA ao WhatsApp para receber insights direto no celular.", topics: ["API do WhatsApp Business", "Fluxo de mensagens automatizado", "Deploy em produção"] },
];

const CurriculumSection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="font-mono text-xs text-primary tracking-wider uppercase mb-3 block">Conteúdo</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          6 módulos. Um pipeline <span className="text-gradient-accent">completo.</span>
        </h2>
        <p className="text-muted-foreground mt-3">Scripts prontos para copiar e colar em cada módulo.</p>
      </motion.div>

      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {modules.map((m, i) => (
          <motion.div
            key={m.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <AccordionItem value={m.num} className="glass-card rounded-2xl border-0 overflow-hidden px-6">
              <AccordionTrigger className="hover:no-underline py-5 gap-4">
                <div className="flex items-center gap-4 text-left">
                  <span className="font-mono text-xs text-primary/60">{m.num}</span>
                  <m.icon className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{m.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{m.desc}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-16">
                <ul className="flex flex-col gap-2">
                  {m.topics.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default CurriculumSection;
