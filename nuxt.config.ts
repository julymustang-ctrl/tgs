// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
      Poppins: [400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },

  app: {
    head: {
      title: 'Tagsi - Şehrin Yeni Ritmi | Taksi Çağırma Uygulaması',
      htmlAttrs: {
        lang: 'tr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Tagsi ile tek dokunuşla taksi çağır, güvenle git. İstanbul, İzmir, Ankara ve tüm Türkiye\'de hızlı ve güvenli taksi hizmeti. Tagsi konforu, yerli güç.'
        },
        { name: 'keywords', content: 'taksi, taksi çağırma, taksi uygulaması, İstanbul taksi, İzmir taksi, Ankara taksi, ulaşım, hızlı taksi, güvenli taksi, Tagsi' },
        { property: 'og:title', content: 'Tagsi - Şehrin Yeni Ritmi' },
        { property: 'og:description', content: 'Tek dokunuşla çağır, güvenle git. Tagsi konforu, yerli güç.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'tr_TR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tagsi - Şehrin Yeni Ritmi' },
        { name: 'twitter:description', content: 'Tek dokunuşla çağır, güvenle git. Tagsi konforu, yerli güç.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Tagsi',
            operatingSystem: 'Android, iOS',
            applicationCategory: 'TravelApplication',
            description: 'Taksi çağırma uygulaması - Tek dokunuşla çağır, güvenle git.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'TRY'
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Tagsi',
            description: 'Türkiye genelinde taksi çağırma hizmeti',
            areaServed: {
              '@type': 'Country',
              name: 'Turkey'
            },
            serviceType: 'Taksi Çağırma'
          })
        }
      ]
    }
  },

  css: ['./app/assets/css/main.css']
})
