import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TrompetaIcon from "../TrompetaIcon";
import { calcClp, formatCLP } from "../../config/basualto";

const QUICK = [1, 3, 5] as const;

export default function Hero({ onDonate, onVerProyecto }: { onDonate: () => void; onVerProyecto: () => void }) {
  const [q, setQ] = useState(1);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cb-wine-deep">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&q=80')" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-cb-wine-deep/90 via-cb-wine/75 to-cb-wine-deep/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-cb-wine-deep/95 via-transparent to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] max-w-lg opacity-[0.04] pointer-events-none select-none">
        <TrompetaIcon className="w-full h-auto text-cb-gold" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cb-gold/15 border border-cb-gold/30 text-cb-gold text-xs font-sans font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8"
          >
            <TrompetaIcon className="w-4 h-[14px]" />
            Fundación Carlos Basualto
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Que la música docta{" "}
            <span className="text-cb-gold">llegue donde nunca</span>{" "}
            ha llegado.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
          >
            La Fundación Carlos Basualto transforma una vida dedicada a la trompeta en una plataforma
            que democratiza el acceso a la música, llevando conciertos, formación y experiencias
            culturales a nuevos espacios en Chile.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <button onClick={onDonate} className="flex items-center gap-2.5 bg-cb-gold hover:bg-cb-gold-light text-cb-wine-deep font-sans font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm transition-all hover:shadow-xl hover:shadow-cb-gold/30 animate-trumpet-glow">
              <TrompetaIcon className="w-5 h-[18px]" />
              Donar trompetas solidarias
            </button>
            <button onClick={onVerProyecto} className="text-white/70 hover:text-white border border-white/20 hover:border-white/50 font-sans font-semibold text-sm tracking-wide uppercase px-6 py-4 rounded-sm transition-all">
              Ver proyecto activo →
            </button>
          </motion.div>
        </div>

        {/* Quick donate widget */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full max-w-sm lg:max-w-[340px] bg-cb-wine/60 backdrop-blur-md border border-cb-gold/20 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="bg-cb-gold/10 border-b border-cb-gold/20 px-5 py-4">
            <div className="flex items-center gap-2 mb-1">
              <TrompetaIcon className="w-5 h-[18px] text-cb-gold" />
              <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold">Donar ahora</span>
            </div>
            <p className="text-white/60 text-xs">Cada trompeta financia música docta para quienes no tienen acceso.</p>
          </div>

          <div className="px-5 py-5">
            <p className="text-xs text-white/40 tracking-wide uppercase font-medium mb-3">¿Cuántas trompetas solidarias?</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {QUICK.map((n) => (
                <button key={n} onClick={() => setQ(n)}
                  className={`rounded-sm py-3.5 flex flex-col items-center gap-1.5 border text-center transition-all ${q === n ? "bg-cb-gold border-cb-gold text-cb-wine-deep" : "border-white/15 text-white hover:border-cb-gold/50"}`}
                >
                  <TrompetaIcon className="w-7 h-[25px]" />
                  <span className="font-sans font-bold text-sm leading-none">{n} trompeta{n > 1 ? "s" : ""}</span>
                  <span className="text-[10px] opacity-70 font-medium">{formatCLP(calcClp(n))}</span>
                </button>
              ))}
            </div>
            <button onClick={onDonate} className="w-full bg-cb-gold hover:bg-cb-gold-light text-cb-wine-deep font-sans font-bold text-sm tracking-wide uppercase py-3.5 rounded-sm transition-all">
              Donar {q} trompeta{q > 1 ? "s" : ""} — {formatCLP(calcClp(q))}
            </button>
            <button onClick={onDonate} className="w-full mt-2 text-white/40 hover:text-cb-gold text-xs underline underline-offset-4 transition-colors py-1">
              Elegir otro monto
            </button>
          </div>

          <div className="bg-cb-wine-deep/40 border-t border-white/10 px-5 py-3 flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/24?img=${i}`} alt="" className="w-6 h-6 rounded-full border-2 border-cb-wine object-cover" />
              ))}
            </div>
            <p className="text-[11px] text-white/50"><span className="text-cb-gold font-bold">257 personas</span> ya donaron trompetas</p>
          </div>
        </motion.div>
      </div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        onClick={onVerProyecto}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Ver proyecto</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
