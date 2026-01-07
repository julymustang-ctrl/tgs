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
          <div class="w-20 h-20 mx-auto bg-taxi-yellow/10 rounded-full flex items-center justify-center mb-6">
            <Briefcase class="w-10 h-10 text-taxi-yellow" />
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-charcoal">
            Kariyer
          </h1>
          
          <p class="mt-4 text-xl lg:text-2xl text-taxi-yellow font-semibold">
            Tagsi'de birlikte üretmeye ve birlikte büyümeye inanıyoruz.
          </p>
          
          <div class="mt-6 space-y-4 text-lg dark:text-white/70 text-charcoal/70 max-w-2xl mx-auto">
            <p>
              Teknoloji, ürün, operasyon ve müşteri deneyimi alanlarında yetenekli insanlarla yol almak istiyoruz.
            </p>
            
            <p class="dark:text-white text-charcoal font-medium">
              Eğer sen de geleceğin ulaşım çözümlerinde yer almak istiyorsan, kariyer fırsatlarımızı takip edebilirsin.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Departments -->
    <section class="py-16 lg:py-20 dark:bg-charcoal-light/50 bg-gray-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-center dark:text-white text-charcoal mb-10">
          Ekiplerimiz
        </h2>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 400 } }"
            class="glass rounded-2xl p-6 text-center"
          >
            <div class="w-12 h-12 mx-auto bg-taxi-yellow/10 rounded-xl flex items-center justify-center mb-4">
              <Code class="w-6 h-6 text-taxi-yellow" />
            </div>
            <h3 class="font-bold dark:text-white text-charcoal">Teknoloji</h3>
          </div>
          
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 400 } }"
            class="glass rounded-2xl p-6 text-center"
          >
            <div class="w-12 h-12 mx-auto bg-taxi-yellow/10 rounded-xl flex items-center justify-center mb-4">
              <Layers class="w-6 h-6 text-taxi-yellow" />
            </div>
            <h3 class="font-bold dark:text-white text-charcoal">Ürün</h3>
          </div>
          
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 400 } }"
            class="glass rounded-2xl p-6 text-center"
          >
            <div class="w-12 h-12 mx-auto bg-taxi-yellow/10 rounded-xl flex items-center justify-center mb-4">
              <Settings class="w-6 h-6 text-taxi-yellow" />
            </div>
            <h3 class="font-bold dark:text-white text-charcoal">Operasyon</h3>
          </div>
          
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 400 } }"
            class="glass rounded-2xl p-6 text-center"
          >
            <div class="w-12 h-12 mx-auto bg-taxi-yellow/10 rounded-xl flex items-center justify-center mb-4">
              <HeartHandshake class="w-6 h-6 text-taxi-yellow" />
            </div>
            <h3 class="font-bold dark:text-white text-charcoal">Müşteri Deneyimi</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Job Application Form -->
    <section class="py-16 lg:py-24">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
          class="glass rounded-3xl p-8 lg:p-12 border border-taxi-yellow/20"
        >
          <div class="text-center mb-10">
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-4">
              <UserPlus class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold dark:text-white text-charcoal">
              İş Başvuru Formu
            </h2>
            <p class="mt-2 dark:text-white/60 text-charcoal/60">
              Tagsi ailesine katılmak için başvur
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Ad Soyad -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                Ad Soyad
              </label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <!-- E-posta -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                E-posta
              </label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                placeholder="ornek@email.com"
              />
            </div>

            <!-- Telefon -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                Telefon
              </label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                placeholder="+90 5XX XXX XX XX"
              />
            </div>

            <!-- Departman -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                İlgilendiğiniz Departman
              </label>
              <select 
                v-model="form.department"
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
              >
                <option value="" disabled>Seçiniz</option>
                <option value="teknoloji">Teknoloji</option>
                <option value="urun">Ürün</option>
                <option value="operasyon">Operasyon</option>
                <option value="musteri-deneyimi">Müşteri Deneyimi</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            <!-- Mesaj -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                Kendinizi Tanıtın
              </label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all resize-none"
                placeholder="Deneyimleriniz, yetenekleriniz ve neden Tagsi'de çalışmak istediğiniz..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-taxi-yellow/30"
            >
              Başvur
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Briefcase, Code, Layers, Settings, HeartHandshake, UserPlus } from 'lucide-vue-next'

useHead({
  title: 'Kariyer - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi kariyer fırsatları. Teknoloji, ürün, operasyon ve müşteri deneyimi alanlarında bize katılın.' }
  ]
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  department: '',
  message: ''
})

const submitForm = () => {
  alert('Başvurunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.')
  // Reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.department = ''
  form.message = ''
}
</script>
