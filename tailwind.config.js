/** @type {import('tailwindcss').Config} */
import themes from './src/assets/themes'

const theme = themes.default

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: theme.colors,
    },
  },
  plugins: [],
}
