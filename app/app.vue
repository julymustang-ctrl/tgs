<template>
  <div class="min-h-screen dark:bg-charcoal bg-gray-50 transition-colors duration-500">
    <AppHeader @toggle-menu="isMenuOpen = true" />
    <SideMenu :is-open="isMenuOpen" @close="isMenuOpen = false" />
    <main>
      <NuxtPage />
    </main>
    
    <AppFooter />
    
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

