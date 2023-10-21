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
        }
      }
    }
  },
  plugins: []
};
