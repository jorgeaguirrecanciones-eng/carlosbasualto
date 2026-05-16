import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Target } from "lucide-react";
import { PROYECTOS_MOCK, formatCLP, getProgresoPercent, type ProyectoEstado, type Proyecto } from "../../config/basualto";
import TrompetaIcon from "../TrompetaIcon";

const ESTADO_CFG: Record<ProyectoEstado, { label: string; dot: string; text: string }> = {
  activo: { label: "Activo", dot: "bg-green-400", text: "text-green-600" },
  proximo: { label: "Próximo", dot: "bg-cb-gold", text: "text-amber-600" },
  financiado: { label: "Financiado", dot: "bg-blue-400", text: "text-blue-600" },
  realizado: { label: "Realizado", dot: "bg-gray-400", text: "text-gray-500" },
};

function Card({ p, onDonate, delay }: { p: Proyecto; onDonate: () => void; delay: number }) {
  const pct = getProgresoPercent(p.recaudadoClp, p.metaClp);
  const cfg = ESTADO_CFG[p.estado];
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-cb-cream-dark transition-all duration-300 group flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={p.imagen} alt={p.nombre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-cb-ink/50 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-xs font-sans font-bold px-2.5 py-1 rounded-full ${cfg.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${p.estado === "activo" ? "animate-pulse" : ""}`} />
            {cfg.label}
          </span>
        </div>
        {p.ubicacion && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-[10px] bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
            <MapPin size={8} />{p.ubicacion}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-sans font-black text-lg text-cb-ink mb-2 leading-tight group-hover:text-cb-wine transition-colors">{p.nombre}</h3>
        <p className="text-cb-ink/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{p.descripcion}</p>

        {(p.estado === "activo" || p.estado === "financiado") && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <TrompetaIcon className="w-3.5 h-[13px] text-cb-wine" />
                <span className="text-xs text-cb-ink/50 font-medium">{p.trompetasDonadas} trompetas</span>
              </div>
              <span className="font-sans font-bold text-sm text-cb-wine">{pct}%</span>
            </div>
            <div className="h-1.5 bg-cb-cream-dark rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cb-wine to-cb-wine-light rounded-full" style={{ width: `${pct}%` }} />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-cb-ink/40">{formatCLP(p.recaudadoClp)}</span>
              <div className="flex items-center gap-1 text-[10px] text-cb-ink/40"><Target size={9} />{formatCLP(p.metaClp)}</div>
            </div>
          </div>
        )}

        {p.estado === "activo" ? (
          <button onClick={onDonate} className="w-full flex items-center justify-center gap-2 bg-cb-wine hover:bg-cb-wine-light text-white font-sans font-semibold text-xs tracking-wide uppercase py-2.5 rounded-sm transition-all">
            <TrompetaIcon className="w-3.5 h-[13px]" />Donar trompetas
          </button>
        ) : (
          <Link to={`/proyectos/${p.slug}`} className="w-full flex items-center justify-center gap-2 border border-cb-ink/20 text-cb-ink/60 hover:border-cb-wine hover:text-cb-wine font-sans font-semibold text-xs tracking-wide uppercase py-2.5 rounded-sm transition-all">
            Ver detalle →
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function ProyectosGrid({ onDonate, limit, showTitle = true }: { onDonate: () => void; limit?: number; showTitle?: boolean }) {
  const proyectos = limit ? PROYECTOS_MOCK.slice(0, limit) : PROYECTOS_MOCK;
  return (
    <section className="bg-cb-cream-dark py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-wine-muted block mb-3">Proyectos</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cb-ink">Lo que estamos construyendo</h2>
            </div>
            <Link to="/proyectos" className="text-sm font-medium text-cb-wine hover:text-cb-wine-light underline underline-offset-4 transition-colors shrink-0">Ver todos →</Link>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proyectos.map((p, i) => <Card key={p.id} p={p} onDonate={onDonate} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  );
}
