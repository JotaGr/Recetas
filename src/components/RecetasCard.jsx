// Externos
import { memo } from "react";
import { Link } from "react-router-dom";

// Estilos
import "./RecetasCard.css";

/**
 * Componente de tarjeta de receta
 * Memoizado para evitar re-renders innecesarios
 */
export const RecetasCard = memo(({ receta }) => {
  if (!receta || !receta.id) {
    return null;
  }

  const imgURL = receta.image || "";
  const title = receta.title || "Receta sin título";

  return (
    <li className="recetasCard bg-gradient bg-card">
      <Link 
        style={{ textDecoration: 'none' }} 
        to={`/receta/${receta.id}`}
        aria-label={`Ver detalles de ${title}`}
      >
        <img 
          className="recetaImage hvr-bob" 
          src={imgURL} 
          alt={title}
          loading="lazy"
        />
        <div className="text-dark">{title}</div>
      </Link>
    </li>
  );
});

RecetasCard.displayName = "RecetasCard";
