<template>
  <div 
    ref="logoContainer"
    class="tagsi-animated-logo"
    :class="{ 'reduced-motion': prefersReducedMotion }"
  >
    <!-- Glow Background -->
    <div ref="glowBg" class="logo-glow"></div>
    
    <!-- Main SVG -->
    <svg 
      ref="logoSvg"
      viewBox="0 0 200 60" 
      class="logo-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Shimmer gradient for arrow -->
        <linearGradient id="arrowShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FBBC00" />
          <stop offset="40%" stop-color="#FBBC00" />
          <stop offset="50%" stop-color="#FFFFFF" />
          <stop offset="60%" stop-color="#FBBC00" />
          <stop offset="100%" stop-color="#FBBC00" />
        </linearGradient>
      </defs>
      
      <!-- Letter Groups -->
      <g id="letters">
        <!-- T -->
        <text 
          ref="letterT"
          x="10" y="45" 
          class="letter letter-yellow"
          font-family="'Outfit', sans-serif"
          font-weight="700"
          font-size="42"
        >T</text>
        
        <!-- a -->
        <text 
          ref="letterA"
          x="38" y="45" 
          class="letter letter-yellow"
          font-family="'Outfit', sans-serif"
          font-weight="700"
          font-size="42"
        >a</text>
        
        <!-- g -->
        <text 
          ref="letterG"
          x="68" y="45" 
          class="letter letter-yellow"
          font-family="'Outfit', sans-serif"
          font-weight="700"
          font-size="42"
        >g</text>
        
        <!-- s -->
        <text 
          ref="letterS"
          x="100" y="45" 
          class="letter letter-white"
          font-family="'Outfit', sans-serif"
          font-weight="700"
          font-size="42"
        >s</text>
        
        <!-- i -->
        <text 
          ref="letterI"
          x="124" y="45" 
          class="letter letter-white"
          font-family="'Outfit', sans-serif"
          font-weight="700"
          font-size="42"
        >i</text>
      </g>
      
      <!-- Arrow Icon -->
      <g ref="arrowGroup" id="arrow-icon" transform="translate(150, 15)">
        <path 
          ref="arrowPath"
          class="arrow-path"
          d="M20 5 L30 15 L25 15 L25 30 L15 30 L15 15 L10 15 Z"
          fill="url(#arrowShimmer)"
        />
        <!-- Arrow glow circle -->
        <circle 
          ref="arrowGlow"
          cx="20" cy="17" r="18" 
          fill="none" 
          stroke="#FBBC00" 
          stroke-width="1"
          opacity="0.3"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const logoContainer = ref<HTMLElement | null>(null)
const logoSvg = ref<SVGSVGElement | null>(null)
const glowBg = ref<HTMLElement | null>(null)
const letterT = ref<SVGTextElement | null>(null)
const letterA = ref<SVGTextElement | null>(null)
const letterG = ref<SVGTextElement | null>(null)
const letterS = ref<SVGTextElement | null>(null)
const letterI = ref<SVGTextElement | null>(null)
const arrowGroup = ref<SVGGElement | null>(null)
const arrowPath = ref<SVGPathElement | null>(null)
const arrowGlow = ref<SVGCircleElement | null>(null)

// Reduced motion preference
const prefersReducedMotion = ref(false)

// Animation timeline
let mainTimeline: gsap.core.Timeline | null = null
let isVisible = ref(true)

