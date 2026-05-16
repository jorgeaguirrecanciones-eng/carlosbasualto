import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrompetaModal from "../components/TrompetaModal";
import Hero from "../components/sections/Hero";
import ProyectoActivo from "../components/sections/ProyectoActivo";
import Mecanismo from "../components/sections/Mecanismo";
import Trayectoria from "../components/sections/Trayectoria";
import Democratizar from "../components/sections/Democratizar";
import ProyectosGrid from "../components/sections/ProyectosGrid";
import Impacto from "../components/sections/Impacto";
import Aliados from "../components/sections/Aliados";
import Cierre from "../components/sections/Cierre";

export default function BasualtoHome() {
  const [donateOpen, setDonateOpen] = useState(false);
  const proyectoRef = useRef<HTMLDivElement>(null);

  const scrollToProyecto = () =>
    proyectoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-cb-cream">
      <Navbar onDonate={() => setDonateOpen(true)} />

      <Hero onDonate={() => setDonateOpen(true)} onVerProyecto={scrollToProyecto} />

      <div ref={proyectoRef}>
        <ProyectoActivo onDonate={() => setDonateOpen(true)} />
      </div>

      <Mecanismo />
      <Trayectoria />
      <Democratizar />
      <ProyectosGrid onDonate={() => setDonateOpen(true)} limit={4} />
      <Impacto />
      <Aliados />
      <Cierre onDonate={() => setDonateOpen(true)} />

      <Footer />

      <TrompetaModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  );
}
