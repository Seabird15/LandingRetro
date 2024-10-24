/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azul: "#006AA8",
        rojo: "#FF0044",
        negro: "#1B1B1B",
        blanco: "#FFFFFF",
        amarillo: "#FDCD09",
        crema: "#FCF4E0",
      },
    },
  },
  plugins: [],
};
