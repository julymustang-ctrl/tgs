<template>
  <section id="download" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-dark to-charcoal"></div>
    <div class="absolute inset-0 bg-gradient-radial from-taxi-yellow/5 via-transparent to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Content -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold">
          Yolculuğa <span class="text-gradient">Hazır mısın?</span>
        </h2>
        <p class="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
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
          href="https://play.google.com/store/apps/details?id=com.tagsi.tagsi_driver_app&hl=en_US"
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

      <!-- QR Code Section -->
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 500 } }"
        class="mt-16"
      >
        <p class="text-white/50 text-sm mb-4">veya QR kodu tara</p>
        <div class="inline-block glass p-6 rounded-2xl">
          <!-- QR Code Placeholder -->
          <div class="w-32 h-32 bg-white rounded-xl p-2 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-taxi-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- Simple QR Pattern -->
            <svg viewBox="0 0 100 100" class="w-full h-full">
              <rect width="100" height="100" fill="white"/>
              <!-- Corner squares -->
              <rect x="5" y="5" width="25" height="25" fill="#1A1A1A"/>
              <rect x="10" y="10" width="15" height="15" fill="white"/>
              <rect x="12" y="12" width="11" height="11" fill="#1A1A1A"/>
              
              <rect x="70" y="5" width="25" height="25" fill="#1A1A1A"/>
              <rect x="75" y="10" width="15" height="15" fill="white"/>
              <rect x="77" y="12" width="11" height="11" fill="#1A1A1A"/>
              
              <rect x="5" y="70" width="25" height="25" fill="#1A1A1A"/>
              <rect x="10" y="75" width="15" height="15" fill="white"/>
              <rect x="12" y="77" width="11" height="11" fill="#1A1A1A"/>
              
              <!-- Random data pattern -->
              <rect x="40" y="10" width="5" height="5" fill="#1A1A1A"/>
              <rect x="50" y="10" width="5" height="5" fill="#1A1A1A"/>
              <rect x="35" y="20" width="5" height="5" fill="#1A1A1A"/>
              <rect x="45" y="20" width="5" height="5" fill="#1A1A1A"/>
              <rect x="55" y="20" width="5" height="5" fill="#1A1A1A"/>
              <rect x="40" y="30" width="5" height="5" fill="#1A1A1A"/>
              <rect x="50" y="30" width="5" height="5" fill="#1A1A1A"/>
              <rect x="35" y="40" width="5" height="5" fill="#1A1A1A"/>
              <rect x="45" y="40" width="5" height="5" fill="#FFD600"/>
              <rect x="55" y="40" width="5" height="5" fill="#1A1A1A"/>
              <rect x="65" y="40" width="5" height="5" fill="#1A1A1A"/>
              <rect x="75" y="40" width="5" height="5" fill="#1A1A1A"/>
              <rect x="85" y="40" width="5" height="5" fill="#1A1A1A"/>
              <rect x="40" y="50" width="5" height="5" fill="#1A1A1A"/>
              <rect x="50" y="50" width="5" height="5" fill="#1A1A1A"/>
              <rect x="60" y="50" width="5" height="5" fill="#1A1A1A"/>
              <rect x="70" y="50" width="5" height="5" fill="#1A1A1A"/>
              <rect x="80" y="50" width="5" height="5" fill="#1A1A1A"/>
              <rect x="35" y="60" width="5" height="5" fill="#1A1A1A"/>
              <rect x="55" y="60" width="5" height="5" fill="#1A1A1A"/>
              <rect x="75" y="60" width="5" height="5" fill="#1A1A1A"/>
              <rect x="40" y="70" width="5" height="5" fill="#1A1A1A"/>
              <rect x="50" y="70" width="5" height="5" fill="#1A1A1A"/>
              <rect x="60" y="70" width="5" height="5" fill="#1A1A1A"/>
              <rect x="70" y="70" width="5" height="5" fill="#1A1A1A"/>
              <rect x="80" y="70" width="5" height="5" fill="#1A1A1A"/>
              <rect x="35" y="80" width="5" height="5" fill="#1A1A1A"/>
              <rect x="45" y="80" width="5" height="5" fill="#1A1A1A"/>
              <rect x="55" y="80" width="5" height="5" fill="#1A1A1A"/>
              <rect x="65" y="80" width="5" height="5" fill="#1A1A1A"/>
              <rect x="75" y="80" width="5" height="5" fill="#1A1A1A"/>
              <rect x="85" y="80" width="5" height="5" fill="#1A1A1A"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// iOS alert for coming soon
const showIOSAlert = () => {
  alert('iOS versiyonu çok yakında!')
}
</script>
