// Configuración de la API
const API = "https://api.spoonacular.com";

// Caché simple en memoria para evitar peticiones duplicadas
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

/**
 * Obtiene la API key desde variables de entorno
 * Si no existe, usa una por defecto (solo para desarrollo)
 */
const getApiKey = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) {
    console.warn("⚠️ VITE_API_KEY no está definida. Crea un archivo .env con tu API key.");
    // Fallback temporal - ELIMINAR en producción
    return "6d85b7b20a7241678dba8453fc4846a2";
  }
  return apiKey;
};

/**
 * Cliente HTTP mejorado con caché y manejo de errores
 * @param {string} path - Ruta de la API
 * @param {object} options - Opciones adicionales (cache: boolean)
 * @returns {Promise} - Respuesta de la API
 */
export const get = async (path, options = {}) => {
  const { cache: useCache = true } = options;
  const cacheKey = path;

  // Verificar caché
  if (useCache && cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (Date.now() - cached.timestamp < CACHE_DURATION) {
      return Promise.resolve(cached.data);
    }
    cache.delete(cacheKey);
  }

  try {
    const apiKey = getApiKey();
    const response = await fetch(API + path, {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Guardar en caché
    if (useCache) {
      cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      });
    }

    return data;
  } catch (error) {
    console.error("Error en petición HTTP:", error);
    throw error;
  }
};

/**
 * Limpia el caché manualmente
 */
export const clearCache = () => {
  cache.clear();
};