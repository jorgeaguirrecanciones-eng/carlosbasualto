import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrompetaModal from "../components/TrompetaModal";
import Trayectoria from "../components/sections/Trayectoria";
import Cierre from "../components/sections/Cierre";
import TrompetaIcon from "../components/TrompetaIcon";

const CITAS = [
  { texto: "Carlos tiene una presencia escénica única. Cuando toca, el silencio en la sala es total, y luego los aplausos no paran.", autor: "Crítica musical, El Mercurio" },
  { texto: "Más que un intérprete, Carlos es un educador nato. Su capacidad para transmitir la emoción musical a públicos que nunca habían escuchado música docta es extraordinaria.", autor: "Directora del Conservatorio Nacional" },
];

export default function Carlos() {
  const [donateOpen, setDonateOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cb-cream">
      <Navbar onDonate={() => setDonateOpen(true)} />

      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/carlos-3.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-cb-ink via-cb-wine-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-cb-ink/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-14 pt-28">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-3">
            <TrompetaIcon className="w-5 h-[18px] text-cb-gold" />
            <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/80">Fundación Carlos Basualto</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">Carlos Basualto</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/65 text-lg mt-3 max-w-xl">
            Trompetista, docente y fundador. Más de 45 años dedicados a la música docta en Chile.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5 text-cb-ink/75 text-base leading-relaxed">
            <p>Carlos Basualto es uno de los trompetistas más reconocidos de Chile. Con una trayectoria que abarca más de cuatro décadas, ha sido pieza fundamental en las principales orquestas del país, ha recorrido escenarios de Europa y Latinoamérica, y ha formado a cientos de músicos que hoy ejercen en todo el mundo.</p>
            <p>Pero lo que más lo define no son los premios ni las giras: es su convicción de que la música docta puede transformar a cualquier persona, independientemente de dónde viva o en qué condiciones haya crecido.</p>
            <p>Con la fundación que lleva su nombre, Carlos busca que el cierre de su carrera profesional sea, en realidad, el comienzo de algo mucho más grande: una plataforma permanente para democratizar el acceso a la música docta en Chile.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="/carlos-4.jpg" alt="Carlos Basualto recibiendo reconocimiento" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-cb-ink/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-sans font-medium text-white/70">Reconocimiento a su trayectoria musical en Chile</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-cb-wine py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-10 gap-4">
            <img src="/carlos-2.jpg" alt="Carlos Basualto" className="w-16 h-16 rounded-full object-cover object-top border-2 border-cb-gold/40 shadow-lg" />
            <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/60">Lo que dicen de Carlos</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CITAS.map((cita, i) => (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-cb-wine-deep/40 border border-cb-gold/20 rounded-xl p-7"
              >
                <p className="font-display text-lg text-white/80 italic leading-relaxed mb-4">"{cita.texto}"</p>
                <footer className="text-cb-gold/60 text-xs font-sans font-bold tracking-wide">— {cita.autor}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <Trayectoria />
      <Cierre onDonate={() => setDonateOpen(true)} />
      <Footer />
      <TrompetaModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
}
