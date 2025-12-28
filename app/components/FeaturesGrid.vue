<template>
  <section class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-charcoal-dark"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold"
        >
          Neden <span class="text-gradient">Tagsi?</span>
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          class="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
        >
          Güvenilir, hızlı ve modern taksi deneyimi
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Feature 1: Live Tracking (Large) -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 100, duration: 500 } }"
          class="md:col-span-2 lg:col-span-1 lg:row-span-2 card-feature group"
        >
          <div class="h-full flex flex-col">
            <div class="flex-1 mb-6 relative min-h-[200px] lg:min-h-[280px] rounded-xl overflow-hidden">
              <!-- Mini Map Animation -->
              <div class="absolute inset-0 bg-charcoal map-grid opacity-30"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="relative">
                  <!-- Moving Car -->
                  <div class="absolute w-4 h-4 bg-taxi-yellow rounded-full animate-pulse">
                    <div class="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <!-- Route Line -->
                  <svg class="w-40 h-40" viewBox="0 0 100 100">
                    <path 
                      d="M 10 50 Q 30 30 50 50 T 90 50" 
                      stroke="#FFD600" 
                      stroke-width="2" 
                      fill="none"
                      stroke-dasharray="5,5"
                      class="animate-dash"
                    />
                  </svg>
                  <!-- Destination Pin -->
                  <MapPin class="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-taxi-yellow" />
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-taxi-yellow/20 rounded-xl flex items-center justify-center">
                <Navigation class="w-5 h-5 text-taxi-yellow" />
              </div>
              <h3 class="text-xl font-semibold">Canlı Takip</h3>
            </div>
            <p class="text-white/60">
              Aracın konumunu gerçek zamanlı olarak haritada takip edin. Ne zaman geleceğini bilin, güvenle bekleyin.
            </p>
          </div>
        </div>

        <!-- Feature 2: Secure Payment -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 500 } }"
          class="card-feature group"
        >
          <div class="w-12 h-12 bg-taxi-yellow/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <CreditCard class="w-6 h-6 text-taxi-yellow" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Güvenli Ödeme</h3>
          <p class="text-white/60">
            Nakit veya kredi kartı ile güvenli ödeme. Ücret önceden belli.
          </p>
        </div>

        <!-- Feature 3: 24/7 Support -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 500 } }"
          class="card-feature group"
        >
          <div class="w-12 h-12 bg-taxi-yellow/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Headphones class="w-6 h-6 text-taxi-yellow" />
          </div>
          <h3 class="text-xl font-semibold mb-2">7/24 Destek</h3>
          <p class="text-white/60">
            Her an yanınızdayız. Sorularınız için müşteri hizmetlerimiz 7/24 aktif.
          </p>
        </div>

        <!-- Feature 4: Fast Arrival -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 500 } }"
          class="card-feature group"
        >
          <div class="w-12 h-12 bg-taxi-yellow/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Zap class="w-6 h-6 text-taxi-yellow" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Hızlı Varış</h3>
          <p class="text-white/60">
            Ortalama 3 dakikada kapınızda. En yakın sürücü otomatik eşleştirilir.
          </p>
        </div>

        <!-- Feature 5: Verified Drivers -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 500 } }"
          class="card-feature group"
        >
          <div class="w-12 h-12 bg-taxi-yellow/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ShieldCheck class="w-6 h-6 text-taxi-yellow" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Onaylı Sürücüler</h3>
          <p class="text-white/60">
            Tüm sürücüler kimlik ve sabıka kaydı kontrolünden geçer. Güvenliğiniz önceliğimiz.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Navigation, CreditCard, Headphones, Zap, ShieldCheck, MapPin } from 'lucide-vue-next'
</script>

<style scoped>
@keyframes dash {
  to {
    stroke-dashoffset: -20;
  }
}

.animate-dash {
  animation: dash 1s linear infinite;
}
</style>
