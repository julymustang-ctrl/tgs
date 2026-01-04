<template>
  <div class="absolute -inset-32 z-20 pointer-events-none overflow-visible">
    <!-- Ambient Glow Background -->
    <div class="absolute inset-0 opacity-30 dark:opacity-50">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-taxi-yellow/30 rounded-full blur-[80px] animate-ambient-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-taxi-yellow/20 rounded-full blur-[60px] animate-ambient-pulse-delayed"></div>
    </div>

    <!-- SVG Organic Light Trails -->
    <svg 
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 500 700"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <!-- Light Mode: Track/Wire Path (subtle gray) -->
        <linearGradient id="trackGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E5E7EB" stop-opacity="0.6" />
          <stop offset="50%" stop-color="#D1D5DB" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#E5E7EB" stop-opacity="0.6" />
        </linearGradient>

        <!-- Flowing Gradient for Light Trails -->
        <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="transparent" />
          <stop offset="30%" :stop-color="isDark ? '#FFC107' : '#FFA000'" stop-opacity="0.9" />
          <stop offset="50%" :stop-color="isDark ? '#FFFFFF' : '#FF8F00'" stop-opacity="1" />
          <stop offset="70%" :stop-color="isDark ? '#FFC107' : '#FFA000'" stop-opacity="0.9" />
          <stop offset="100%" stop-color="transparent" />
          <!-- Animate the gradient - slowed by 20% -->
          <animateTransform 
            attributeName="gradientTransform" 
            type="translate" 
            values="-1;1;-1" 
            dur="3.6s" 
            repeatCount="indefinite"
          />
        </linearGradient>

        <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="transparent" />
          <stop offset="40%" :stop-color="isDark ? '#FFD54F' : '#FF8F00'" stop-opacity="0.8" />
          <stop offset="60%" :stop-color="isDark ? '#FFF8E1' : '#FFB300'" stop-opacity="1" />
          <stop offset="100%" stop-color="transparent" />
          <animateTransform 
            attributeName="gradientTransform" 
            type="translate" 
            values="1;-1;1" 
            dur="4.8s" 
            repeatCount="indefinite"
          />
        </linearGradient>

        <!-- Glow Filter (Dark Mode) -->
        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <!-- Light Mode Filter: Subtle shadow for contrast -->
        <filter id="lightModeFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000" flood-opacity="0.15"/>
        </filter>

        <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Organic Light Trail 1 - Top Left Spiral -->
      <g :filter="isDark ? 'url(#glowFilter)' : 'url(#lightModeFilter)'">
        <!-- Light Mode: Visible track/wire background -->
        <path
          v-if="!isDark"
          class="track-path"
          d="M 250 320 
             C 180 280, 100 220, 80 160
             C 60 100, 90 60, 120 80
             C 150 100, 130 140, 100 120"
          fill="none"
          stroke="url(#trackGradientLight)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          class="light-trail trail-1"
          d="M 250 320 
             C 180 280, 100 220, 80 160
             C 60 100, 90 60, 120 80
             C 150 100, 130 140, 100 120"
          fill="none"
          stroke="url(#flowGradient1)"
          :stroke-width="isDark ? 3 : 4"
          stroke-linecap="round"
        />
      </g>

      <!-- Organic Light Trail 2 - Top Right Curve -->
      <g :filter="isDark ? 'url(#glowFilter)' : 'url(#lightModeFilter)'">
        <!-- Light Mode: Visible track/wire background -->
        <path
          v-if="!isDark"
          class="track-path"
          d="M 250 320 
             C 320 260, 380 200, 420 140
             C 460 80, 440 50, 400 60
             C 360 70, 380 110, 410 100"
          fill="none"
          stroke="url(#trackGradientLight)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          class="light-trail trail-2"
          d="M 250 320 
             C 320 260, 380 200, 420 140
             C 460 80, 440 50, 400 60
             C 360 70, 380 110, 410 100"
          fill="none"
          stroke="url(#flowGradient2)"
          :stroke-width="isDark ? 3 : 4"
          stroke-linecap="round"
        />
      </g>

      <!-- Organic Light Trail 3 - Bottom Left Swirl -->
      <g :filter="isDark ? 'url(#glowFilter)' : 'url(#lightModeFilter)'">
        <!-- Light Mode: Visible track/wire background -->
        <path
          v-if="!isDark"
          class="track-path"
          d="M 250 400 
             C 180 440, 100 500, 70 560
             C 40 620, 60 650, 100 640
             C 140 630, 120 590, 90 600"
          fill="none"
          stroke="url(#trackGradientLight)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          class="light-trail trail-3"
          d="M 250 400 
             C 180 440, 100 500, 70 560
             C 40 620, 60 650, 100 640
             C 140 630, 120 590, 90 600"
          fill="none"
          stroke="url(#flowGradient1)"
          :stroke-width="isDark ? 3 : 4"
          stroke-linecap="round"
        />
      </g>

      <!-- Organic Light Trail 4 - Bottom Right Flow -->
      <g :filter="isDark ? 'url(#glowFilter)' : 'url(#lightModeFilter)'">
        <!-- Light Mode: Visible track/wire background -->
        <path
          v-if="!isDark"
          class="track-path"
          d="M 250 400 
             C 330 450, 400 520, 430 580
             C 460 640, 440 670, 400 660
             C 360 650, 380 610, 410 620"
          fill="none"
          stroke="url(#trackGradientLight)"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          class="light-trail trail-4"
          d="M 250 400 
             C 330 450, 400 520, 430 580
             C 460 640, 440 670, 400 660
             C 360 650, 380 610, 410 620"
          fill="none"
          stroke="url(#flowGradient2)"
          :stroke-width="isDark ? 3 : 4"
          stroke-linecap="round"
        />
      </g>
    </svg>

    <!-- Floating Habitat Bubbles -->
    
    <!-- Bubble 1: Ekonomik (Top Left) -->
    <div 
      class="absolute top-[12%] left-[8%] bubble-habitat float-1 pointer-events-auto"
      @mouseenter="activeBubble = 'ekonomik'"
      @mouseleave="activeBubble = null"
    >
      <div 
        class="glass-bubble gold-glow"
        :class="{ 'bubble-active': activeBubble === 'ekonomik' }"
      >
        <div class="icon-container">
          <WalletIcon class="w-5 h-5 icon-wallet" />
        </div>
        <span class="bubble-text">Ekonomik</span>
      </div>
    </div>

    <!-- Bubble 2: Rahat (Top Right) -->
    <div 
      class="absolute top-[8%] right-[10%] bubble-habitat float-2 pointer-events-auto"
      @mouseenter="activeBubble = 'rahat'"
      @mouseleave="activeBubble = null"
    >
      <div 
        class="glass-bubble purple-glow"
        :class="{ 'bubble-active': activeBubble === 'rahat' }"
      >
        <div class="icon-container">
          <StarIcon class="w-5 h-5 icon-star" />
        </div>
        <span class="bubble-text">Rahat</span>
      </div>
    </div>

    <!-- Bubble 3: Güvenli (Bottom Left) -->
    <div 
      class="absolute bottom-[18%] left-[5%] bubble-habitat float-3 pointer-events-auto"
      @mouseenter="activeBubble = 'guvenli'"
      @mouseleave="activeBubble = null"
    >
      <div 
        class="glass-bubble blue-glow"
        :class="{ 'bubble-active': activeBubble === 'guvenli' }"
      >
        <div class="icon-container">
          <ShieldIcon class="w-5 h-5 icon-shield" />
        </div>
        <span class="bubble-text">Güvenli</span>
      </div>
    </div>

    <!-- Bubble 4: Çevre Dostu (Bottom Right) -->
    <div 
      class="absolute bottom-[14%] right-[8%] bubble-habitat float-4 pointer-events-auto"
      @mouseenter="activeBubble = 'cevre'"
      @mouseleave="activeBubble = null"
    >
      <div 
        class="glass-bubble green-glow"
        :class="{ 'bubble-active': activeBubble === 'cevre' }"
      >
        <div class="icon-container">
          <LeafIcon class="w-5 h-5 icon-leaf" />
        </div>
        <span class="bubble-text">Çevre Dostu</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Wallet as WalletIcon, Star as StarIcon, Shield as ShieldIcon, Leaf as LeafIcon } from 'lucide-vue-next'

