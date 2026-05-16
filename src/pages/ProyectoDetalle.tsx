import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, ArrowLeft, Target } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrompetaModal from "../components/TrompetaModal";
import TrompetaIcon from "../components/TrompetaIcon";
import { PROYECTOS_MOCK, formatCLP, getProgresoPercent } from "../config/basualto";

export default function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const [donateOpen, setDonateOpen] = useState(false);
  const proyecto = PROYECTOS_MOCK.find((p) => p.slug === slug) ?? PROYECTOS_MOCK[0];
  const pct = getProgresoPercent(proyecto.recaudadoClp, proyecto.metaClp);

  return (
    <div className="min-h-screen bg-cb-cream">
      <Navbar onDonate={() => setDonateOpen(true)} />

      <div className="bg-cb-wine-deep pt-24 pb-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/proyectos" className="inline-flex items-center gap-1.5 text-white/50 hover:text-cb-gold text-sm transition-colors">
            <ArrowLeft size={14} />Volver a proyectos
          </Link>
        </div>
      </div>

      <div className="relative aspect-[16/6] md:aspect-[16/5] overflow-hidden bg-cb-wine">
        <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cb-ink/80 via-cb-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-2 h-2 rounded-full ${proyecto.estado === "activo" ? "bg-green-400 animate-pulse" : "bg-cb-gold"}`} />
            <span className="text-white/70 text-xs font-sans font-semibold tracking-[0.12em] uppercase">{proyecto.estado === "activo" ? "Campaña activa" : proyecto.estado}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">{proyecto.nombre}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-3 mb-8">
            {proyecto.ubicacion && <span className="flex items-center gap-1.5 text-xs text-cb-ink/60 bg-white border border-cb-cream-dark px-3 py-1.5 rounded-full"><MapPin size={11} className="text-cb-wine" />{proyecto.ubicacion}</span>}
            {proyecto.fechaInicio && <span className="flex items-center gap-1.5 text-xs text-cb-ink/60 bg-white border border-cb-cream-dark px-3 py-1.5 rounded-full"><Calendar size={11} className="text-cb-wine" />Desde {proyecto.fechaInicio}</span>}
            {proyecto.personasAlcanzadas && <span className="flex items-center gap-1.5 text-xs text-cb-ink/60 bg-white border border-cb-cream-dark px-3 py-1.5 rounded-full"><Users size={11} className="text-cb-wine" />{proyecto.personasAlcanzadas.toLocaleString("es-CL")} personas</span>}
          </div>
          <div className="space-y-4 text-cb-ink/70 text-base leading-relaxed mb-8">
            {(proyecto.descripcionLarga ?? proyecto.descripcion).split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {proyecto.tags && (
            <div className="flex flex-wrap gap-2">
              {proyecto.tags.map((tag) => <span key={tag} className="text-xs font-medium text-cb-wine-muted bg-cb-wine/10 px-3 py-1 rounded-full border border-cb-wine/20">{tag}</span>)}
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-xl border border-cb-cream-dark p-6 sticky top-24">
            <div className="flex items-center gap-3 mb-5">
              <TrompetaIcon className="w-8 h-[29px] text-cb-wine" />
              <div>
                <p className="text-xs text-cb-ink/40 font-medium">Recaudado</p>
                <p className="font-sans font-black text-xl text-cb-wine leading-none">{formatCLP(proyecto.recaudadoClp)}</p>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-cb-ink/50">Avance</span>
                <span className="font-sans font-bold text-sm text-cb-wine">{pct}%</span>
              </div>
              <div className="h-2.5 bg-cb-cream-dark rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-cb-wine to-cb-wine-light rounded-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-cb-cream rounded-lg p-3 text-center">
                <TrompetaIcon className="w-4 h-[14px] text-cb-gold mx-auto mb-1" />
                <p className="font-sans font-bold text-base text-cb-ink">{proyecto.trompetasDonadas}</p>
                <p className="text-[10px] text-cb-ink/50">trompetas</p>
              </div>
              <div className="bg-cb-cream rounded-lg p-3 text-center">
                <Target size={14} className="text-cb-wine mx-auto mb-1" />
                <p className="font-sans font-bold text-base text-cb-ink">{formatCLP(proyecto.metaClp)}</p>
                <p className="text-[10px] text-cb-ink/50">meta total</p>
              </div>
            </div>
            {proyecto.estado === "activo" && (
              <button onClick={() => setDonateOpen(true)} className="w-full flex items-center justify-center gap-2 bg-cb-wine hover:bg-cb-wine-light text-white font-sans font-bold text-sm tracking-wide uppercase py-3.5 rounded-sm transition-all hover:shadow-lg hover:shadow-cb-wine/30">
                <TrompetaIcon className="w-4 h-[14px]" />Donar trompetas
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer onDonate={() => setDonateOpen(true)} />
      <TrompetaModal open={donateOpen} onClose={() => setDonateOpen(false)} proyectoNombre={proyecto.nombre} />
    </div>
  );
}
