<template>
  <section class="py-20 lg:py-28 relative overflow-hidden bg-taxi-yellow">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #1A1A1A 1px, transparent 0); background-size: 32px 32px;"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <div class="inline-flex items-center gap-2 bg-charcoal/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star class="w-5 h-5 text-charcoal" />
            <span class="text-charcoal font-medium">Sürücü Başvurusu</span>
          </div>

          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-charcoal leading-tight mb-8">
            Tagsi Ailesine <br class="hidden sm:block"/>
            <span class="opacity-70">Katılın</span>
          </h2>
          
          <p class="text-xl text-charcoal/80 max-w-2xl mx-auto mb-10">
            Kendi işinizin patronu olun. Esnek çalışma saatleri ve yüksek kazanç fırsatlarıyla Tagsi sürücüsü olmak çok kolay.
          </p>

          <NuxtLink 
            to="/kurumsal"
            class="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Car class="w-6 h-6" />
            <span>Sürücümüz Olun</span>
          </NuxtLink>
       </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, Car } from 'lucide-vue-next'
</script>
