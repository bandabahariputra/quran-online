/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './*.vue',
  ],
  theme: {
    extend: {
      colors: {
        qo: {
          0: '#f4f8f9',
          1: '#494f56',
          2: '#24a4b5',
          3: '#a2a9b3',
          4: '#e0f6fa',
        },
      },
      fontFamily: {
        sans: '"Karla", sans-serif',
        quran: 'Al Qalam Quran Majeed',
      },
    },
  },
  plugins: [],
};
