/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      keyframes: {
        'moveX': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        }
      },

      animation: {
        'moveX': 'moveX 12s 1',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'sm': '576px',   // Small devices (e.g., phones) - 576px and up
        'md': '768px',   // Medium devices (e.g., tablets) - 768px and up
        'lg': '992px',   // Large devices (e.g., laptops) - 992px and up
        'xl': '1200px',  // Extra large devices (e.g., desktops) - 1200px and up
      },

      fontFamily: {
        'firaCode': ['Fira Code', 'monospace'],
        'pixel': ['VT323', 'monospace'],
        'pressStart': ['Press Start 2P', 'cursive'],
        'jost': ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
