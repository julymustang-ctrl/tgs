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
          Kurumsal
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
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">Misyon</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              Paylaşımlı yolculuk yaklaşımımız, trafikteki araç sayısının azalmasına ve dolaylı olarak 
              yakıt tüketimi ile karbon salımının düşmesine katkı sağlar.
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
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">Kariyer</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              Tagsi'de birlikte üretmeye ve birlikte büyümeye inanıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Target, Briefcase } from 'lucide-vue-next'

useHead({
  title: 'Kurumsal - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi kurumsal bilgileri, misyon ve kariyer fırsatları.' }
  ]
})
</script>
