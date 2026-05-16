import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { IconInstagram, IconFacebook, IconYoutube } from "./SocialIcons";
import { CB_BRAND } from "../config/basualto";

export default function Footer({ onDonate }: { onDonate: () => void }) {
  return (
    <footer className="bg-cb-wine-deep text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10">
        <div>
          <div className="mb-4">
            <img src="/logo-blanco.png" alt="Fundación Carlos Basualto" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">Democratizando el acceso a la música docta en Chile. Una trompeta solidaria a la vez.</p>
          <div className="flex gap-4 mt-6">
            {[
              { href: CB_BRAND.socialLinks.instagram, Icon: IconInstagram, label: "Instagram" },
              { href: CB_BRAND.socialLinks.facebook, Icon: IconFacebook, label: "Facebook" },
              { href: CB_BRAND.socialLinks.youtube, Icon: IconYoutube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/40 hover:text-cb-gold transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/60 mb-4">Navegar</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Inicio", href: "/" },
              { label: "Proyectos", href: "/proyectos" },
              { label: "Carlos Basualto", href: "/carlos" },
              { label: "Aliados", href: "/aliados" },
              { label: "Contacto", href: "/contacto" },
            ].map((l) => (
              <li key={l.href}><Link to={l.href} className="text-sm text-white/50 hover:text-cb-gold-light transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-cb-gold/60 mb-4">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2.5 text-sm text-white/50">
              <Mail size={14} className="text-cb-gold/40 shrink-0" />
              <a href={`mailto:${CB_BRAND.contact.email}`} className="hover:text-cb-gold-light transition-colors break-all">{CB_BRAND.contact.email}</a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/50">
              <Phone size={14} className="text-cb-gold/40 shrink-0" />
              <a href={`tel:${CB_BRAND.contact.phone}`} className="hover:text-cb-gold-light transition-colors">{CB_BRAND.contact.phone}</a>
            </li>
          </ul>
          <div className="mt-6">
            <Link to="/aliados" className="text-sm font-medium text-cb-gold/70 hover:text-cb-gold transition-colors underline underline-offset-4">Quiero ser aliado →</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Fundación Carlos Basualto. Todos los derechos reservados.</span>
          <span>Hecho con amor por la música docta en Chile.</span>
        </div>
      </div>
    </footer>
  );
}
