<template>
  <main class="pt-20 min-h-screen">
    <!-- Mission/Vision Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center dark:text-white text-charcoal"
        >
          {{ $t('corporate.title') }}
        </h1>

        <!-- Mission & Vision Cards -->
        <div class="mt-12 grid md:grid-cols-2 gap-8">
          <!-- Mission -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
            class="glass rounded-3xl p-8"
          >
            <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Target class="w-7 h-7 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">{{ $t('corporate.missionTitle') }}</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              {{ $t('corporate.missionDesc') }}
            </p>
          </div>

          <!-- Career -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
            class="glass rounded-3xl p-8"
          >
            <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase class="w-7 h-7 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">{{ $t('corporate.careerTitle') }}</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              {{ $t('corporate.careerDesc') }}
            </p>
          </div>

          <!-- Vizyon -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
            class="glass rounded-3xl p-8"
          >
            <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye class="w-7 h-7 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">{{ $t('corporate.visionTitle') }}</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              {{ $t('corporate.visionDesc') }}
            </p>
          </div>

          <!-- Nasıl Çalışır -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 500 } }"
            class="glass rounded-3xl p-8"
          >
            <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Route class="w-7 h-7 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">{{ $t('corporate.howItWorksTitle') }}</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              {{ $t('corporate.howItWorksDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Target, Briefcase, Eye, Route } from 'lucide-vue-next'

const { t } = useI18n()

useHead({
  title: t('corporate.metaTitle'),
  meta: [
    { name: 'description', content: t('corporate.metaDesc') }
  ]
})
</script>
