import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1172',
        magenta: '#E91E8C',
        cyan: '#00BFFF',
        dark: '#0A0F2C',
        light: '#F8F9FF',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #E91E8C, #0A1172)",
        "gradient-cool": "linear-gradient(135deg, #00BFFF, #E91E8C)",
        "gradient-navy": "linear-gradient(135deg, #070C5A, #0A1172, #070C5A)",
      },
      boxShadow: {
        "glow-magenta": "0 20px 60px -20px rgba(233, 30, 140, 0.5)",
        "glow-cyan": "0 20px 60px -20px rgba(0, 191, 255, 0.5)",
        "glow-navy": "0 8px 32px -12px rgba(10, 17, 114, 0.18)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.6)" },
          "70%": { boxShadow: "0 0 0 18px rgba(37, 211, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        blob: "blob 14s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s infinite",
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
