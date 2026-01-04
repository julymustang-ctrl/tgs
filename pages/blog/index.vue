<template>
  <div class="min-h-screen dark:bg-charcoal bg-gray-50">
    <AppHeader />
    
    <main class="pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Page Header -->
        <header class="mb-12 text-center">
          <h1 class="text-4xl md:text-5xl font-bold dark:text-white text-charcoal mb-4">
            {{ $t('blog.title') }}
          </h1>
          <p class="text-lg dark:text-white/70 text-charcoal/70 max-w-2xl mx-auto">
            {{ locale === 'tr' ? 'Taksi yolculuğu, şehir ulaşımı ve Tagsi hakkında rehberler' :
               locale === 'en' ? 'Guides about taxi travel, city transportation and Tagsi' :
               'Путеводители о такси, городском транспорте и Tagsi' }}
          </p>
        </header>
        
        <!-- Articles Grid -->
        <section 
          id="blog-articles" 
          class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Blog Articles"
        >
          <article 
            v-for="article in articles" 
            :key="article._path"
            class="group"
          >
            <NuxtLink 
              :to="localePath(article._path)"
              class="block p-6 rounded-2xl dark:bg-charcoal-light bg-white border dark:border-white/10 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <!-- Category Badge -->
              <div class="mb-4">
                <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-taxi-yellow/20 text-taxi-yellow">
                  {{ article.category || 'Rehber' }}
                </span>
              </div>
              
              <!-- Title -->
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 group-hover:text-taxi-yellow transition-colors">
                {{ article.title }}
              </h2>
              
              <!-- Description -->
              <p class="dark:text-white/60 text-charcoal/60 text-sm mb-4 line-clamp-3">
                {{ article.description }}
              </p>
              
              <!-- Meta -->
              <div class="flex items-center justify-between text-xs dark:text-white/40 text-charcoal/40">
                <time :datetime="article.updatedAt || article.createdAt">
                  {{ $t('blog.lastUpdated') }}: {{ formatDate(article.updatedAt || article.createdAt) }}
                </time>
                <span class="text-taxi-yellow font-semibold">{{ $t('blog.readMore') }} →</span>
              </div>
            </NuxtLink>
          </article>
        </section>
        
        <!-- Empty State -->
        <div v-if="!articles.length" class="text-center py-20">
          <div class="text-6xl mb-4">📚</div>
          <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-2">
            {{ locale === 'tr' ? 'Henüz içerik yok' : locale === 'en' ? 'No content yet' : 'Пока нет контента' }}
          </h2>
          <p class="dark:text-white/60 text-charcoal/60">
            {{ locale === 'tr' ? 'Yakında rehberler eklenecek.' : locale === 'en' ? 'Guides coming soon.' : 'Скоро будут добавлены гиды.' }}
          </p>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

// Fetch articles for current locale
const { data: articles } = await useAsyncData('blog-list', () => {
  return queryContent(locale.value, 'blog')
    .sort({ updatedAt: -1 })
    .find()
}, { watch: [locale] })

// Format date based on locale
const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString(locale.value === 'tr' ? 'tr-TR' : locale.value === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO
useHead({
  title: locale.value === 'tr' ? 'Rehberler | Tagsi' : locale.value === 'en' ? 'Guides | Tagsi' : 'Гиды | Tagsi'
})
</script>
