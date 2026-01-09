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
        </p>
      </div>

      <!-- Download Button -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
        class="mt-12 flex flex-col items-center"
      >
        <!-- Passenger App Button -->
        <div class="text-center">
          <span class="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full glass dark:text-white/80 text-charcoal/80">
            <UserIcon class="w-4 h-4" />
            Yolcu Uygulaması
          </span>
          <a 
            :href="androidLink"
            target="_blank"
            @click="trackFooterDownload"
            class="group flex items-center justify-center gap-4 bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-taxi-yellow/30"
          >
            <!-- Apple Logo -->
            <svg viewBox="0 0 24 24" class="w-7 h-7">
              <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span class="text-xl">Hemen İndir</span>
            <!-- Google Play Logo -->
            <svg viewBox="0 0 466 512" class="w-6 h-6">
              <path fill="#EA4335" fill-rule="nonzero" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
              <path fill="#FBBC04" fill-rule="nonzero" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>  
              <path fill="#34A853" fill-rule="nonzero" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>       
              <path fill="#4285F4" fill-rule="nonzero" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { User as UserIcon } from 'lucide-vue-next'

const { androidLink } = useUserType()
const { gtag } = useGtag()

const trackFooterDownload = () => {
  gtag('event', 'download_click', {
    event_category: 'engagement',
    event_label: 'Footer Download CTA',
    value: 1
  })
}
</script>
