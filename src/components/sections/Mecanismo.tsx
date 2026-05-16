import { motion } from "framer-motion";
import TrompetaIcon from "../TrompetaIcon";
import { formatCLP, CB_BRAND } from "../../config/basualto";

const STEPS = [
  { n: "01", title: "Eliges cuántas trompetas donar", desc: "1, 3, 5 o el monto que prefieras. Cada trompeta equivale a $5.000 CLP." },
  { n: "02", title: "Tu aporte se suma al proyecto activo", desc: "El 100% de tu donación va directo al proyecto activo de la fundación." },
  { n: "03", title: "La fundación lleva la música a nuevos espacios", desc: "Conciertos, talleres y experiencias musicales en comunidades que nunca antes tuvieron acceso." },
  { n: "04", title: "Puedes ver el impacto logrado", desc: "Reportamos cada proyecto: personas alcanzadas, conciertos realizados y avance de la meta." },
];

export default function Mecanismo() {
  return (
    <section className="bg-cb-wine py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-4xl opacity-[0.03] pointer-events-none select-none">
        <TrompetaIcon className="w-full h-auto text-cb-gold" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/60 block mb-4">¿Cómo funciona?</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-6">¿Qué es una trompeta solidaria?</h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8">
              Una trompeta solidaria es una forma simple de transformar tu aporte en música. Cada trompeta que donas
              ayuda a financiar proyectos que llevan conciertos, formación y experiencias musicales a comunidades que
              muchas veces no tienen acceso a la música docta.
            </p>
            <div className="flex items-center gap-4">
              <div className="animate-trumpet-glow">
                <TrompetaIcon className="w-24 h-[87px] text-cb-gold" />
              </div>
              <div>
                <p className="font-sans font-black text-2xl text-cb-gold">= {formatCLP(CB_BRAND.trompetaValue)}</p>
                <p className="text-white/50 text-sm">Una trompeta solidaria</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <motion.div key={step.n} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-5 group">
                <div className="shrink-0 w-10 h-10 rounded-sm bg-cb-gold/15 border border-cb-gold/30 flex items-center justify-center group-hover:bg-cb-gold/25 transition-colors">
                  <span className="font-sans font-black text-xs text-cb-gold">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-white mb-1">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
