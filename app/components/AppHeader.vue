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

        <!-- Right Side: Language Switcher + Theme Toggle + Hamburger -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Language Switcher -->
          <div>
            <LanguageSwitcher />
          </div>

          <!-- Theme Toggle Button -->
          <button 
            @click="toggleTheme"
            class="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/10 text-white"
            :aria-label="isDark ? $t('header.switchToLight') : $t('header.switchToDark')"
          >
            <Sun v-if="isDark" class="w-5 h-5 text-taxi-yellow" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- Hamburger Menu Button -->
          <button 
            class="w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-white/10 text-white"
            @click="sideMenuOpen = true"
            aria-label="$t('header.openMenu')"
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
import { Menu as MenuIcon, Sun, Moon } from 'lucide-vue-next'

const { isDark, toggleTheme } = useTheme()
const { t } = useI18n()

const sideMenuOpen = ref(false)

// Same header style in both modes: dark background with light text
const headerClasses = computed(() => {
  return 'bg-zinc-900 shadow-lg'
})
</script>
