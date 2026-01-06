<template>
  <button 
    @click="handleDownload"
    :class="buttonClass"
    class="relative group overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
  >
    <!-- Icons Container -->
    <div class="flex items-center gap-2 pr-3 border-r border-current border-opacity-20">
        <!-- Apple Icon -->
        <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <!-- Play Store Icon -->
        <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
          <path d="M3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8l-7.78 6.64A2.47 2.47 0 0 1 3 20.5m14.65-8.93L14.5 8l3.15-3.57 2.85 1.65c1.21.7 1.21 2.47 0 3.18l-2.85 1.31M4.22 2.14 12 8l-3.15 3.57-4.63-3.93zM12 8l3.35 3.57L4.22 21.36A2.47 2.47 0 0 1 3 20.5V3.5c0-.91.49-1.71 1.22-2.14L12 8z"/>
        </svg>
    </div>
    
    <div class="text-left">
      <div v-if="showSubtitle" class="text-[10px] uppercase tracking-wider opacity-80 font-medium">{{ subtitle }}</div>
      <div class="font-bold leading-none" :class="labelClass">{{ label }}</div>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  appType?: 'passenger' | 'driver'
  label?: string
  subtitle?: string
  showSubtitle?: boolean
  buttonClass?: string
  labelClass?: string
}>(), {
  appType: 'passenger',
  label: 'Hemen İndir',
  subtitle: 'ÜCRETSİZ İNDİR',
  showSubtitle: true,
  buttonClass: 'bg-taxi-yellow text-charcoal px-6 py-3 rounded-xl hover:bg-taxi-yellow-light',
  labelClass: 'text-base'
})

// Links
const PASSENGER_ANDROID = 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client'
// Placeholder for Driver Android pending user input, defaulting to same play store or a corporate page
const DRIVER_ANDROID = 'https://play.google.com/store/apps/details?id=com.tagsi.driver_app' // Assumption

const handleDownload = () => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  const isAndroid = /android/i.test(userAgent)
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

  if (props.appType === 'passenger') {
    if (isAndroid) {
      window.open(PASSENGER_ANDROID, '_blank')
    } else if (isIOS) {
       alert('iOS uygulamamız çok yakında App Store\'da! Şimdilik web sitemizi kullanabilirsiniz.')
    } else {
       // Desktop or other: default to Android Link for now as it's the primary available one
       window.open(PASSENGER_ANDROID, '_blank')
    }
  } else {
    // DRIVER
    if (isAndroid) {
      // If we don't have a real driver link, we might redirect to corporate form or assume standard link
      // For now, I'll alert or redirect to corporate if link isn't verified.
      // But user asked for "separate buttons", so let's try to open a store link.
      // Since I don't have the exact ID, I'll use a placeholder that effectively goes to search or corporate
       alert('Sürücü uygulamamız Play Store\'da! (Link güncelleniyor)')
       // window.open(DRIVER_ANDROID, '_blank') 
    } else if (isIOS) {
       alert('Sürücü uygulamamız yakında App Store\'da!')
    } else {
       navigateTo('/kurumsal')
    }
  }
}
</script>
