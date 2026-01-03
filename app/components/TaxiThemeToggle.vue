<template>
  <button
    ref="toggleRef"
    @click="toggleTheme"
    class="taxi-lamp-container"
    :class="{ 
      'lamp-on': isDark, 
      'lamp-off': !isDark,
      'is-flickering': isAttentionFlickering
    }"
    :style="dockingStyle"
    :aria-label="isDark ? 'Gündüz moduna geç' : 'Gece moduna geç'"
  >
    <!-- Main Lamp Body with 3D perspective -->
    <div class="lamp-body">
      <span class="lamp-text">TAGSİ</span>
    </div>
    
    <!-- Bottom Accent Strip -->
    <div class="lamp-accent"></div>
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { isDark, toggleTheme } = useTheme()

// === Smart Docking Logic ===
const toggleRef = ref<HTMLElement | null>(null)
const footerOffset = ref(0)
const isDockedToFooter = ref(false)

// Calculate docking offset when footer is in view
const calculateDocking = () => {
  const footer = document.querySelector('footer')
  if (!footer || !toggleRef.value) return

  const footerRect = footer.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const buttonBottomMargin = 32 // 2rem in pixels
  const buttonHeight = toggleRef.value.offsetHeight || 70

  // Check if footer is entering viewport from below
  if (footerRect.top < viewportHeight) {
    // Footer is visible, calculate how much to push button up
    const overlap = viewportHeight - footerRect.top
    const neededOffset = overlap + buttonBottomMargin + buttonHeight / 2

    if (neededOffset > buttonBottomMargin) {
      footerOffset.value = neededOffset - buttonBottomMargin
      isDockedToFooter.value = true
    } else {
      footerOffset.value = 0
      isDockedToFooter.value = false
    }
  } else {
    footerOffset.value = 0
    isDockedToFooter.value = false
  }
}

// Computed style for smooth docking
const dockingStyle = computed(() => ({
  transform: `translateX(-50%) translateY(-${footerOffset.value}px)`,
  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
}))

// === Attention Seeker Flicker ===
const isAttentionFlickering = ref(false)
let flickerTimeout: ReturnType<typeof setTimeout> | null = null

const scheduleNextFlicker = () => {
  // Random interval between 6-12 seconds
  const delay = 6000 + Math.random() * 6000
  
  flickerTimeout = setTimeout(() => {
    triggerAttentionFlicker()
    scheduleNextFlicker()
  }, delay)
}

const triggerAttentionFlicker = () => {
  isAttentionFlickering.value = true
  
  // Remove flicker class after animation completes
  setTimeout(() => {
    isAttentionFlickering.value = false
  }, 600)
}

// Lifecycle hooks
onMounted(() => {
  // Start scroll listener for smart docking
  window.addEventListener('scroll', calculateDocking, { passive: true })
  window.addEventListener('resize', calculateDocking, { passive: true })
  calculateDocking()
  
  // Start attention flicker timer after initial delay
  setTimeout(() => {
    scheduleNextFlicker()
  }, 3000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', calculateDocking)
  window.removeEventListener('resize', calculateDocking)
  
  if (flickerTimeout) {
    clearTimeout(flickerTimeout)
  }
})
</script>

<style scoped>
.taxi-lamp-container {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  perspective: 150px;
  will-change: transform;
}

.taxi-lamp-container:hover {
  transform: translateX(-50%) scale(1.05);
}

.taxi-lamp-container:active {
  transform: translateX(-50%) scale(0.98);
}

/* Main Lamp Body with 3D rotateX effect */
.lamp-body {
  width: 130px;
  height: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateX(25deg);
  transform-origin: bottom center;
  transition: all 0.3s ease;
  position: relative;
}

/* Lamp Text Styling */
.lamp-text {
  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 0.25em;
  user-select: none;
  transition: all 0.3s ease;
}

/* Bottom Accent Strip */
.lamp-accent {
  width: 120px;
  height: 6px;
  border-radius: 0 0 10px 10px;
  margin-top: -2px;
  transition: all 0.3s ease;
}

/* ===== LAMP ON STATE (Dark Mode - Night) ===== */
.lamp-on .lamp-body {
  background: linear-gradient(
    180deg,
    #FFF176 0%,
    #FFEE58 15%,
    #FFD600 50%,
    #FFC107 85%,
    #FFB300 100%
  );
  box-shadow:
    0 0 25px rgba(255, 214, 0, 0.9),
    0 0 50px rgba(255, 214, 0, 0.6),
    0 0 80px rgba(255, 214, 0, 0.4),
    0 0 120px rgba(255, 214, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.5);
}

.lamp-on .lamp-text {
  color: #1A1A1A;
  text-shadow:
    0 0 8px rgba(255, 255, 255, 0.9),
    0 0 15px rgba(255, 255, 255, 0.6);
}

.lamp-on .lamp-accent {
  background: linear-gradient(
    180deg,
    #FFA000 0%,
    #FF8F00 100%
  );
  box-shadow: 0 0 15px rgba(255, 160, 0, 0.5);
}

/* ===== LAMP OFF STATE (Light Mode - Day) ===== */
.lamp-off .lamp-body {
  background: linear-gradient(
    180deg,
    #D4C23A 0%,
    #C4B030 40%,
    #B8A428 70%,
    #A89020 100%
  );
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.25);
}

