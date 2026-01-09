// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'tr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
      Poppins: [400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },

  app: {
    head: {
      title: 'Tagsi - Şehrin Yeni Ritmi | Hızlı Ulaşım Uygulaması',
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
        { name: 'apple-mobile-web-app-title', content: 'Tagsi' },
        { property: 'og:title', content: 'Tagsi - Şehrin Yeni Ritmi' },
        { property: 'og:description', content: 'Tek dokunuşla çağır, güvenle git. Tagsi konforu, yerli güç.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'tr_TR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tagsi - Şehrin Yeni Ritmi' },
        { name: 'twitter:description', content: 'Tek dokunuşla çağır, güvenle git. Tagsi konforu, yerli güç.' },
        // Freshness signals for AI crawlers (Perplexity, Google AI) - Last Update Trigger
        { property: 'article:modified_time', content: new Date().toISOString() },
        { name: 'last-modified', content: new Date().toISOString() }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/fav/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/fav/favicon.svg' },
        { rel: 'shortcut icon', href: '/fav/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/fav/apple-touch-icon.png' },
        { rel: 'manifest', href: '/fav/site.webmanifest' }
      ],
      script: [
        // Consolidated @graph Schema (AIO Best Practice)
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              // Organization (Root Entity)
              {
                '@type': 'Organization',
                '@id': 'https://tagsi.com.tr/#organization',
                name: 'Tagsi',
                alternateName: 'Tagsi Taksi Uygulaması',
                url: 'https://tagsi.com.tr',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://tagsi.com.tr/logo.svg',
                  width: 512,
                  height: 512
                },
                sameAs: [
                  'https://twitter.com/tagsiapp',
                  'https://instagram.com/tagsiapp',
                  'https://linkedin.com/company/tagsi',
                  'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client'
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+90-850-XXX-XXXX',
                  contactType: 'customer service',
                  areaServed: 'TR',
                  availableLanguage: ['Turkish', 'English']
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'Turkey',
                  alternateName: 'Türkiye'
                }
              },
              // MobileApplication (Primary Product)
              {
                '@type': 'MobileApplication',
                '@id': 'https://tagsi.com.tr/#app',
                name: 'Tagsi Yolcu',
                alternateName: 'Tagsi Taksi Uygulaması',
                applicationCategory: 'TravelApplication',
                operatingSystem: 'Android, iOS',
                description: 'Türkiye genelinde hızlı ve güvenli taksi çağırma uygulaması. Tek dokunuşla çağır, anlık takip et.',
                inLanguage: 'tr-TR',
                downloadUrl: 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client&hl=tr',
                installUrl: 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client&hl=tr',
                screenshot: 'https://tagsi.com.tr/screenshot.png',
                author: { '@id': 'https://tagsi.com.tr/#organization' },
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
                }
              },
              // HowTo Schema (Critical for AI "how to" queries)
              {
                '@type': 'HowTo',
                '@id': 'https://tagsi.com.tr/#howto',
                name: 'Tagsi ile Nasıl Taksi Çağırılır',
                description: '3 basit adımda Tagsi ile taksi çağırma rehberi',
                inLanguage: 'tr-TR',
                totalTime: 'PT3M',
                step: [
                  {
                    '@type': 'HowToStep',
                    position: 1,
                    name: 'Konumunu Seç',
                    text: 'Haritadan veya arama çubuğundan gitmek istediğiniz yeri seçin.'
                  },
                  {
                    '@type': 'HowToStep',
                    position: 2,
                    name: 'Tagsi Çağır',
                    text: 'Tek tıkla en yakın sürücüyü çağırın ve gerçek zamanlı takip edin.'
                  },
                  {
                    '@type': 'HowToStep',
                    position: 3,
                    name: 'Keyfine Bak',
                    text: 'Güvenle yolculuğunuzun tadını çıkarın ve sürücünüzü değerlendirin.'
                  }
                ]
              }
            ]
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
              url: 'https://tagsi.com.tr/logo.svg',
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
