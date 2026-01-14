<template>
  <Teleport to="body">
    <!-- Backdrop (the other 50% + any overflow) -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 bg-black/30 z-[60]"
        @click="$emit('close')"
      ></div>
    </Transition>

    <!-- Side Menu Panel - STRICTLY 50% width on ALL screens -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div 
        v-if="isOpen"
        class="fixed top-0 right-0 h-full z-[70] w-3/4 sm:w-1/2 md:max-w-sm flex flex-col backdrop-blur-xl transition-colors duration-300"
        :class="isDark ? 'bg-black/80 text-white' : 'bg-white/90 text-charcoal shadow-2xl'"
      >
        <!-- Header with Driver App Button + Close -->
        <div class="flex items-center justify-between p-4 border-b" :class="isDark ? 'border-white/10' : 'border-charcoal/10'">
            <!-- Mini Driver App Button -->
          <a 
            :href="driverAndroidLink"
            target="_blank"
            @click="trackDriverDownload"
            class="flex items-center gap-2 bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-2 px-3 rounded-xl transition-all duration-300 text-sm"
          >
            <CarIcon class="w-4 h-4" />
            <span>{{ $t('menu.becomeDriver') }}</span>
            <!-- Logo Container with Fade Transition -->
            <div class="w-4 h-4 ml-1 flex items-center justify-center">
              <Transition
                mode="out-in"
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 scale-75"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-75"
              >
                <!-- Google Play Icon -->
                <svg v-if="currentLogo === 'google'" viewBox="0 0 466 512" class="w-4 h-4 opacity-70">
                  <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
                  <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>  
                  <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>       
                  <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
                </svg>
                <!-- Apple Icon -->
                <svg v-else viewBox="0 0 24 24" class="w-4 h-4 opacity-70 text-charcoal">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </Transition>
            </div>
          </a>
          <div class="flex items-center gap-3">
            <!-- Close Button -->
            <button 
              @click="$emit('close')"
              class="w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-white/10"
              :aria-label="$t('menu.close')"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-1 p-4 overflow-y-auto">
          <ul class="space-y-1">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLinkLocale 
                :to="link.href"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all"
                :class="isDark 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-charcoal hover:bg-charcoal/5'"
                @click="$emit('close')"
              >
                <component :is="link.icon" class="w-5 h-5 flex-shrink-0" />
                <span>{{ link.label }}</span>
              </NuxtLinkLocale>
            </li>
          </ul>
        </nav>

        <!-- Footer: Social Links & Copyright -->
        <div class="p-4 border-t" :class="isDark ? 'border-white/10' : 'border-charcoal/10'">
          <!-- Social Icons -->
          <div class="flex gap-3 mb-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href" 
              class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-taxi-yellow/20"
              :class="isDark ? 'bg-white/10 text-white' : 'bg-charcoal/5 text-charcoal'"
              :aria-label="social.name"
            >
              <span v-html="social.svg" class="w-4 h-4"></span>
            </a>
          </div>

          <!-- Copyright -->
          <p class="text-xs" :class="isDark ? 'text-white/60' : 'text-charcoal/60'">
            {{ $t('footer.rights') }}
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X as XIcon, Home, Info, Building2, Shield, Phone, Car as CarIcon, HelpCircle } from 'lucide-vue-next'
import { useIntervalFn } from '@vueuse/core'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const { isDark } = useTheme()
const { driverAndroidLink } = useUserType()
const { t } = useI18n()

// Logo Toggle Animation
const currentLogo = ref<'google' | 'apple'>('google')
useIntervalFn(() => {
  currentLogo.value = currentLogo.value === 'google' ? 'apple' : 'google'
}, 3000)

const { gtag } = useGtag()
const trackDriverDownload = () => {
  gtag('event', 'download_click', {
    event_category: 'driver_acquisition',
    event_label: 'Side Menu Driver Button',
    value: 1
  })
}

// Navigation links - ALL pages
const navLinks = computed(() => [
  { href: '/', label: t('menu.home'), icon: Home },
  { href: '/hakkimizda', label: t('menu.about'), icon: Info },
  { href: '/kurumsal', label: t('menu.corporate'), icon: Building2 },
  { href: '/guvenlik', label: t('menu.safety'), icon: Shield },
  { href: '/yardim-merkezi', label: t('menu.helpCenter'), icon: HelpCircle },
  { href: '/iletisim', label: t('menu.contact'), icon: Phone }
])

// Social links with inline SVGs (avoids component registration issues)
const socialLinks = [
  { 
    name: 'Facebook', 
    href: 'https://facebook.com/tagsiapp', 
    svg: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/tagsiapp', 
    svg: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
  },
  { 
    name: 'X', 
    href: 'https://twitter.com/tagsiapp', 
    svg: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
  }
]
</script>

<style scoped>
/* Ensure SVGs in social links scale properly */
.w-4.h-4 :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
