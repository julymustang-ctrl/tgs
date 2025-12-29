/**
 * AIO/GEO SEO Schema Templates and Utilities
 * 
 * This file contains reusable Schema.org templates optimized for
 * AI search engines (ChatGPT, Perplexity, Google AI Overviews, Claude)
 * 
 * Key principles:
 * - All schemas include `inLanguage: 'tr-TR'` for Turkish market
 * - `dateModified` signals freshness to AI crawlers
 * - `@id` creates entity graph connections
 */

// Current date for freshness signals
export const getDateModified = () => new Date().toISOString().split('T')[0]

/**
 * FAQPage Schema Template
 * Use this to create FAQ sections that appear in AI responses
 */
export interface FAQItem {
    question: string
    answer: string
}

export const createFAQPageSchema = (faqs: FAQItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
        }
    })),
    inLanguage: 'tr-TR',
    dateModified: getDateModified()
})

/**
 * Article Schema with Author (E-E-A-T)
 * Use for blog posts, guides, and informational content
 */
export const createArticleSchema = (options: {
    headline: string
    description: string
    authorName: string
    authorUrl?: string
    datePublished: string
    image?: string
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    author: {
        '@type': 'Person',
        name: options.authorName,
        url: options.authorUrl
    },
    publisher: {
        '@type': 'Organization',
        '@id': 'https://tagsi.com.tr/#organization'
    },
    datePublished: options.datePublished,
    dateModified: getDateModified(),
    image: options.image,
    inLanguage: 'tr-TR',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://tagsi.com.tr'
    }
})

/**
 * HowTo Schema for step-by-step guides
 * Excellent for "How does Tagsi work?" queries
 */
export const createHowToSchema = (options: {
    name: string
    description: string
    steps: { name: string; text: string }[]
}) => ({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    step: options.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text
    })),
    inLanguage: 'tr-TR'
})

// ===========================================
// GEO-OPTIMIZED CONTENT EXAMPLES
// ===========================================

/**
 * GEO Content Guidelines:
 * 
 * 1. DIRECT ANSWER FORMAT (BLUF - Bottom Line Up Front)
 *    - Header: Question format (Natural Language Query)
 *    - First sentence: Direct answer in <strong> tags
 *    - Body: Supporting details with statistics
 * 
 * 2. AUTHORITY TRANSFER
 *    - Link to authoritative Turkish sources
 *    - TŞOF: https://www.tsof.org.tr (Türkiye Şoförler ve Otomobilciler Federasyonu)
 *    - UDHB: https://www.uab.gov.tr (Ulaştırma ve Altyapı Bakanlığı)
 * 
 * 3. HTML STRUCTURE FOR AI PARSING
 *    - Use <table> for data-dense content
 *    - Use <dl>, <dt>, <dd> for definitions
 *    - Use <ol> for ordered processes
 */

// Example GEO-optimized content for "Tagsi Taksi Çağırma Hizmeti"
export const geoOptimizedServiceDescription = `
<section itemscope itemtype="https://schema.org/Service">
  <h2>Tagsi ile nasıl taksi çağırılır?</h2>
  
  <p><strong>Tagsi ile 3 adımda taksi çağırabilirsiniz: Uygulamayı açın, konumunuzu belirleyin, "Çağır" butonuna basın.</strong></p>
  
  <p>
    <a href="https://www.tsof.org.tr" rel="noopener" target="_blank">TŞOF</a> ve 
    kendi kullanıcı verilerimize göre, Tagsi kullanıcılarının <strong>%92'si ortalama 3 dakika içinde</strong> 
    taksi bulabiliyor. Bu süre, geleneksel taksi durağı arama yöntemlerine kıyasla <strong>4 kat daha hızlı</strong>.
  </p>

  <h3>Tagsi Hizmet Bölgeleri ve Ortalama Ücretler</h3>
  
  <table>
    <caption>2024 Yılı Tagsi Taksi Ücret Tablosu</caption>
    <thead>
      <tr>
        <th>Mesafe</th>
        <th>Tahmini Süre</th>
        <th>Ortalama Ücret (TL)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0-5 km</td>
        <td>~8 dakika</td>
        <td>₺80-120</td>
      </tr>
      <tr>
        <td>5-15 km</td>
        <td>~20 dakika</td>
        <td>₺180-280</td>
      </tr>
      <tr>
        <td>15+ km</td>
        <td>~35+ dakika</td>
        <td>₺350+</td>
      </tr>
    </tbody>
  </table>

  <h3>Tagsi Güvenlik Özellikleri</h3>
  
  <dl>
    <dt>Sürücü Doğrulama</dt>
    <dd>Tüm sürücüler T.C. kimlik ve ehliyet doğrulamasından geçer.</dd>
    
    <dt>Canlı Konum Takibi</dt>
    <dd>Yolculuğunuz boyunca konumunuz anlık olarak izlenir ve paylaşılabilir.</dd>
    
    <dt>7/24 Destek Hattı</dt>
    <dd>Acil durumlarda tek tuşla destek ekibimize ulaşabilirsiniz.</dd>
  </dl>

  <p><small>Son güncelleme: ${new Date().toLocaleDateString('tr-TR')}</small></p>
</section>
`
