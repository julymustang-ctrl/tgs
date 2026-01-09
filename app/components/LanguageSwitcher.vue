<template>
  <div class="relative" ref="dropdownRef">
    <!-- Trigger Button -->
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 rounded-xl glass hover:bg-taxi-yellow/10 transition-colors"
    >
      <!-- Current Flag -->
      <img 
        :src="currentLocale.flag" 
        :alt="currentLocale.name"
        class="w-5 h-5 rounded-full object-cover"
      />
      <span class="font-medium dark:text-white text-charcoal uppercase">{{ currentLocale.code }}</span>
      <ChevronDown 
        class="w-4 h-4 dark:text-white/60 text-charcoal/60 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0 translate-y-2"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 translate-y-2"
    >
      <div 
        v-if="isOpen"
        class="absolute top-full right-0 mt-2 w-48 glass-dark rounded-xl overflow-hidden shadow-xl z-50 border border-white/10"
      >
        <div class="py-1">
          <button
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="switchLanguage(locale.code)"
            class="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors group"
            :class="{ 'bg-taxi-yellow/10': locale.code === currentLocale.code }"
          >
            <!-- Flag -->
            <img 
              :src="locale.flag" 
              :alt="locale.name"
              class="w-6 h-6 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform"
            />
            <!-- Name -->
            <span 
              class="text-sm font-medium dark:text-white text-charcoal"
              :class="{ 'text-taxi-yellow': locale.code === currentLocale.code }"
            >
              {{ locale.name }}
            </span>
            
            <!-- Check Icon (Active) -->
            <Check 
              v-if="locale.code === currentLocale.code"
              class="w-4 h-4 text-taxi-yellow ml-auto"
            />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown, Check } from 'lucide-vue-next'
import { onClickOutside } from '@vueuse/core'

const { locale, setLocale } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref(null)

// Locale Data
const localesData: Record<string, { code: string; name: string; flag: string }> = {
  tr: { code: 'tr', name: 'Türkçe', flag: 'https://flagcdn.com/w80/tr.png' },
  en: { code: 'en', name: 'English', flag: 'https://flagcdn.com/w80/gb.png' },
  ru: { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w80/ru.png' }
}

const currentLocale = computed(() => localesData[locale.value] || localesData.tr)!
const availableLocales = computed(() => Object.values(localesData))

const switchLanguage = (code: string) => {
  setLocale(code)
  isOpen.value = false
}

// Close on click outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>
