<template>
  <div class="absolute -inset-20 z-20 pointer-events-none">
    <!-- SVG Orbit Lines -->
    <svg 
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <!-- Gradient for lines -->
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="isDark ? '#FFC107' : '#1A1A1A'" stop-opacity="0.8" />
          <stop offset="100%" :stop-color="isDark ? '#FFD54F' : '#333333'" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="isDark ? '#FFFFFF' : '#1A1A1A'" stop-opacity="0.6" />
          <stop offset="100%" :stop-color="isDark ? '#FFC107' : '#555555'" stop-opacity="0.2" />
        </linearGradient>
      </defs>

      <!-- Orbit Line 1 - Top Left curve to Ekonomik -->
      <path
        ref="line1"
        class="orbit-line"
        d="M 200 280 Q 80 200 40 120"
        fill="none"
        stroke="url(#lineGradient1)"
        stroke-width="2"
        stroke-linecap="round"
      />

      <!-- Orbit Line 2 - Top Right curve to Rahat -->
      <path
        ref="line2"
        class="orbit-line delay-1"
        d="M 200 280 Q 320 180 360 100"
        fill="none"
        stroke="url(#lineGradient2)"
        stroke-width="2"
        stroke-linecap="round"
      />

      <!-- Orbit Line 3 - Bottom Left curve to Güvenli -->
      <path
        ref="line3"
        class="orbit-line delay-2"
        d="M 200 350 Q 60 420 30 500"
        fill="none"
        stroke="url(#lineGradient1)"
        stroke-width="2"
        stroke-linecap="round"
      />

      <!-- Orbit Line 4 - Bottom Right curve to Çevre Dostu -->
      <path
        ref="line4"
        class="orbit-line delay-3"
        d="M 200 350 Q 340 440 370 520"
        fill="none"
        stroke="url(#lineGradient2)"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>

    <!-- Floating Bubbles -->
    <!-- Bubble 1: Ekonomik (Top Left) -->
    <div 
      class="absolute top-[20%] left-[5%] bubble-float"
      style="animation-delay: 0s;"
    >
      <div class="bubble-pill">
        <WalletIcon class="w-4 h-4 text-taxi-yellow" />
        <span>Ekonomik</span>
      </div>
    </div>

    <!-- Bubble 2: Rahat (Top Right) -->
    <div 
      class="absolute top-[15%] right-[5%] bubble-float"
      style="animation-delay: 0.5s;"
    >
      <div class="bubble-pill">
        <StarIcon class="w-4 h-4 text-taxi-yellow" />
        <span>Rahat</span>
      </div>
    </div>

    <!-- Bubble 3: Güvenli (Bottom Left) -->
    <div 
      class="absolute bottom-[25%] left-[5%] bubble-float"
      style="animation-delay: 1s;"
    >
      <div class="bubble-pill">
        <ShieldIcon class="w-4 h-4 text-taxi-yellow" />
        <span>Güvenli</span>
      </div>
    </div>

    <!-- Bubble 4: Çevre Dostu (Bottom Right) -->
    <div 
      class="absolute bottom-[20%] right-[5%] bubble-float"
      style="animation-delay: 1.5s;"
    >
      <div class="bubble-pill">
        <LeafIcon class="w-4 h-4 text-taxi-yellow" />
        <span>Çevre Dostu</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Wallet as WalletIcon, Star as StarIcon, Shield as ShieldIcon, Leaf as LeafIcon } from 'lucide-vue-next'

const { isDark } = useTheme()
</script>

<style scoped>
/* Dash-draw animation for orbit lines */
.orbit-line {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: dash-draw 2s ease-out forwards, pulse-line 3s ease-in-out infinite 2s;
}

.orbit-line.delay-1 {
  animation-delay: 0.3s, 2.3s;
}

.orbit-line.delay-2 {
  animation-delay: 0.6s, 2.6s;
}

.orbit-line.delay-3 {
  animation-delay: 0.9s, 2.9s;
}

@keyframes dash-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes pulse-line {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Floating bubble animation */
.bubble-float {
  animation: float-bob 3s ease-in-out infinite;
}

@keyframes float-bob {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Glassmorphism pill style */
.bubble-pill {
  @apply flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium;
  @apply bg-white/80 dark:bg-white/10 backdrop-blur-md;
  @apply text-charcoal dark:text-white;
  @apply shadow-lg shadow-black/10 dark:shadow-black/30;
  @apply border border-white/50 dark:border-white/20;
  animation: bubble-appear 0.6s ease-out forwards;
  opacity: 0;
  transform: scale(0.8);
}

.bubble-float:nth-child(2) .bubble-pill { animation-delay: 0.8s; }
.bubble-float:nth-child(3) .bubble-pill { animation-delay: 1.1s; }
.bubble-float:nth-child(4) .bubble-pill { animation-delay: 1.4s; }
.bubble-float:nth-child(5) .bubble-pill { animation-delay: 1.7s; }

@keyframes bubble-appear {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
