import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TrompetaIcon from "./TrompetaIcon";

const NAV_LINKS = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Carlos Basualto", href: "/carlos" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Aliados", href: "/aliados" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar({ onDonate }: { onDonate: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-cb-wine-deep/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center group">
            <img src="/logo-blanco.png" alt="Fundación Carlos Basualto" className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-white/70 hover:text-cb-gold-light transition-colors tracking-wide">{l.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onDonate}
              className="hidden md:flex items-center gap-2 bg-cb-gold hover:bg-cb-gold-light text-cb-wine-deep font-sans font-semibold text-sm tracking-wide uppercase px-5 py-2.5 rounded-sm transition-all hover:shadow-lg hover:shadow-cb-gold/30"
            >
              <TrompetaIcon className="w-4 h-[14px]" />
              Donar trompetas
            </button>
            <button onClick={() => setMenuOpen(v => !v)} className="md:hidden text-white p-2" aria-label="Menú">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-cb-wine-deep pt-16 flex flex-col"
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-center">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} to={l.href} className="font-sans font-bold text-2xl text-white hover:text-cb-gold transition-colors">{l.label}</Link>
              ))}
              <button onClick={() => { onDonate(); setMenuOpen(false); }} className="mt-4 flex items-center gap-2 bg-cb-gold text-cb-wine-deep font-sans font-bold text-base tracking-wide uppercase px-8 py-4 rounded-sm">
                <TrompetaIcon className="w-5 h-[18px]" />
                Donar trompetas
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
