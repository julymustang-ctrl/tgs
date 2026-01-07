<template>
  <main class="pt-20 min-h-screen flex items-center">
    <section class="py-16 lg:py-24 w-full">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Minimalist Contact Card -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
          class="glass rounded-3xl p-8 lg:p-12 text-center border border-taxi-yellow/20"
        >
          <div class="w-20 h-20 mx-auto bg-taxi-yellow/10 rounded-full flex items-center justify-center mb-8">
            <MessageCircle class="w-10 h-10 text-taxi-yellow" />
          </div>

          <h1 class="text-4xl sm:text-5xl font-display font-bold dark:text-white text-charcoal mb-4">
            İletişim
          </h1>
          <p class="text-xl text-taxi-yellow font-semibold mb-2">
            Geri bildirimlerin bizim için değerli.
          </p>
          <p class="dark:text-white/60 text-charcoal/60 mb-10">
            İletişim kanallarımız üzerinden bize her zaman ulaşabilirsin.
          </p>

          <!-- Contact Methods -->
          <div class="space-y-6">
            <!-- Telefon -->
            <a 
              href="tel:+908502222222"
              class="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl dark:bg-white/5 bg-gray-100 hover:bg-taxi-yellow/10 transition-all group"
            >
              <div class="w-12 h-12 bg-taxi-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-taxi-yellow/20 transition-colors">
                <Phone class="w-6 h-6 text-taxi-yellow" />
              </div>
              <div class="text-left">
                <div class="text-xs dark:text-white/50 text-charcoal/50">Telefon</div>
                <div class="text-lg font-semibold dark:text-white text-charcoal">+90 (850) 222 22 22</div>
              </div>
            </a>

            <!-- E-posta -->
            <a 
              href="mailto:iletisim@tagsi.com"
              class="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl dark:bg-white/5 bg-gray-100 hover:bg-taxi-yellow/10 transition-all group"
            >
              <div class="w-12 h-12 bg-taxi-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-taxi-yellow/20 transition-colors">
                <Mail class="w-6 h-6 text-taxi-yellow" />
              </div>
              <div class="text-left">
                <div class="text-xs dark:text-white/50 text-charcoal/50">E-posta</div>
                <div class="text-lg font-semibold dark:text-white text-charcoal">iletisim@tagsi.com</div>
              </div>
            </a>

            <!-- Faks -->
            <div 
              class="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl dark:bg-white/5 bg-gray-100"
            >
              <div class="w-12 h-12 bg-taxi-yellow/10 rounded-xl flex items-center justify-center">
                <Printer class="w-6 h-6 text-taxi-yellow" />
              </div>
              <div class="text-left">
                <div class="text-xs dark:text-white/50 text-charcoal/50">Faks</div>
                <div class="text-lg font-semibold dark:text-white text-charcoal">+90 (212) 222 22 22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { MessageCircle, Phone, Mail, Printer } from 'lucide-vue-next'

useHead({
  title: 'İletişim - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi ile iletişime geçin. Telefon, e-posta ve faks bilgilerimiz.' }
  ]
})
</script>
