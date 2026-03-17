import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso saber programar?", a: "Conhecimento básico ajuda, mas o curso é 100% passo a passo. Se você sabe o que é uma variável e consegue seguir instruções, você consegue acompanhar. Todos os scripts são fornecidos prontos." },
  { q: "Funciona para iniciantes?", a: "Sim. O curso foi desenhado para levar qualquer pessoa do zero ao deploy. Começamos pela infraestrutura e avançamos gradualmente até IA e automação." },
  { q: "Vou ter acesso vitalício?", a: "Sim. Uma vez inscrito, você tem acesso ao conteúdo para sempre, incluindo atualizações futuras." },
  { q: "Tem suporte?", a: "Sim. Você terá acesso à comunidade exclusiva de alunos e suporte direto para tirar dúvidas técnicas." },
  { q: "Tem garantia?", a: "7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor. Risco zero." },
  { q: "Quais ferramentas vou usar?", a: "Docker, Airbyte, PostgreSQL, Power BI, Agno (framework de IA) e WhatsApp Business API. Tudo configurado durante o curso." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="font-mono text-xs text-primary tracking-wider uppercase mb-3 block">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-bold">Perguntas frequentes</h2>
      </motion.div>

      <Accordion type="single" collapsible className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl border-0 px-6">
            <AccordionTrigger className="hover:no-underline py-5 text-left font-semibold text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
