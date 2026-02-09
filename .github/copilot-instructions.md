<!-- Instrucciones concisas para agentes AI que trabajan en este repo -->
# Copilot instructions — Recetas2025

Objetivo rápido: hacer cambios seguros y productivos en la app React Vite "Recetas".

- **Arquitectura (big picture):** Aplicación React + Vite con rutas cliente. Punto de entrada: `src/main.jsx`. Enrutado en `src/App.jsx` con `BrowserRouter` (basename `/Recetas`) y lazy-loading para páginas (`src/page/*`). La UI se compone de componentes reutilizables en `src/components/` y hooks de datos en `src/hooks/`.

- **Flujos de datos e integración externa:** Todas las llamadas a Spoonacular se realizan mediante el cliente HTTP central `utils/httpCliente.js` (exporta `get` y `clearCache`). La API key se lee desde `import.meta.env.VITE_API_KEY` y es obligatoria — si falta, `get()` lanza error.

- **Patrones y convenciones del proyecto:**
  - Hooks devuelven `{ data, loading, error }` o variantes con nombres específicos (ej.: `useRecetas` → `{ recetas, loading, error }`). Sigue esa forma al implementar nuevos hooks.
  - Componentes UI usan `Loading`, `ErrorMessage` y `EmptyState` para estados comunes. Reutiliza esos componentes en lugar de crear variantes ad-hoc.
  - Formulario de búsqueda por ingredientes: hasta 3 inputs en `src/components/ConsultaIngredientes.jsx`; la validación ocurre en `useRecetasByIngredientes`.
  - Memoización y performance: usan `useMemo` y lazy imports para minimizar bundle inicial (ver `src/App.jsx` y `src/components/RecetasGrid.jsx`).

- **Comandos importantes / workflows:**
  - Desarrollo: `npm run dev` (Vite). Entrar a `http://localhost:5173`.
  - Build: `npm run build`.
  - Preview build: `npm run preview`.
  - Deploy GH Pages: `npm run deploy` (usa `gh-pages -d dist`). Revisa `vite.config.js` para `base: '/Recetas/'`.

- **Qué revisar antes de cambiar llamadas a la API:**
  - `utils/httpCliente.js`: conserva la lectura de `VITE_API_KEY`, el header `x-api-key` y la lógica de caché (5 min). Si cambias endpoints, respeta el parámetro `options.cache`.
  - Validación de respuestas: los hooks comprueban `data?.results` o arrays; preserva esas protecciones para evitar errores en UI.

- **Errores y UX:** La app muestra mensajes centralizados en `src/config/constants.js` — utilízalos en lugar de strings hardcodeadas cuando corresponda.

- **Rutas y comportamiento de producción:** `BrowserRouter` usa `basename="/Recetas"` (ver `src/App.jsx`). Ten cuidado con rutas relativas y `vite.config.js` cuando pruebes fuera de GH Pages.

- **Ejemplos rápidos (hacer/evitar):**
  - Hacer: crear un nuevo hook que llame a `get('/recipes/...')`, devolver `{ data, loading, error }` y consumirlo desde un componente que use `Loading`/`ErrorMessage`.
  - Evitar: hardcodear la API key en el código o ignorar la caché central (`utils/httpCliente.js`).

- **Archivos clave para referencia:**
  - `src/App.jsx` — rutas y lazy-loading
  - `src/main.jsx` — punto de entrada
  - `src/components/Layout.jsx` — header/footer y botones principales
  - `src/hooks/useRecetas.js`, `src/hooks/useRecetaById.js`, `src/hooks/useRecetasByIngredientes.js` — patrón de hooks
  - `utils/httpCliente.js` — cliente HTTP, caché y manejo de API key
  - `vite.config.js` — `base` para GH Pages

Si algo de lo anterior está incompleto o quieres que expanda ejemplos (tests, PR checklist o convenciones de commit), dime qué sección te gustaría detallar.
