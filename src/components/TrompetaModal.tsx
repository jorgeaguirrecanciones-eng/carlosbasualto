import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Minus, Plus } from "lucide-react";
import TrompetaIcon, { TrompetaMini } from "./TrompetaIcon";
import { CB_BRAND, calcClp, formatCLP, PROYECTO_ACTIVO } from "../config/basualto";

const PRESETS = [1, 3, 5] as const;

export default function TrompetaModal({
  open,
  onClose,
  proyectoNombre = PROYECTO_ACTIVO.nombre,
}: {
  open: boolean;
  onClose: () => void;
  proyectoNombre?: string;
}) {
  const [selected, setSelected] = useState(1);
  const [customMode, setCustomMode] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const totalClp = customMode ? parseInt(customAmount.replace(/\D/g, "")) || 0 : calcClp(selected);
  const displayTrompetas = customMode ? Math.floor(totalClp / CB_BRAND.trompetaValue) : selected;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full sm:max-w-md bg-cb-wine-deep rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          >
            {/* Header */}
            <div className="bg-cb-wine px-6 pt-6 pb-5 flex items-start justify-between">
              <div>
                <span className="text-xs font-sans font-semibold tracking-[0.12em] uppercase text-cb-gold/60 block mb-1">Donar trompetas solidarias</span>
                <h2 className="font-display text-xl text-white leading-tight">{proyectoNombre}</h2>
              </div>
              <button onClick={onClose} className="text-white/40 hover:text-white transition-colors mt-1 ml-4 shrink-0" aria-label="Cerrar"><X size={20} /></button>
            </div>

            {/* Visual display */}
            <div className="bg-cb-wine/40 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                {displayTrompetas > 0
                  ? Array.from({ length: Math.min(displayTrompetas, 5) }).map((_, i) => (
                      <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05 }}>
                        <TrompetaMini className="w-8 h-[29px] text-cb-gold" active />
                      </motion.div>
                    ))
                  : <span className="text-white/30 text-sm">Elige cuántas trompetas donar</span>}
                {displayTrompetas > 5 && <span className="text-cb-gold font-sans font-bold text-lg">+{displayTrompetas - 5}</span>}
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="text-2xl font-sans font-bold text-cb-gold">{formatCLP(totalClp)}</span>
              </div>
            </div>

            {/* Selector */}
            <div className="px-6 py-5">
              <p className="text-xs text-white/40 tracking-wide uppercase font-medium mb-4">Elige cuántas trompetas solidarias donar</p>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {PRESETS.map((n) => (
                  <button key={n} onClick={() => { setSelected(n); setCustomMode(false); }}
                    className={`rounded-sm py-3 flex flex-col items-center gap-1 border transition-all ${!customMode && selected === n ? "bg-cb-gold border-cb-gold text-cb-wine-deep" : "border-white/15 text-white hover:border-cb-gold/50"}`}
                  >
                    <TrompetaIcon className="w-6 h-[22px]" />
                    <span className="font-sans font-bold text-sm">{n}</span>
                    <span className="text-[10px] opacity-70">{formatCLP(calcClp(n))}</span>
                  </button>
                ))}
                <button onClick={() => { setCustomMode(true); setSelected(0); }}
                  className={`rounded-sm py-3 flex flex-col items-center justify-center border transition-all text-xs font-medium ${customMode ? "bg-cb-gold border-cb-gold text-cb-wine-deep" : "border-white/15 text-white/60 hover:border-cb-gold/50"}`}
                >
                  Otro<br />monto
                </button>
              </div>

              <AnimatePresence>
                {customMode && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-4">
                    <div className="flex items-center gap-2 bg-cb-wine rounded-sm border border-white/20 px-4 py-3">
                      <span className="text-cb-gold font-sans font-bold text-lg">$</span>
                      <input type="number" inputMode="numeric" placeholder="Monto en CLP" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)}
                        className="flex-1 bg-transparent text-white placeholder-white/30 text-base outline-none font-medium" autoFocus />
                    </div>
                    {displayTrompetas > 0 && <p className="text-xs text-cb-gold/70 mt-1.5 pl-1">= {displayTrompetas} trompeta{displayTrompetas !== 1 ? "s" : ""} solidaria{displayTrompetas !== 1 ? "s" : ""}</p>}
                  </motion.div>
                )}
              </AnimatePresence>

              {!customMode && (
                <div className="flex items-center justify-between bg-cb-wine/40 rounded-sm px-4 py-3 mb-4 border border-white/10">
                  <span className="text-sm text-white/60">Ajustar cantidad</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setSelected(v => Math.max(v - 1, 1))} disabled={selected <= 1} className="w-7 h-7 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-cb-gold hover:text-cb-gold transition-all disabled:opacity-30"><Minus size={12} /></button>
                    <span className="font-sans font-bold text-lg text-white w-6 text-center">{selected}</span>
                    <button onClick={() => setSelected(v => v + 1)} className="w-7 h-7 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-cb-gold hover:text-cb-gold transition-all"><Plus size={12} /></button>
                  </div>
                </div>
              )}

              <p className="text-xs text-white/35 mb-5 text-center">1 trompeta solidaria = {formatCLP(CB_BRAND.trompetaValue)} CLP</p>

              <button
                onClick={onClose}
                disabled={totalClp === 0}
                className="w-full flex items-center justify-center gap-2.5 bg-cb-gold hover:bg-cb-gold-light disabled:opacity-40 disabled:cursor-not-allowed text-cb-wine-deep font-sans font-bold text-sm tracking-wide uppercase py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-cb-gold/30"
              >
                <TrompetaIcon className="w-5 h-[18px]" />
                Donar ahora
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
