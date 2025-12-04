import { useState, useEffect } from "react";
import { get } from "../../utils/httpCliente";

/**
 * Hook personalizado para obtener una receta por ID
 * Maneja estados de carga, error y datos
 */
export const useRecetaById = (id) => {
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("ID de receta no proporcionado");
      setLoading(false);
      return;
    }

    const fetchReceta = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await get(`/recipes/${id}/information`);
        
        // Validar que los datos existen
        if (data && data.id) {
          setReceta(data);
        } else {
          throw new Error("Receta no encontrada");
        }
      } catch (err) {
        console.error("Error al cargar receta:", err);
        setError(err.message || "Error al cargar la receta");
        setReceta(null);
      } finally {
        setLoading(false);
      }
    };

    fetchReceta();
  }, [id]);

  return { receta, loading, error };
};



