<template>
  <div class="pt-32 pb-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-taxi-yellow/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
       <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
    </div>

    <div class="max-w-3xl mx-auto w-full px-6 relative z-10 text-center">
      <h1 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-5xl md:text-7xl font-display font-bold mb-6 dark:text-white text-charcoal"
      >
        İletişim
      </h1>
      
      <p 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 600 } }"
        class="text-xl dark:text-white/60 text-charcoal/60 mb-20"
      >
        Sorularınız için bizimle dijital kanallardan iletişime geçin.
      </p>

      <div class="grid gap-6">
        <!-- Phone -->
        <a 
          href="tel:+908505555555"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          class="group glass rounded-2xl p-8 hover:bg-taxi-yellow hover:border-taxi-yellow transition-all duration-300"
        >
          <div class="text-sm uppercase tracking-widest opacity-50 mb-2 group-hover:text-charcoal group-hover:opacity-70 dark:text-white text-charcoal">Müşteri Hizmetleri</div>
          <div class="text-3xl md:text-5xl font-bold dark:text-white text-charcoal group-hover:text-charcoal">0850 555 55 55</div>
        </a>

        <!-- Email -->
        <a 
          href="mailto:destek@tagsi.com"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
          class="group glass rounded-2xl p-8 hover:bg-taxi-yellow hover:border-taxi-yellow transition-all duration-300"
        >
          <div class="text-sm uppercase tracking-widest opacity-50 mb-2 group-hover:text-charcoal group-hover:opacity-70 dark:text-white text-charcoal">E-Posta</div>
          <div class="text-2xl md:text-4xl font-bold dark:text-white text-charcoal group-hover:text-charcoal">destek@tagsi.com</div>
        </a>

        <!-- Fax (As requested) -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
          class="glass rounded-2xl p-8 opacity-60"
        >
          <div class="text-sm uppercase tracking-widest opacity-50 mb-2 dark:text-white text-charcoal">Faks</div>
          <div class="text-xl md:text-2xl font-mono dark:text-white text-charcoal">+90 212 555 55 56</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simple redirect if needed (middleware is better, but this works for client-side)
const route = useRoute()
if (route.path === '/yardim-merkezi') {
    navigateTo('/iletisim')
}

useHead({
  title: 'İletişim - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi müşteri hizmetleri, e-posta ve iletişim bilgileri.' }
  ]
})
</script>
