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
        { rel: 'icon', href: 'img/favicon.png' }
      ]
    }
  }
})
