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
            <CarFront class="w-10 h-10 text-taxi-yellow" />
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold dark:text-white text-charcoal">
            Tagsi Sürücüsü Ol
          </h1>
          
          <p class="mt-4 text-xl lg:text-2xl text-taxi-yellow font-semibold">
            Kendi işinin patronu ol, kazancını katla.
          </p>
          
          <div class="mt-6 text-lg dark:text-white/70 text-charcoal/70 max-w-2xl mx-auto">
            <p>
              Düşük komisyon oranları ve esnek çalışma saatleri ile Tagsi ailesine katılın.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-12 bg-gray-50 dark:bg-charcoal-light/30">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Benefit 1 -->
          <div class="glass p-6 rounded-2xl text-center">
            <div class="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4">
              <Percent class="w-6 h-6 text-green-500" />
            </div>
            <h3 class="font-bold text-lg dark:text-white text-charcoal mb-2">Düşük Komisyon</h3>
            <p class="text-sm dark:text-white/60 text-charcoal/60">
              Sektördeki en düşük komisyon oranlarıyla daha fazla kazanın.
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="glass p-6 rounded-2xl text-center">
            <div class="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
              <Clock class="w-6 h-6 text-blue-500" />
            </div>
            <h3 class="font-bold text-lg dark:text-white text-charcoal mb-2">Esnek Saatler</h3>
            <p class="text-sm dark:text-white/60 text-charcoal/60">
              İstediğiniz zaman çalışın, çalışma saatlerinizi kendiniz belirleyin.
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="glass p-6 rounded-2xl text-center">
            <div class="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
              <Zap class="w-6 h-6 text-purple-500" />
            </div>
            <h3 class="font-bold text-lg dark:text-white text-charcoal mb-2">Hızlı Ödeme</h3>
            <p class="text-sm dark:text-white/60 text-charcoal/60">
              Kazançlarınız her hafta düzenli olarak hesabınıza yatsın.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form -->
    <section class="py-16 lg:py-24">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          class="glass rounded-3xl p-8 lg:p-10 border border-taxi-yellow/20 scroll-mt-24"
          id="basvuru-formu"
        >
          <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-6 text-center">
            Sürücü Başvuru Formu
          </h2>

          <form @submit.prevent="submitForm" class="space-y-5">
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
                placeholder="05XX XXX XX XX"
              />
            </div>

            <!-- Şehir -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                Şehir
              </label>
              <select 
                v-model="form.city"
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
              >
                <option value="" disabled>Şehir Seçiniz</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            <!-- Araç Bilgileri Grid -->
            <div class="grid grid-cols-2 gap-4">
              <!-- Araç Marka/Model -->
              <div class="col-span-2 sm:col-span-1">
                <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                  Araç Marka/Model
                </label>
                <input 
                  v-model="form.vehicleModel"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                  placeholder="Örn: Fiat Egea"
                />
              </div>

              <!-- Araç Yılı -->
              <div class="col-span-2 sm:col-span-1">
                <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                  Araç Yılı
                </label>
                <input 
                  v-model="form.vehicleYear"
                  type="number" 
                  required
                  min="2010"
                  :max="new Date().getFullYear()"
                  class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                  placeholder="2023"
                />
              </div>
            </div>

            <button 
              type="submit"
              class="w-full bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-taxi-yellow/30 mt-4"
            >
              Başvuruyu Gönder
            </button>
            
            <p class="text-xs text-center dark:text-white/40 text-charcoal/40 mt-4">
              Başvurunuz incelendikten sonra tarafınıza dönüş yapılacaktır.
            </p>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { CarFront, Percent, Clock, Zap } from 'lucide-vue-next'

useHead({
  title: 'Sürücü Ol - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi sürücüsü ol, kendi işinin patronu ol. Düşük komisyon ve esnek çalışma saatleri ile kazanmaya başla.' }
  ]
})

const form = reactive({
  name: '',
  phone: '',
  city: '',
  vehicleModel: '',
  vehicleYear: ''
})

const submitForm = () => {
  // In a real app, this would send data to an API
  console.log('Driver Application:', form)
  alert('Sürücü başvurunuz alındı! Ekibimiz en kısa sürede sizinle iletişime geçecektir.')
  
  // Reset form
  form.name = ''
  form.phone = ''
  form.city = ''
  form.vehicleModel = ''
  form.vehicleYear = ''
}
</script>
