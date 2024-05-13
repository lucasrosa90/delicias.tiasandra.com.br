import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundColor: {
        filled: 'rgb(var(--background-rgb) / <alpha-value>)',
      },
      width: {
        screen: 'calc(100vw - env(safe-area-inset-left) - env(safe-area-inset-right))',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animate'),
  ],
} satisfies Config

export default config

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./lib/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     colors: {
//       primary: {
//         DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
//         10: 'var(--primary-tint-1)',
//         20: 'var(--primary-tint-2)',
//         30: 'var(--primary-tint-3)',
//         40: 'var(--primary-tint-4)',
//         50: 'var(--primary-tint-5)',
//         60: 'var(--primary-tint-6)',
//         70: 'var(--primary-tint-7)',
//         80: 'var(--primary-tint-8)',
//         90: 'var(--primary-tint-9)',
//         100: 'var(--primary-shade-1)',
//         200: 'var(--primary-shade-2)',
//         300: 'var(--primary-shade-3)',
//         400: 'var(--primary-shade-4)',
//         500: 'var(--primary-shade-5)',
//         600: 'var(--primary-shade-6)',
//         700: 'var(--primary-shade-7)',
//         800: 'var(--primary-shade-8)',
//         900: 'var(--primary-shade-9)',
//       },
//       secondary: {
//         DEFAULT: 'rgb(var(--secondary-rgb) / <alpha-value>)',
//         10: 'var(--secondary-tint-1)',
//         20: 'var(--secondary-tint-2)',
//         30: 'var(--secondary-tint-3)',
//         40: 'var(--secondary-tint-4)',
//         50: 'var(--secondary-tint-5)',
//         60: 'var(--secondary-tint-6)',
//         70: 'var(--secondary-tint-7)',
//         80: 'var(--secondary-tint-8)',
//         90: 'var(--secondary-tint-9)',
//         100: 'var(--secondary-shade-1)',
//         200: 'var(--secondary-shade-2)',
//         300: 'var(--secondary-shade-3)',
//         400: 'var(--secondary-shade-4)',
//         500: 'var(--secondary-shade-5)',
//         600: 'var(--secondary-shade-6)',
//         700: 'var(--secondary-shade-7)',
//         800: 'var(--secondary-shade-8)',
//         900: 'var(--secondary-shade-9)',
//       },

//       // Utils:
//       black: 'rgb(var(--black-rgb) / <alpha-value>)',
//       white: 'rgb(var(--white-rgb) / <alpha-value>)',
//     },
//     extend: {
//       backgroundColor: {
//         'filled': 'rgb(var(--background-rgb) / <alpha-value>)',
//       },
//       width: {
//         'screen': 'calc(100vw - env(safe-area-inset-left) - env(safe-area-inset-right))',
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
