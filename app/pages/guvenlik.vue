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
                src="/guvenlik.png" 
                alt="Tagsi Güvenlik" 
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
              <ShieldCheck class="w-10 h-10 text-taxi-yellow" />
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-charcoal">
              Güvenlik
            </h1>
            
            <p class="mt-4 text-xl lg:text-2xl text-taxi-yellow font-semibold">
              Güvenlik, Tagsi'nin temel yapı taşlarından biridir.
            </p>
            
            <div class="mt-6 space-y-4 text-lg dark:text-white/70 text-charcoal/70">
              <p>
                Platformda yer alan sürücüler kimlik ve araç doğrulama süreçlerinden geçer. 
                Yolculuk süresince canlı konum takibi, yolcu–sürücü değerlendirme sistemi ve 
                uygulama içi destek mekanizmalarıyla süreç şeffaf şekilde ilerler.
              </p>
              
              <p class="dark:text-white text-charcoal font-medium">
                Tagsi'de hem yolcular hem de sürücüler için güvenli bir ortam oluşturmayı öncelik kabul ederiz.
              </p>
            </div>
          </div>
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
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Canlı Konum Takibi</h3>
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
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Kimlik Doğrulama</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Tüm sürücülerimiz detaylı kimlik ve araç doğrulama sürecinden geçer.
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
              <Star class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Değerlendirme Sistemi</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Yolcu-sürücü değerlendirme sistemiyle şeffaf bir deneyim.
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
              <Headphones class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Uygulama İçi Destek</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Yolculuk süresince uygulama içi destek mekanizmalarıyla yanınızdayız.
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
              <Bell class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h3 class="text-xl font-bold dark:text-white text-charcoal mb-3">Acil Durum Butonu</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Uygulama içi acil durum butonu ile anında yardım çağırın.
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
    { name: 'description', content: 'Güvenlik, Tagsi\'nin temel yapı taşlarından biridir. Kimlik doğrulama, canlı konum takibi ve uygulama içi destek.' }
  ]
})
</script>
