import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrompetaModal from "../components/TrompetaModal";
import TrompetaIcon from "../components/TrompetaIcon";
import { Mail, Phone } from "lucide-react";
import { IconInstagram, IconFacebook, IconYoutube } from "../components/SocialIcons";
import { CB_BRAND } from "../config/basualto";

interface FormData { nombre: string; email: string; asunto: string; mensaje: string; }

export default function Contacto() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <div className="min-h-screen bg-cb-cream">
      <Navbar onDonate={() => setDonateOpen(true)} />

      <section className="bg-cb-wine-deep pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Contacto</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-white/60 text-base max-w-xl">¿Tienes preguntas, quieres colaborar o simplemente quieres saber más? Escríbenos.</motion.p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl border border-cb-cream-dark p-12 text-center">
                <TrompetaIcon className="w-12 h-[43px] text-cb-gold mx-auto mb-5" />
                <h3 className="font-display text-2xl text-cb-ink font-bold mb-3">¡Mensaje enviado!</h3>
                <p className="text-cb-ink/60">Te responderemos a la brevedad. Gracias por tu interés en la Fundación Carlos Basualto.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(() => setSubmitted(true))} className="bg-white rounded-2xl border border-cb-cream-dark p-8 space-y-5 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Nombre *</label>
                    <input {...register("nombre", { required: true })} className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Email *</label>
                    <input {...register("email", { required: true })} type="email" className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors" placeholder="correo@ejemplo.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Asunto</label>
                  <input {...register("asunto")} className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors" placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-cb-ink/50 uppercase tracking-wide mb-1.5">Mensaje *</label>
                  <textarea {...register("mensaje", { required: true })} rows={6} className="w-full border border-cb-cream-dark rounded-sm px-4 py-2.5 text-sm text-cb-ink placeholder-cb-ink/30 focus:outline-none focus:border-cb-wine transition-colors resize-none" placeholder="Escribe tu mensaje aquí..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2.5 bg-cb-wine hover:bg-cb-wine-light text-white font-sans font-bold text-sm tracking-wide uppercase py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-cb-wine/20">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-semibold text-sm text-cb-ink/40 uppercase tracking-[0.12em] mb-4">Información de contacto</h3>
              <div className="space-y-3">
                <a href={`mailto:${CB_BRAND.contact.email}`} className="flex items-center gap-3 text-sm text-cb-ink/70 hover:text-cb-wine transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cb-wine/10 flex items-center justify-center shrink-0"><Mail size={14} className="text-cb-wine" /></div>
                  {CB_BRAND.contact.email}
                </a>
                <a href={`tel:${CB_BRAND.contact.phone}`} className="flex items-center gap-3 text-sm text-cb-ink/70 hover:text-cb-wine transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cb-wine/10 flex items-center justify-center shrink-0"><Phone size={14} className="text-cb-wine" /></div>
                  {CB_BRAND.contact.phone}
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-sm text-cb-ink/40 uppercase tracking-[0.12em] mb-4">Redes sociales</h3>
              <div className="flex gap-3">
                {[
                  { href: CB_BRAND.socialLinks.instagram, Icon: IconInstagram },
                  { href: CB_BRAND.socialLinks.facebook, Icon: IconFacebook },
                  { href: CB_BRAND.socialLinks.youtube, Icon: IconYoutube },
                ].map(({ href, Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cb-wine/10 flex items-center justify-center text-cb-wine hover:bg-cb-wine hover:text-white transition-all">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-cb-wine rounded-xl p-5 text-center">
              <TrompetaIcon className="w-8 h-[29px] text-cb-gold mx-auto mb-3" />
              <p className="text-white/80 text-sm mb-3 leading-snug">¿Prefieres apoyar directamente?</p>
              <button onClick={() => setDonateOpen(true)} className="w-full bg-cb-gold hover:bg-cb-gold-light text-cb-wine-deep font-sans font-semibold text-xs tracking-wide uppercase py-2.5 rounded-sm transition-all">
                Donar trompetas solidarias
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <TrompetaModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
}
