import { motion } from "framer-motion";
import { HITOS_TRAYECTORIA } from "../../config/basualto";

export default function Trayectoria() {
  return (
    <section className="bg-cb-cream py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-wine-muted block mb-4">Carlos Basualto</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cb-ink leading-tight">
              Una vida dedicada a la música.{" "}
              <span className="text-cb-wine">Un legado abierto para todos.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
              <img src="/carlos-1.png" alt="Carlos Basualto" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-cb-ink/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-sans font-bold text-lg text-white">Carlos Basualto</p>
                <p className="text-white/60 text-xs font-sans tracking-wide">Trompetista · Fundador · +45 años de trayectoria</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cb-wine/30 via-cb-wine/20 to-transparent" />
          <div className="space-y-8 md:space-y-0">
            {HITOS_TRAYECTORIA.map((hito, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={hito.año} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.05 * i }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 md:mb-10 ${isLeft ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-cb-gold border-2 border-cb-cream shadow" />
                  {isLeft ? (
                    <>
                      <div className="md:pr-10 pb-8 md:pb-0">
                        <span className="font-sans font-black text-2xl text-cb-wine/20 block mb-1">{hito.año}</span>
                        <h3 className="font-sans font-bold text-lg text-cb-ink mb-2">{hito.titulo}</h3>
                        <p className="text-cb-ink/60 text-sm leading-relaxed">{hito.descripcion}</p>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-10 pb-8 md:pb-0 md:text-left">
                        <span className="font-sans font-black text-2xl text-cb-wine/20 block mb-1">{hito.año}</span>
                        <h3 className="font-sans font-bold text-lg text-cb-ink mb-2">{hito.titulo}</h3>
                        <p className="text-cb-ink/60 text-sm leading-relaxed">{hito.descripcion}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
