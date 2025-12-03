// Externos
import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";

// Internos
import { useRecetaById } from "../hooks/useRecetaById";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import { MESSAGES } from "../config/constants";

// Estilos
import "./DetalleReceta.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Componente para mostrar el detalle completo de una receta
 */
export const DetalleReceta = () => {
  const { id } = useParams();
  const { receta, loading, error } = useRecetaById(id);

  // Memoizar ingredientes y tipos de platos para evitar recálculos
  const ingredientes = useMemo(() => {
    if (!receta?.extendedIngredients) return [];
    return receta.extendedIngredients.map((ing) => ({
      name: ing.name || ing.original || "Ingrediente",
      amount: ing.amount,
      unit: ing.unit,
      original: ing.original,
    }));
  }, [receta]);

  const dishTypes = useMemo(() => {
    if (!receta?.dishTypes || !Array.isArray(receta.dishTypes)) return [];
    return receta.dishTypes;
  }, [receta]);

  // Parsear instrucciones HTML si vienen en ese formato
  const instrucciones = useMemo(() => {
    if (!receta?.instructions) return "No hay instrucciones disponibles.";
    
    // Si las instrucciones vienen en HTML, las parseamos
    if (receta.instructions.includes("<")) {
      return receta.instructions;
    }
    
    // Si vienen como texto plano, las dividimos en pasos
    return receta.instructions
      .split(/\d+\./)
      .filter((step) => step.trim())
      .map((step, index) => `${index + 1}. ${step.trim()}`)
      .join("\n\n");
  }, [receta]);

  if (loading) {
    return <Loading message={MESSAGES.LOADING_RECETA} />;
  }

  if (error) {
    return (
      <div className="contenedorDetalle">
        <ErrorMessage error={error} />
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  if (!receta) {
    return null;
  }

  return (
    <div className="contenedorDetalle">
      <div className="card mb-3 text-center shadow align-items-center detalle-receta-card">
        <img
          className="card-img-top detalle-receta-image"
          src={receta.image}
          alt={receta.title}
          loading="lazy"
        />
        <div className="recetadetalle card-body text-center">
          <h3 className="card-title">
            <strong>{receta.title}</strong>
          </h3>

          {receta.readyInMinutes && (
            <p className="pt-2 text-muted">
              ⏱️ Tiempo de preparación: {receta.readyInMinutes} minutos
            </p>
          )}

          {receta.servings && (
            <p className="text-muted">
              👥 Porciones: {receta.servings}
            </p>
          )}

          {dishTypes.length > 0 && (
            <div className="pt-3">
              <strong>Tipos de platos: </strong>
              <span className="badge bg-success me-1">
                {dishTypes.join(", ")}
              </span>
            </div>
          )}

          {ingredientes.length > 0 && (
            <div className="pt-3">
              <strong>Ingredientes: </strong>
              <ul className="list-group list-group-flush mt-2 text-start">
                {ingredientes.map((ing, index) => (
                  <li key={index} className="list-group-item">
                    {ing.amount && ing.unit
                      ? `${ing.amount} ${ing.unit} de ${ing.name}`
                      : ing.original || ing.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-3">
            <strong>Instrucciones: </strong>
            <div
              className="instrucciones-texto mt-2"
              dangerouslySetInnerHTML={{ __html: instrucciones }}
            />
          </div>

          <div className="mt-4">
            <Link to="/" className="btn btn-outline-primary me-2">
              ← Volver
            </Link>
            {receta.sourceUrl && (
              <a
                href={receta.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver receta original
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
