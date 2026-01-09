<template>
  <!-- Only show for driver mode -->
  <section v-if="isDriver" class="py-20 lg:py-32 relative overflow-hidden bg-taxi-yellow">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #1A1A1A 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Content -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <div class="inline-flex items-center gap-2 bg-charcoal/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star class="w-5 h-5 text-charcoal" />
            <span class="text-charcoal font-medium">{{ $t('home.driver.badge') }}</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-charcoal leading-tight">
            {{ $t('home.driver.title') }} <br/>
            <span class="text-charcoal/70">{{ $t('home.driver.titleHighlight') }}</span>
          </h2>

          <p class="mt-6 text-lg text-charcoal/70 max-w-lg">
            {{ $t('home.driver.desc') }}
          </p>

          <!-- Benefits -->
          <ul class="mt-8 space-y-4">
            <li 
              v-for="(benefit, index) in benefits" 
              :key="index"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 200 + index * 100, duration: 400 } }"
              class="flex items-center gap-3"
            >
              <div class="w-6 h-6 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                <Check class="w-4 h-4 text-taxi-yellow" />
              </div>
              <span class="text-charcoal font-medium">{{ benefit }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <a 
              :href="androidLink"
              target="_blank"
              @click="trackApply"
              class="bg-charcoal text-taxi-yellow font-semibold px-8 py-4 rounded-xl hover:bg-charcoal-light transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Car class="w-5 h-5" />
              {{ $t('home.driver.apply') }}
            </a>
            <button class="bg-transparent border-2 border-charcoal text-charcoal font-semibold px-8 py-4 rounded-xl hover:bg-charcoal/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Info class="w-5 h-5" />
              {{ $t('home.driver.moreInfo') }}
            </button>
          </div>
        </div>

        <!-- Right: Visual -->
        <div 
          ref="earningsCard"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
          class="relative flex justify-center"
        >
          <!-- Earnings Card -->
          <div class="relative">
            <div class="bg-charcoal rounded-3xl p-8 shadow-2xl max-w-sm">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                  <Wallet class="w-7 h-7 text-taxi-yellow" />
                </div>
                <div>
                  <p class="text-white/60 text-sm">{{ $t('home.driver.earnings.title') }}</p>
                  <p class="text-2xl font-bold text-white">₺{{ animatedEarnings.toLocaleString('tr-TR') }}</p>
                </div>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white/5 rounded-xl p-4">
                  <Route class="w-5 h-5 text-taxi-yellow mb-2" />
                  <p class="text-2xl font-bold text-white">{{ animatedTrips }}</p>
                  <p class="text-white/60 text-sm">{{ $t('home.driver.earnings.trips') }}</p>
                </div>
                <div class="bg-white/5 rounded-xl p-4">
                  <Clock class="w-5 h-5 text-taxi-yellow mb-2" />
                  <p class="text-2xl font-bold text-white">{{ animatedHours }}s</p>
                  <p class="text-white/60 text-sm">{{ $t('home.driver.earnings.hours') }}</p>
                </div>
              </div>

              <!-- Rating -->
              <div class="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div class="flex items-center gap-2">
                  <Star class="w-5 h-5 text-taxi-yellow fill-taxi-yellow" />
                  <span class="text-white font-semibold">4.92</span>
                </div>
                <span class="text-white/60 text-sm">{{ $t('home.driver.earnings.rating') }}</span>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
              {{ $t('home.driver.earnings.bonus') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, Check, Car, Info, Wallet, Route, Clock } from 'lucide-vue-next'
import { useIntersectionObserver } from '@vueuse/core'

const { isDriver, androidLink } = useUserType()
const { t } = useI18n()
const { gtag } = useGtag()

const trackApply = () => {
  gtag('event', 'conversion', {
    event_category: 'driver_acquisition',
    event_label: 'Recruitment Page Apply',
    value: 5
  })
}

const benefits = computed(() => [
  t('home.driver.benefits.flexibleHours'),
  t('home.driver.benefits.instantPayment'),
  t('home.driver.benefits.lowCommission'),
  t('home.driver.benefits.insurance'),
  t('home.driver.benefits.fuelDiscounts')
])

// Animated counters
const animatedEarnings = ref(0)
const animatedTrips = ref(0)
const animatedHours = ref(0)
const earningsCard = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

// Count-up animation function
const animateValue = (target: Ref<number>, end: number, duration: number) => {
  const start = 0
  const startTime = performance.now()
  
  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    target.value = Math.floor(start + (end - start) * easeOut)
    
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  
  requestAnimationFrame(update)
}

// Trigger animation when section is visible
useIntersectionObserver(
  earningsCard,
  (entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      animateValue(animatedEarnings, 12450, 2000)
      animateValue(animatedTrips, 48, 1500)
      animateValue(animatedHours, 32, 1500)
    }
  },
  { threshold: 0.3 }
)
</script>
