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
            <div class="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-taxi-yellow/20 to-charcoal">
              <!-- Placeholder City/Taxi Image -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <Building2 class="w-24 h-24 text-taxi-yellow/50 mx-auto mb-4" />
                  <span class="text-white/40 text-sm">Şehir Görüntüsü</span>
                </div>
              </div>
              <!-- Overlay Gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
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
              Hakkımızda
            </h1>
            
            <div class="mt-8 space-y-6 text-lg dark:text-white/70 text-charcoal/70">
              <p>
                Tagsi, şehir içi ulaşımı daha paylaşımcı, daha adil ve daha teknolojik hale getirmek 
                amacıyla kurulmuş bir girişimdir.
              </p>
              
              <p>
                İnsan odaklı yaklaşımımızla, yolcular ve sürücüler arasında güvene dayalı bir platform 
                oluşturmayı hedefliyoruz.
              </p>
              
              <p class="dark:text-white text-charcoal font-medium italic">
                Bizim için Tagsi, sadece bir uygulama değil; şehirlerde daha akıllı hareket etmenin bir yolu.
              </p>
            </div>

            <!-- Values -->
            <div class="mt-10 grid grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-14 h-14 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-3">
                  <Leaf class="w-7 h-7 text-taxi-yellow" />
                </div>
                <span class="text-sm dark:text-white/60 text-charcoal/60">Sürdürülebilir</span>
              </div>
              <div class="text-center">
                <div class="w-14 h-14 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-3">
                  <Users class="w-7 h-7 text-taxi-yellow" />
                </div>
                <span class="text-sm dark:text-white/60 text-charcoal/60">Paylaşımcı</span>
              </div>
              <div class="text-center">
                <div class="w-14 h-14 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-3">
                  <TrendingDown class="w-7 h-7 text-taxi-yellow" />
                </div>
                <span class="text-sm dark:text-white/60 text-charcoal/60">Ekonomik</span>
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

useHead({
  title: 'Hakkımızda - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi hakkında bilgi alın. Şehir içi ulaşımı daha verimli ve sürdürülebilir hale getirmek için çalışıyoruz.' }
  ]
})
</script>
