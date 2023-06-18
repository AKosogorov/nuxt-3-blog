// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'eBusiness Nuxt 3',
      meta: [
        {}
      ],
      link: [
        // Favicons
        { rel: 'icon', href: '/img/favicon.png' },
        { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' },

        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Raleway:300,400,400i,500,500i,700,800,900'
        },

        // Vendor CSS Files
        { href: '/vendor/animate.css/animate.min.css', rel: 'stylesheet' },
        { href: '/vendor/bootstrap/css/bootstrap.min.css', rel: 'stylesheet' },
        { href: '/vendor/bootstrap-icons/bootstrap-icons.css', rel: 'stylesheet' },
        { href: '/vendor/boxicons/css/boxicons.min.css', rel: 'stylesheet' },
        { href: '/vendor/glightbox/css/glightbox.min.css', rel: 'stylesheet' },
        { href: '/vendor/swiper/swiper-bundle.min.css', rel: 'stylesheet' },

        // Template Main CSS File
        { rel: 'stylesheet', href: '/css/style.css' }
      ]
    }
  },

  runtimeConfig: {
    blogApiUrl: process.env.BLOG_API_URL
  }
})
