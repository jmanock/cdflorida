import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#08233f",
        ocean: "#0d6b78",
        teal: "#14b8a6",
        sand: "#f3dfbd"
      },
      boxShadow: {
        deal: "0 18px 45px rgba(8, 35, 63, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
