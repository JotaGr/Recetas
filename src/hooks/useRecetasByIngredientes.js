import { useState } from "react";
import { get } from "../../utils/httpCliente";

/**
 * Hook personalizado para buscar recetas por ingredientes
 * Maneja estados de carga, error y resultados
 */
export const useRecetasByIngredientes = () => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarRecetas = async (ingredientes) => {
    // Validar que hay al menos un ingrediente
    const ingredientesList = ingredientes
      .filter(str => str && str.trim() !== "")
      .map(encodeURIComponent)
      .join(",");

    if (!ingredientesList) {
      setError("Debes ingresar al menos un ingrediente");
      setResultados([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const data = await get(`/recipes/findByIngredients?ingredients=${ingredientesList}`);
      
      // Validar estructura de datos
      if (Array.isArray(data)) {
        setResultados(data);
      } else if (data?.results && Array.isArray(data.results)) {
        setResultados(data.results);
      } else {
        setResultados([]);
      }
    } catch (err) {
      console.error("Error al buscar recetas:", err);
      setError(err.message || "Error al consultar la API");
      setResultados([]);
    } finally {
      setLoading(false);
    }
  };

  return { resultados, loading, error, buscarRecetas };
};





