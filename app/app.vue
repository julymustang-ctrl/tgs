<template>
  <div class="min-h-screen dark:bg-charcoal bg-gray-50 transition-colors duration-500">
    <AppHeader @toggle-menu="isMenuOpen = true" />
    <SideMenu :is-open="isMenuOpen" @close="isMenuOpen = false" />
    <main class="pt-24">
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <DriverRecruitment />
      <!-- Updated: DownloadCTA will be refactored later, keeping spot -->
      <DownloadCTA />
    </main>
    
    <!-- User requested moving footer into SideMenu, so we remove AppFooter from view 
         or we can keep a very minimal copyright bar. 
         Prompt said: "This menu now holds the content previously in the Footer".
         I will remove AppFooter. -->
    
    <!-- Theme Toggle -->
    <TaxiThemeToggle />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()
const isMenuOpen = ref(false)

onMounted(() => {
  initTheme()
})
</script>

