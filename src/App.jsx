// Externos
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Internos
import { Layout } from "./components/Layout";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Loading } from "./components/Loading";

// Lazy loading de componentes para optimizar el bundle inicial
const LandingPage = lazy(() => import("./page/LandingPage").then(module => ({ default: module.LandingPage })));
const DetalleReceta = lazy(() => import("./page/DetalleReceta").then(module => ({ default: module.DetalleReceta })));
const ConsultaIngredientes = lazy(() => import("./components/ConsultaIngredientes").then(module => ({ default: module.ConsultaIngredientes })));

// Estilos
import "./app.css";
import "./fonts/fonts.css";

export const App = () => {
  const base = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '/';
  return (
    <ErrorBoundary>
      <BrowserRouter basename={base}>
        <Layout>
          <Suspense fallback={<Loading message="Cargando página..." />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/receta/:id" element={<DetalleReceta />} />
              <Route path="/consultaingredientes" element={<ConsultaIngredientes />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};