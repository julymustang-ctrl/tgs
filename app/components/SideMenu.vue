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
        class="fixed top-0 right-0 h-full z-[70] w-3/4 sm:w-1/2 md:max-w-sm flex flex-col bg-black/80 backdrop-blur-xl text-white"
      >
        <!-- Header with Driver App Button + Close -->
        <div class="flex items-center justify-between p-4 border-b border-white/10">
          <!-- Mini Driver App Button -->
          <NuxtLink 
            to="/surucu-ol"
            class="flex items-center gap-2 bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-2 px-3 rounded-xl transition-all duration-300 text-sm"
            @click="$emit('close')"
          >
            <CarIcon class="w-4 h-4" />
            <span>Sürücü Ol</span>
          </NuxtLink>
          <!-- Close Button -->
          <button 
            @click="$emit('close')"
            class="w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-white/10"
            aria-label="Menüyü Kapat"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-1 p-4 overflow-y-auto">
          <ul class="space-y-1">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink 
                :to="link.href"
                class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all hover:bg-white/10 text-white"
                @click="$emit('close')"
              >
                <component :is="link.icon" class="w-5 h-5 flex-shrink-0" />
                <span>{{ link.label }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Footer: Social Links & Copyright -->
        <div class="p-4 border-t border-white/10"
        >
          <!-- Social Icons -->
          <div class="flex gap-3 mb-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href" 
              class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-white/10 hover:bg-taxi-yellow/20"
              :aria-label="social.name"
            >
              <span v-html="social.svg" class="w-4 h-4"></span>
            </a>
          </div>

          <!-- Copyright -->
          <p class="text-xs text-white/60">
            © 2026 Tagsi® – Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X as XIcon, Home, Info, Building2, Shield, Phone, Car as CarIcon } from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const { isDark } = useTheme()

// Navigation links - ALL pages
const navLinks = [
  { href: '/', label: 'Ana Sayfa', icon: Home },
  { href: '/hakkimizda', label: 'Hakkımızda', icon: Info },
  { href: '/kurumsal', label: 'Kurumsal', icon: Building2 },
  { href: '/guvenlik', label: 'Güvenlik', icon: Shield },
  { href: '/iletisim', label: 'İletişim', icon: Phone }
]

// Social links with inline SVGs (avoids component registration issues)
const socialLinks = [
  { 
    name: 'Facebook', 
    href: '#', 
    svg: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
  },
  { 
    name: 'Instagram', 
    href: '#', 
    svg: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
  },
  { 
    name: 'X', 
    href: '#', 
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
