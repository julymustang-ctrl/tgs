<template>
  <section class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background Gradient - Inverted colors -->
    <div class="absolute inset-0 dark:bg-gradient-to-b dark:from-charcoal-dark dark:via-charcoal dark:to-charcoal-dark bg-gradient-to-b from-white via-gray-100 to-white"></div>
    <div class="absolute inset-0 bg-gradient-radial from-taxi-yellow/5 via-transparent to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Content -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass dark:text-white/80 text-charcoal/80">
          <Car class="w-5 h-5 text-taxi-yellow" />
          <span class="font-medium">Sürücüler İçin</span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold dark:text-white text-charcoal">
          Sürücü <span class="text-gradient">olmak için</span>
        </h2>
        <p class="mt-6 text-lg sm:text-xl dark:text-white/60 text-charcoal/60 max-w-2xl mx-auto">
          Tagsi Sürücü uygulamasını indir, aracını paylaş, yol masrafların azalsın!
        </p>
      </div>

      <!-- Download Button -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
        class="mt-12 flex justify-center"
      >
        <a 
          :href="driverAndroidLink"
          target="_blank"
          class="group flex items-center justify-center gap-4 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          :class="isDark 
            ? 'bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal hover:shadow-taxi-yellow/30' 
            : 'bg-charcoal hover:bg-zinc-800 text-white hover:shadow-charcoal/30'"
        >
          <!-- Apple Logo -->
          <svg viewBox="0 0 24 24" class="w-7 h-7">
            <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span class="text-xl">Sürücü Uygulaması</span>
          <!-- Google Play Logo -->
          <svg viewBox="0 0 24 24" class="w-6 h-6">
            <path fill="currentColor" d="M3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8l-7.78 6.64A2.47 2.47 0 0 1 3 20.5m14.65-8.93L14.5 8l3.15-3.57 2.85 1.65c1.21.7 1.21 2.47 0 3.18l-2.85 1.31M4.22 2.14 12 8l-3.15 3.57-4.63-3.93zM12 8l3.35 3.57L4.22 21.36A2.47 2.47 0 0 1 3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8z"/>
          </svg>
        </a>
      </div>

      <!-- Features -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
        class="mt-12 flex flex-wrap justify-center gap-6"
      >
        <div class="flex items-center gap-2 dark:text-white/60 text-charcoal/60">
          <Fuel class="w-5 h-5 text-taxi-yellow" />
          <span>Yakıt Tasarrufu</span>
        </div>
        <div class="flex items-center gap-2 dark:text-white/60 text-charcoal/60">
          <Users class="w-5 h-5 text-taxi-yellow" />
          <span>Paylaşımlı Yolculuk</span>
        </div>
        <div class="flex items-center gap-2 dark:text-white/60 text-charcoal/60">
          <Wallet class="w-5 h-5 text-taxi-yellow" />
          <span>%0 Komisyon</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Car, Fuel, Users, Wallet } from 'lucide-vue-next'

const { driverAndroidLink } = useUserType()
const { isDark } = useTheme()
</script>
