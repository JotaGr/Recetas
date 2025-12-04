# Plan de Limpieza de Código No Utilizado

## Información Recopilada
- Archivos duplicados en raíz (components/, page/, data/, fonts/, assets/, App.jsx, main.jsx, app.css) que no se usan, ya que el proyecto usa src/.
- Constantes no utilizadas: APP_CONFIG y ROUTES en constants.js.
- Archivo data/peliculas.json que parece ser un remanente (películas en lugar de recetas).
- Todos los componentes, hooks y utilidades en src/ están en uso.

## Plan de Correcciones
- [] Eliminar constantes no utilizadas en src/config/constants.js (APP_CONFIG y ROUTES).
- [] Eliminar archivos duplicados en raíz: components/, page/, data/, fonts/, assets/, App.jsx, main.jsx, app.css.
- [] Eliminar data/peliculas.json.
- [] Verificar que no haya otros archivos no utilizados.

## Pasos de Seguimiento
- [] Ejecutar el proyecto para asegurar que funciona después de los cambios.
- [] Verificar que no se rompan importaciones.
