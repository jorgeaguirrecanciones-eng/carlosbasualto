import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrompetaModal from "../components/TrompetaModal";
import ProyectosGrid from "../components/sections/ProyectosGrid";
import Cierre from "../components/sections/Cierre";
import TrompetaIcon from "../components/TrompetaIcon";

export default function Proyectos() {
  const [donateOpen, setDonateOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cb-cream">
      <Navbar onDonate={() => setDonateOpen(true)} />
      <section className="bg-cb-wine-deep pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] flex items-center justify-end pr-8 pointer-events-none">
          <TrompetaIcon className="w-[60vw] max-w-xl h-auto text-cb-gold" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/60 block mb-4">Fundación Carlos Basualto</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Proyectos</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/60 text-base max-w-xl">
            Conoce los proyectos activos, próximos y realizados de la fundación. Cada uno busca llevar la música docta a espacios donde antes no llegaba.
          </motion.p>
        </div>
      </section>
      <ProyectosGrid onDonate={() => setDonateOpen(true)} showTitle={false} />
      <Cierre onDonate={() => setDonateOpen(true)} />
      <Footer />
      <TrompetaModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
}
