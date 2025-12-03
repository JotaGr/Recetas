# 🍳 Tus Recetas - Aplicación de Recetas con React

Una aplicación web moderna y responsive para descubrir recetas deliciosas basadas en ingredientes. Desarrollada con React, Vite y la API de Spoonacular.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.2.0-646CFF?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-7952B3?logo=bootstrap)

## ✨ Características

- 🔍 **Búsqueda de recetas** - Explora miles de recetas
- 🥗 **Búsqueda por ingredientes** - Encuentra recetas con los ingredientes que tienes
- 📱 **Diseño Responsive** - Funciona perfectamente en móviles, tablets y desktop
- ⚡ **Rendimiento optimizado** - Lazy loading, caché y memoización
- 🎨 **UI moderna** - Interfaz intuitiva y atractiva
- 🔒 **Seguro** - API keys protegidas con variables de entorno
- ⚠️ **Manejo de errores** - Feedback claro al usuario
- 📊 **Estados de carga** - Indicadores visuales durante las peticiones

## 🚀 Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca de UI
- **Vite 4.2.0** - Build tool y dev server
- **React Router DOM 6.18.0** - Enrutamiento
- **Bootstrap 5.3.2** - Framework CSS
- **Spoonacular API** - API de recetas

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- API key de Spoonacular (gratuita en [spoonacular.com](https://spoonacular.com/food-api))

## 🔧 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/JotaGr/Recetas.git
   cd Recetas
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```bash
   VITE_API_KEY=tu_api_key_de_spoonacular
   ```
   
   > 💡 **Obtén tu API key gratuita en**: https://spoonacular.com/food-api
   > 
   > ⚠️ **Importante**: El archivo `.env` no se sube al repositorio (está en `.gitignore`). Cada desarrollador debe crear su propio archivo localmente.

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   
   La aplicación se abrirá automáticamente en `http://localhost:5173`

## 📖 Uso

### Página Principal
- Muestra una grilla de recetas populares
- Haz clic en cualquier receta para ver los detalles

### Búsqueda por Ingredientes
1. Haz clic en "Buscar por ingrediente" en el header
2. Ingresa hasta 3 ingredientes
3. Haz clic en "Consultar"
4. Explora las recetas encontradas

### Detalle de Receta
- Información completa de la receta
- Lista de ingredientes con cantidades
- Instrucciones paso a paso
- Tiempo de preparación y porciones
- Enlace a la receta original

## 📁 Estructura del Proyecto

```
recetas2025/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Loading.jsx      # Indicador de carga
│   │   ├── ErrorMessage.jsx # Mensajes de error
│   │   ├── EmptyState.jsx   # Estados vacíos
│   │   ├── ErrorBoundary.jsx # Manejo de errores React
│   │   ├── Layout.jsx       # Layout común
│   │   ├── RecetasCard.jsx  # Tarjeta de receta
│   │   ├── RecetasGrid.jsx  # Grilla de recetas
│   │   ├── ConsultaIngredientes.jsx # Búsqueda
│   │   └── Footer.jsx       # Pie de página
│   ├── hooks/               # Custom hooks
│   │   ├── useRecetas.js
│   │   ├── useRecetaById.js
│   │   └── useRecetasByIngredientes.js
│   ├── page/                # Páginas
│   │   ├── LandingPage.jsx
│   │   └── DetalleReceta.jsx
│   ├── config/              # Configuración
│   │   └── constants.js
│   ├── assets/             # Imágenes y recursos
│   ├── fonts/              # Fuentes personalizadas
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
├── utils/
│   └── httpCliente.js      # Cliente HTTP con caché
├── .env                    # Variables de entorno (no versionado)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Crea build de producción
npm run preview      # Previsualiza el build de producción
```

## 🎯 Mejoras Implementadas

Este proyecto incluye múltiples optimizaciones y mejores prácticas:

- ✅ **Seguridad**: API keys en variables de entorno
- ✅ **Rendimiento**: Lazy loading, caché, memoización
- ✅ **UX**: Estados de carga, manejo de errores, estados vacíos
- ✅ **Código**: Hooks personalizados, separación de responsabilidades
- ✅ **SEO**: Meta tags optimizados
- ✅ **Accesibilidad**: Alt texts, aria-labels

Para más detalles, consulta [MEJORAS_Y_OPTIMIZACIONES.md](./MEJORAS_Y_OPTIMIZACIONES.md)

## 🔒 Seguridad

- ✅ API keys protegidas (no en el código)
- ✅ `.env` en `.gitignore`
- ✅ Sin credenciales hardcodeadas
- ✅ Validación de datos de entrada

Ver [REPORTE_SEGURIDAD.md](./REPORTE_SEGURIDAD.md) para más información.

## 🐛 Solución de Problemas

### Error: "VITE_API_KEY no está definida"
- Asegúrate de haber creado el archivo `.env` en la raíz del proyecto
- Verifica que la variable se llame exactamente `VITE_API_KEY`
- Reinicia el servidor de desarrollo después de crear el `.env`

### La aplicación no carga recetas
- Verifica que tu API key sea válida
- Revisa la consola del navegador para errores
- Asegúrate de tener conexión a internet

### Errores de CORS
- La API de Spoonacular maneja CORS automáticamente
- Si persisten, verifica que estés usando la API key correcta

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 👨‍💻 Autor

**JotaDeveloper**
- GitHub: [@JotaGr](https://github.com/JotaGr)

## 🙏 Agradecimientos

- [Spoonacular API](https://spoonacular.com/food-api) por proporcionar la API de recetas
- [React](https://react.dev/) y [Vite](https://vitejs.dev/) por las herramientas increíbles

## 📚 Documentación Adicional

- [Mejoras y Optimizaciones](./MEJORAS_Y_OPTIMIZACIONES.md) - Análisis detallado de mejoras
- [Reporte de Seguridad](./REPORTE_SEGURIDAD.md) - Auditoría de seguridad
- [Guía de Mejoras](./README_MEJORAS.md) - Documentación técnica

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!


