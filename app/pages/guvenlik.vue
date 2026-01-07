<template>
  <main class="pt-20 min-h-screen">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 relative overflow-hidden">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-taxi-yellow/5 via-transparent to-taxi-yellow/10"></div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <div class="w-24 h-24 mx-auto bg-taxi-yellow/10 rounded-full flex items-center justify-center mb-8">
            <ShieldCheck class="w-12 h-12 text-taxi-yellow" />
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-charcoal">
            Güvenlik
          </h1>
          
          <p class="mt-6 text-xl lg:text-2xl dark:text-white/70 text-charcoal/70 max-w-2xl mx-auto">
            Güvenliğiniz önceliğimizdir. Tüm yolculuklarınızda dijital takip, onaylı sürücüler ve 
            7/24 destek hattımızla yanınızdayız.
          </p>
        </div>
      </div>
    </section>

    <!-- Safety Features -->
    <section class="py-16 lg:py-24 dark:bg-charcoal-light/50 bg-gray-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
            class="glass rounded-3xl p-8 text-center"
          >
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <MapPin class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Dijital Takip</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Tüm yolculuklarınız gerçek zamanlı olarak takip edilir ve kaydedilir.
            </p>
          </div>

          <!-- Feature 2 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
            class="glass rounded-3xl p-8 text-center"
          >
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <UserCheck class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Onaylı Sürücüler</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Tüm sürücülerimiz detaylı doğrulama sürecinden geçer.
            </p>
          </div>

          <!-- Feature 3 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
            class="glass rounded-3xl p-8 text-center"
          >
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Headphones class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">7/24 Destek</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Günün her saati destek hattımız hizmetinizde.
            </p>
          </div>

          <!-- Feature 4 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 500 } }"
            class="glass rounded-3xl p-8 text-center"
          >
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Bell class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Acil Durum Butonu</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Uygulama içi acil durum butonu ile anında yardım çağırın.
            </p>
          </div>

          <!-- Feature 5 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
            class="glass rounded-3xl p-8 text-center"
          >
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Share2 class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Konum Paylaşımı</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Yolculuğunuzu sevdiklerinizle anlık olarak paylaşın.
            </p>
          </div>

          <!-- Feature 6 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 500 } }"
            class="glass rounded-3xl p-8 text-center"
          >
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Star class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Değerlendirme Sistemi</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Sürücüleri değerlendirerek güvenli bir topluluk oluşturun.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ShieldCheck, MapPin, UserCheck, Headphones, Bell, Share2, Star } from 'lucide-vue-next'

useHead({
  title: 'Güvenlik - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi güvenlik önlemleri. Dijital takip, onaylı sürücüler ve 7/24 destek.' }
  ]
})
</script>
