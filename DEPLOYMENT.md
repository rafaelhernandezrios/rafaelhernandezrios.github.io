# 🚀 Deployment Guide - GitHub Pages

## Configuración Automática (Recomendado)

### 1. GitHub Actions Workflow
Ya está configurado el workflow automático en `.github/workflows/deploy.yml` que:
- Se ejecuta automáticamente en cada push a `master` o `main`
- Construye la aplicación
- Despliega a la rama `gh-pages`

### 2. Configuración en GitHub
1. Ve a tu repositorio: https://github.com/rafaelhernandezrios/rafaelhernandezrios.github.io
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. El workflow se ejecutará automáticamente

## Deployment Manual

### Opción 1: Usando npm scripts
```bash
# Instalar dependencias
npm install

# Construir para producción
npm run build

# Desplegar a gh-pages
npm run deploy
```

### Opción 2: Usando GitHub CLI
```bash
# Construir la aplicación
npm run build

# Desplegar usando gh-pages
npx gh-pages -d build
```

## Comandos Git para Subir Cambios

```bash
# Agregar todos los cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: implement blue/cyan color palette and toggle functionality"

# Subir a la rama master
git push origin master
```

## Verificación del Deployment

1. **GitHub Actions**: Ve a la pestaña "Actions" en tu repositorio
2. **GitHub Pages**: Ve a Settings → Pages para ver el estado
3. **Sitio Web**: Visita https://rafaelhernandezrios.github.io

## Estructura del Proyecto

```
rafaelhernandezrios.github.io/
├── .github/workflows/deploy.yml  # Workflow de deployment
├── public/                       # Archivos públicos
├── src/                         # Código fuente
├── build/                       # Build de producción (generado)
└── package.json                 # Configuración del proyecto
```

## Troubleshooting

### Error: "gh-pages command not found"
```bash
npm install --save-dev gh-pages
```

### Error: "Build failed"
```bash
# Limpiar cache
npm run build -- --reset-cache
```

### Error: "Permission denied"
- Verifica que tienes permisos de escritura en el repositorio
- Asegúrate de estar autenticado con GitHub

## Características del Deployment

✅ **Automático**: Se ejecuta en cada push a master
✅ **Optimizado**: Build de producción optimizado
✅ **CDN**: Servido desde GitHub Pages CDN
✅ **HTTPS**: Certificado SSL automático
✅ **Custom Domain**: Configurado para rafaelhernandezrios.github.io

## Próximos Pasos

1. **Push inicial**: `git push origin master`
2. **Verificar Actions**: Revisar que el workflow se ejecute
3. **Probar sitio**: Visitar https://rafaelhernandezrios.github.io
4. **Configurar dominio personalizado** (opcional)
