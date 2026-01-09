<template>
  <div 
    ref="logoContainer"
    class="tagsi-animated-logo"
    :class="{ 'reduced-motion': prefersReducedMotion }"
  >
    <!-- Glow Background -->
    <div ref="glowBg" class="logo-glow"></div>
    
    <!-- Injected SVG Container -->
    <div 
      ref="svgWrapper" 
      class="svg-wrapper"
      v-html="svgContent"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const logoContainer = ref<HTMLElement | null>(null)
const svgWrapper = ref<HTMLElement | null>(null)
const glowBg = ref<HTMLElement | null>(null)
const svgContent = ref('')

// Reduced motion preference
const prefersReducedMotion = ref(false)

// Animation timeline
let mainTimeline: gsap.core.Timeline | null = null
let isVisible = ref(true)

onMounted(async () => {
  if (typeof window !== 'undefined') {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  
  // Fetch SVG content
  try {
    const response = await fetch('/logo.svg')
    if (response.ok) {
        svgContent.value = await response.text()
        
        // Wait for DOM update then animate
        nextTick(() => {
            if (!prefersReducedMotion.value) {
                createAnimations()
                setupIntersectionObserver()
            }
        })
    } else {
        console.error('Failed to load logo.svg')
    }
  } catch (e) {
    console.error('Error fetching logo.svg', e)
  }
})

onUnmounted(() => {
  if (mainTimeline) {
    mainTimeline.kill()
  }
})

const createAnimations = () => {
  if (!svgWrapper.value) return

  // Select elements by their ID from the injected SVG
  const letterT = svgWrapper.value.querySelector('#t')
  const letterA = svgWrapper.value.querySelector('#a')
  const letterG = svgWrapper.value.querySelector('#g')
  const letterS = svgWrapper.value.querySelector('#s')
  const letterI = svgWrapper.value.querySelector('#i')
  const arrowGroup = svgWrapper.value.querySelector('#arrow')

  // Ensure elements exist
  if (!letterT || !arrowGroup) {
      console.warn('AnimatedLogo: Some SVG elements not found.')
      return
  }

  const letters = [letterT, letterA, letterG, letterS, letterI]

  // Main Timeline - 10 second loop
  mainTimeline = gsap.timeline({ 
    repeat: -1,
    paused: false
  })
  
  // === PHASE 1: Gentle Wave (0-2s) ===
  letters.forEach((letter, index) => {
    if (!letter) return
    mainTimeline!.to(letter, {
      y: -20, // Wave amplitude
      duration: 0.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1,
      transformOrigin: '50% 50%'
    }, index * 0.1)
  })
  
  // === PHASE 2: Arrow Interaction (2-6s) ===
  // Rotate Arrow - Standard GSAP rotation
  mainTimeline!.to(arrowGroup, {
    rotation: 360,
    transformOrigin: 'center center', // GSAP usually handles this well for SVGs
    duration: 1.5,
    ease: 'back.inOut(1.7)' // Fun recoil effect
  }, 2)
  
  // Pulse the whole container
  mainTimeline!.to(logoContainer.value, {
    scale: 1.05,
    duration: 0.4,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: 1
  }, 2.5)

  // === PHASE 3: Brightness Flash (4s) ===
  // Flash letters subtly
  letters.forEach((letter, index) => {
    if(letter) {
        mainTimeline!.to(letter, {
            filter: 'brightness(1.5)',
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        }, 4 + (index * 0.05))
    }
  })

  // === PHASE 4: Arrow "Orbit"/Shake (6-9s) ===
  mainTimeline!.to(arrowGroup, {
    rotation: -15,
    duration: 0.2,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: 3
  }, 6)
  
  // Final idle pause
  mainTimeline!.to({}, { duration: 1 })
}

const setupIntersectionObserver = () => { /* ... existing ... */ 
  if (typeof window === 'undefined' || !logoContainer.value) return
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting
        if (mainTimeline) {
          entry.isIntersecting ? mainTimeline.play() : mainTimeline.pause()
        }
      })
    },
    { threshold: 0.3 }
  )
  
  observer.observe(logoContainer.value)
}
</script>

<style scoped>
.tagsi-animated-logo {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Deep selector to ensure styles apply to injected SVG */
:deep(svg) {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: visible;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(251, 188, 0, 0.25) 0%, transparent 70%);
  filter: blur(25px);
  z-index: 0;
  pointer-events: none;
}

.reduced-motion :deep(*) {
  animation: none !important;
  transform: none !important;
  transition: none !important;
}
</style>
