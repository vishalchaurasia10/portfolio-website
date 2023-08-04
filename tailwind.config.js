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
        'moveX':{
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

      fontFamily: {
        'firaCode' : ['Fira Code', 'monospace'],
        'pixel' : ['VT323', 'monospace'],
        'pressStart' : ['Press Start 2P', 'cursive'],
      },
    },
  },
  plugins: [],
}
