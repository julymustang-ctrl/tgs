<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-charcoal">
         <!-- Geometric / Safety Abstract Image -->
         <img 
           src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
           class="w-full h-full object-cover opacity-60"
           alt="Safety Shield Concept"
         /> 
         <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
      </div>
      
      <div class="relative z-10 text-center px-4">
         <div 
           v-motion
           :initial="{ opacity: 0, scale: 0.9 }"
           :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
           class="w-20 h-20 mx-auto bg-taxi-yellow/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-taxi-yellow/50"
         >
            <svg class="w-10 h-10 text-taxi-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
         </div>
         <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6">Безопасность <span class="text-taxi-yellow">Прежде Всего</span></h1>
         <p class="text-xl text-white/80 max-w-2xl mx-auto">Безопасность вас и ваших близких — наш приоритет номер один.</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-6 py-20">
      <!-- General Overview -->
      <div class="mb-20 text-center">
        <p class="text-xl md:text-2xl font-medium leading-relaxed dark:text-white/90 text-charcoal/90">
          Безопасность — один из краеугольных камней Tagsi.
        </p>
        <p class="mt-6 text-lg leading-relaxed dark:text-white/70 text-charcoal/70">
          Водители на платформе проходят проверку личности и транспортного средства.
          Процесс протекает прозрачно благодаря отслеживанию местоположения в реальном времени, системе оценки пассажиров и водителей и механизмам поддержки внутри приложения.
          <br class="hidden md:block" />
          В Tagsi мы ставим в приоритет создание безопасной среды как для пассажиров, так и для водителей.
        </p>
      </div>

      <div class="space-y-16">
        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Проверка водителей</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               Все водители Tagsi проходят всестороннюю проверку безопасности перед тем, как присоединиться к системе.
               Тщательно проверяются паспортные данные, история вождения и наличие судимостей.
               В рейс выходят только водители, соответствующие самым высоким стандартам.
             </p>
           </div>
        </section>

        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Отслеживание в реальном времени</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               Ваша поездка отслеживается по GPS в режиме реального времени с момента начала.
               С помощью функции «Поделиться поездкой» вы можете сообщить близким расчетное время прибытия и свое местоположение одним нажатием.
             </p>
           </div>
        </section>

        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Круглосуточная поддержка</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               Кнопка экстренной помощи в приложении позволяет мгновенно уведомить нашу службу поддержки и, при необходимости, правоохранительные органы в любой небезопасной ситуации.
             </p>
           </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Безопасность - Tagsi',
  meta: [
    { name: 'description', content: 'Протоколы безопасности Tagsi, проверка водителей и системы отслеживания.' }
  ]
})
</script>
