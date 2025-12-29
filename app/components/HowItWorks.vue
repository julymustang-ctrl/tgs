<template>
  <section class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 dark:bg-gradient-to-b dark:from-charcoal dark:via-charcoal-light/50 dark:to-charcoal bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold dark:text-white text-charcoal"
        >
          Nasıl <span class="text-gradient">Çalışır?</span>
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          class="mt-4 text-lg dark:text-white/60 text-charcoal/60 max-w-2xl mx-auto"
        >
          3 basit adımda yolculuğunuza başlayın
        </p>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Step 1 -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          class="relative group"
        >
          <div class="glass rounded-3xl p-8 text-center h-full transition-all duration-300 group-hover:border-taxi-yellow/50">
            <!-- Step Number -->
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-taxi-yellow rounded-full flex items-center justify-center font-bold text-charcoal">
              1
            </div>
            
            <!-- Icon Animation -->
            <div class="w-24 h-24 mx-auto mb-6 relative">
              <div class="absolute inset-0 bg-taxi-yellow/10 rounded-full animate-ping"></div>
              <div class="relative w-full h-full bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                <MapPin class="w-12 h-12 text-taxi-yellow" />
              </div>
            </div>

            <h3 class="text-xl font-semibold mb-3 dark:text-white text-charcoal">Konumunu Seç</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Haritadan veya arama çubuğundan gitmek istediğiniz yeri seçin
            </p>
          </div>

          <!-- Connector Arrow (Desktop) -->
          <div class="hidden md:block absolute top-1/2 -right-6 lg:-right-8">
            <ArrowRight class="w-6 h-6 text-taxi-yellow/50" />
          </div>
        </div>

        <!-- Step 2 -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          class="relative group"
        >
          <div class="glass rounded-3xl p-8 text-center h-full transition-all duration-300 group-hover:border-taxi-yellow/50">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-taxi-yellow rounded-full flex items-center justify-center font-bold text-charcoal">
              2
            </div>
            
            <!-- Animated Car -->
            <div class="w-24 h-24 mx-auto mb-6 relative overflow-hidden">
              <div class="absolute inset-0 bg-taxi-yellow/20 rounded-full"></div>
              <div class="relative w-full h-full flex items-center justify-center">
                <Car class="w-12 h-12 text-taxi-yellow animate-car-wiggle" />
              </div>
            </div>

            <h3 class="text-xl font-semibold mb-3 dark:text-white text-charcoal">Tagsi Çağır</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Tek tıkla en yakın sürücüyü çağırın ve gerçek zamanlı takip edin
            </p>
          </div>

          <!-- Connector Arrow (Desktop) -->
          <div class="hidden md:block absolute top-1/2 -right-6 lg:-right-8">
            <ArrowRight class="w-6 h-6 text-taxi-yellow/50" />
          </div>
        </div>

        <!-- Step 3 -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          class="relative group"
        >
          <div class="glass rounded-3xl p-8 text-center h-full transition-all duration-300 group-hover:border-taxi-yellow/50">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-taxi-yellow rounded-full flex items-center justify-center font-bold text-charcoal">
              3
            </div>
            
            <!-- Happy Face Animation -->
            <div class="w-24 h-24 mx-auto mb-6 relative">
              <div class="absolute inset-0 bg-taxi-yellow/20 rounded-full"></div>
              <div class="relative w-full h-full flex items-center justify-center">
                <Smile class="w-12 h-12 text-taxi-yellow" />
              </div>
            </div>

            <h3 class="text-xl font-semibold mb-3 dark:text-white text-charcoal">Keyfine Bak</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Güvenle yolculuğunuzun tadını çıkarın ve sürücünüzü değerlendirin
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Car, Smile, ArrowRight } from 'lucide-vue-next'
</script>

<style scoped>
@keyframes car-wiggle {
  0%, 100% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-3px) rotate(-3deg); }
  75% { transform: translateX(3px) rotate(3deg); }
}

.animate-car-wiggle {
  animation: car-wiggle 1s ease-in-out infinite;
}
</style>
