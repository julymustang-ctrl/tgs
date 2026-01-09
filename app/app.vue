<template>
  <div class="min-h-screen dark:bg-charcoal bg-gray-50 transition-colors duration-500">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()
const { t } = useI18n()

// Dynamic SEO Tags
useHead({
  title: computed(() => t('meta.title')),
  htmlAttrs: {
    lang: computed(() => t('meta.lang') || 'tr') // fallback to tr if key missing, though we should probably use locale.value
  },
  meta: [
    { name: 'description', content: computed(() => t('meta.description')) },
    { name: 'keywords', content: computed(() => t('meta.keywords')) },
    { property: 'og:title', content: computed(() => t('meta.ogTitle')) },
    { property: 'og:description', content: computed(() => t('meta.ogDescription')) },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => t('meta.ogTitle')) },
    { name: 'twitter:description', content: computed(() => t('meta.ogDescription')) }
  ]
})

onMounted(() => {
  initTheme()
})
</script>
