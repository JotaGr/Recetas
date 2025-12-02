# 🔧 Solución para Pantalla en Blanco en GitHub Pages

## ❌ Error Actual
```
main.jsx:1 Failed to load resource: the server responded with a status of 404 ()
```

## 🔍 Diagnóstico

El error indica que GitHub Pages está intentando cargar `main.jsx` directamente, lo que significa que:

1. **GitHub Pages NO está usando el build compilado** - Está sirviendo los archivos fuente
2. **El workflow de GitHub Actions puede no estar ejecutándose** o **GitHub Pages no está configurado para usarlo**

## ✅ Solución Paso a Paso

### Paso 1: Verificar Configuración de GitHub Pages

1. Ve a tu repositorio: https://github.com/JotaGr/Recetas
2. Ve a **Settings** → **Pages**
3. Verifica que:
   - **Source**: Esté configurado como **"GitHub Actions"** (NO "Deploy from a branch")
   - Si está en "Deploy from a branch", cámbialo a **"GitHub Actions"**

### Paso 2: Verificar que el Workflow se Ejecutó

1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow **"Deploy to GitHub Pages"** se haya ejecutado
3. Si hay errores, haz clic en el workflow y revisa los logs

### Paso 3: Verificar API Key Secret

1. Ve a **Settings** → **Secrets and variables** → **Actions**
2. Verifica que exista el secret **`VITE_API_KEY`**
3. Si no existe, créalo con tu API key de Spoonacular

### Paso 4: Forzar Nueva Ejecución del Workflow

Si el workflow no se ejecutó o falló:

1. Ve a **Actions**
2. Selecciona el workflow **"Deploy to GitHub Pages"**
3. Haz clic en **"Run workflow"** → **"Run workflow"**

### Paso 5: Esperar y Verificar

1. Espera 1-2 minutos a que termine el workflow
2. Ve a **Settings** → **Pages**
3. Verifica que aparezca la URL: `https://jotagr.github.io/Recetas/`
4. Haz clic en la URL para verificar que funcione

## 🚨 Problemas Comunes

### Problema: "No workflow runs found"
**Solución**: 
- Verifica que el archivo `.github/workflows/deploy.yml` esté en el repositorio
- Haz un nuevo commit y push

### Problema: "Workflow failed"
**Solución**:
- Revisa los logs del workflow
- Verifica que `VITE_API_KEY` esté configurado como secret
- Verifica que no haya errores de sintaxis en el código

### Problema: "GitHub Pages está configurado pero muestra 404"
**Solución**:
- Asegúrate de que el Source sea **"GitHub Actions"** (NO "Deploy from a branch")
- Espera unos minutos después de que termine el workflow
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

### Problema: "Pantalla en blanco pero sin errores en consola"
**Solución**:
- Verifica que la API key esté configurada correctamente
- Abre la consola del navegador (F12) y revisa si hay errores de red
- Verifica que los assets se estén cargando correctamente

## 📋 Checklist de Verificación

- [ ] GitHub Pages configurado con Source: **"GitHub Actions"**
- [ ] Secret `VITE_API_KEY` configurado en Settings → Secrets
- [ ] Workflow ejecutándose en la pestaña Actions
- [ ] Workflow completado sin errores
- [ ] URL de GitHub Pages disponible en Settings → Pages
- [ ] Sitio carga correctamente en `https://jotagr.github.io/Recetas/`

## 🔄 Si Nada Funciona

1. **Elimina y recrea la configuración de GitHub Pages:**
   - Settings → Pages → Cambia el Source a "None"
   - Guarda
   - Cambia de nuevo a "GitHub Actions"
   - Guarda

2. **Verifica manualmente el build:**
   ```bash
   npm run build
   ```
   - Verifica que `dist/index.html` tenga las rutas correctas con `/Recetas/`
   - Verifica que `dist/assets/` contenga los archivos JS y CSS

3. **Revisa los logs del workflow:**
   - Ve a Actions → Último workflow → Build job
   - Revisa si hay errores en "Build" o "Deploy"

## 📞 Información Útil

- **URL esperada**: `https://jotagr.github.io/Recetas/`
- **Base path configurado**: `/Recetas/`
- **Workflow file**: `.github/workflows/deploy.yml`

---

**Última actualización**: 2025-12-02