onMounted(() => {
  // Check reduced motion preference
  if (typeof window !== 'undefined') {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  
  if (prefersReducedMotion.value) return
  
  // Create main animation timeline
  createAnimations()
  
  // Setup Intersection Observer for viewport pause
  setupIntersectionObserver()
})

onUnmounted(() => {
  if (mainTimeline) {
    mainTimeline.kill()
  }
})

const createAnimations = () => {
  const letters = [letterT.value, letterA.value, letterG.value, letterS.value, letterI.value]
  
  // Main Timeline - 10 second loop
  mainTimeline = gsap.timeline({ 
    repeat: -1,
    paused: false
  })
  
  // === PHASE 1: Letter Wave Animation (0-3s) ===
  letters.forEach((letter, index) => {
    if (!letter) return
    
    mainTimeline!.to(letter, {
      y: -4,
      duration: 0.4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1
    }, index * 0.12) // Staggered start
  })
  
  // === PHASE 2: Arrow Rotation & Shimmer (2-6s) ===
  // Arrow clockwise rotation
  mainTimeline!.to(arrowGroup.value, {
    rotation: 360,
    transformOrigin: 'center center',
    duration: 2,
    ease: 'power1.inOut'
  }, 2)
  
  // Arrow shimmer effect (gradient animation via CSS)
  mainTimeline!.to(arrowPath.value, {
    opacity: 0.3,
    duration: 0.3,
    ease: 'power2.in'
  }, 3)
  
  mainTimeline!.to(arrowPath.value, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out'
  }, 3.3)
  
  // Arrow glow pulse
  mainTimeline!.to(arrowGlow.value, {
    scale: 1.3,
    opacity: 0.6,
    duration: 0.5,
    ease: 'power2.out',
    yoyo: true,
    repeat: 1
  }, 2.5)
  
  // === PHASE 3: Color Cycling - Scoreboard Effect (4-7s) ===
  const yellowLetters = [letterT.value, letterA.value, letterG.value]
  const whiteLetters = [letterS.value, letterI.value]
  
  // Yellow letters flash to white
  yellowLetters.forEach((letter, index) => {
    if (!letter) return
    
    mainTimeline!.to(letter, {
      fill: '#FFFFFF',
      duration: 0.15,
      ease: 'steps(1)'
    }, 4 + index * 0.1)
    
    mainTimeline!.to(letter, {
      fill: '#FBBC00',
      duration: 0.15,
      ease: 'steps(1)'
    }, 4.3 + index * 0.1)
  })
  
  // White letters flash to yellow
  whiteLetters.forEach((letter, index) => {
    if (!letter) return
    
    mainTimeline!.to(letter, {
      fill: '#FBBC00',
      duration: 0.15,
      ease: 'steps(1)'
    }, 4.5 + index * 0.1)
    
    mainTimeline!.to(letter, {
      fill: '#FFFFFF',
      duration: 0.15,
      ease: 'steps(1)'
    }, 4.8 + index * 0.1)
  })
  
  // === PHASE 4: Overall Pulse Glow (6-8s) ===
  mainTimeline!.to(glowBg.value, {
    scale: 1.15,
    opacity: 0.8,
    duration: 0.8,
    ease: 'power2.out'
  }, 6)
  
  mainTimeline!.to(glowBg.value, {
    scale: 1,
    opacity: 0.4,
    duration: 0.8,
    ease: 'power2.in'
  }, 6.8)
  
  // === PHASE 5: Second Wave (7-9s) ===
  letters.forEach((letter, index) => {
    if (!letter) return
    
    mainTimeline!.to(letter, {
      y: -3,
      duration: 0.3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1
    }, 7 + index * 0.08)
  })
  
  // === PHASE 6: Arrow Returns (8-10s) ===
  mainTimeline!.to(arrowGroup.value, {
    rotation: 720, // Another full rotation
    duration: 1.5,
    ease: 'power1.inOut'
  }, 8)
  
  // Final shimmer
  mainTimeline!.to(arrowPath.value, {
    filter: 'brightness(1.5)',
    duration: 0.3,
    yoyo: true,
    repeat: 1
  }, 9)
}

const setupIntersectionObserver = () => {
  if (typeof window === 'undefined' || !logoContainer.value) return
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting
        
        if (mainTimeline) {
          if (entry.isIntersecting) {
            mainTimeline.play()
          } else {
            mainTimeline.pause()
          }
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

.logo-glow {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(251, 188, 0, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.4;
  pointer-events: none;
}

.logo-svg {
  width: 80%;
  height: auto;
  position: relative;
  z-index: 1;
}

.letter {
  transition: fill 0.1s ease;
}

.letter-yellow {
  fill: #FBBC00;
}

.letter-white {
  fill: #FFFFFF;
}

.arrow-path {
  filter: drop-shadow(0 0 8px rgba(251, 188, 0, 0.6));
}

/* Reduced Motion - Static Logo */
.reduced-motion .logo-glow {
  animation: none;
}

.reduced-motion .letter,
.reduced-motion .arrow-path {
  animation: none;
  transform: none !important;
}

/* Arrow shimmer animation via CSS (backup) */
@keyframes shimmerGradient {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
