<template>
  <main class="pt-20 min-h-screen">
    <section class="py-16 lg:py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="glass rounded-3xl p-8 lg:p-12 border border-taxi-yellow/20"
        >
          <!-- Header -->
          <div class="text-center mb-12">
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Cookie class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h1 class="text-3xl sm:text-4xl font-display font-bold dark:text-white text-charcoal">
              Çerez Politikası
            </h1>
            <p class="mt-4 dark:text-white/60 text-charcoal/60">
              Bu Çerez Politikası, Tagsi® tarafından işletilen web sitesini ziyaret eden kullanıcıları bilgilendirmek amacıyla hazırlanmıştır.
            </p>
          </div>

          <!-- Content -->
          <div class="space-y-8 dark:text-white/80 text-charcoal/80">
            <!-- Section 1 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">1</span>
                Çerez (Cookie) Nedir?
              </h2>
              <p class="leading-relaxed">
                Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır. Çerezler, sitenin düzgün çalışmasını sağlamak ve kullanıcı deneyimini geliştirmek amacıyla kullanılır.
              </p>
            </div>

            <!-- Section 2 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">2</span>
                Kullanılan Çerez Türleri
              </h2>
              <p class="leading-relaxed mb-4">
                Tagsi web sitesinde yalnızca <strong class="text-taxi-yellow">zorunlu çerezler</strong> kullanılmaktadır.
              </p>
              <p class="mb-2">Bu çerezler;</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Web sitesinin güvenli şekilde çalışmasını,</li>
                <li>Oturum yönetimini,</li>
                <li>Temel teknik işlevlerin yerine getirilmesini</li>
              </ul>
              <p class="mt-4">sağlamak amacıyla kullanılır.</p>
              <p class="mt-2 italic dark:text-white/60 text-charcoal/60">
                Bu çerezler olmadan web sitesinin doğru şekilde çalışması mümkün değildir.
              </p>
            </div>

            <!-- Section 3 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">3</span>
                Kişisel Veri Toplama
              </h2>
              <p class="leading-relaxed">
                Zorunlu çerezler aracılığıyla kimlik belirleyici veya pazarlama amaçlı kişisel veri toplanmaz. Tagsi, kullanıcılarını reklam, hedefleme veya üçüncü taraf pazarlama faaliyetleri kapsamında takip etmez.
              </p>
            </div>

            <!-- Section 4 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">4</span>
                Üçüncü Taraf Çerezler
              </h2>
              <p class="leading-relaxed">
                Tagsi web sitesinde, üçüncü taraflara ait reklam, pazarlama veya izleme çerezleri kullanılmamaktadır.
              </p>
            </div>

            <!-- Section 5 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">5</span>
                Çerezlerin Yönetimi
              </h2>
              <p class="leading-relaxed">
                Tarayıcı ayarlarınızı değiştirerek çerezleri kısmen veya tamamen engelleyebilirsiniz. Ancak çerezlerin devre dışı bırakılması, web sitesinin bazı işlevlerinin düzgün çalışmamasına neden olabilir.
              </p>
            </div>

            <!-- Section 6 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">6</span>
                Politika Güncellemeleri
              </h2>
              <p class="leading-relaxed">
                Tagsi, işbu Çerez Politikası'nı yasal düzenlemeler ve hizmetlerinde meydana gelebilecek değişiklikler doğrultusunda güncelleyebilir. Güncel politika her zaman web sitesinde yayınlanır.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Cookie } from 'lucide-vue-next'

useHead({
  title: 'Çerez Politikası - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi çerez politikası hakkında bilgi edinin.' }
  ]
})
</script>
