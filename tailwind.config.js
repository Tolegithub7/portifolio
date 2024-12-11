/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      fontFamily: {
        jetbrainsMono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: {height: "0" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease",
      },
      colors: {
        primary: "#1c1c22",
        secondary: "#9333EA",
        background: "#f9fafb",
        dark: "#111827",
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        }
      },
    },
  },

  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate")
  ],
};




// // tailwind.config.js
// module.exports = {
//   content: [
//     './app/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         primary: ['var(--font-jetbrainsMono)'],
//       },
//       colors: {
//         primary: '#3490dc',
//       },
//     },
//   },
//   plugins: [],
// };