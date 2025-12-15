/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F4E5F', // Teal/Dark Cyan - Color principal (fondo oscuro, textos secundarios)
          dark: '#153A47',
          light: '#2A6B7F',
        },
        accent: {
          DEFAULT: '#F08A7E', // Coral suave - Color de acento (botones, iconos, elementos destacados)
          dark: '#E06B5E',
          light: '#F5A99E',
        },
        background: {
          DEFAULT: '#F9FAFB', // Gris muy claro - Fondo general (secciones claras)
          light: '#F3F4F6',
        },
        text: {
          primary: '#111827', // Gris oscuro - Texto principal
          secondary: '#374151', // Gris medio - Texto secundario
          light: '#E5E7EB', // Color claro para fondos oscuros
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

