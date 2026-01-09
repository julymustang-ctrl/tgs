<template>
  <section 
    class="py-20 lg:py-32 relative"
    aria-labelledby="features-title"
    data-chunk-id="tagsi-features"
    data-content-type="features-list"
    data-summary="Tagsi uygulamasının 6 temel özelliği ve kullanım avantajları"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 id="features-title" class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold dark:text-white text-charcoal">
          <span class="text-gradient">{{ $t('home.features.title') }}</span> {{ $t('home.features.titleSuffix') }}
        </h2>
        <p class="mt-4 text-lg dark:text-white/60 text-charcoal/60 max-w-2xl mx-auto">
          {{ $t('home.features.subtitle') }}
        </p>
      </div>

      <!-- Features Grid (Semantic Articles for LLM Chunking) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
        <article 
          v-for="(feature, index) in features" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="card-feature group"
          :data-entity="feature.entity"
          :data-chunk-id="`feature-${index + 1}`"
        >
          <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-taxi-yellow/20 group-hover:scale-110 transition-all duration-300">
            <component :is="feature.icon" class="w-7 h-7 text-taxi-yellow" />
          </div>
          <h3 class="text-xl font-semibold dark:text-white text-charcoal mb-2">{{ feature.title }}</h3>
          <p class="dark:text-white/60 text-charcoal/60">{{ feature.description }}</p>
        </article>
      </div>

      <!-- Why Tagsi Section -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
        class="mt-20"
        data-chunk-id="why-tagsi"
        data-content-type="benefits-list"
      >
        <div class="glass rounded-3xl p-8 lg:p-12">
          <h3 id="why-tagsi-title" class="text-2xl sm:text-3xl font-display font-bold text-center mb-10 dark:text-white text-charcoal">
            {{ $t('home.features.whyTagsi.title') }} <span class="text-gradient">{{ $t('home.features.whyTagsi.titleHighlight') }}</span>
          </h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div 
              v-for="(reason, index) in whyTagsi" 
              :key="index"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 700 + index * 100, duration: 400 } }"
              class="flex items-start gap-4"
            >
              <div class="w-8 h-8 bg-taxi-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check class="w-5 h-5 text-charcoal" />
              </div>
              <p class="dark:text-white/80 text-charcoal/80 text-lg">{{ reason }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Smartphone, 
  UserCheck, 
  Wallet, 
  Star,
  Bell,
  Check 
} from 'lucide-vue-next'

const { t } = useI18n()

const features = computed(() => [
  {
    icon: Smartphone,
    title: t('home.features.list.easyBooking.title'),
    description: t('home.features.list.easyBooking.desc'),
    entity: 'easy-booking'
  },
  {
    icon: UserCheck,
    title: t('home.features.list.verifiedDrivers.title'),
    description: t('home.features.list.verifiedDrivers.desc'),
    entity: 'verified-drivers'
  },
  {
    icon: Wallet,
    title: t('home.features.list.securePayment.title'),
    description: t('home.features.list.securePayment.desc'),
    entity: 'secure-payment'
  },
  {
    icon: Star,
    title: t('home.features.list.ratingSystem.title'),
    description: t('home.features.list.ratingSystem.desc'),
    entity: 'rating-system'
  },
  {
    icon: Bell,
    title: t('home.features.list.notifications.title'),
    description: t('home.features.list.notifications.desc'),
    entity: 'notifications'
  }
])

const whyTagsi = computed(() => [
  t('home.features.whyTagsi.list.0'),
  t('home.features.whyTagsi.list.1'),
  t('home.features.whyTagsi.list.2')
])
</script>
