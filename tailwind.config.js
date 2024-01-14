// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9c64a6',
          DEFAULT: '#76448a',
          dark: '#5a2d5a'
        },
        secondary: {
          light: '#69a3b2',
          DEFAULT: '#41729f',
          dark: '#30556d'
        },
        tertiary: {
          light: '#f6d6b5', 
          DEFAULT: '#f5c0a1',
          dark: '#c76b4a' 
        },
        'bg-light': '#f0f0f0',
        'bg-dark': '#333333',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#c76b4a', 
        info: '#41729f', 
      }
    }
  },
  plugins: []
};
