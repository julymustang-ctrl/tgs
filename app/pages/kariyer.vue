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
            {{ $t('career.title') }}
          </h1>
          
          <p class="mt-4 text-xl lg:text-2xl text-taxi-yellow font-semibold">
            {{ $t('career.subtitle') }}
          </p>
          
          <div class="mt-6 space-y-4 text-lg dark:text-white/70 text-charcoal/70 max-w-2xl mx-auto">
            <p>
              {{ $t('career.description1') }}
            </p>
            
            <p class="dark:text-white text-charcoal font-medium">
              {{ $t('career.description2') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Departments -->
    <section class="py-16 lg:py-20 dark:bg-charcoal-light/50 bg-gray-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-center dark:text-white text-charcoal mb-10">
          {{ $t('career.teamsTitle') }}
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
            <h3 class="font-bold dark:text-white text-charcoal">{{ $t('career.teams.tech') }}</h3>
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
            <h3 class="font-bold dark:text-white text-charcoal">{{ $t('career.teams.product') }}</h3>
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
            <h3 class="font-bold dark:text-white text-charcoal">{{ $t('career.teams.operation') }}</h3>
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
            <h3 class="font-bold dark:text-white text-charcoal">{{ $t('career.teams.cx') }}</h3>
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
              {{ $t('career.form.title') }}
            </h2>
            <p class="mt-2 dark:text-white/60 text-charcoal/60">
              {{ $t('career.form.subtitle') }}
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Ad Soyad -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                {{ $t('career.form.nameLabel') }}
              </label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                :placeholder="$t('career.form.namePlaceholder')"
              />
            </div>

            <!-- E-posta -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                {{ $t('career.form.emailLabel') }}
              </label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                :placeholder="$t('career.form.emailPlaceholder')"
              />
            </div>

            <!-- Telefon -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                {{ $t('career.form.phoneLabel') }}
              </label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                :placeholder="$t('career.form.phonePlaceholder')"
              />
            </div>

            <!-- Departman -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                {{ $t('career.form.departmentLabel') }}
              </label>
              <select 
                v-model="form.department"
                required
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
              >
                <option value="" disabled>{{ $t('career.form.departmentPlaceholder') }}</option>
                <option value="teknoloji">{{ $t('career.form.departments.tech') }}</option>
                <option value="urun">{{ $t('career.form.departments.product') }}</option>
                <option value="operasyon">{{ $t('career.form.departments.operation') }}</option>
                <option value="musteri-deneyimi">{{ $t('career.form.departments.cx') }}</option>
                <option value="diger">{{ $t('career.form.departments.other') }}</option>
              </select>
            </div>

            <!-- Mesaj -->
            <div>
              <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                {{ $t('career.form.messageLabel') }}
              </label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all resize-none"
                :placeholder="$t('career.form.messagePlaceholder')"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-taxi-yellow/30"
            >
              {{ $t('career.form.submitButton') }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Briefcase, Code, Layers, Settings, HeartHandshake, UserPlus } from 'lucide-vue-next'

const { t } = useI18n()

useHead({
  title: t('career.metaTitle'),
  meta: [
    { name: 'description', content: t('career.metaDesc') }
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
  alert(t('career.form.successMessage'))
  // Reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.department = ''
  form.message = ''
}
</script>
