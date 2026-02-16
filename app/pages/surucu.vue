<template>
  <div class="min-h-screen flex items-center justify-center bg-charcoal">
    <div class="text-center text-white">
      <div class="animate-spin w-12 h-12 border-4 border-taxi-yellow border-t-transparent rounded-full mx-auto mb-4"></div>
      <p class="text-lg">Yönlendiriliyorsunuz...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { driverAndroidLink, driverIOSLink } = useUserType()

onMounted(() => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

  if (isIOS) {
    window.location.href = driverIOSLink
  } else {
    window.location.href = driverAndroidLink
  }
})
</script>
