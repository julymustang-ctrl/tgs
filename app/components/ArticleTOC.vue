<template>
  <!-- Desktop: Sticky Sidebar -->
  <nav 
    v-if="!mobile && toc.length"
    class="sticky top-24 p-4 rounded-2xl dark:bg-charcoal-light bg-white border dark:border-white/10 border-gray-200"
    aria-label="Table of Contents"
  >
    <h3 class="text-sm font-bold dark:text-white text-charcoal mb-4 flex items-center gap-2">
      📑 {{ locale === 'tr' ? 'İçindekiler' : locale === 'en' ? 'Contents' : 'Содержание' }}
    </h3>
    
    <ul class="space-y-2 text-sm">
      <li v-for="link in toc" :key="link.id">
        <a 
          :href="`#${link.id}`"
          class="block py-1 dark:text-white/60 text-charcoal/60 hover:text-taxi-yellow transition-colors"
          :class="{ 'text-taxi-yellow font-semibold': activeSection === link.id }"
        >
          {{ link.text }}
        </a>
        
        <!-- Nested Links (H3) -->
        <ul v-if="link.children?.length" class="pl-4 mt-1 space-y-1">
          <li v-for="child in link.children" :key="child.id">
            <a 
              :href="`#${child.id}`"
              class="block py-1 text-xs dark:text-white/40 text-charcoal/40 hover:text-taxi-yellow transition-colors"
              :class="{ 'text-taxi-yellow': activeSection === child.id }"
            >
              {{ child.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  
  <!-- Mobile: Accordion -->
  <details 
    v-else-if="mobile && toc.length"
    class="p-4 rounded-2xl dark:bg-charcoal-light bg-white border dark:border-white/10 border-gray-200"
  >
    <summary class="text-sm font-bold dark:text-white text-charcoal cursor-pointer flex items-center gap-2">
      📑 {{ locale === 'tr' ? 'İçindekiler' : locale === 'en' ? 'Contents' : 'Содержание' }}
    </summary>
    
    <ul class="mt-4 space-y-2 text-sm">
      <li v-for="link in toc" :key="link.id">
        <a 
          :href="`#${link.id}`"
          class="block py-1 dark:text-white/60 text-charcoal/60 hover:text-taxi-yellow transition-colors"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </details>
</template>

<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  children?: TocLink[]
}

interface Props {
  toc: TocLink[]
  locale: string
  mobile?: boolean
}

defineProps<Props>()

// Track active section for desktop highlighting
const activeSection = ref('')

onMounted(() => {
  if (typeof window === 'undefined') return
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-80px 0px -80% 0px' }
  )
  
  document.querySelectorAll('h2[id], h3[id]').forEach((el) => {
    observer.observe(el)
  })
  
  onUnmounted(() => observer.disconnect())
})
</script>
