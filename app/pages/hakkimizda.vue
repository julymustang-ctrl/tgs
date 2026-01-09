<template>
  <main class="pt-20 min-h-screen">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Image (Left on Desktop, Top on Mobile) -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="order-first"
          >
            <div class="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img 
                src="/hakkimizda.png" 
                alt="Tagsi Hakkında" 
                class="w-full h-full object-cover"
              />
              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            </div>
          </div>

          <!-- Text (Right on Desktop, Bottom on Mobile) -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            class="text-center lg:text-left"
          >
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-charcoal">
              {{ $t('about.title') }}
            </h1>
            
            <div class="mt-8 space-y-6 text-lg dark:text-white/70 text-charcoal/70">
              <p>
                {{ $t('about.p1') }}
              </p>
              
              <p>
                {{ $t('about.p2') }}
              </p>
              
              <p class="dark:text-white text-charcoal font-medium italic">
                {{ $t('about.p3') }}
              </p>
            </div>

            <!-- Values -->
            <div class="mt-10 grid grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-14 h-14 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-3">
                  <Leaf class="w-7 h-7 text-taxi-yellow" />
                </div>
                <span class="text-sm dark:text-white/60 text-charcoal/60">{{ $t('about.sustainable') }}</span>
              </div>
              <div class="text-center">
                <div class="w-14 h-14 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-3">
                  <Users class="w-7 h-7 text-taxi-yellow" />
                </div>
                <span class="text-sm dark:text-white/60 text-charcoal/60">{{ $t('about.shared') }}</span>
              </div>
              <div class="text-center">
                <div class="w-14 h-14 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-3">
                  <TrendingDown class="w-7 h-7 text-taxi-yellow" />
                </div>
                <span class="text-sm dark:text-white/60 text-charcoal/60">{{ $t('about.economical') }}</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Building2, Leaf, Users, TrendingDown } from 'lucide-vue-next'

const { t } = useI18n()

useHead({
  title: t('about.metaTitle'),
  meta: [
    { name: 'description', content: t('about.metaDesc') }
  ]
})
</script>
