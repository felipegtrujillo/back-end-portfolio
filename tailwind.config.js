/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary:"#2952",
        "black-100": "#2952",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/fondo2.')",
      },
    },
  },
    plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-hero-pattern-blur': {
          position: 'relative',
          overflow: 'hidden',
        },
        '.bg-hero-pattern-blur::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/src/assets/fondo2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)', // Ajusta el valor del blur según tus necesidades
          zIndex: '-1', // Asegura que el pseudo-elemento esté detrás del contenido
        },
      }, ['responsive', 'hover']);
    },
  ],
};