<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <!-- Backdrop -->
      <div 
        v-if="isOpen" 
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
        @click="$emit('close')"
      ></div>
    </Transition>

    <Transition
      enter-active-class="transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <!-- Menu Panel -->
      <div 
        v-if="isOpen"
        class="fixed top-0 right-0 h-full w-full md:w-1/2 z-[70] overflow-y-auto"
        :class="[
          // Light Mode: Black BG, White Text
          'bg-[#1A1A1A]/95 text-white',
          // Dark Mode: Yellow BG, Dark Text
          'dark:bg-taxi-yellow/95 dark:text-charcoal',
          'backdrop-blur-xl shadow-2xl p-6 md:p-12 flex flex-col justify-between'
        ]"
      >
        <!-- Header: Logo + Close -->
        <div class="flex items-center justify-between mb-12">
          <TagsiLogo size="lg" :class="isDark ? 'text-charcoal' : 'text-white'" />
          
          <button 
            @click="$emit('close')"
            class="p-2 rounded-full transition-colors duration-200"
            :class="isDark ? 'hover:bg-black/10' : 'hover:bg-white/10'"
          >
            <XIcon class="w-8 h-8" />
          </button>
        </div>

        <!-- Main Navigation -->
        <nav class="flex-1">
          <ul class="space-y-6 md:space-y-8">
            <li v-for="link in mainLinks" :key="link.path">
              <NuxtLink 
                :to="link.path" 
                @click="$emit('close')"
                class="block text-4xl md:text-5xl font-bold tracking-tight hover:opacity-70 transition-opacity duration-300"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Footer Content (Migrated) -->
        <div class="mt-12 space-y-8">
            <!-- Secondary Links -->
            <div class="grid grid-cols-2 gap-8 text-sm md:text-base opacity-80">
                <div>
                    <h4 class="font-semibold mb-4 opacity-100 uppercase tracking-widest text-xs">Şirket</h4>
                    <ul class="space-y-3">
                        <li><NuxtLink to="/hakkimizda" @click="$emit('close')">Hakkımızda</NuxtLink></li>
                        <li><NuxtLink to="/kurumsal" @click="$emit('close')">Kurumsal</NuxtLink></li>
                        <li><NuxtLink to="/iletisim" @click="$emit('close')">İletişim</NuxtLink></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4 opacity-100 uppercase tracking-widest text-xs">Yasal</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="hover:underline">Gizlilik Politikası</a></li>
                        <li><a href="#" class="hover:underline">Kullanım Şartları</a></li>
                        <li><a href="#" class="hover:underline">KVKK</a></li>
                    </ul>
                </div>
            </div>

            <!-- Socials & Copyright -->
            <div class="pt-8 border-t border-current border-opacity-20 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div class="flex gap-4">
                    <a href="https://twitter.com/tagsiapp" target="_blank" class="p-2 border border-current rounded-full hover:bg-current hover:bg-opacity-10 transition-colors">
                        <TwitterIcon class="w-5 h-5" />
                    </a>
                    <a href="https://instagram.com/tagsiapp" target="_blank" class="p-2 border border-current rounded-full hover:bg-current hover:bg-opacity-10 transition-colors">
                        <InstagramIcon class="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/company/tagsi" target="_blank" class="p-2 border border-current rounded-full hover:bg-current hover:bg-opacity-10 transition-colors">
                        <LinkedinIcon class="w-5 h-5" />
                    </a>
                 </div>

                 <p class="text-sm opacity-60">
                    © {{ new Date().getFullYear() }} Tagsi. Şehrin Yeni Ritmi.
                 </p>
            </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X as XIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, Linkedin as LinkedinIcon } from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])

const { isDark } = useTheme()

const mainLinks = [
  { label: 'Anasayfa', path: '/' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'Kurumsal', path: '/kurumsal' },
  { label: 'Güvenlik', path: '/guvenlik' },
  { label: 'İletişim', path: '/iletisim' }
]
</script>
