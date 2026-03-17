import { motion } from "framer-motion";
import dashboardImg from "@/assets/dashboard-mockup.png";
import airbyteImg from "@/assets/airbyte-sync.png";
import whatsappImg from "@/assets/whatsapp-agent.png";

const proofs = [
  { title: "Dashboard Power BI", desc: "Métricas de marketing em tempo real", img: dashboardImg },
  { title: "Airbyte Sync", desc: "Ingestão automatizada de dados", img: airbyteImg },
  { title: "Agente IA no WhatsApp", desc: "Insights via mensagem", img: whatsappImg },
];

const VisualProofSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="font-mono text-xs text-primary tracking-wider uppercase mb-3 block">Prova visual</span>
        <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
          Isso é o que você vai <span className="text-gradient-primary">construir</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {proofs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisualProofSection;
