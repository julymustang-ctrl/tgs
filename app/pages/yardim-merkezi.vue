<template>
  <main class="pt-20 min-h-screen">
    <!-- Hero Section with Image -->
    <section class="py-16 lg:py-24 relative overflow-hidden">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-taxi-yellow/5 via-transparent to-taxi-yellow/10"></div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Image -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="order-last lg:order-first"
          >
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/yardim.jpg" 
                alt="Tagsi Yardım Merkezi" 
                class="w-full h-auto object-cover"
              />
              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
            </div>
          </div>

          <!-- Text Content -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            class="text-center lg:text-left"
          >
            <div class="w-20 h-20 mx-auto lg:mx-0 bg-taxi-yellow/10 rounded-full flex items-center justify-center mb-6">
              <HelpCircle class="w-10 h-10 text-taxi-yellow" />
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-charcoal">
              {{ $t('helpCenter.title') }}
            </h1>
            
            <p class="mt-4 text-xl lg:text-2xl text-taxi-yellow font-semibold">
              {{ $t('helpCenter.subtitle') }}
            </p>
            
            <div class="mt-6 space-y-4 text-lg dark:text-white/70 text-charcoal/70">
              <p class="dark:text-white text-charcoal font-medium">
                {{ $t('helpCenter.description') }}
              </p>
            </div>

            <!-- Contact CTA -->
            <div class="mt-8">
              <NuxtLink 
                :to="localePath('/iletisim')"
                class="inline-flex items-center gap-3 bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle class="w-5 h-5" />
                {{ $t('helpCenter.ctaButton') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ / Help Topics -->
    <section class="py-16 lg:py-24 dark:bg-charcoal-light/50 bg-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center dark:text-white text-charcoal mb-12">
          {{ $t('helpCenter.faqTitle') }}
        </h2>

        <div class="space-y-4">
          <div 
            v-for="(key, index) in faqKeys"
            :key="key"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 50), duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              {{ $t(`helpCenter.faqs.${key}.q`) }}
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              {{ $t(`helpCenter.faqs.${key}.a`) }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { HelpCircle, MessageCircle } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

const faqKeys = [
  'tagsiWhat',
  'payment',
  'commission',
  'beDriver',
  'problems',
  'cancellation',
  'cities'
]

useHead({
  title: t('helpCenter.metaTitle'),
  meta: [
    { name: 'description', content: t('helpCenter.metaDesc') }
  ]
})
</script>
