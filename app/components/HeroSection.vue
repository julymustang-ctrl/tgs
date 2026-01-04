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
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left: Text Content -->
        <div class="text-center lg:text-left">
          <!-- New Typography Hierarchy -->
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
            class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold uppercase tracking-tight text-taxi-yellow"
          >
            TAGSİ
          </h1>
          
          <p 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
            class="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white text-charcoal"
          >
            {{ $t('hero.slogan') }}
          </p>

          <p 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 600 } }"
            class="mt-6 text-lg sm:text-xl dark:text-white/70 text-charcoal/70 max-w-xl mx-auto lg:mx-0"
          >
            {{ $t('hero.subtitle') }}
          </p>

          <!-- Stats -->
          <div 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 700, duration: 600 } }"
            class="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
          >
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl font-bold text-taxi-yellow">10K+</div>
              <div class="text-sm dark:text-white/60 text-charcoal/60">{{ $t('hero.stats.drivers') }}</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl font-bold text-taxi-yellow">50K+</div>
              <div class="text-sm dark:text-white/60 text-charcoal/60">{{ $t('hero.stats.passengers') }}</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl font-bold text-taxi-yellow">81</div>
              <div class="text-sm dark:text-white/60 text-charcoal/60">{{ $t('hero.stats.cities') }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Visual Content -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.8, y: 50 }"
          :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 400, duration: 800, type: 'spring' } }"
          class="relative flex justify-center lg:justify-end"
        >
          <!-- Desktop: 3D Phone Animation with Creative Orbit -->
          <div class="hidden md:block relative">
            <!-- Glow Effect -->
            <div class="absolute inset-0 bg-taxi-yellow/20 blur-[100px] rounded-full"></div>
            
            <!-- Creative Orbit Animation (Lines + Bubbles) -->
            <CreativeOrbit />
            
            <!-- Phone Frame -->
            <div 
              class="relative z-10 animate-float"
              @mousemove="handleMouseMove"
              @mouseleave="resetParallax"
              :style="parallaxStyle"
            >
              <div class="relative bg-charcoal rounded-[40px] p-2 shadow-2xl border border-white/10">
                <!-- Phone Screen -->
                <div class="bg-charcoal-light rounded-[2.5rem] overflow-hidden w-64 sm:w-72 aspect-[9/19]">
                  <AppScreenSlider />
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile: Lifestyle Illustration -->
          <div class="block md:hidden">
            <div class="relative">
              <!-- Glow Effect -->
              <div class="absolute inset-0 bg-taxi-yellow/30 blur-[60px] rounded-full"></div>
              
              <!-- Hero Image -->
              <img 
                src="/mobile-hero-fresh.png" 
                alt="Tagsi ile yolculuk" 
                class="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
              />
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
        <span class="text-sm">{{ $t('hero.discover') }}</span>
        <ChevronDown class="w-5 h-5 animate-bounce" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

// Generate random dots for the map
const mapDots = Array.from({ length: 20 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  scale: 0.5 + Math.random() * 0.5
}))

// Parallax effect for phone (desktop only)
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
