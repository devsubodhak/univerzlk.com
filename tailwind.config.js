/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#e17044",
          dark: "#c85a30",
          light: "#f0a47e",
          50: "#fef3ee",
          100: "#fde3d5",
          200: "#f9c3aa",
          500: "#e17044",
          600: "#c85a30",
          700: "#a5472a",
          900: "#7a321d",
        },
        navy: {
          DEFAULT: "#1e2a3a",
          light: "#2d3e52",
          dark: "#0f1923",
        },
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(225, 112, 68, 0.25)" },
          "50%": { boxShadow: "0 0 24px rgba(225, 112, 68, 0.45)" },
        },
      },
    },
  },
  plugins: [],
};
