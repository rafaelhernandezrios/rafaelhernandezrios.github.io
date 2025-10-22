# Actualización de Paleta de Colores - Azul/Cian

## Cambios Implementados

### 1. Nueva Paleta de Colores
Se ha actualizado la paleta de colores principal a azul/cian:

```css
:root {
  --brand: #2563eb;     /* azul principal */
  --brand-2: #1e40af;   /* azul oscuro para hover */
  --accent: #06b6d4;    /* cian como color de acento */
  --bg: #0b0b0b;        /* fondo oscuro */
  --card: #121212;      /* color de tarjetas */
}
```

### 2. Toggle de Paletas
Se ha agregado un botón flotante que permite alternar entre dos paletas:

- **Azul/Cian** (por defecto): `#2563eb`, `#1e40af`, `#06b6d4`
- **Guinda/Dorado**: `#5b0d1f`, `#7a1b33`, `#f59e0b`

### 3. Características del Toggle
- Botón flotante en la esquina superior derecha
- Persistencia de la preferencia en localStorage
- Actualización automática del meta theme-color
- Transiciones suaves entre paletas

### 4. Estilos Actualizados
- Hero section con gradientes decorativos azules
- Botones con nueva paleta (`.btn-brand`)
- Enlaces con color de acento cian
- Chips y badges con estilo azul
- Fondos oscuros para mejor contraste

### 5. Meta Tags
- Agregado `theme-color` meta tag con color azul
- Actualización dinámica del color del navegador

## Uso

El toggle se encuentra en la esquina superior derecha de la página. Al hacer clic, alterna entre las paletas azul/cian y guinda/dorado. La preferencia se guarda automáticamente.

## Archivos Modificados

- `src/App.css` - Variables de color y estilos globales
- `src/components/Hero/Hero.css` - Estilos del hero con tema oscuro
- `public/index.html` - Toggle button y JavaScript
- `COLOR_PALETTE_UPDATE.md` - Esta documentación

## Próximos Pasos Opcionales

1. **Favicon/OG**: Generar favicon y og:image coherentes con la nueva paleta
2. **Analytics**: Añadir Plausible/GA para medir clics en "Demo/Contact"
3. **GitHub Actions**: Configurar deployment automático a GitHub Pages
