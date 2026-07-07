/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#06060a",
          900: "#0a0a12",
          850: "#0e0e18",
          800: "#12121f",
        },
        accent: {
          blue: "#4d7fff",
          indigo: "#6e5bff",
          violet: "#9b5bff",
          cyan: "#3fd8ff",
        },
        glass: {
          border: "rgba(255,255,255,0.08)",
          fill: "rgba(255,255,255,0.03)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-1":
          "radial-gradient(60% 60% at 20% 20%, rgba(77,127,255,0.25) 0%, rgba(77,127,255,0) 70%)",
        "aurora-2":
          "radial-gradient(50% 50% at 80% 30%, rgba(155,91,255,0.22) 0%, rgba(155,91,255,0) 70%)",
        "aurora-3":
          "radial-gradient(50% 50% at 50% 90%, rgba(63,216,255,0.16) 0%, rgba(63,216,255,0) 70%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slower": "spin 70s linear infinite",
        "spin-reverse": "spin-reverse 50s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(77,127,255,0.25)",
        "glow-violet": "0 0 40px rgba(155,91,255,0.25)",
      },
    },
  },
  plugins: [],
};
