<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- Animated City Map Background -->
    <div class="absolute inset-0 dark:bg-charcoal-dark bg-gray-100">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 map-grid dark:opacity-50 opacity-30"></div>
      
      <!-- Animated Yellow Dots (Cars) -->
      <div class="map-dots">
        <div 
          v-for="(dot, index) in mapDots" 
          :key="index"
          class="map-dot"
          :style="{
            left: dot.x + '%',
            top: dot.y + '%',
            animationDelay: dot.delay + 's',
            transform: `scale(${dot.scale})`
          }"
        ></div>
      </div>

      <!-- Gradient Overlays -->
      <div class="absolute inset-0 dark:bg-gradient-to-b dark:from-charcoal dark:via-transparent dark:to-charcoal bg-gradient-to-b from-gray-50 via-transparent to-gray-50"></div>
      <div class="absolute inset-0 dark:bg-gradient-to-r dark:from-charcoal/80 dark:via-transparent dark:to-charcoal/80 bg-gradient-to-r from-gray-100/80 via-transparent to-gray-100/80"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        <!-- Left: Text Content (Mobile: Stack in order) -->
        <div class="text-center lg:text-left flex flex-col items-center lg:items-start">
          <!-- 1. Headline -->
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight dark:text-white text-charcoal"
          >
            Hızlı, güvenli ve kolay ulaşım için
            <span class="text-gradient block mt-2">Tagsi</span>
          </h1>
          
          <!-- 2. Subheadline -->
          <p 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
            class="mt-6 text-lg sm:text-xl dark:text-white/70 text-charcoal/70 max-w-xl"
          >
            Şehir içi ulaşımı daha hızlı, daha güvenli ve ekonomik hale getiren modern çözüm. 
            <span class="text-taxi-yellow font-semibold">Tek dokunuşla çağır</span>, anlık takip et.
          </p>

          <!-- 3. Smart Download Button -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
            class="mt-10 w-full sm:w-auto"
          >
            <a 
              :href="androidLink"
              target="_blank"
              class="group flex items-center justify-center gap-4 bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal px-8 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-taxi-yellow/40 hover:scale-105 w-full sm:w-auto"
            >
              <!-- Apple Logo -->
              <svg viewBox="0 0 24 24" class="w-7 h-7 text-charcoal opacity-80">
                <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              
              <!-- Text -->
              <span class="text-xl font-bold">Hemen İndir</span>
              
              <!-- Google Play Logo -->
              <svg viewBox="0 0 24 24" class="w-7 h-7 text-charcoal opacity-80">
                <path fill="currentColor" d="M3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8l-7.78 6.64A2.47 2.47 0 0 1 3 20.5m14.65-8.93L14.5 8l3.15-3.57 2.85 1.65c1.21.7 1.21 2.47 0 3.18l-2.85 1.31M4.22 2.14 12 8l-3.15 3.57-4.63-3.93zM12 8l3.35 3.57L4.22 21.36A2.47 2.47 0 0 1 3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8z"/>
              </svg>
            </a>
          </div>

          <!-- 4. GLOW BADGE - Commission Disclaimer with Neon Effect -->
          <div 
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 500 } }"
            class="mt-8 w-full max-w-xl"
          >
            <div 
              class="flex flex-col items-center text-center px-6 py-5 rounded-2xl border backdrop-blur-md transition-all duration-300"
              :class="isDark 
                ? 'bg-white/10 border-yellow-400/60 shadow-[0_0_30px_rgba(250,204,21,0.4)]' 
                : 'bg-zinc-900/90 border-yellow-500/50 shadow-2xl'"
            >
              <!-- First Line -->
              <p class="text-white/80 text-sm sm:text-base">
                Tagsi ile yapılan tüm yolculuklar 
                <span class="text-taxi-yellow font-semibold">hatır taşımacılığı</span> 
                kapsamında gerçekleşmektedir.
              </p>
              <!-- Second Line - Bold Yellow with Shimmer Effect -->
              <p class="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold shimmer-text">
                Tagsi hiçbir komisyon almaz.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Phone Mockup (5. Phone Image on Mobile) -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.8, y: 50 }"
          :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 400, duration: 800, type: 'spring' } }"
          class="relative flex justify-center lg:justify-end order-last"
        >
          <!-- Glow Effect -->
          <div class="absolute inset-0 bg-taxi-yellow/20 blur-[100px] rounded-full"></div>
          
          <!-- Phone Frame -->
          <div 
            class="relative z-10 animate-float"
            @mousemove="handleMouseMove"
            @mouseleave="resetParallax"
            :style="parallaxStyle"
          >
            <div class="relative bg-charcoal rounded-[40px] p-2 shadow-2xl border border-white/10">
              <!-- Phone Screen -->
              <div class="bg-gradient-to-br from-charcoal-light to-charcoal rounded-[32px] overflow-hidden w-64 sm:w-72 aspect-[9/19] relative">
                <!-- Status Bar -->
                <div class="h-8 bg-charcoal/80 flex items-center justify-between px-6 relative z-10">
                  <span class="text-xs text-white/60">9:41</span>
                  <div class="w-20 h-6 bg-black rounded-full"></div>
                  <div class="flex gap-1">
                    <div class="w-4 h-2 bg-white/60 rounded-sm"></div>
                    <div class="w-4 h-2 bg-white/60 rounded-sm"></div>
                  </div>
                </div>
                
                <!-- Map Grid Background -->
                <div class="absolute inset-0 map-grid opacity-20"></div>
                
                <!-- Centered Logo with Pulse -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="logo-pulse">
                    <!-- Tagsi Logo Image -->
                    <img 
                      src="/logo.svg" 
                      alt="Tagsi Logo" 
                      class="w-32 sm:w-40 h-auto"
                    />
                  </div>
                </div>
                
                <!-- Bottom Gradient Fade -->
                <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div 
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1200, duration: 600 } }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div class="flex flex-col items-center gap-2 dark:text-white/50 text-charcoal/50">
        <span class="text-sm">Keşfet</span>
        <ChevronDown class="w-5 h-5 animate-bounce" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const { androidLink } = useUserType()
const { isDark } = useTheme()

// Generate random dots for the map
const mapDots = Array.from({ length: 20 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  scale: 0.5 + Math.random() * 0.5
}))

// Parallax effect for phone
const parallaxX = ref(0)
const parallaxY = ref(0)

const handleMouseMove = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const x = (event.clientX - rect.left - rect.width / 2) / 25
  const y = (event.clientY - rect.top - rect.height / 2) / 25
  parallaxX.value = x
  parallaxY.value = y
}

const resetParallax = () => {
  parallaxX.value = 0
  parallaxY.value = 0
}

const parallaxStyle = computed(() => ({
  transform: `perspective(1000px) rotateY(${parallaxX.value}deg) rotateX(${-parallaxY.value}deg)`
}))
</script>

<style scoped>
/* Shimmer/Shine Effect - Light passing over text */
.shimmer-text {
  color: #FFD600;
  background: linear-gradient(
    90deg,
    #FFD600 0%,
    #FFD600 40%,
    #FFFFFF 50%,
    #FFD600 60%,
    #FFD600 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Logo Pulse Animation */
.logo-pulse {
  animation: logoPulse 2.5s ease-in-out infinite;
}

@keyframes logoPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}
</style>
