<template>
  <main class="pt-20 min-h-screen">
    <section class="py-16 lg:py-24 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <!-- Left: Contact Card -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="relative"
          >
            <!-- Decorative Elements -->
            <div class="absolute -top-12 -left-12 w-64 h-64 bg-taxi-yellow/20 rounded-full blur-[80px]"></div>
            
            <div class="relative glass rounded-[40px] p-8 sm:p-12 overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-taxi-yellow/20 to-transparent rounded-bl-full"></div>
              
              <h1 class="text-4xl sm:text-5xl font-display font-bold dark:text-white text-charcoal mb-6">
                {{ $t('contact.title') }}
              </h1>
              
              <p class="text-xl dark:text-white/80 text-charcoal/80 mb-2">
                {{ $t('contact.subtitle') }}
              </p>
              
              <p class="dark:text-white/60 text-charcoal/60 mb-12">
                {{ $t('contact.desc') }}
              </p>

              <div class="space-y-8">
                <!-- Phone -->
                <div class="flex items-start gap-6 group">
                  <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-taxi-yellow/20 transition-colors duration-300">
                    <Phone class="w-7 h-7 text-taxi-yellow" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-taxi-yellow mb-1">{{ $t('contact.phoneTitle') }}</h3>
                    <a href="tel:08503082474" class="text-2xl font-bold dark:text-white text-charcoal hover:text-taxi-yellow transition-colors">
                      0 850 308 24 74
                    </a>
                    <p class="text-xs dark:text-white/40 text-charcoal/40 mt-1">
                      {{ $t('contact.callCenter') }}
                    </p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-6 group">
                  <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-taxi-yellow/20 transition-colors duration-300">
                    <Mail class="w-7 h-7 text-taxi-yellow" />
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-taxi-yellow mb-1">{{ $t('contact.emailTitle') }}</h3>
                    <a href="mailto:info@tagsi.co" class="text-2xl font-bold dark:text-white text-charcoal hover:text-taxi-yellow transition-colors break-all">
                      info@tagsi.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            class="lg:pt-0"
          >
            <div class="glass rounded-3xl p-8 lg:p-10 border border-taxi-yellow/20">
              <h2 class="text-2xl font-bold dark:text-white text-charcoal mb-6 flex items-center gap-3">
                <Send class="w-6 h-6 text-taxi-yellow" />
                {{ $t('contact.formTitle') }}
              </h2>
              
              <form @submit.prevent="submitForm" class="space-y-5">
                <!-- Name -->
                <div>
                  <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                    {{ $t('contact.nameLabel') }}
                  </label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    :placeholder="$t('contact.nameLabel')"
                  />
                </div>

                <!-- Phone -->
                <div>
                  <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                    {{ $t('contact.phoneLabel') }}
                  </label>
                  <input 
                    v-model="form.phone"
                    type="tel" 
                    required
                    class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                    {{ $t('contact.emailLabel') }}
                  </label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-sm font-medium dark:text-white/80 text-charcoal/80 mb-2">
                    {{ $t('contact.messageLabel') }}
                  </label>
                  <textarea 
                    v-model="form.message"
                    rows="4"
                    required
                    class="w-full px-4 py-3 rounded-xl border dark:bg-charcoal dark:border-white/10 dark:text-white bg-white border-gray-200 text-charcoal focus:ring-2 focus:ring-taxi-yellow focus:border-transparent transition-all resize-none"
                    :placeholder="$t('contact.messageLabel')"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit"
                  class="w-full bg-taxi-yellow hover:bg-taxi-yellow-light text-charcoal font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-taxi-yellow/30 flex items-center justify-center gap-2"
                >
                  <Send class="w-5 h-5" />
                  {{ $t('contact.sendButton') }}
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Bottom: Company Info -->
        <div class="mt-16 lg:mt-24">
          <h2 class="text-3xl font-display font-bold dark:text-white text-charcoal mb-10 flex items-center gap-3 justify-center">
            <Building2 class="w-8 h-8 text-taxi-yellow" />
            {{ $t('contact.companyInfoTitle') }}
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Ticari Ünvan -->
            <div class="glass rounded-2xl p-6 hover:bg-white/5 transition-colors text-center">
              <span class="text-sm text-taxi-yellow font-medium block mb-2">{{ $t('contact.commercialTitle') }}</span>
              <p class="text-sm dark:text-white text-charcoal font-medium leading-relaxed">
                {{ $t('contact.commercialValue') }}
              </p>
            </div>

            <!-- Sicil & Mersis -->
            <div class="glass rounded-2xl p-6 hover:bg-white/5 transition-colors text-center">
              <span class="text-sm text-taxi-yellow font-medium block mb-2">{{ $t('contact.registryTitle') }} / {{ $t('contact.mersisTitle') }}</span>
              <p class="text-sm dark:text-white text-charcoal font-medium">247754 / 0885098923000001</p>
            </div>

            <!-- Address -->
            <div class="glass rounded-2xl p-6 hover:bg-white/5 transition-colors text-center group">
              <MapPin class="w-6 h-6 text-taxi-yellow mx-auto mb-3 group-hover:animate-bounce" />
              <span class="text-sm text-taxi-yellow font-medium block mb-2">{{ $t('contact.addressTitle') }}</span>
              <p class="text-sm dark:text-white text-charcoal font-medium leading-relaxed">
                {{ $t('contact.addressValue') }}
              </p>
            </div>

            <!-- KEP -->
            <div class="glass rounded-2xl p-6 hover:bg-white/5 transition-colors text-center">
              <span class="text-sm text-taxi-yellow font-medium block mb-2">{{ $t('contact.kepTitle') }}</span>
              <p class="text-sm dark:text-white text-charcoal font-medium break-all">ucuztag@hs01.kep.tr</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Phone, Mail, MapPin, Building2, Send } from 'lucide-vue-next'

const { t } = useI18n()

useHead({
  title: t('contact.metaTitle'),
  meta: [
    { name: 'description', content: t('contact.metaDesc') }
  ]
})

const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Simulate sending email to info@tagsi.co
  console.log('Form submitted:', form)
  alert(t('contact.successMessage'))
  
  // Reset form
  form.name = ''
  form.phone = ''
  form.email = ''
  form.message = ''
}
</script>
