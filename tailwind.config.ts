import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        navy: "#0F172A",
        ocean: "#0284C7",
        gulf: "#0EA5E9",
        aqua: "#22D3EE",
        teal: "#14B8A6",
        gold: "#F59E0B",
        sand: "#FAFAF7",
        slateText: "#475569"
      },
      boxShadow: {
        card: "0 16px 42px rgba(15, 23, 42, 0.08)",
        soft: "0 24px 70px rgba(15, 23, 42, 0.14)",
        premium: "0 30px 90px rgba(2, 132, 199, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
