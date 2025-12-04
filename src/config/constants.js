/**
 * Constantes y configuración centralizada de la aplicación
 */

export const APP_CONFIG = {
  API_BASE_URL: "https://api.spoonacular.com",
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutos
};

export const ROUTES = {
  HOME: "/",
  RECETA_DETALLE: "/receta/:id",
  CONSULTA_INGREDIENTES: "/consultaingredientes",
};

export const MESSAGES = {
  LOADING_RECETAS: "Cargando recetas...",
  LOADING_RECETA: "Cargando receta...",
  LOADING_BUSQUEDA: "Buscando recetas...",
  ERROR_CARGAR_RECETAS: "Error al cargar las recetas",
  ERROR_CARGAR_RECETA: "Error al cargar la receta",
  ERROR_BUSCAR: "Error al buscar recetas",
  NO_RECETAS: "No se encontraron recetas",
  NO_RESULTADOS: "No se encontraron resultados para tu búsqueda",
  INGREDIENTE_REQUERIDO: "Debes ingresar al menos un ingrediente",
};



