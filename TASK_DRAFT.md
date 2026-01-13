# AIO/GEO Gap Analysis - Tagsi

**Site:** https://tgs-silk.vercel.app/  
**Analiz Tarihi:** 2024-12-29

---

## 1. BOT İLETİŞİM PROTOKOLLERİ

### 1.1 `llms.txt` Dosyası
| Durum | ❌ EKSİK |
|-------|----------|
| **Ne Eksik** | `public/llms.txt` dosyası yok. Nuxt SPA fallback ile ana sayfaya yönleniyor. LLM'ler site yapısını anlayamıyor. |
| **Nasıl Çözülmeli** | `public/llms.txt` oluştur. İçerik: Markdown formatında site özeti, hizmetler, SSS, iletişim bilgileri. [llmstxt.org](https://llmstxt.org) standardına uygun. |

```markdown
# Tagsi - Taksi Çağırma Uygulaması

## Hakkında
Tagsi, Türkiye'nin 81 ilinde hizmet veren mobil taksi çağırma uygulamasıdır.

## Hizmetler
- Yolcu Uygulaması (Android/iOS)
- Sürücü Uygulaması
- Kurumsal Çözümler

## SSS
- Tagsi nedir? → Mobil taksi çağırma uygulaması
- Nasıl kullanılır? → İndir → Konum seç → Çağır
- Ödeme seçenekleri? → Nakit, Kredi Kartı, Dijital Cüzdan

## İletişim
- Web: https://tagsi.com.tr
- Destek:  info@tagsi.co
```

### 1.2 `robots.txt` AI İzinleri
| Durum | ✅ TAMAM |
|-------|----------|
| **Mevcut** | GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended izinli. |
| **İyileştirme** | `CCBot` (Common Crawl - AI training data) eklenebilir. |

---

## 2. SEMANTİK ENTITY GRAPH

### 2.1 Mevcut Şemalar
- SoftwareApplication ✅
- Organization ✅
- Service ✅
- FAQPage ✅

### 2.2 Eksik Şemalar
| Eksik | Çözüm |
|-------|-------|
| **Brand Schema** | `Organization` altında `@type: Brand` ekle. Marka kimliği için kritik. |
| **HowTo Schema** | "Nasıl Çalışır?" bölümü için `HowTo` şeması ekle. AI "how to" sorgularında referans verir. |
| **MobileApplication** | `SoftwareApplication` yerine daha spesifik `MobileApplication` kullan. |
| **SameAs Eksikleri** | Gerçek sosyal medya URL'leri eklenmeli (şu an placeholder). |

```json
{
  "@type": "HowTo",
  "name": "Tagsi ile Nasıl Taksi Çağırılır",
  "step": [
    {"@type": "HowToStep", "name": "Konumunu Seç", "text": "..."},
    {"@type": "HowToStep", "name": "Tagsi Çağır", "text": "..."},
    {"@type": "HowToStep", "name": "Keyfine Bak", "text": "..."}
  ]
}
```

---

## 3. İÇERİK ATOMİZASYONU (RAG Chunking)

### 3.1 HTML Yapısı Analizi
| Durum | ⚠️ KISMI |
|-------|----------|
| **Ne Eksik** | Bölümler `<section>` ile ayrılmış ama `data-chunk-id`, `data-topic` gibi LLM chunking attribute'ları yok. |
| **Nasıl Çözülmeli** | Her bölüme semantik `data-*` attribute'ları ekle. |

```html
<!-- ÖNCE -->
<section class="features">...</section>

<!-- SONRA -->
<section 
  class="features"
  data-chunk-id="features-section"
  data-topic="tagsi-ozellikleri"
  data-summary="Tagsi uygulamasının 6 temel özelliği"
  itemscope 
  itemtype="https://schema.org/ItemList"
>
  ...
</section>
```

### 3.2 Eksik Semantic Elementler
| Element | Kullanım Yeri |
|---------|---------------|
| `<article>` | Her özellik kartı için |
| `<dl><dt><dd>` | Özellik açıklamaları için |
| `aria-label` | Bölüm başlıkları için |

---

## 4. AGENTIC HAZIRLIK

### 4.1 API Endpoint
| Durum | ❌ EKSİK |
|-------|----------|
| **Ne Eksik** | AI ajanlarının programatik veri çekebileceği JSON endpoint yok. |
| **Nasıl Çözülmeli** | `/api/site-info.json` endpoint oluştur. |

```json
// GET /api/site-info.json
{
  "brand": "Tagsi",
  "description": "Türkiye'nin taksi çağırma uygulaması",
  "services": ["passenger_app", "driver_app", "corporate"],
  "coverage": {"cities": 81, "country": "TR"},
  "apps": {
    "android": "https://play.google.com/...",
    "ios": null
  },
  "contact": {
    "support": " info@tagsi.co",
    "web": "https://tagsi.com.tr"
  },
  "last_updated": "2024-12-29"
}
```

### 4.2 Structured Feed
| Durum | ❌ EKSİK |
|-------|----------|
| **Ne Eksik** | Blog/FAQ içerikleri için RSS/Atom feed yok. |
| **Çözüm** | `/feed.xml` veya `/api/faq.json` ekle. |

---

## ÖNCELIK SIRASI

| # | Görev | Etki | Zorluk |
|---|-------|------|--------|
| 1 | `llms.txt` oluştur | 🔴 Yüksek | Kolay |
| 2 | `HowTo` Schema ekle | 🔴 Yüksek | Kolay |
| 3 | `data-*` chunking attributes | 🟡 Orta | Orta |
| 4 | `/api/site-info.json` | 🟡 Orta | Orta |
| 5 | `Brand` + `MobileApplication` schemas | 🟢 Düşük | Kolay |
