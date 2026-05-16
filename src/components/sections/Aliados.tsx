import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, School, MapPin, Heart, Music2, Globe, CheckCircle2 } from "lucide-react";

const TIPOS = [
  { icon: Building2, label: "Empresas" },
  { icon: School, label: "Colegios" },
  { icon: MapPin, label: "Municipios" },
  { icon: Heart, label: "Fundaciones" },
  { icon: Music2, label: "Organizaciones culturales" },
  { icon: Globe, label: "Instituciones" },
];

const BENEFICIOS = [
  "Visibilidad de marca en materiales digitales e impresos de los proyectos",
  "Invitaciones exclusivas a conciertos y actividades de la fundación",
  "Certificado de aliado cultural de la Fundación Carlos Basualto",
  "Informe de impacto con resultados, personas alcanzadas y evidencia",
  "Conexión con redes educativas y culturales de Chile",
];

export default function Aliados() {
  return (
    <section className="bg-cb-cream py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-wine-muted block mb-4">Aliados</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cb-ink mb-6 leading-tight">Únete como aliado de la música docta</h2>
            <p className="text-cb-ink/65 text-base leading-relaxed mb-8">
              Empresas, colegios, municipios y organizaciones culturales pueden asociarse a la Fundación Carlos Basualto
              para financiar proyectos, co-crear iniciativas y conectar sus marcas con el mundo de la cultura.
            </p>
            <ul className="space-y-3 mb-8">
              {BENEFICIOS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-cb-ink/70">
                  <CheckCircle2 size={16} className="text-cb-wine mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/aliados" className="inline-flex items-center gap-2 bg-cb-wine hover:bg-cb-wine-light text-white font-sans font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-cb-wine/20">
              Quiero ser aliado →
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {TIPOS.map(({ icon: Icon, label }, i) => (
                <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white border border-cb-cream-dark rounded-xl p-5 flex flex-col items-center gap-3 text-center hover:border-cb-wine/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-cb-wine/10 flex items-center justify-center group-hover:bg-cb-wine/20 transition-colors">
                    <Icon size={18} className="text-cb-wine" />
                  </div>
                  <span className="font-sans font-bold text-sm text-cb-ink">{label}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-white rounded-xl border border-cb-cream-dark text-center">
              <p className="text-xs text-cb-ink/40 font-medium uppercase tracking-wide mb-4">Nuestros aliados</p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {["Universidad de Chile", "Municipalidad de La Pintana", "Consejo de la Cultura"].map((name) => (
                  <span key={name} className="text-xs font-medium text-cb-ink/30 whitespace-nowrap">{name}</span>
                ))}
              </div>
              <p className="text-[10px] text-cb-ink/25 mt-4">Tu organización podría estar aquí.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
