<template>
  <div></div>
</template>

<script setup lang="ts">
// Redirect to /iletisim
definePageMeta({
  middleware: [
    function () {
      return navigateTo('/iletisim', { redirectCode: 301 })
    }
  ]
})
</script>
