<template>
  <div class="min-h-screen dark:bg-charcoal bg-gray-50 transition-colors duration-500">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    
    <!-- Theme Toggle -->
    <TaxiThemeToggle />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
