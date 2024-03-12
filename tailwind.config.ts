import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--primary-rgb) / <alpha-value>)',

      // Utils:
      black: 'rgb(var(--black-rgb) / <alpha-value>)',
      white: 'rgb(var(--white-rgb) / <alpha-value>)',
    }
  },
  plugins: [],
};
export default config;
