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
      primary: {
        DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
        10: 'var(--primary-tint-1)',
        20: 'var(--primary-tint-2)',
        30: 'var(--primary-tint-3)',
        40: 'var(--primary-tint-4)',
        50: 'var(--primary-tint-5)',
        60: 'var(--primary-tint-6)',
        70: 'var(--primary-tint-7)',
        80: 'var(--primary-tint-8)',
        90: 'var(--primary-tint-9)',
        100: 'var(--primary-shade-1)',
        200: 'var(--primary-shade-2)',
        300: 'var(--primary-shade-3)',
        400: 'var(--primary-shade-4)',
        500: 'var(--primary-shade-5)',
        600: 'var(--primary-shade-6)',
        700: 'var(--primary-shade-7)',
        800: 'var(--primary-shade-8)',
        900: 'var(--primary-shade-9)',
      },
      secondary: {
        DEFAULT: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        10: 'var(--secondary-tint-1)',
        20: 'var(--secondary-tint-2)',
        30: 'var(--secondary-tint-3)',
        40: 'var(--secondary-tint-4)',
        50: 'var(--secondary-tint-5)',
        60: 'var(--secondary-tint-6)',
        70: 'var(--secondary-tint-7)',
        80: 'var(--secondary-tint-8)',
        90: 'var(--secondary-tint-9)',
        100: 'var(--secondary-shade-1)',
        200: 'var(--secondary-shade-2)',
        300: 'var(--secondary-shade-3)',
        400: 'var(--secondary-shade-4)',
        500: 'var(--secondary-shade-5)',
        600: 'var(--secondary-shade-6)',
        700: 'var(--secondary-shade-7)',
        800: 'var(--secondary-shade-8)',
        900: 'var(--secondary-shade-9)',
      },

      // Utils:
      black: 'rgb(var(--black-rgb) / <alpha-value>)',
      white: 'rgb(var(--white-rgb) / <alpha-value>)',
    },
    extend: {
      backgroundColor: {
        'filled': 'rgb(var(--background-rgb) / <alpha-value>)',
      },
      width: {
        'screen': 'calc(100vw - env(safe-area-inset-left) - env(safe-area-inset-right))',
      },
    },
  },
  plugins: [],
};
export default config;
