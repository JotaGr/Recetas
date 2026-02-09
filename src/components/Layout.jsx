// Externos
import { Link } from "react-router-dom";

// Internos
import { Footer } from "./Footer";

// Estilos
import "../app.css";

/**
 * Componente Layout que envuelve todas las páginas
 * Incluye header y footer comunes
 */
export const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header>
        <Link style={{ textDecoration: 'none' }} to="/" aria-label="Ir al inicio">
          <h1 className="title hvr-pop pt-2">Tus Recetas</h1>
        </Link>
        <Link to="/consultaingredientes">
          <button className="btn btn-outline-success title" aria-label="Buscar por ingrediente">
            Buscar por ingrediente
          </button>
        </Link>
      </header>

      <div className="main-content">
        {children}
      </div>

      <Footer />
    </div>
  );
};





