// Externos
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

// Internos
import { useRecetasByIngredientes } from "../hooks/useRecetasByIngredientes";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { EmptyState } from "./EmptyState";
import { RecetasCard } from "./RecetasCard";

// Estilos
import "./ConsultaIngredientes.css";
import { MESSAGES } from "../config/constants";

export const ConsultaIngredientes = () => {
  const [ingrediente, setIngrediente] = useState("");
  const [ingrediente2, setIngrediente2] = useState("");
  const [ingrediente3, setIngrediente3] = useState("");

  const { resultados, loading, error, buscarRecetas } = useRecetasByIngredientes();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await buscarRecetas([ingrediente, ingrediente2, ingrediente3]);
    },
    [ingrediente, ingrediente2, ingrediente3, buscarRecetas]
  );

  const camposIngredientes = [
    { val: ingrediente, fn: setIngrediente, label: "Ingrediente 1", id: "ing1" },
    { val: ingrediente2, fn: setIngrediente2, label: "Ingrediente 2", id: "ing2" },
    { val: ingrediente3, fn: setIngrediente3, label: "Ingrediente 3", id: "ing3" },
  ];

  return (
    <div className="container">
      <h1 className="mb-4">Buscar recetas por ingrediente</h1>
      
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {camposIngredientes.map((campo) => (
          <div className="mb-3" key={campo.id}>
            <label htmlFor={campo.id} className="form-label">
              {campo.label}:
            </label>
            <input
              id={campo.id}
              type="text"
              className="form-control"
              value={campo.val}
              onChange={(e) => campo.fn(e.target.value)}
              placeholder={`Ej: ${campo.label.toLowerCase()}`}
              aria-label={campo.label}
            />
          </div>
        ))}

        <button 
          type="submit" 
          className="btn btn-success"
          disabled={loading}
        >
          {loading ? "Buscando..." : "Consultar"}
        </button>
      </form>

      {loading && <Loading message={MESSAGES.LOADING_BUSQUEDA} />}

      {!loading && error && resultados.length === 0 && (
        <ErrorMessage error={error} onRetry={() => handleSubmit({ preventDefault: () => {} })} />
      )}

      {!loading && !error && resultados.length === 0 && (
        <EmptyState 
          title={MESSAGES.NO_RESULTADOS}
          message="Intenta con otros ingredientes o busca recetas en la página principal."
          icon="🔍"
        />
      )}

      {!loading && resultados.length > 0 && (
        <div className="mt-4">
          <h2>Resultados ({resultados.length}):</h2>
          <ul className="recetasGrid">
            {resultados.map((receta) => (
              <RecetasCard key={receta.id} receta={receta} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