.lamp-off .lamp-text {
  color: #444444;
  text-shadow: none;
}

.lamp-off .lamp-accent {
  background: linear-gradient(
    180deg,
    #9A8820 0%,
    #8A7818 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* ===== ATTENTION SEEKER FLICKER ANIMATION ===== */

/* Dark Mode Flicker - Light dims/turns off momentarily */
.lamp-on.is-flickering .lamp-body {
  animation: flicker-dark 0.5s ease-in-out;
}

.lamp-on.is-flickering .lamp-text {
  animation: flicker-text-dark 0.5s ease-in-out;
}

@keyframes flicker-dark {
  0%, 100% {
    box-shadow:
      0 0 25px rgba(255, 214, 0, 0.9),
      0 0 50px rgba(255, 214, 0, 0.6),
      0 0 80px rgba(255, 214, 0, 0.4);
    filter: brightness(1);
  }
  10% {
    box-shadow: 0 0 5px rgba(255, 214, 0, 0.3);
    filter: brightness(0.4);
  }
  20% {
    box-shadow:
      0 0 20px rgba(255, 214, 0, 0.7),
      0 0 40px rgba(255, 214, 0, 0.4);
    filter: brightness(0.9);
  }
  30% {
    box-shadow: 0 0 2px rgba(255, 214, 0, 0.2);
    filter: brightness(0.2);
  }
  40%, 50% {
    box-shadow:
      0 0 30px rgba(255, 214, 0, 0.95),
      0 0 60px rgba(255, 214, 0, 0.7);
    filter: brightness(1.1);
  }
  60% {
    box-shadow: 0 0 8px rgba(255, 214, 0, 0.4);
    filter: brightness(0.5);
  }
  70% {
    box-shadow:
      0 0 25px rgba(255, 214, 0, 0.9),
      0 0 50px rgba(255, 214, 0, 0.6);
    filter: brightness(1);
  }
}

@keyframes flicker-text-dark {
  0%, 100% { opacity: 1; }
  10%, 30% { opacity: 0.3; }
  20%, 50%, 70% { opacity: 1; }
  60% { opacity: 0.5; }
}

/* Light Mode Flicker - Light sparks/flashes briefly */
.lamp-off.is-flickering .lamp-body {
  animation: flicker-light 0.5s ease-in-out;
}

@keyframes flicker-light {
  0%, 100% {
    background: linear-gradient(180deg, #D4C23A 0%, #B8A428 70%, #A89020 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  15%, 35% {
    background: linear-gradient(180deg, #FFE082 0%, #FFD54F 50%, #FFCA28 100%);
    box-shadow:
      0 0 20px rgba(255, 214, 0, 0.6),
      0 0 40px rgba(255, 214, 0, 0.3);
  }
  25% {
    background: linear-gradient(180deg, #D4C23A 0%, #B8A428 70%, #A89020 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  45% {
    background: linear-gradient(180deg, #FFF59D 0%, #FFEE58 50%, #FFD600 100%);
    box-shadow:
      0 0 30px rgba(255, 214, 0, 0.8),
      0 0 60px rgba(255, 214, 0, 0.4);
  }
  55%, 75% {
    background: linear-gradient(180deg, #D4C23A 0%, #B8A428 70%, #A89020 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  65% {
    background: linear-gradient(180deg, #FFE082 0%, #FFD54F 100%);
    box-shadow: 0 0 15px rgba(255, 214, 0, 0.5);
  }
}

/* ===== Responsive adjustments ===== */
@media (max-width: 640px) {
  .taxi-lamp-container {
    bottom: 1.5rem;
  }

  .lamp-body {
    width: 110px;
    height: 42px;
  }

  .lamp-text {
    font-size: 1rem;
    letter-spacing: 0.2em;
  }

  .lamp-accent {
    width: 100px;
    height: 5px;
  }
}
</style>
