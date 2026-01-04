<template>
  <header class="fixed top-0 left-0 right-0 z-50 py-2 sm:py-4 transition-colors duration-300"
          :class="isDark ? 'bg-white shadow-lg' : 'bg-black'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <TagsiLogo size="lg" :invertTheme="true" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <!-- Language Switcher (Bolt Style) -->
          <div class="flex items-center gap-1 text-sm">
            <button 
              @click="switchLocale('tr')"
              class="px-2 py-1 rounded transition-colors"
              :class="locale === 'tr' ? 'text-taxi-yellow font-semibold' : (isDark ? 'text-charcoal/70 hover:text-charcoal' : 'text-white/70 hover:text-white')"
            >
              TR
            </button>
            <span :class="isDark ? 'text-charcoal/30' : 'text-white/30'">|</span>
            <button 
              @click="switchLocale('en')"
              class="px-2 py-1 rounded transition-colors"
              :class="locale === 'en' ? 'text-taxi-yellow font-semibold' : (isDark ? 'text-charcoal/70 hover:text-charcoal' : 'text-white/70 hover:text-white')"
            >
              EN
            </button>
            <span :class="isDark ? 'text-charcoal/30' : 'text-white/30'">|</span>
            <button 
              @click="switchLocale('ru')"
              class="px-2 py-1 rounded transition-colors"
              :class="locale === 'ru' ? 'text-taxi-yellow font-semibold' : (isDark ? 'text-charcoal/70 hover:text-charcoal' : 'text-white/70 hover:text-white')"
            >
              RU
            </button>
          </div>

          <!-- CTA Button -->
          <button 
            @click="scrollToDownload"
            class="btn-primary flex items-center gap-2"
          >
            <DownloadIcon class="w-5 h-5" />
            <span>{{ $t('download.title') }}</span>
          </button>
        </nav>

        <!-- Mobile: Language + Menu -->
        <div class="md:hidden flex items-center gap-3">
          <!-- Compact Language Switcher -->
          <div class="flex items-center text-xs">
            <button 
              @click="switchLocale('tr')"
              :class="locale === 'tr' ? 'text-taxi-yellow font-semibold' : (isDark ? 'text-charcoal/60' : 'text-white/60')"
            >
              TR
            </button>
            <span :class="isDark ? 'text-charcoal/30' : 'text-white/30'" class="mx-1">|</span>
            <button 
              @click="switchLocale('en')"
              :class="locale === 'en' ? 'text-taxi-yellow font-semibold' : (isDark ? 'text-charcoal/60' : 'text-white/60')"
            >
              EN
            </button>
            <span :class="isDark ? 'text-charcoal/30' : 'text-white/30'" class="mx-1">|</span>
            <button 
              @click="switchLocale('ru')"
              :class="locale === 'ru' ? 'text-taxi-yellow font-semibold' : (isDark ? 'text-charcoal/60' : 'text-white/60')"
            >
              RU
            </button>
          </div>

          <!-- Menu Button -->
          <button 
            class="p-2 rounded-lg"
            :class="isDark ? 'bg-charcoal/10' : 'bg-white/10'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <MenuIcon v-if="!mobileMenuOpen" class="w-5 h-5" :class="isDark ? 'text-charcoal' : 'text-white'" />
            <XIcon v-else class="w-5 h-5" :class="isDark ? 'text-charcoal' : 'text-white'" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 rounded-xl p-4"
             :class="isDark ? 'bg-charcoal/10 backdrop-blur-lg' : 'bg-white/10 backdrop-blur-lg'">
          <button 
            @click="scrollToDownload(); mobileMenuOpen = false"
            class="btn-primary w-full flex items-center justify-center gap-2"
          >
            <DownloadIcon class="w-5 h-5" />
            <span>{{ $t('download.title') }}</span>
          </button>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Download as DownloadIcon, Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'

const { scrollToDownload } = useUserType()
const { isDark } = useTheme()
const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const mobileMenuOpen = ref(false)

const switchLocale = async (newLocale: 'tr' | 'en' | 'ru') => {
  await setLocale(newLocale)
  // Navigate to the same page in the new locale
  const path = switchLocalePath(newLocale)
  if (path) {
    router.push(path)
  }
}
</script>
