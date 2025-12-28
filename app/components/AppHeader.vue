<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'glass py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <TagsiLogo size="lg" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <!-- Driver/Passenger Toggle -->
          <div class="glass rounded-full p-1 flex">
            <button 
              @click="setUserType('passenger')"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="isPassenger 
                ? 'bg-taxi-yellow text-charcoal' 
                : 'text-white/80 hover:text-white'"
            >
              <UserIcon class="w-4 h-4 inline mr-1" />
              Yolcu
            </button>
            <button 
              @click="setUserType('driver')"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="isDriver 
                ? 'bg-taxi-yellow text-charcoal' 
                : 'text-white/80 hover:text-white'"
            >
              <CarIcon class="w-4 h-4 inline mr-1" />
              Sürücü
            </button>
          </div>

          <!-- CTA Button - Scrolls to download section -->
          <button 
            @click="scrollToDownload"
            class="btn-primary animate-pulse-glow flex items-center gap-2"
          >
            <DownloadIcon class="w-5 h-5" />
            <span>Uygulamayı İndir</span>
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden glass p-2 rounded-lg"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <MenuIcon v-if="!mobileMenuOpen" class="w-6 h-6 text-white" />
          <XIcon v-else class="w-6 h-6 text-white" />
        </button>
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
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 glass rounded-xl p-4">
          <div class="flex flex-col gap-4">
            <!-- Role Toggle -->
            <div class="flex gap-2">
              <button 
                @click="setUserType('passenger')"
                class="flex-1 py-3 rounded-xl font-medium transition-all"
                :class="isPassenger 
                  ? 'bg-taxi-yellow text-charcoal' 
                  : 'bg-white/10 text-white'"
              >
                <UserIcon class="w-4 h-4 inline mr-2" />
                Yolcu
              </button>
              <button 
                @click="setUserType('driver')"
                class="flex-1 py-3 rounded-xl font-medium transition-all"
                :class="isDriver 
                  ? 'bg-taxi-yellow text-charcoal' 
                  : 'bg-white/10 text-white'"
              >
                <CarIcon class="w-4 h-4 inline mr-2" />
                Sürücü
              </button>
            </div>

            <!-- Download Button - Scrolls to download section -->
            <button 
              @click="scrollToDownload(); mobileMenuOpen = false"
              class="btn-primary w-full flex items-center justify-center gap-2"
            >
              <DownloadIcon class="w-5 h-5" />
              <span>Uygulamayı İndir</span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { User as UserIcon, Car as CarIcon, Download as DownloadIcon, Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'

const { setUserType, isPassenger, isDriver, scrollToDownload } = useUserType()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
</script>