const { isDark } = useTheme()
const activeBubble = ref<string | null>(null)
</script>

<style scoped>
/* ===== AMBIENT BACKGROUND PULSES ===== */
@keyframes ambient-pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.5; }
}

.animate-ambient-pulse {
  animation: ambient-pulse 6s ease-in-out infinite;
}

.animate-ambient-pulse-delayed {
  animation: ambient-pulse 6s ease-in-out infinite 3s;
}

/* ===== ORGANIC LIGHT TRAILS ===== */
.light-trail {
  stroke-dasharray: 20 10 5 10;
  /* Slowed by 20%: 2s -> 2.4s, 8s -> 9.6s */
  animation: dash-flow 2.4s linear infinite, trail-morph 9.6s ease-in-out infinite;
  opacity: 0.9;
}

/* Light Mode: Higher opacity for visibility */
:root:not(.dark) .light-trail {
  opacity: 1;
}

/* Track/Wire path styling for Light Mode */
.track-path {
  opacity: 0.7;
}

.trail-1 { animation-delay: 0s, 0s; }
.trail-2 { animation-delay: 0.5s, 2s; }
.trail-3 { animation-delay: 1s, 4s; }
.trail-4 { animation-delay: 1.5s, 6s; }

@keyframes dash-flow {
  to { stroke-dashoffset: -50; }
}

