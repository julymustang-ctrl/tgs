<template>
  <div class="min-h-screen dark:bg-charcoal bg-gray-50">
    <AppHeader />
    
    <main class="pt-24 pb-16">
      <article 
        v-if="article" 
        class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        itemscope 
        itemtype="https://schema.org/Article"
      >
        <!-- Back Link -->
        <NuxtLink 
          :to="localePath('/blog')"
          class="inline-flex items-center gap-2 text-sm dark:text-white/60 text-charcoal/60 hover:text-taxi-yellow transition-colors mb-8"
        >
          ← {{ $t('blog.backToList') }}
        </NuxtLink>
        
        <!-- Article Header -->
        <header class="mb-8">
          <!-- Category -->
          <div class="mb-4">
            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-taxi-yellow/20 text-taxi-yellow">
              {{ article.category || 'Rehber' }}
            </span>
          </div>
          
          <!-- Title -->
          <h1 
            itemprop="headline"
            class="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white text-charcoal mb-4"
          >
            {{ article.title }}
          </h1>
          
          <!-- Meta -->
          <div class="flex flex-wrap items-center gap-4 text-sm dark:text-white/60 text-charcoal/60">
            <time 
              :datetime="article.updatedAt || article.createdAt"
              itemprop="dateModified"
              class="flex items-center gap-1"
            >
              📅 {{ $t('blog.lastUpdated') }}: {{ formatDate(article.updatedAt || article.createdAt) }}
            </time>
            <span v-if="article.readingTime" class="flex items-center gap-1">
              ⏱️ {{ article.readingTime }} min
            </span>
          </div>
        </header>
        
        <!-- AI Summary Card (Critical for SGE) -->
        <AiSummaryCard 
          v-if="article.summary" 
          :summary="article.summary"
          :locale="locale"
        />
        
        <!-- Two Column Layout: Content + TOC -->
        <div class="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          <!-- Main Content -->
          <div 
            class="prose prose-lg dark:prose-invert max-w-none
                   prose-headings:scroll-mt-24 prose-headings:font-bold
                   prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                   prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                   prose-p:dark:text-white/80 prose-p:text-charcoal/80
                   prose-a:text-taxi-yellow prose-a:no-underline hover:prose-a:underline
                   prose-strong:dark:text-white prose-strong:text-charcoal
                   prose-table:w-full prose-th:text-left prose-th:p-3 prose-th:bg-taxi-yellow/10
                   prose-td:p-3 prose-td:border-b prose-td:dark:border-white/10 prose-td:border-gray-200"
            itemprop="articleBody"
          >
            <ContentRenderer :value="article" />
          </div>
          
          <!-- Sidebar: Table of Contents -->
          <aside class="hidden lg:block">
            <ArticleTOC 
              :toc="article.body?.toc?.links || []"
              :locale="locale"
            />
          </aside>
        </div>
        
        <!-- Mobile TOC (Accordion) -->
        <div class="lg:hidden mt-8">
          <ArticleTOC 
            :toc="article.body?.toc?.links || []"
            :locale="locale"
            mobile
          />
        </div>
      </article>
      
      <!-- 404 State -->
      <div v-else class="max-w-4xl mx-auto px-4 text-center py-20">
        <div class="text-6xl mb-4">🔍</div>
        <h1 class="text-2xl font-bold dark:text-white text-charcoal mb-4">
          {{ locale === 'tr' ? 'İçerik bulunamadı' : locale === 'en' ? 'Content not found' : 'Контент не найден' }}
        </h1>
        <NuxtLink 
          :to="localePath('/blog')"
          class="inline-block px-6 py-3 bg-taxi-yellow text-charcoal font-semibold rounded-xl hover:bg-taxi-yellow-dark transition-colors"
        >
          {{ $t('blog.backToList') }}
        </NuxtLink>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

// Fetch the article
const { data: article } = await useAsyncData(`article-${route.path}`, () => {
  return queryContent(route.path).findOne()
})

// Format date
const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString(locale.value === 'tr' ? 'tr-TR' : locale.value === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Dynamic SEO
useHead(() => ({
  title: article.value?.title ? `${article.value.title} | Tagsi` : 'Tagsi',
  meta: [
    { name: 'description', content: article.value?.description || '' },
    { property: 'article:modified_time', content: article.value?.updatedAt || new Date().toISOString() },
    { property: 'og:title', content: article.value?.title || 'Tagsi' },
    { property: 'og:description', content: article.value?.description || '' },
    { property: 'og:type', content: 'article' }
  ]
}))

// Article structured data
useHead(() => ({
  script: article.value ? [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.value.title,
      description: article.value.description,
      dateModified: article.value.updatedAt || article.value.createdAt,
      author: {
        '@type': 'Organization',
        name: 'Tagsi'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Tagsi',
        logo: {
          '@type': 'ImageObject',
          url: 'https://tagsi.com.tr/logo.png'
        }
      }
    })
  }] : []
}))
</script>
