// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Qur'an Online",
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap',
        },
      ],
      script: [
        {
          src: 'https://unpkg.com/@phosphor-icons/web',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [
      eslintPlugin({
        fix: true,
      }),
    ],
  },
});
