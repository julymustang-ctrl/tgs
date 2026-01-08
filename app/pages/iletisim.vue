<template>
  <main class="pt-20 min-h-screen">
    <section class="py-16 lg:py-24 w-full">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Contact Card -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
          class="glass rounded-3xl p-8 lg:p-12 text-center border border-taxi-yellow/20 mb-8"
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
          <div class="space-y-4">
            <!-- Telefon -->
            <a 
              href="tel:+908503082474"
              class="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl dark:bg-white/5 bg-gray-100 hover:bg-taxi-yellow/10 transition-all group"
            >
              <div class="w-12 h-12 bg-taxi-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-taxi-yellow/20 transition-colors">
                <Phone class="w-6 h-6 text-taxi-yellow" />
              </div>
              <div class="text-left">
                <div class="text-xs dark:text-white/50 text-charcoal/50">Telefon / Faks</div>
                <div class="text-lg font-semibold dark:text-white text-charcoal">0850 308 24 74</div>
              </div>
            </a>

            <!-- E-posta -->
            <a 
              href="mailto:destek@tagsi.co"
              class="flex items-center justify-center gap-4 px-6 py-4 rounded-2xl dark:bg-white/5 bg-gray-100 hover:bg-taxi-yellow/10 transition-all group"
            >
              <div class="w-12 h-12 bg-taxi-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-taxi-yellow/20 transition-colors">
                <Mail class="w-6 h-6 text-taxi-yellow" />
              </div>
              <div class="text-left">
                <div class="text-xs dark:text-white/50 text-charcoal/50">E-posta</div>
                <div class="text-lg font-semibold dark:text-white text-charcoal">destek@tagsi.co</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Company Info Card -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
          class="glass rounded-3xl p-6 lg:p-8 border border-white/10"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-taxi-yellow/10 rounded-xl flex items-center justify-center">
              <Building2 class="w-5 h-5 text-taxi-yellow" />
            </div>
            <h2 class="text-xl font-bold dark:text-white text-charcoal">Şirket Bilgileri</h2>
          </div>

          <div class="grid gap-4 text-sm">
            <!-- Ticari Ünvan -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span class="dark:text-white/50 text-charcoal/50 sm:w-40 flex-shrink-0">Ticari Ünvan</span>
              <span class="dark:text-white text-charcoal font-medium">Ucuz Tag İleri Teknoloji Yazılım LTD. ŞTİ.</span>
            </div>

            <!-- Ticaret Sicil -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span class="dark:text-white/50 text-charcoal/50 sm:w-40 flex-shrink-0">Ticaret Sicil No</span>
              <span class="dark:text-white text-charcoal font-medium">264577</span>
            </div>

            <!-- Mersis -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span class="dark:text-white/50 text-charcoal/50 sm:w-40 flex-shrink-0">Mersis No</span>
              <span class="dark:text-white text-charcoal font-medium">0883121639800001</span>
            </div>

            <!-- Adres -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span class="dark:text-white/50 text-charcoal/50 sm:w-40 flex-shrink-0">Genel Müdürlük</span>
              <span class="dark:text-white text-charcoal font-medium">
                Adalet Mah. Manas Bul. Folkart Towers B Kule No:47/B No: 2601 Bayraklı / İZMİR
              </span>
            </div>

            <!-- Telefon -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span class="dark:text-white/50 text-charcoal/50 sm:w-40 flex-shrink-0">Telefon</span>
              <a href="tel:+908503082474" class="dark:text-white text-charcoal font-medium hover:text-taxi-yellow transition-colors">
                0850 308 24 74 (Çağrı Ve İletişim Merkezi)
              </a>
            </div>

            <!-- E-posta -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span class="dark:text-white/50 text-charcoal/50 sm:w-40 flex-shrink-0">E-posta</span>
              <a href="mailto:destek@tagsi.co" class="dark:text-white text-charcoal font-medium hover:text-taxi-yellow transition-colors">
                destek@tagsi.co
              </a>
            </div>

            <!-- KEP -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
              <span class="dark:text-white/50 text-charcoal/50 sm:w-40 flex-shrink-0">KEP Adresi</span>
              <span class="dark:text-white text-charcoal font-medium">ucuztagileri@hs01.kep.tr</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { MessageCircle, Phone, Mail, Building2 } from 'lucide-vue-next'

useHead({
  title: 'İletişim - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi ile iletişime geçin. Telefon, e-posta ve şirket bilgilerimiz.' }
  ]
})
</script>
