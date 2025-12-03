import { useState, useEffect } from "react";
import { get } from "../../utils/httpCliente";

/**
 * Hook personalizado para obtener lista de recetas
 * Maneja estados de carga, error y datos
 */
export const useRecetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await get("/recipes/complexSearch");
        
        // Validar estructura de datos
        if (data?.results && Array.isArray(data.results)) {
          setRecetas(data.results);
        } else {
          throw new Error("Formato de datos inválido");
        }
      } catch (err) {
        console.error("Error al cargar recetas:", err);
        setError(err.message || "Error al cargar las recetas");
        setRecetas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecetas();
  }, []);

  return { recetas, loading, error };
};


