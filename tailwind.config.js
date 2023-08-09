/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // primary: 'Orbitron',
      // secondary: 'Rajdhani',
      // tertiary: 'Aldrich',
    },
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#EAEAFC",
        footer: "#2E3E5C",
        textNav: "#5857d9",
        newViolet: "#f6f6fc",
        carbon100: "#03060b",
        carbon90: "#222d3a"
      },
      backgroundImage: {
        //site: "url('./assets/site-bg.jpg')",
        aboutJesus: "url('/public/images/aboutJesus.png')",
        aboutJulia: "url('/public/images/aboutJulia.png')",
        //services: "url('./assets/services.png')",
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      "xl": { max: "1279px" },
      "lg": { max: "1024px" },
      "md": { max: "768px" },
      "sm": { max: "639px" },
      "xs": { max: "479px" },
    }
  },
  plugins: [],
}

