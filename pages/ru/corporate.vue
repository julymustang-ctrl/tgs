<template>
  <div class="pt-24 min-h-screen pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Left: Text -->
        <div class="space-y-12">
          <div>
             <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6 dark:text-white text-charcoal">
              Tagsi <span class="text-taxi-yellow">Корпоративный</span>
            </h1>
            <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
              Tagsi предлагает прозрачную, надежную и выгодную экосистему для корпоративных партнеров и водителей.
              Наша миссия — повысить стандарты, возглавив цифровую трансформацию в транспортном секторе.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Наша Миссия</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Сделать городской транспорт доступным, безопасным и комфортным для всех. Экономия времени за счет использования силы технологий.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Наше Видение</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              Стать крупнейшей транспортной сетью региона и ведущей мобильной платформой Турции.
            </p>
          </div>
        </div>

        <!-- Right: Form -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="bg-white dark:bg-charcoal-light p-8 lg:p-10 rounded-3xl shadow-xl dark:border dark:border-white/5 border-gray-200"
        >
          <h3 class="text-2xl font-bold mb-6 dark:text-white text-charcoal">Анкета Водителя</h3>
          <form class="space-y-6" @submit.prevent>
            <div class="space-y-2">
              <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">Имя Фамилия</label>
              <input type="text" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="Ваше Имя" />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">Номер Телефона</label>
              <input type="tel" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="05XX XXX XX XX" />
            </div>

            <div class="grid grid-cols-2 gap-4">
               <div class="space-y-2">
                <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">Город</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="Стамбул" />
              </div>
               <div class="space-y-2">
                <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">Модель Автомобиля</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="2020 Fiat Egea" />
              </div>
            </div>

            <button class="w-full bg-taxi-yellow text-charcoal font-bold py-4 rounded-xl hover:bg-taxi-yellow-light transition-colors shadow-lg hover:shadow-taxi-yellow/20 mt-4">
              Отправить заявку
            </button>

            <p class="text-xs text-center dark:text-white/40 text-charcoal/40">
              Отправляя заявку, вы соглашаетесь с нашей Политикой конфиденциальности.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Корпоративный - Tagsi',
  meta: [
    { name: 'description', content: 'Корпоративные решения Tagsi и форма заявки водителя.' }
  ]
})
</script>
