# 🚀 Configuración de GitHub Pages

## ✅ Cambios Realizados

Se han realizado los siguientes cambios para que la aplicación funcione correctamente en GitHub Pages:

### 1. **Configuración de Base Path**
- ✅ `vite.config.js`: Agregado `base: '/Recetas/'`
- ✅ `App.jsx`: Agregado `basename="/Recetas"` al BrowserRouter

### 2. **Archivo 404.html**
- ✅ Creado `404.html` para manejar rutas de React Router en GitHub Pages

### 3. **GitHub Actions Workflow**
- ✅ Creado `.github/workflows/deploy.yml` para deploy automático

---

## 📋 Instrucciones de Configuración

### Opción 1: Deploy Automático con GitHub Actions (Recomendado)

1. **Configurar GitHub Pages en el repositorio:**
   - Ve a: `Settings` → `Pages`
   - En "Source", selecciona: `GitHub Actions`

2. **Agregar API Key como Secret:**
   - Ve a: `Settings` → `Secrets and variables` → `Actions`
   - Haz clic en `New repository secret`
   - Name: `VITE_API_KEY`
   - Value: Tu API key de Spoonacular
   - Haz clic en `Add secret`

3. **Hacer push de los cambios:**
   ```bash
   git add .
   git commit -m "feat: Configurar GitHub Pages"
   git push origin main
   ```

4. **Verificar el deploy:**
   - Ve a la pestaña `Actions` en tu repositorio
   - Verás el workflow ejecutándose
   - Cuando termine, tu sitio estará disponible en:
     `https://jotagr.github.io/Recetas/`

---

### Opción 2: Deploy Manual

1. **Instalar gh-pages (si no está instalado):**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Hacer build y deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

3. **Configurar GitHub Pages:**
   - Ve a: `Settings` → `Pages`
   - En "Source", selecciona: `gh-pages` branch
   - Guarda los cambios

---

## ⚠️ Problemas Comunes

### Pantalla en Blanco

**Causa**: Base path incorrecto o rutas no configuradas

**Solución**:
1. Verifica que `vite.config.js` tenga `base: '/Recetas/'`
2. Verifica que `App.jsx` tenga `basename="/Recetas"`
3. Asegúrate de que el archivo `404.html` esté en la raíz
4. Revisa la consola del navegador para errores

### Errores 404 en Rutas

**Causa**: GitHub Pages no soporta rutas de SPA sin configuración

**Solución**: El archivo `404.html` ya está configurado para redirigir correctamente

### Assets No Se Cargan

**Causa**: Rutas de assets incorrectas

**Solución**: 
- Verifica que `vite.config.js` tenga el `base` correcto
- Reconstruye el proyecto: `npm run build`

### API Key No Funciona

**Causa**: La API key no está disponible en el build

**Solución**:
- Si usas GitHub Actions: Agrega `VITE_API_KEY` como secret
- Si haces deploy manual: Crea un `.env` local antes de hacer build

---

## 🔍 Verificación

Después del deploy, verifica:

1. ✅ La página principal carga correctamente
2. ✅ Las imágenes se muestran
3. ✅ La navegación funciona (rutas de React Router)
4. ✅ La búsqueda de recetas funciona
5. ✅ El detalle de receta se muestra correctamente

---

## 📝 Notas Importantes

- **Base Path**: Si cambias el nombre del repositorio, actualiza el `base` en `vite.config.js` y el `basename` en `App.jsx`
- **API Key**: Nunca subas tu `.env` al repositorio. Usa GitHub Secrets para GitHub Actions
- **Build**: Siempre haz `npm run build` antes de verificar localmente con `npm run preview`

---

## 🆘 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica los logs de GitHub Actions
3. Asegúrate de que todos los archivos estén en el repositorio
4. Verifica que el base path coincida con el nombre del repositorio

---

**Última actualización**: 2025-12-02


