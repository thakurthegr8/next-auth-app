/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#2563eb",
          secondary: "#d3e0fb",
          tertiary: "#242424",
          surface: "#c1c1c1",
        },
        dark: {
          primary: "#2563eb",
          secondary: "#d3e0fb",
          tertiary: "#242424",
          surface: "#202124",
        },
      },
    },
  },
  plugins: [],
};
