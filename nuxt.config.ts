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
      title: 'Tagsi - Şehrin Yeni Ritmi | Hızlı Taksi Uygulaması',
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
        { name: 'twitter:description', content: 'Tek dokunuşla çağır, güvenle git. Tagsi konforu, yerli güç.' },
        // Freshness signals for AI crawlers (Perplexity, Google AI)
        { property: 'article:modified_time', content: new Date().toISOString() },
        { name: 'last-modified', content: new Date().toISOString() }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      script: [
        // SoftwareApplication Schema (Critical for app recognition by AI)
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://tagsi.com.tr/#app',
            name: 'Tagsi',
            alternateName: 'Tagsi Taksi Uygulaması',
            applicationCategory: 'TravelApplication',
            operatingSystem: 'ANDROID, iOS',
            description: 'Türkiye genelinde hızlı ve güvenli taksi çağırma uygulaması. Tek dokunuşla çağır, anlık takip et.',
            inLanguage: 'tr-TR',
            downloadUrl: 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client&hl=tr',
            installUrl: 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client&hl=tr',
            screenshot: 'https://tagsi.com.tr/screenshot.png',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'TRY'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '1250',
              bestRating: '5',
              worstRating: '1'
            },
            dateModified: new Date().toISOString().split('T')[0]
          })
        },
        // Organization Schema (Knowledge Graph building)
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://tagsi.com.tr/#organization',
            name: 'Tagsi',
            alternateName: 'Tagsi Taksi Uygulaması',
            url: 'https://tagsi.com.tr',
            logo: {
              '@type': 'ImageObject',
              url: 'https://tagsi.com.tr/logo.png',
              width: 512,
              height: 512
            },
            sameAs: [
              'https://www.instagram.com/tagsiapp/',
              'https://twitter.com/tagsiapp',
              'https://www.linkedin.com/company/tagsi/',
              'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+90-XXX-XXX-XXXX',
              contactType: 'customer service',
              availableLanguage: 'Turkish',
              areaServed: 'TR'
            },
            areaServed: {
              '@type': 'Country',
              name: 'Turkey',
              alternateName: 'Türkiye'
            },
            inLanguage: 'tr-TR'
          })
        },
        // Service Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://tagsi.com.tr/#service',
            name: 'Tagsi Taksi Çağırma Hizmeti',
            description: 'Mobil uygulama üzerinden anlık taksi çağırma, canlı konum takibi ve güvenli ödeme hizmeti.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://tagsi.com.tr/#organization'
            },
            serviceType: 'Taksi Çağırma',
            areaServed: {
              '@type': 'Country',
              name: 'Turkey'
            },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://tagsi.com.tr',
              availableLanguage: 'tr-TR'
            },
            inLanguage: 'tr-TR'
          })
        },
        // FAQPage Schema (Critical for Direct Answers in AI)
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': 'https://tagsi.com.tr/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Tagsi nedir?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tagsi, Türkiye genelinde hizmet veren mobil taksi çağırma uygulamasıdır. Tek dokunuşla taksi çağırabilir, sürücünüzü canlı haritada takip edebilir ve güvenli ödeme yapabilirsiniz.'
                }
              },
              {
                '@type': 'Question',
                name: 'Tagsi nasıl kullanılır?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Uygulamayı indirin, konumunuzu belirleyin ve "Taksi Çağır" butonuna basın. Ortalama 3 dakika içinde en yakın Tagsi sürücüsü size ulaşır.'
                }
              },
              {
                '@type': 'Question',
                name: 'Tagsi hangi şehirlerde hizmet veriyor?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tagsi, İstanbul, Ankara, İzmir başta olmak üzere Türkiye genelinde 81 ilde hizmet vermektedir.'
                }
              },
              {
                '@type': 'Question',
                name: 'Tagsi ödeme seçenekleri nelerdir?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tagsi ile nakit, kredi kartı veya dijital cüzdan (havale/EFT) ile ödeme yapabilirsiniz. Tüm ödemeler 256-bit SSL şifreleme ile güvence altındadır.'
                }
              },
              {
                '@type': 'Question',
                name: 'Tagsi güvenli mi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Evet. Tüm Tagsi sürücüleri kimlik doğrulama sürecinden geçer. Yolculuğunuz boyunca canlı konum takibi yapılır ve 7/24 müşteri destek hattı aktiftir.'
                }
              }
            ],
            inLanguage: 'tr-TR',
            dateModified: new Date().toISOString().split('T')[0]
          })
        }
      ]
    }
  },

  css: ['./app/assets/css/main.css']
})
