import { motion } from "framer-motion";
import TrompetaIcon from "../TrompetaIcon";

export default function Cierre({ onDonate }: { onDonate: () => void }) {
  return (
    <section className="bg-cb-wine relative overflow-hidden py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/carlos-3.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-cb-wine-deep/80 via-cb-wine/70 to-cb-wine-deep/90" />
      <div className="absolute -right-20 -bottom-10 w-[60vw] max-w-lg opacity-5 pointer-events-none select-none">
        <TrompetaIcon className="w-full h-auto text-cb-gold" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-8 flex flex-col items-center gap-3">
          <img src="/carlos-1.png" alt="Carlos Basualto" className="w-20 h-20 rounded-full object-cover border-2 border-cb-gold/50 shadow-xl shadow-black/40" />
          <p className="text-cb-gold/70 text-xs font-sans font-medium tracking-wide">Carlos Basualto — Trompetista y Fundador</p>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-bold text-white leading-[1.15] mb-6"
        >
          La música puede cambiar la forma en que una persona{" "}
          <span className="text-cb-gold">mira el mundo.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/65 text-base md:text-lg leading-relaxed mb-10">
          Dona una trompeta solidaria y ayudemos a que llegue más lejos.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
          <button onClick={onDonate} className="flex items-center gap-2.5 bg-cb-gold hover:bg-cb-gold-light text-cb-wine-deep font-sans font-bold text-sm tracking-wide uppercase px-10 py-4 rounded-sm transition-all hover:shadow-xl hover:shadow-cb-gold/40 mx-auto">
            <TrompetaIcon className="w-5 h-[18px]" />
            Donar trompetas
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-10 flex items-center justify-center gap-6 flex-wrap">
          {["100% de tu donación va al proyecto", "Fundación sin fines de lucro", "Informe de impacto garantizado"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-xs text-white/40">
              <span className="w-1 h-1 rounded-full bg-cb-gold/50" />{item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
