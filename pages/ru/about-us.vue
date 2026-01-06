<template>
  <div class="pt-24 min-h-screen">
    <div class="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
      <!-- Left: Visual -->
      <div class="relative h-64 lg:h-auto overflow-hidden">
        <div class="absolute inset-0 bg-charcoal">
          <!-- Placeholder for High-Quality Image -->
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
            alt="City Abstract" 
            class="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:bg-gradient-to-r"></div>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="flex items-center justify-center p-8 lg:p-20 bg-gray-50 dark:bg-charcoal">
        <div class="max-w-xl">
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="text-4xl lg:text-6xl font-display font-bold mb-8 dark:text-white text-charcoal"
          >
            Новый Ритм <br />
            <span class="text-taxi-yellow">Города.</span>
          </h1>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
            class="space-y-6 text-lg dark:text-white/70 text-charcoal/70 leading-relaxed"
          >
            <p>
              Tagsi была основана для того, чтобы сделать городской транспорт более эффективным, совместным и устойчивым.
              Наша цель — способствовать снижению дорожных заторов и выбросов углерода в городах, одновременно сокращая транспортные расходы водителей.
            </p>
            <p>
              Сегодня городской транспорт представляет собой значительную статью расходов и экологическую нагрузку как для отдельных лиц, так и для городов. Tagsi стремится более эффективно использовать транспортные средства, объединяя пассажиров, следующих по одному маршруту. Таким образом, водители получают больше пользы от своих поездок, а город избавляется от ненужного использования автомобилей.
            </p>
            <p>
              Наш подход к совместным поездкам способствует сокращению количества автомобилей в трафике и косвенно снижает расход топлива и выбросы углерода. Меньше машин, меньше пробок и более чистая городская жизнь... Tagsi стремится стать частью этой трансформации.
            </p>
            <p>
              Мы рассматриваем Tagsi не просто как транспортное приложение, а как платформу, способствующую тому, чтобы сделать города умнее, удобнее для жизни и более устойчивыми.
              Мы работаем над созданием более сбалансированной транспортной экосистемы для пассажиров, водителей и городов.
            </p>
          </div>

          <!-- Stats Minimal -->
          <div 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }"
            class="mt-12 flex gap-12 pt-12 border-t dark:border-white/10 border-charcoal/10"
          >
            <div>
              <div class="text-3xl font-bold dark:text-white text-charcoal">81</div>
              <div class="text-sm uppercase tracking-wider opacity-60">Город</div>
            </div>
            <div>
              <div class="text-3xl font-bold dark:text-white text-charcoal">24/7</div>
              <div class="text-sm uppercase tracking-wider opacity-60">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'О нас - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi — это транспортная платформа нового поколения, идущая в ногу с динамикой современного города.' }
  ]
})
</script>
