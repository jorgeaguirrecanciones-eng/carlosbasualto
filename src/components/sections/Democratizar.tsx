import { motion } from "framer-motion";
import { School, Building2, Trees, Music, Mic2, Globe } from "lucide-react";

const SPACES = [
  { icon: School, label: "Colegios públicos" },
  { icon: Building2, label: "Centros comunitarios" },
  { icon: Trees, label: "Plazas y barrios" },
  { icon: Music, label: "Orquestas juveniles" },
  { icon: Mic2, label: "Espacios culturales" },
  { icon: Globe, label: "Comunas sin acceso" },
];

export default function Democratizar() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-cb-wine-deep/95" />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/70 via-transparent to-cb-wine-deep/60" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/60 block mb-5">
          Por qué importa
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6"
        >
          La música docta no debe pertenecer{" "}
          <span className="text-cb-gold">solo a los teatros.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14"
        >
          Puede llegar a colegios, barrios, plazas, comunidades, niños, jóvenes y personas mayores.
          Esta fundación busca abrir puertas, formar audiencias y demostrar que la música puede ser
          una experiencia transformadora para cualquier persona, sin importar dónde nació.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
        >
          {SPACES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white/8 hover:bg-white/12 border border-white/10 rounded-lg px-4 py-3.5 transition-all group">
              <Icon size={16} className="text-cb-gold shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-white/80 text-sm font-medium text-left">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-14 border-l-2 border-cb-gold pl-6 text-left max-w-xl mx-auto"
        >
          <p className="font-display text-xl text-white/90 italic leading-relaxed">
            "La música docta no es un lujo de élite. Es un derecho cultural que aún no hemos podido garantizar para todos."
          </p>
          <footer className="mt-3 text-cb-gold/70 text-sm font-sans font-bold tracking-wide">— Carlos Basualto</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