@keyframes trail-morph {
  0%, 100% { 
    transform: translateX(0) translateY(0);
    filter: blur(0px);
  }
  25% { 
    transform: translateX(3px) translateY(-2px);
    filter: blur(0.5px);
  }
  50% { 
    transform: translateX(-2px) translateY(3px);
    filter: blur(1px);
  }
  75% { 
    transform: translateX(2px) translateY(1px);
    filter: blur(0.5px);
  }
}

/* ===== FLOATING HABITAT BUBBLES ===== */
.bubble-habitat {
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Independent Float Animations - Slowed by 20% for calm underwater drift */
.float-1 {
  animation: float-organic-1 6s ease-in-out infinite;
}

.float-2 {
  animation: float-organic-2 7.2s ease-in-out infinite 0.5s;
}

.float-3 {
  animation: float-organic-3 6.6s ease-in-out infinite 1s;
}

.float-4 {
  animation: float-organic-4 7.8s ease-in-out infinite 1.5s;
}

/* More pronounced bobbing (increased Y translation) for calm underwater drift feel */
@keyframes float-organic-1 {
  0%, 100% { transform: translateY(0) translateX(0) rotate(-2deg); }
  25% { transform: translateY(-18px) translateX(6px) rotate(1deg); }
  50% { transform: translateY(-8px) translateX(-4px) rotate(-1deg); }
  75% { transform: translateY(-22px) translateX(3px) rotate(2deg); }
}

@keyframes float-organic-2 {
  0%, 100% { transform: translateY(0) translateX(0) rotate(2deg); }
  33% { transform: translateY(-16px) translateX(-5px) rotate(-2deg); }
  66% { transform: translateY(-26px) translateX(4px) rotate(1deg); }
}

@keyframes float-organic-3 {
  0%, 100% { transform: translateY(0) translateX(0) rotate(1deg); }
  20% { transform: translateY(-12px) translateX(8px) rotate(-1deg); }
  40% { transform: translateY(-20px) translateX(-3px) rotate(2deg); }
  60% { transform: translateY(-10px) translateX(5px) rotate(-2deg); }
  80% { transform: translateY(-18px) translateX(-4px) rotate(1deg); }
}

@keyframes float-organic-4 {
  0%, 100% { transform: translateY(0) translateX(0) rotate(-1deg); }
  50% { transform: translateY(-24px) translateX(-6px) rotate(3deg); }
}

/* ===== GLASS BUBBLE STYLE ===== */
/* Light Mode: Clean, High-Contrast, Material Design style */
.glass-bubble {
  @apply flex items-center gap-3 px-5 py-3 rounded-2xl;
  @apply text-sm font-semibold;
  /* Light Mode: Solid white background with high opacity */
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* Light Mode: Thin gray border for edge definition */
  border: 1px solid #E5E7EB;
  /* Light Mode: Strong, crisp shadow for elevation */
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}

/* Dark Mode: Keep the neon/glowing style */
.dark .glass-bubble {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 193, 7, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 193, 7, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 20px rgba(255, 193, 7, 0.1);
}

/* Light Mode: Deep black text for maximum contrast */
.bubble-text {
  color: #1A1A1A;
  font-weight: 600;
  text-shadow: none;
}

/* Dark Mode: White text with subtle shadow */
.dark .bubble-text {
  color: #FFFFFF;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Colored Glows - Light Mode: Use subtle tinted shadows, Dark Mode: Full glow effect */
.gold-glow { 
  --glow-color: rgba(255, 193, 7, 0.15);
  --glow-color-dark: rgba(255, 193, 7, 0.4);
}

.purple-glow { 
  --glow-color: rgba(156, 39, 176, 0.12);
  --glow-color-dark: rgba(156, 39, 176, 0.3);
}

.blue-glow { 
  --glow-color: rgba(33, 150, 243, 0.12);
  --glow-color-dark: rgba(33, 150, 243, 0.3);
}

.green-glow { 
  --glow-color: rgba(76, 175, 80, 0.12);
  --glow-color-dark: rgba(76, 175, 80, 0.3);
}

/* Dark Mode: Apply colored glows */
.dark .gold-glow,
.dark .purple-glow,
.dark .blue-glow,
.dark .green-glow {
  box-shadow: 0 8px 32px var(--glow-color-dark), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px var(--glow-color-dark);
}

/* Hover Active State */
.bubble-active {
  transform: scale(1.1) translateY(-5px) rotateX(5deg);
  /* Light Mode: Enhanced shadow elevation */
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.1),
    0 2px 6px rgba(0, 0, 0, 0.08);
  border-color: #D1D5DB;
}

/* Dark Mode Active: Keep glowing effect */
.dark .bubble-active {
  box-shadow: 
    0 15px 50px var(--glow-color-dark),
    0 0 30px var(--glow-color-dark),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 193, 7, 0.6);
}

