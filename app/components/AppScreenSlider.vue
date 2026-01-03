<template>
  <div class="relative w-full h-full">
    <TransitionGroup name="fade">
      <img
        v-for="(screen, index) in screens"
        v-show="currentIndex === index"
        :key="screen"
        :src="screen"
        :alt="`Tagsi App Screen ${index + 1}`"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const screens = [
  '/screens/4.png', // Login/Welcome Screen - Start
  '/screens/2.png', // Location Selection
  '/screens/3.png', // Route & Vehicle Selection
  '/screens/1.png', // Map & Call Button
]

const currentIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

const startSlideshow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % screens.length
  }, 3500)
}

onMounted(() => {
  startSlideshow()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
