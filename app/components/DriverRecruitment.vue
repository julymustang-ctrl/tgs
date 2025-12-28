<template>
  <section class="py-20 lg:py-32 relative overflow-hidden bg-taxi-yellow">
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
            <span class="text-charcoal font-medium">Sürücü Ol, Kazan</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-charcoal leading-tight">
            Sürücümüz <br/>
            <span class="text-charcoal/70">Olun</span>
          </h2>

          <p class="mt-6 text-lg text-charcoal/70 max-w-lg">
            Kendi programınızda çalışın, istediğiniz kadar kazanın. Tagsi ailesiyle özgürce sürün, güvenle kazanın.
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
            <button class="bg-charcoal text-taxi-yellow font-semibold px-8 py-4 rounded-xl hover:bg-charcoal-light transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
              <Car class="w-5 h-5" />
              Sürücü Başvurusu
            </button>
            <button class="bg-transparent border-2 border-charcoal text-charcoal font-semibold px-8 py-4 rounded-xl hover:bg-charcoal/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Info class="w-5 h-5" />
              Daha Fazla Bilgi
            </button>
          </div>
        </div>

        <!-- Right: Visual -->
        <div 
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
                  <p class="text-white/60 text-sm">Bu Hafta Kazancınız</p>
                  <p class="text-2xl font-bold text-white">₺12,450</p>
                </div>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white/5 rounded-xl p-4">
                  <Route class="w-5 h-5 text-taxi-yellow mb-2" />
                  <p class="text-2xl font-bold text-white">48</p>
                  <p class="text-white/60 text-sm">Yolculuk</p>
                </div>
                <div class="bg-white/5 rounded-xl p-4">
                  <Clock class="w-5 h-5 text-taxi-yellow mb-2" />
                  <p class="text-2xl font-bold text-white">32s</p>
                  <p class="text-white/60 text-sm">Çalışma</p>
                </div>
              </div>

              <!-- Rating -->
              <div class="flex items-center justify-between bg-white/5 rounded-xl p-4">
                <div class="flex items-center gap-2">
                  <Star class="w-5 h-5 text-taxi-yellow fill-taxi-yellow" />
                  <span class="text-white font-semibold">4.92</span>
                </div>
                <span class="text-white/60 text-sm">Ortalama Puan</span>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
              +%15 Bonus
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, Check, Car, Info, Wallet, Route, Clock } from 'lucide-vue-next'

const benefits = [
  'Esnek çalışma saatleri',
  'Anında ödeme imkanı',
  'Düşük komisyon oranları',
  'Ücretsiz sigorta desteği',
  'Yakıt indirimleri'
]
</script>
