<template>
  <div class="pt-24 min-h-screen pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Left: Text -->
        <div class="space-y-12">
          <div>
             <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6 dark:text-white text-charcoal">
              Tagsi <span class="text-taxi-yellow">Corporate</span>
            </h1>
            <p class="text-lg dark:text-white/70 text-charcoal/70 leading-relaxed">
              Tagsi offers a transparent, reliable, and profitable ecosystem for its corporate partners and drivers.
              Our mission is to raise standards by leading the digital transformation in the transportation sector.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Our Mission</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              To make urban transportation accessible, safe, and comfortable for everyone. saving time by using the power of technology.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4 dark:text-white text-charcoal">Our Vision</h3>
            <p class="dark:text-white/60 text-charcoal/60">
              To become the region's largest transportation network as Turkey's leading mobility platform.
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
          <h3 class="text-2xl font-bold mb-6 dark:text-white text-charcoal">Driver Application Form</h3>
          <form class="space-y-6" @submit.prevent>
            <div class="space-y-2">
              <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">Full Name</label>
              <input type="text" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="Your Name" />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">Phone Number</label>
              <input type="tel" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="05XX XXX XX XX" />
            </div>

            <div class="grid grid-cols-2 gap-4">
               <div class="space-y-2">
                <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">City</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="Istanbul" />
              </div>
               <div class="space-y-2">
                <label class="text-sm font-medium dark:text-white/70 text-charcoal/70">Vehicle Model</label>
                <input type="text" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-taxi-yellow focus:ring-2 focus:ring-taxi-yellow/20 outline-none transition-all dark:text-white text-charcoal" placeholder="2020 Fiat Egea" />
              </div>
            </div>

            <button class="w-full bg-taxi-yellow text-charcoal font-bold py-4 rounded-xl hover:bg-taxi-yellow-light transition-colors shadow-lg hover:shadow-taxi-yellow/20 mt-4">
              Submit Application
            </button>

            <p class="text-xs text-center dark:text-white/40 text-charcoal/40">
              By submitting your application, you agree to our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Corporate - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi corporate solutions and driver application form.' }
  ]
})
</script>
