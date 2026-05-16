import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
        condensed: ['"Barlow Condensed"', '"Inter"', "sans-serif"],
      },
      colors: {
        cb: {
          wine: "#5C1530",
          "wine-deep": "#3D0E1F",
          "wine-light": "#7A2040",
          "wine-muted": "#8B3055",
          gold: "#C9A84C",
          "gold-light": "#E5C97E",
          "gold-bright": "#F2DC9E",
          "gold-dim": "#A0843C",
          cream: "#FDF8F0",
          "cream-dark": "#F5EDE0",
          ink: "#1A0A12",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "trumpet-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))" },
          "50%": { filter: "drop-shadow(0 0 22px rgba(201,168,76,0.7))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "trumpet-glow": "trumpet-glow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "count-up": "count-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
