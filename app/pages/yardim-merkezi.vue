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
                src="/yardim.jpg" 
                alt="Tagsi Yardım Merkezi" 
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
              <HelpCircle class="w-10 h-10 text-taxi-yellow" />
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-charcoal">
              Yardım Merkezi
            </h1>
            
            <p class="mt-4 text-xl lg:text-2xl text-taxi-yellow font-semibold">
              Sık sorulan sorulara hızlıca ulaşabilir veya destek talebi oluşturabilirsin.
            </p>
            
            <div class="mt-6 space-y-4 text-lg dark:text-white/70 text-charcoal/70">
              <p class="dark:text-white text-charcoal font-medium">
                Amacımız, yaşadığın sorunu en kısa sürede çözmek.
              </p>
            </div>

            <!-- Contact CTA -->
            <div class="mt-8">
              <NuxtLink 
                to="/iletisim"
                class="inline-flex items-center gap-3 bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle class="w-5 h-5" />
                Destek Talebi Oluştur
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ / Help Topics -->
    <section class="py-16 lg:py-24 dark:bg-charcoal-light/50 bg-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center dark:text-white text-charcoal mb-12">
          Sıkça Sorulan Sorular
        </h2>

        <div class="space-y-4">
          <!-- FAQ 1 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              Tagsi nedir ve nasıl çalışır?
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Tagsi, şehir içi ulaşımı kolaylaştıran bir mobil uygulamadır. Uygulamayı indirip giriş yaptıktan sonra 
              gitmek istediğiniz adresi girin, size en yakın sürücüyü çağırın ve yolculuğunuzu başlatın.
            </p>
          </div>

          <!-- FAQ 2 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 250, duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              Ödeme nasıl yapılır?
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Tagsi'de yolculuk ücreti doğrudan sürücüye nakit olarak ödenir. Uygulama üzerinden herhangi 
              bir ödeme alınmaz. Tagsi, yolcu ile sürücüyü buluşturan bir platformdur.
            </p>
          </div>

          <!-- FAQ 3 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              Tagsi komisyon alıyor mu?
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Hayır. Tagsi, hatır taşımacılığı kapsamında çalışır ve hiçbir komisyon almaz. Tüm yolculuk 
              ücreti sürücüye aittir.
            </p>
          </div>

          <!-- FAQ 4 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 350, duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              Sürücü olmak için ne yapmalıyım?
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Kurumsal sayfamızdaki sürücü başvuru formunu doldurarak başvurabilirsiniz. Başvurunuz 
              değerlendirildikten sonra sizinle iletişime geçilecektir.
            </p>
          </div>

          <!-- FAQ 5 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              Yolculuk sırasında sorun yaşarsam ne yapmalıyım?
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Uygulama içindeki destek butonunu kullanarak anlık yardım alabilirsiniz. Ayrıca yolculuk 
              sonrasında İletişim sayfamız üzerinden de bize ulaşabilirsiniz.
            </p>
          </div>

          <!-- FAQ 6 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 450, duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              Yolculuğumu iptal edebilir miyim?
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Evet. Sürücü size ulaşmadan önce yolculuğunuzu ücretsiz olarak iptal edebilirsiniz. 
              Sürücü konumunuza yaklaştıktan sonra iptal koşulları değişebilir.
            </p>
          </div>

          <!-- FAQ 7 -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 400 } }"
            class="glass rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold dark:text-white text-charcoal mb-2">
              Tagsi hangi şehirlerde aktif?
            </h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Tagsi şu anda belirli şehirlerde hizmet vermektedir. Aktif şehirler ve yeni açılacak 
              lokasyonlar hakkında güncel bilgi almak için uygulamamızı takip edebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { HelpCircle, MessageCircle } from 'lucide-vue-next'

useHead({
  title: 'Yardım Merkezi - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi Yardım Merkezi. Sıkça sorulan sorular ve destek talebi oluşturma.' }
  ]
})
</script>
