import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrompetaModal from "../components/TrompetaModal";
import TrompetaIcon from "../components/TrompetaIcon";
import { Building2, School, MapPin, Heart, Music2, Globe, CheckCircle2 } from "lucide-react";

interface FormData { nombre: string; organizacion: string; tipo: string; email: string; mensaje: string; }
const TIPOS = [
  { value: "empresa", label: "Empresa", icon: Building2 },
  { value: "colegio", label: "Colegio / Instituto", icon: School },
  { value: "municipio", label: "Municipio / Gobierno", icon: MapPin },
  { value: "fundacion", label: "Fundación / ONG", icon: Heart },
  { value: "cultural", label: "Organización cultural", icon: Music2 },
  { value: "otro", label: "Otro", icon: Globe },
];
const BENEFICIOS = [
  { titulo: "Visibilidad de marca", desc: "Tu logo en materiales digitales e impresos de los proyectos que apoyes." },
  { titulo: "Invitaciones exclusivas", desc: "Acceso prioritario a conciertos, ensayos y actividades de la fundación." },
  { titulo: "Certificado de aliado", desc: "Reconocimiento oficial como aliado cultural de la Fundación Carlos Basualto." },
  { titulo: "Informe de impacto", desc: "Reporte detallado con resultados, personas alcanzadas y evidencia del proyecto." },
  { titulo: "Conexión cultural", desc: "Vinculación con redes educativas y culturales de Chile a través de la fundación." },
];

export default function Aliados() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = () => setSubmitted(true);

  return (
    <div className="min-h-screen bg-cb-cream">
      <Navbar onDonate={() => setDonateOpen(true)} />

      <section className="bg-cb-wine-deep pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] flex items-center justify-end pr-8 pointer-events-none">
          <TrompetaIcon className="w-[55vw] max-w-lg h-auto text-cb-gold" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Aliados</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-white/60 text-base max-w-xl">Empresas, colegios, municipios y organizaciones que se suman al proyecto de democratizar la música docta en Chile.</motion.p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cb-ink mb-3">¿Qué ganas siendo aliado?</h2>
            <p className="text-cb-ink/60 max-w-xl mx-auto">Ser aliado conecta tu organización con la cultura, la educación y el impacto social real.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFICIOS.map((b, i) => (
              <motion.div key={b.titulo} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-cb-cream rounded-xl border border-cb-cream-dark p-6 hover:border-cb-wine/30 hover:shadow-md transition-all"
              >
                <CheckCircle2 size={20} className="text-cb-wine mb-3" />
                <h3 className="font-sans font-bold text-base text-cb-ink mb-1">{b.titulo}</h3>
                <p className="text-cb-ink/60 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-cb-cream-dark">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-cb-ink mb-3">Quiero ser aliado</h2>
            <p className="text-cb-ink/60">Completa el formulario y nos pondremos en contacto para hablar sobre las posibilidades de colaboración.</p>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl border border-cb-cream-dark p-10 text-center">
              <TrompetaIcon className="w-12 h-[43px] text-cb-gold mx-auto mb-5" />
              <h3 className="font-display text-2xl text-cb-ink font-bold mb-3">¡Gracias por tu interés!</h3>
              <p className="text-cb-ink/60">Nos pondremos en contacto contigo en los próximos días.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-cb-cream-dark p-8 space-y-5 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Tu nombre *</label>
                  <input {...register("nombre", { required: true })} className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors" placeholder="Nombre completo" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Organización *</label>
                  <input {...register("organizacion", { required: true })} className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors" placeholder="Nombre de la organización" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-2">Tipo de organización *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TIPOS.map(({ value, label, icon: Icon }) => (
                    <label key={value} className="relative cursor-pointer">
                      <input {...register("tipo", { required: true })} type="radio" value={value} className="sr-only peer" />
                      <div className="flex items-center gap-2 border border-cb-cream-dark rounded-sm px-3 py-2.5 peer-checked:border-cb-wine peer-checked:text-cb-wine peer-checked:bg-cb-wine/5 transition-all hover:border-cb-wine/40">
                        <Icon size={14} className="text-cb-wine" /><span className="text-xs font-medium text-cb-ink/70">{label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Email *</label>
                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors" placeholder="correo@organizacion.cl" />
              </div>
              <div>
                <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Mensaje (opcional)</label>
                <textarea {...register("mensaje")} rows={4} className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors resize-none" placeholder="Cuéntanos cómo te imaginas la colaboración..." />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2.5 bg-cb-wine hover:bg-cb-wine-light text-white font-sans font-bold text-sm tracking-wide uppercase py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-cb-wine/20">
                Enviar solicitud de alianza
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer onDonate={() => setDonateOpen(true)} />
      <TrompetaModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
}
