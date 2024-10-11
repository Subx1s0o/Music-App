import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
export default config;
