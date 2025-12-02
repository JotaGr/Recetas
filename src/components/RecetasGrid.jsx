// Externos
import { useMemo } from "react";

// Internos
import { RecetasCard } from "./RecetasCard";
import { useRecetas } from "../hooks/useRecetas";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { EmptyState } from "./EmptyState";

// Estilos
import "./RecetasGrid.css";
import { MESSAGES } from "../config/constants";

export const RecetasGrid = () => {
  const { recetas, loading, error } = useRecetas();

  // Memoizar para evitar re-renders innecesarios
  const recetasMemo = useMemo(() => recetas, [recetas]);

  if (loading) {
    return <Loading message={MESSAGES.LOADING_RECETAS} />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (recetasMemo.length === 0) {
    return <EmptyState title={MESSAGES.NO_RECETAS} icon="🍳" />;
  }

  return (
    <ul className="recetasGrid">
      {recetasMemo.map((receta) => (
        <RecetasCard key={receta.id} receta={receta} />
      ))}
    </ul>
  );
};
