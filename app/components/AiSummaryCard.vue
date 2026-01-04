<template>
  <div 
    id="ai-summary-box"
    class="mb-8 p-6 rounded-2xl border-l-4 border-taxi-yellow
           dark:bg-taxi-yellow/10 bg-taxi-yellow/5
           dark:border-l-taxi-yellow border-l-taxi-yellow"
    role="complementary"
    aria-label="Article Summary"
  >
    <!-- Header -->
    <div class="flex items-center gap-2 mb-4">
      <span class="text-xl">⚡</span>
      <h2 class="text-lg font-bold dark:text-white text-charcoal">
        {{ locale === 'tr' ? 'Özet (TL;DR)' : locale === 'en' ? 'Quick Summary (TL;DR)' : 'Краткое резюме' }}
      </h2>
    </div>
    
    <!-- Summary List -->
    <ul class="space-y-2">
      <li 
        v-for="(item, index) in summaryItems" 
        :key="index"
        class="flex items-start gap-3"
      >
        <span class="text-taxi-yellow mt-1">✓</span>
        <span class="dark:text-white/90 text-charcoal/90">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  summary: string | string[]
  locale: string
}

const props = defineProps<Props>()

// Normalize summary to array
const summaryItems = computed(() => {
  if (Array.isArray(props.summary)) {
    return props.summary
  }
  // Split by newlines or bullet points
  return props.summary
    .split(/\n|(?:^|\n)\s*[-•*]\s*/)
    .map(s => s.trim())
    .filter(s => s.length > 0)
})
</script>
