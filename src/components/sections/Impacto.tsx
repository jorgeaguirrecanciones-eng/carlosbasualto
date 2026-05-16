import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IMPACTO_METRICS } from "../../config/basualto";
import TrompetaIcon from "../TrompetaIcon";

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) raf.current = requestAnimationFrame(run);
      else setCount(target);
    };
    raf.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf.current);
  }, [target, active]);
  return count;
}

function Metric({ label, value, prefix = "", suffix = "", delay }: { label: string; value: number; prefix?: string; suffix?: string; delay: number }) {
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }} onViewportEnter={() => setActive(true)} className="text-center group">
      <p className="font-sans font-black text-4xl md:text-5xl text-cb-gold leading-none mb-2 group-hover:text-cb-gold-light transition-colors">
        {prefix}{count.toLocaleString("es-CL")}{suffix}
      </p>
      <p className="text-white/60 text-sm font-medium leading-snug">{label}</p>
    </motion.div>
  );
}

export default function Impacto() {
  return (
    <section id="impacto" className="bg-cb-wine-deep py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <TrompetaIcon className="w-10 h-[36px] text-cb-gold mx-auto mb-5 animate-trumpet-glow" />
          </motion.div>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/60 block mb-4">Impacto</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-4xl font-bold text-white">Lo que hemos logrado juntos</motion.h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {IMPACTO_METRICS.map((m, i) => <Metric key={m.label} label={m.label} value={m.value} prefix={m.prefix} suffix={m.suffix} delay={i * 0.07} />)}
        </div>
        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <p className="text-white/40 text-sm max-w-2xl mx-auto">Los datos de impacto se actualizan con cada proyecto finalizado. La meta es que estos números crezcan con cada trompeta solidaria donada.</p>
        </div>
      </div>
    </section>
  );
}
