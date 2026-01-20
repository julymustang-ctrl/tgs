/**
 * Agentic API Endpoint - Site Info
 * 
 * This endpoint provides structured data for AI agents to consume
 * without needing to scrape the website.
 * 
 * Usage: GET /api/site-info
 */

export default defineEventHandler(() => {
    return {
        // Brand Identity
        brand: 'Tagsi',
        tagline: 'Şehrin Yeni Ritmi',
        description: "Türkiye'nin lider mobil taksi çağırma platformu. Tek dokunuşla çağır, güvenle git.",

        // Service Types
        services: [
            {
                id: 'passenger',
                name: 'Tagsi Yolcu',
                description: 'Bireysel yolcular için anlık taksi çağırma',
                platform: ['android', 'ios_coming_soon']
            },
            {
                id: 'driver',
                name: 'Tagsi Sürücü',
                description: 'Taksiciler için yüksek kazançlı iş modeli',
                platform: ['android', 'ios_coming_soon']
            },
            {
                id: 'corporate',
                name: 'Tagsi Kurumsal',
                description: 'Şirketler için faturalı ve raporlanabilir ulaşım',
                platform: ['web']
            }
        ],

        // Coverage
        coverage: {
            country: 'TR',
            country_name: 'Türkiye',
            cities_count: 81,
            primary_cities: ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa']
        },

        // App Store Links
        app_links: {
            android: {
                passenger: 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client',
                driver: 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_driver_app'
            },
            ios: {
                passenger: null,
                driver: null,
                status: 'coming_soon'
            }
        },

        // Features
        features: [
            'Anlık taksi çağırma',
            'Canlı GPS takibi',
            'Güvenli ödeme (Nakit, Kredi Kartı, Dijital Cüzdan)',
            'Sürücü puanlama sistemi',
            '7/24 müşteri desteği',
            'Sürücü kimlik doğrulama'
        ],

        pricing: {
            model: 'per_ride',
            currency: 'TRY',
            base_fare: 'taksimetre'
        },

        // Corporate Identity
        corporate: {
            mission: 'Paylaşımlı yolculuk yaklaşımımız, trafikteki araç sayısının azalmasına ve dolaylı olarak yakıt tüketimi ile karbon salımının düşmesine katkı sağlar.',
            vision: 'Şehir içi ulaşımı daha sürdürülebilir, paylaşım odaklı ve herkes için erişilebilir hale getiren lider bir yolculuk platformu olmak.',
            values: ['Sürdürülebilir', 'Paylaşımcı', 'Ekonomik']
        },

        // Safety Features
        safety: {
            intro: 'Güvenlik, Tagsi\'nin temel yapı taşlarından biridir. Tüm sürücüler kimlik ve araç doğrulama süreçlerinden geçer.',
            features: [
                { title: 'Canlı Konum Takibi', description: 'Tüm yolculuklarınız gerçek zamanlı olarak takip edilir.' },
                { title: 'Kimlik Doğrulama', description: 'Sürücüler detaylı doğrulama sürecinden geçer.' },
                { title: 'Puanlama Sistemi', description: 'Yolcu ve sürücü birbirini değerlendirir.' },
                { title: 'Uygulama İçi Destek', description: 'Yolculuk süresince destek yanınızdadır.' },
                { title: 'Konum Paylaşımı', description: 'Yolculuğunuzu paylaşabilirsiniz.' },
                { title: 'Acil Durum Butonu', description: 'Anında yardım çağırabilirsiniz.' }
            ]
        },

        // Legal Links
        legal: {
            privacy_policy: 'https://tagsi.com.tr/gizlilik-politikasi',
            terms_of_use: 'https://tagsi.com.tr/kullanim-kosullari',
            cookie_policy: 'https://tagsi.com.tr/cerez-politikasi'
        },

        // Contact
        contact: {
            support_email: 'info@tagsi.co',
            website: 'https://tagsi.com.tr',
            social: {
                twitter: 'https://twitter.com/tagsico',
                instagram: 'https://instagram.com/tagsico',
                facebook: 'https://facebook.com/tagsico',
                linkedin: 'https://linkedin.com/company/tagsi'
            }
        },

        // FAQ (Frequently Asked Questions)
        faq: [
            { question: 'Tagsi nedir?', answer: 'Tagsi, aynı yöne giden yolcular ile sürücüleri bir araya getiren paylaşımlı yolculuk platformudur.' },
            { question: 'Tagsi taksi uygulaması mı?', answer: 'Hayır. Tagsi ticari yolcu taşımacılığı yapan bir taksi uygulaması değildir. Yalnızca paylaşımlı yolculuk platformudur.' },
            { question: 'Yolcu olarak nasıl yolculuk oluştururum?', answer: 'Uygulamayı aç, konumu ve adresi seç, sürücülerle eşleş ve başla.' },
            { question: 'Sürücü olarak nasıl kayıt olurum?', answer: 'Uygulamadan kişisel ve araç bilgilerini girip doğrulama adımlarını tamamlayarak.' },
            { question: 'Yolculuk ücreti nasıl belirlenir?', answer: 'Tagsi tavsiye edilen bir paylaşım tutarı sunar. Tutar, yolcu ve sürücünün karşılıklı onayıyla netleşir.' },
            { question: 'Ödeme nasıl yapılır?', answer: 'Ödeme yolcu ve sürücü arasında gerçekleşir. Tagsi komisyon almaz ve ödemeye aracılık etmez.' },
            { question: 'İletişim nasıl sağlanır?', answer: 'Uygulama içi mesajlaşma ve arama ile güvenli iletişim sağlanır.' },
            { question: 'Güvenlik nasıl sağlanıyor?', answer: 'Doğrulama süreçleri, puanlama sistemi ve kayıtlı iletişim altyapısı ile.' },
            { question: 'Hangi şehirlerde kullanılabilir?', answer: 'Hizmet ağı genişlemektedir, aktiflik durumu uygulamadan görülebilir.' },
            { question: 'Kişisel bilgilerim güvende mi?', answer: 'Evet, gerekli teknik ve idari önlemler uygulanmaktadır.' },
            { question: 'Hesabımı nasıl silebilirim?', answer: 'Profil ayarlarından hesap silme talebi oluşturabilirsiniz.' }
        ],

        // Metadata
        language: 'tr-TR',
        knowledge_cutoff: new Date().toISOString(),
        api_version: '1.0'
    }
})
