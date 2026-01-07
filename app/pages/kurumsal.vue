<template>
  <main class="pt-20 min-h-screen">
    <!-- Mission/Vision Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center dark:text-white text-charcoal"
        >
          Kurumsal
        </h1>

        <!-- Mission & Vision Cards -->
        <div class="mt-12 grid md:grid-cols-2 gap-8">
          <!-- Mission -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
            class="glass rounded-3xl p-8"
          >
            <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Target class="w-7 h-7 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">Misyon</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              Paylaşımlı yolculuk yaklaşımımız, trafikteki araç sayısının azalmasına ve dolaylı olarak 
              yakıt tüketimi ile karbon salımının düşmesine katkı sağlar.
            </p>
          </div>

          <!-- Career -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 500 } }"
            class="glass rounded-3xl p-8"
          >
            <div class="w-14 h-14 bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase class="w-7 h-7 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-4">Kariyer</h2>
            <p class="dark:text-white/70 text-charcoal/70">
              Tagsi'de birlikte üretmeye ve birlikte büyümeye inanıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Driver Application Form -->
    <section class="py-16 lg:py-24 dark:bg-charcoal-light/50 bg-gray-100">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
          class="glass rounded-3xl p-8 lg:p-12 border border-taxi-yellow/20"
        >
          <div class="text-center mb-10">
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-4">
              <Car class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold dark:text-white text-charcoal">
              Sürücü Başvuru Formu
            </h2>
            <p class="mt-2 dark:text-white/60 text-charcoal/60">
              Tagsi ailesine katılın
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

            <!-- Araç Modeli -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                Araç Modeli
              </label>
              <input 
                v-model="form.vehicle"
                type="text" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                placeholder="Örn: Toyota Corolla 2020"
              />
            </div>

            <!-- Şehir -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                Şehir
              </label>
              <input 
                v-model="form.city"
                type="text" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                placeholder="Bulunduğunuz şehir"
              />
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
import { Target, Briefcase, Car } from 'lucide-vue-next'

useHead({
  title: 'Kurumsal - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi kurumsal bilgileri ve sürücü başvuru formu.' }
  ]
})

const form = reactive({
  name: '',
  phone: '',
  vehicle: '',
  city: ''
})

const submitForm = () => {
  alert('Başvurunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.')
  // Reset form
  form.name = ''
  form.phone = ''
  form.vehicle = ''
  form.city = ''
}
</script>
