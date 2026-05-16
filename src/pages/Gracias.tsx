import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Share2, Heart } from "lucide-react";
import TrompetaIcon from "../components/TrompetaIcon";

export default function Gracias() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: "Doné trompetas solidarias", text: "Acabo de apoyar a la Fundación Carlos Basualto donando trompetas solidarias para llevar la música docta a quienes más lo necesitan.", url: window.location.origin });
    }
  };

  return (
    <div className="min-h-screen bg-cb-wine-deep flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
        <TrompetaIcon className="w-[80vw] max-w-2xl h-auto text-cb-gold" />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }} className="relative z-10 max-w-xl">
        <div className="mb-8">
          <TrompetaIcon className="w-20 h-[72px] text-cb-gold mx-auto animate-float" />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-cb-gold/15 border border-cb-gold/30 text-cb-gold text-xs font-sans font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-6"
        >
          <Heart size={12} /> Donación recibida
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
          ¡Gracias por tu trompeta solidaria!
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-white/65 text-base md:text-lg leading-relaxed mb-10">
          Tu aporte va directo al proyecto activo de la Fundación Carlos Basualto. Con tu ayuda, la música docta llegará a más personas y lugares que nunca antes la habían escuchado.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleShare} className="flex items-center gap-2.5 bg-cb-gold hover:bg-cb-gold-light text-cb-wine-deep font-sans font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm transition-all hover:shadow-xl hover:shadow-cb-gold/30">
            <Share2 size={16} />Compartir la campaña
          </button>
          <Link to="/proyectos" className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-sans font-semibold text-sm tracking-wide uppercase px-6 py-4 rounded-sm transition-all">
            Ver los proyectos →
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12">
          <Link to="/" className="text-white/30 hover:text-white/60 text-sm transition-colors underline underline-offset-4">Volver al inicio</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
