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
         <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6">Safety <span class="text-taxi-yellow">First</span></h1>
         <p class="text-xl text-white/80 max-w-2xl mx-auto">The safety of you and your loved ones is our number one priority.</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-6 py-20">
      <div class="space-y-16">
        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Driver Verification</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               All Tagsi drivers undergo a comprehensive security screening before joining the system.
               Identity information, driving license history, and criminal records are meticulously checked.
               Only drivers who meet the highest standards can get behind the wheel.
             </p>
           </div>
        </section>

        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Live Tracking and Sharing</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               From the moment your journey begins, you are monitored live via GPS.
               With the "Share My Ride" feature, you can share your estimated arrival time and live location with your loved ones with a single click.
             </p>
           </div>
        </section>

        <section class="flex flex-col md:flex-row gap-8 items-start">
           <div class="hidden md:block w-12 h-12 bg-charcoal/5 dark:bg-white/5 rounded-full flex-shrink-0"></div>
           <div>
             <h2 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">24/7 Emergency Support</h2>
             <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
               The emergency button within the application allows you to instantly notify our support team and law enforcement if necessary in case of any unsafe situation.
             </p>
           </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Security - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi security protocols, driver verification, and live tracking systems.' }
  ]
})
</script>
