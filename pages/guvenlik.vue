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
         <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6">Önce <span class="text-taxi-yellow">Güvenlik</span></h1>
         <p class="text-xl text-white/80 max-w-2xl mx-auto">Sizin ve sevdiklerinizin güvenliği, bizim bir numaralı önceliğimizdir.</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-6 py-20">
      <!-- General Overview -->
      <div class="mb-20 text-center">
        <p class="text-xl md:text-2xl font-medium leading-relaxed dark:text-white/90 text-charcoal/90">
          Güvenlik, Tagsi’nin temel yapı taşlarından biridir.
        </p>
        <p class="mt-6 text-lg leading-relaxed dark:text-white/70 text-charcoal/70">
          Platformda yer alan sürücüler kimlik ve araç doğrulama süreçlerinden geçer. 
          Yolculuk süresince canlı konum takibi, yolcu–sürücü değerlendirme sistemi ve uygulama içi destek mekanizmalarıyla süreç şeffaf şekilde ilerler.
          <br class="hidden md:block" />
          Tagsi’de hem yolcular hem de sürücüler için güvenli bir ortam oluşturmayı öncelik kabul ederiz.
        </p>
      </div>

      <div class="space-y-16">
        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Sürücü Doğrulama</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               Tüm Tagsi sürücüleri, sisteme dahil olmadan önce kapsamlı bir güvenlik taramasından geçer. 
               Kimlik bilgileri, ehliyet geçmişi ve adli sicil kayıtları titizlikle kontrol edilir. 
               Yalnızca en yüksek standartları karşılayan sürücüler direksiyon başına geçebilir.
             </p>
           </div>
        </section>

        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Canlı Takip ve Paylaşım</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               Yolculuğunuz başladığı andan itibaren GPS üzerinden canlı olarak izlenirsiniz. 
               "Yolculuğumu Paylaş" özelliği ile tahmini varış sürenizi ve canlı konumunuzu sevdiklerinizle tek tıkla paylaşabilirsiniz.
             </p>
           </div>
        </section>

        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">7/24 Acil Destek</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               Uygulama içinde yer alan acil durum butonu, herhangi bir güvensizlik durumunda anında destek ekibimize ve gerekli durumlarda kolluk kuvvetlerine haber vermenizi sağlar.
             </p>
           </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Güvenlik - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi güvenlik protokolleri, sürücü doğrulama ve canlı takip sistemleri.' }
  ]
})
</script>
