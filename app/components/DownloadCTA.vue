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

      <!-- Download Buttons -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
        class="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
      >
        <!-- Passenger App Smart Button -->
        <SmartDownloadButton 
          app-type="passenger"
          label="Yolcu Uygulaması"
          subtitle="Tagsi İndir"
          button-class="bg-taxi-yellow text-charcoal px-8 py-5 rounded-2xl hover:bg-taxi-yellow-light hover:shadow-xl hover:shadow-taxi-yellow/30 w-full sm:w-auto min-w-[250px]"
          label-class="text-xl"
        />

        <!-- Driver App Smart Button -->
        <SmartDownloadButton 
          app-type="driver"
          label="Sürücü Ol"
          subtitle="Hemen Başvur"
          button-class="bg-white/90 text-charcoal px-8 py-5 rounded-2xl hover:bg-white transition-all duration-300 shadow-lg w-full sm:w-auto min-w-[250px]"
          label-class="text-xl"
        />
      </div>
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
