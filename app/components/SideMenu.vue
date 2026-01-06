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
          'bg-[#1A1A1A]/95 text-white',
          'dark:bg-taxi-yellow/95 dark:text-charcoal',
          'backdrop-blur-xl shadow-2xl p-8 flex flex-col'
        ]"
      >
        <!-- Header: Logo + Close -->
        <div class="flex items-center justify-between mb-8">
          <TagsiLogo size="md" :class="isDark ? 'text-charcoal' : 'text-white'" />
          
          <button 
            @click="$emit('close')"
            class="p-2 rounded-full transition-colors duration-200"
            :class="isDark ? 'hover:bg-black/10' : 'hover:bg-white/10'"
          >
            <XIcon class="w-6 h-6" />
          </button>
        </div>

        <!-- Main Navigation -->
        <nav class="flex-1 overflow-y-auto">
          <ul class="space-y-4">
            <!-- Passenger App Link (First Priority) -->
            <li class="mb-4">
              <SmartDownloadButton 
                app-type="passenger"
                label="Yolcu Uygulaması"
                :show-subtitle="false"
                button-class="w-full text-left flex items-center justify-start gap-4 p-0 bg-transparent shadow-none hover:opacity-70 transition-opacity"
                label-class="text-2xl font-bold tracking-tight"
                class="!shadow-none !p-0"
              />
            </li>

            <!-- Standard Links -->
            <li v-for="link in mainLinks" :key="link.path">
              <NuxtLink 
                :to="link.path" 
                @click="$emit('close')"
                class="block text-xl font-medium tracking-wide py-1 hover:pl-2 transition-all duration-300 opacity-80 hover:opacity-100"
                active-class="pl-2 font-bold opacity-100"
              >
                {{ link.label }}
              </NuxtLink>
            </li>

            <!-- Legal Links (Integrated into list) -->
            <li class="pt-4 border-t border-current border-opacity-10"></li>
            
            <li v-for="link in legalLinks" :key="link.label">
               <a href="#" class="block text-base opacity-60 hover:opacity-100 py-1 transition-opacity">
                  {{ link.label }}
               </a>
            </li>
          </ul>
        </nav>

        <!-- Language Switcher & Copyright -->
        <!-- Copyright -->
        <div class="mt-8 pt-4 border-t border-current border-opacity-10">
           <div class="text-xs opacity-40">
              © {{ new Date().getFullYear() }} Tagsi.
           </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X as XIcon } from 'lucide-vue-next'

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

const legalLinks = [
  { label: 'Gizlilik Politikası' },
  { label: 'Kullanım Şartları' },
  { label: 'KVKK Aydınlatma Metni' }
]
</script>
