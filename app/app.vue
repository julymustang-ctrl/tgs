<template>
  <div class="min-h-screen dark:bg-charcoal bg-gray-50 transition-colors duration-500">
    <!-- NuxtPage for page routing (blog, etc.) -->
    <NuxtPage />
    
    <!-- Theme Toggle (persistent across all pages) -->
    <TaxiThemeToggle />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
