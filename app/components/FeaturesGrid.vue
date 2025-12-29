<template>
  <section class="py-20 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold dark:text-white text-charcoal">
          <span class="text-gradient">Tagsi</span> Özellikleri
        </h2>
        <p class="mt-4 text-lg dark:text-white/60 text-charcoal/60 max-w-2xl mx-auto">
          Modern taksi deneyimi için ihtiyacınız olan her şey tek bir uygulamada.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="card-feature group"
        >
          <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-taxi-yellow/20 group-hover:scale-110 transition-all duration-300">
            <component :is="feature.icon" class="w-7 h-7 text-taxi-yellow" />
          </div>
          <h3 class="text-xl font-semibold dark:text-white text-charcoal mb-2">{{ feature.title }}</h3>
          <p class="dark:text-white/60 text-charcoal/60">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Why Tagsi Section -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
        class="mt-20"
      >
        <div class="glass rounded-3xl p-8 lg:p-12">
          <h3 class="text-2xl sm:text-3xl font-display font-bold text-center mb-10 dark:text-white text-charcoal">
            Neden <span class="text-gradient">Tagsi?</span>
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
  MapPin, 
  Wallet, 
  Star, 
  Bell, 
  ShieldCheck,
  Check 
} from 'lucide-vue-next'

const features = [
  {
    icon: Smartphone,
    title: 'Kolay Yolculuk Talebi',
    description: 'Uygulamayı aç, konumunu belirle ve yolculuğunu başlat.'
  },
  {
    icon: MapPin,
    title: 'Anlık Konum Takibi',
    description: 'Sürücünün nerede olduğunu canlı harita üzerinden izle.'
  },
  {
    icon: Wallet,
    title: 'Güvenli Ödeme',
    description: 'Nakit, kredi kartı veya dijital cüzdan seçenekleriyle ödeme yap.'
  },
  {
    icon: Star,
    title: 'Puanlama Sistemi',
    description: 'Sürücünü değerlendir, deneyimini paylaş ve kaliteye katkı sağla.'
  },
  {
    icon: Bell,
    title: 'Anlık Bildirimler',
    description: 'Yolculuk onayları ve kampanyalardan anında haberdar ol.'
  },
  {
    icon: ShieldCheck,
    title: 'Güvenlik Önceliği',
    description: 'Her yolculuk, sürücü doğrulama süreçleriyle güvence altındadır.'
  }
]

const whyTagsi = [
  'Kullanıcı dostu tasarım ile her yaştan kullanıcı için kolay kullanım.',
  'Şeffaf fiyatlandırma, sürpriz ücretler olmadan adil yolculuk.',
  '7/24 aktif destek hattı ile güven veren müşteri hizmetleri.',
  'Düzenli kampanyalar ve indirimlerle uygun yolculuk fırsatları.'
]
</script>
