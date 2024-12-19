import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        openmenu: {
          '0%': { right: '-100%' }, // Start off-screen
          '100%': { right: '0%' }, // End at full width of the screen
        },
        closemenu: {
          '0%': { right: '0%' },
          '100%': { right: '-100%' }, // Close off-screen
        },
      },
      animation: {
        openmenu: 'openmenu 0.4s ease-out forwards',
        closemenu: 'closemenu 0.4s ease-in forwards',
      },
      colors: {
        'darkest': '#89A8B2',
        'dark': '#B3C8CF',
        'light': '#E5E1DA',
        'lightest': '#F1F0E8',
      },
      fontFamily: {
        geistMono: ['GeistMonoVF', 'monospace'],
        geist: ['GeistVF', 'sans-serif'],
      },
      backgroundImage: {
        'background-login': "url('/images/bgrn-core.png')",
      },
    },
  },
  safelist: [
    'animate-openmenu',
    'animate-closemenu',
    'rotate-180'
  ],
  plugins: [],
};
export default config;
