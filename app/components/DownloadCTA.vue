<template>
  <section id="download-section" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 dark:bg-gradient-to-b dark:from-charcoal dark:via-charcoal-dark dark:to-charcoal bg-gradient-to-b from-gray-100 via-white to-gray-100"></div>
    <div class="absolute inset-0 bg-gradient-radial from-taxi-yellow/5 via-transparent to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Content -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold dark:text-white text-charcoal">
          Yolculuğa <span class="text-gradient">Hazır mısın?</span>
        </h2>
        <p class="mt-6 text-lg sm:text-xl dark:text-white/60 text-charcoal/60 max-w-2xl mx-auto">
          Tagsi'yi hemen indir, şehrin yeni ritmini yakala. 
          İlk yolculuğunda <span class="text-taxi-yellow font-semibold">%20 indirim</span> seni bekliyor!
        </p>
      </div>

      <!-- User Type Indicator -->
      <Transition name="fade" mode="out-in">
        <div 
          :key="userType"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100, duration: 400 } }"
          class="mt-8"
        >
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:text-white/80 text-charcoal/80">
            <component :is="isPassenger ? UserIcon : CarIcon" class="w-4 h-4" />
            {{ isPassenger ? 'Yolcu Uygulaması' : 'Sürücü Uygulaması' }}
          </span>
        </div>
      </Transition>

      <!-- Download Buttons -->
      <Transition name="fade" mode="out-in">
        <div 
          :key="userType"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          class="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <!-- App Store -->
          <a 
            href="#" 
            @click.prevent="showIOSAlert"
            class="group flex items-center gap-4 bg-white/90 text-charcoal px-8 py-5 rounded-2xl hover:bg-white transition-all duration-300 shadow-lg"
          >
            <svg viewBox="0 0 24 24" class="w-10 h-10">
              <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs opacity-70">App Store'dan</div>
              <div class="text-xl font-semibold">Çok Yakında</div>
            </div>
          </a>

          <!-- Google Play -->
          <a 
            :href="androidLink"
            target="_blank"
            class="group flex items-center gap-4 bg-taxi-yellow text-charcoal px-8 py-5 rounded-2xl hover:bg-taxi-yellow-light transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-taxi-yellow/30"
          >
            <svg viewBox="0 0 24 24" class="w-9 h-9">
              <path fill="currentColor" d="M3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8l-7.78 6.64A2.47 2.47 0 0 1 3 20.5m14.65-8.93L14.5 8l3.15-3.57 2.85 1.65c1.21.7 1.21 2.47 0 3.18l-2.85 1.31M4.22 2.14 12 8l-3.15 3.57-4.63-3.93zM12 8l3.35 3.57L4.22 21.36A2.47 2.47 0 0 1 3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs opacity-70">Google Play'den</div>
              <div class="text-xl font-bold">Hemen İndir</div>
            </div>
          </a>
        </div>
      </Transition>

    </div>
  </section>
</template>

<script setup lang="ts">
import { User as UserIcon, Car as CarIcon } from 'lucide-vue-next'

const { userType, androidLink, isPassenger, showIOSAlert } = useUserType()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