/* ===== ICON CONTAINER ===== */
.icon-container {
  @apply flex items-center justify-center w-8 h-8 rounded-full;
  /* Light Mode: Dark background with subtle styling */
  background: linear-gradient(135deg, #374151, #1F2937);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.icon-container svg {
  /* Light Mode: White icons for contrast on dark background */
  @apply text-white;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

/* Dark Mode: Yellow themed icons */
.dark .icon-container {
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.3), rgba(255, 193, 7, 0.1));
  box-shadow: 0 2px 8px rgba(255, 193, 7, 0.2);
}

.dark .icon-container svg {
  @apply text-taxi-yellow;
  filter: drop-shadow(0 0 3px rgba(255, 193, 7, 0.5));
}

/* ===== ICON MICRO-ANIMATIONS ===== */
.icon-wallet {
  animation: wallet-shine 3s ease-in-out infinite;
}

@keyframes wallet-shine {
  0%, 100% { filter: drop-shadow(0 0 3px rgba(255, 193, 7, 0.5)); }
  50% { filter: drop-shadow(0 0 8px rgba(255, 193, 7, 0.9)) brightness(1.2); }
}

.icon-star {
  animation: star-pulse 2s ease-in-out infinite;
}

@keyframes star-pulse {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(15deg); }
}

.icon-shield {
  animation: shield-protect 2.5s ease-in-out infinite;
}

@keyframes shield-protect {
  0%, 100% { 
    transform: scale(1);
    filter: drop-shadow(0 0 3px rgba(33, 150, 243, 0.5));
  }
  50% { 
    transform: scale(1.05);
    filter: drop-shadow(0 0 12px rgba(33, 150, 243, 0.8));
  }
}

.icon-leaf {
  animation: leaf-sway 3s ease-in-out infinite;
  transform-origin: bottom center;
}

@keyframes leaf-sway {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}
</style>
