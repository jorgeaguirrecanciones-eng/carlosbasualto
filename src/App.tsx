import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/BasualtoHome"));
const Proyectos = lazy(() => import("./pages/Proyectos"));
const ProyectoDetalle = lazy(() => import("./pages/ProyectoDetalle"));
const Carlos = lazy(() => import("./pages/Carlos"));
const Aliados = lazy(() => import("./pages/Aliados"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Gracias = lazy(() => import("./pages/Gracias"));

const Fallback = () => <div className="min-h-screen bg-cb-wine-deep" aria-hidden />;

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
          <Route path="/carlos" element={<Carlos />} />
          <Route path="/aliados" element={<Aliados />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
