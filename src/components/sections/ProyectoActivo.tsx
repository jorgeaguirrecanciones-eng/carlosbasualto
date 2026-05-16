import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Target } from "lucide-react";
import TrompetaIcon from "../TrompetaIcon";
import { PROYECTO_ACTIVO, formatCLP, getProgresoPercent } from "../../config/basualto";

export default function ProyectoActivo({ onDonate }: { onDonate: () => void }) {
  const p = PROYECTO_ACTIVO;
  const pct = getProgresoPercent(p.recaudadoClp, p.metaClp);
  const falta = p.metaClp - p.recaudadoClp;

  return (
    <section className="bg-cb-cream py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-wine-muted">Proyecto activo — donaciones abiertas</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-5xl text-cb-ink font-bold mb-12 max-w-3xl leading-tight"
        >
          {p.nombre}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-cb-wine/10 mb-6 shadow-xl">
              <img src={p.imagen} alt={p.nombre} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cb-ink/60 to-transparent" />
              {p.ubicacion && (
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-cb-ink/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                  <MapPin size={10} />{p.ubicacion}
                </div>
              )}
            </div>
            <p className="text-cb-ink/70 text-base leading-relaxed">{p.descripcion}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.tags?.map((tag) => (
                <span key={tag} className="text-xs font-medium text-cb-wine-muted bg-cb-wine/10 px-3 py-1 rounded-full border border-cb-wine/20">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-cb-cream-dark p-7 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <TrompetaIcon className="w-10 h-[36px] text-cb-wine" />
                <div>
                  <p className="text-xs text-cb-ink/40 font-medium uppercase tracking-wide">Recaudado</p>
                  <p className="font-sans font-black text-2xl text-cb-wine leading-none">{formatCLP(p.recaudadoClp)}</p>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-cb-ink/50">Avance</span>
                  <span className="font-sans font-bold text-cb-wine text-sm">{pct}%</span>
                </div>
                <div className="h-3 bg-cb-cream-dark rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cb-wine to-cb-wine-light rounded-full relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cb-gold rounded-full shadow-md" />
                  </motion.div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 my-6 text-center">
                <div className="bg-cb-cream rounded-lg p-3">
                  <TrompetaIcon className="w-5 h-[18px] text-cb-gold mx-auto mb-1" />
                  <p className="font-sans font-bold text-lg text-cb-ink leading-none">{p.trompetasDonadas}</p>
                  <p className="text-[10px] text-cb-ink/50 mt-0.5">trompetas</p>
                </div>
                <div className="bg-cb-cream rounded-lg p-3">
                  <Target size={14} className="text-cb-wine mx-auto mb-1" />
                  <p className="font-sans font-bold text-sm text-cb-ink leading-none">{formatCLP(p.metaClp)}</p>
                  <p className="text-[10px] text-cb-ink/50 mt-0.5">meta</p>
                </div>
                <div className="bg-cb-cream rounded-lg p-3">
                  <Users size={14} className="text-cb-wine mx-auto mb-1" />
                  <p className="font-sans font-bold text-lg text-cb-ink leading-none">{p.personasAlcanzadas?.toLocaleString("es-CL")}</p>
                  <p className="text-[10px] text-cb-ink/50 mt-0.5">personas</p>
                </div>
              </div>

              <p className="text-xs text-center text-cb-ink/40 mb-5">Faltan <strong className="text-cb-wine">{formatCLP(falta)}</strong> para la meta</p>

              <button onClick={onDonate} className="w-full flex items-center justify-center gap-2.5 bg-cb-wine hover:bg-cb-wine-light text-white font-sans font-bold text-sm tracking-wide uppercase py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-cb-wine/30">
                <TrompetaIcon className="w-4 h-[14px]" />
                Donar trompetas para este proyecto
              </button>

              {p.fechaInicio && (
                <div className="flex items-center gap-1.5 justify-center mt-4 text-xs text-cb-ink/35">
                  <Calendar size={11} /><span>Campaña activa hasta septiembre 2025</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
