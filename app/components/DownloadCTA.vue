<template>
  <section id="download-section" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 dark:bg-gradient-to-b dark:from-charcoal dark:via-charcoal-dark dark:to-charcoal bg-gradient-to-b from-gray-100 via-white to-gray-100"></div>
    <div class="absolute inset-0 bg-gradient-radial from-taxi-yellow/5 via-transparent to-transparent"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-12"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold dark:text-white text-charcoal">
          Yolculuğa <span class="text-gradient">Hazır mısın?</span>
        </h2>
        <p class="mt-4 text-lg dark:text-white/60 text-charcoal/60">
          Tagsi'yi hemen indir ve şehrin yeni ritmini yakala!
        </p>
      </div>

      <!-- Dual CTA Cards (Martı Style) -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
        class="flex flex-col gap-6"
      >
        <!-- Passenger Card -->
        <div class="glass rounded-3xl p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <!-- Icon & Title -->
            <div class="flex items-center gap-4 flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl bg-taxi-yellow/20 flex items-center justify-center">
                <UserIcon class="w-8 h-8 text-taxi-yellow" />
              </div>
              <div class="text-center sm:text-left">
                <h3 class="text-xl font-bold dark:text-white text-charcoal">Yolculuk Yap</h3>
                <p class="text-sm dark:text-white/60 text-charcoal/60">Yolcu Uygulaması</p>
              </div>
            </div>

            <!-- Download Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:ml-auto">
              <!-- App Store -->
              <a 
                href="#" 
                @click.prevent="showIOSAlert('passenger')"
                class="flex items-center gap-3 bg-white/90 dark:bg-white/10 text-charcoal dark:text-white px-5 py-3 rounded-xl hover:bg-white dark:hover:bg-white/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" class="w-7 h-7">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div class="text-left">
                  <div class="text-[10px] opacity-60">App Store</div>
                  <div class="text-sm font-semibold">Çok Yakında</div>
                </div>
              </a>

              <!-- Google Play -->
              <a 
                :href="passengerAndroidLink"
                target="_blank"
                class="flex items-center gap-3 bg-taxi-yellow text-charcoal px-5 py-3 rounded-xl hover:bg-taxi-yellow-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6">
                  <path fill="currentColor" d="M3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8l-7.78 6.64A2.47 2.47 0 0 1 3 20.5m14.65-8.93L14.5 8l3.15-3.57 2.85 1.65c1.21.7 1.21 2.47 0 3.18l-2.85 1.31M4.22 2.14 12 8l-3.15 3.57-4.63-3.93zM12 8l3.35 3.57L4.22 21.36A2.47 2.47 0 0 1 3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8z"/>
                </svg>
                <div class="text-left">
                  <div class="text-[10px] opacity-70">Google Play</div>
                  <div class="text-sm font-bold">Hemen İndir</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Driver Card -->
        <div class="glass rounded-3xl p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <!-- Icon & Title -->
            <div class="flex items-center gap-4 flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl bg-taxi-yellow/20 flex items-center justify-center">
                <CarIcon class="w-8 h-8 text-taxi-yellow" />
              </div>
              <div class="text-center sm:text-left">
                <h3 class="text-xl font-bold dark:text-white text-charcoal">Yolculuk Paylaş</h3>
                <p class="text-sm dark:text-white/60 text-charcoal/60">Sürücü Uygulaması</p>
              </div>
            </div>

            <!-- Download Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:ml-auto">
              <!-- App Store -->
              <a 
                href="#" 
                @click.prevent="showIOSAlert('driver')"
                class="flex items-center gap-3 bg-white/90 dark:bg-white/10 text-charcoal dark:text-white px-5 py-3 rounded-xl hover:bg-white dark:hover:bg-white/20 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" class="w-7 h-7">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div class="text-left">
                  <div class="text-[10px] opacity-60">App Store</div>
                  <div class="text-sm font-semibold">Çok Yakında</div>
                </div>
              </a>

              <!-- Google Play -->
              <a 
                :href="driverAndroidLink"
                target="_blank"
                class="flex items-center gap-3 bg-taxi-yellow text-charcoal px-5 py-3 rounded-xl hover:bg-taxi-yellow-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6">
                  <path fill="currentColor" d="M3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8l-7.78 6.64A2.47 2.47 0 0 1 3 20.5m14.65-8.93L14.5 8l3.15-3.57 2.85 1.65c1.21.7 1.21 2.47 0 3.18l-2.85 1.31M4.22 2.14 12 8l-3.15 3.57-4.63-3.93zM12 8l3.35 3.57L4.22 21.36A2.47 2.47 0 0 1 3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8z"/>
                </svg>
                <div class="text-left">
                  <div class="text-[10px] opacity-70">Google Play</div>
                  <div class="text-sm font-bold">Hemen İndir</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal Disclaimer -->
      <div 
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { delay: 400, duration: 500 } }"
        class="mt-12 text-center"
      >
        <div class="inline-block text-sm text-gray-500 dark:text-white/40 border border-gray-300/30 dark:border-white/10 rounded-xl px-6 py-4 max-w-2xl">
          <p>
            Tagsi ile yapılan tüm yolculuklar 
            <span class="font-medium text-charcoal/70 dark:text-white/60">hatır taşımacılığı</span> 
            kapsamında gerçekleşmektedir. 
            <span class="text-taxi-yellow font-semibold">Tagsi hiçbir komisyon almaz.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { User as UserIcon, Car as CarIcon } from 'lucide-vue-next'

// Static links for both user types
const passengerAndroidLink = 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client&hl=en_US'
const driverAndroidLink = 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_driver_app&hl=en_US'

const showIOSAlert = (type: 'passenger' | 'driver') => {
  const message = type === 'passenger' 
    ? 'iOS Yolcu uygulaması yakında!' 
    : 'iOS Sürücü uygulaması yakında!'
  alert(message)
}
</script>
