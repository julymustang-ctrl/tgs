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

        // Pricing
        pricing: {
            model: 'per_ride',
            currency: 'TRY',
            base_fare: 'taksimetre'
        },

        // Contact
        contact: {
            support_email: ' info@tagsi.co',
            website: 'https://tagsi.com.tr',
            social: {
                twitter: 'https://twitter.com/tagsiapp',
                instagram: 'https://instagram.com/tagsiapp',
                linkedin: 'https://linkedin.com/company/tagsi'
            }
        },

        // Metadata
        language: 'tr-TR',
        knowledge_cutoff: new Date().toISOString(),
        api_version: '1.0'
    }
})
