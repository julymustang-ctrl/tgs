<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled ? 'py-4 shadow-lg' : 'py-6',
      // Light Mode: Solid Black BG, White Text
      // Dark Mode: Yellow BG, Dark Text
      'bg-[#1A1A1A] text-white dark:bg-taxi-yellow dark:text-charcoal'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group">
          <!-- We might need a specialized logo component that handles color inheritance, 
               but for now we pass classes or let it inherit 'text-current' -->
          <TagsiLogo size="lg" class="text-white dark:text-charcoal" />
        </NuxtLink>

        <!-- Right Side: Hamburger Only (simplification as requested) -->
        <button 
          class="p-2 rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
          @click="$emit('toggle-menu')"
          aria-label="Menu"
        >
          <MenuIcon class="w-8 h-8" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu as MenuIcon } from 'lucide-vue-next'

defineEmits(['toggle-menu'])

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}
</script>

