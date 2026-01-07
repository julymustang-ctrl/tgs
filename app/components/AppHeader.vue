<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 sm:py-4"
    :class="headerClasses"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <TagsiLogo size="lg" />
        </NuxtLink>

        <!-- Right Side: Language Switcher + Hamburger -->
        <div class="flex items-center gap-4">
          <!-- Language Switcher -->
          <div 
            class="hidden sm:flex items-center gap-1 text-sm font-medium"
            :class="isDark ? 'text-charcoal' : 'text-white'"
          >
            <button 
              class="px-2 py-1 rounded transition-colors"
              :class="isDark ? 'hover:bg-charcoal/10' : 'hover:bg-white/10'"
            >TR</button>
            <span class="opacity-40">|</span>
            <button 
              class="px-2 py-1 rounded transition-colors opacity-60 hover:opacity-100"
              :class="isDark ? 'hover:bg-charcoal/10' : 'hover:bg-white/10'"
            >EN</button>
            <span class="opacity-40">|</span>
            <button 
              class="px-2 py-1 rounded transition-colors opacity-60 hover:opacity-100"
              :class="isDark ? 'hover:bg-charcoal/10' : 'hover:bg-white/10'"
            >RU</button>
          </div>

          <!-- Hamburger Menu Button -->
          <button 
            class="w-11 h-11 flex items-center justify-center rounded-lg transition-colors"
            :class="isDark 
              ? 'hover:bg-charcoal/10 text-charcoal' 
              : 'hover:bg-white/10 text-white'"
            @click="sideMenuOpen = true"
            aria-label="Menüyü Aç"
          >
            <MenuIcon class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Side Menu -->
  <SideMenu :isOpen="sideMenuOpen" @close="sideMenuOpen = false" />
</template>

<script setup lang="ts">
import { Menu as MenuIcon } from 'lucide-vue-next'

const { isDark } = useTheme()

const sideMenuOpen = ref(false)

// Contrast header: 
// Light mode (isDark = false) -> Black header with white text
// Dark mode (isDark = true) -> White header with black text
const headerClasses = computed(() => {
  if (isDark.value) {
    // Page is dark -> Header is white/light
    return 'bg-gray-100 shadow-lg'
  } else {
    // Page is light -> Header is dark/black
    return 'bg-zinc-900 shadow-lg'
  }
})
</script>
