<template>
  <div class="flex items-center gap-1">
    <img 
      v-if="useImage" 
      src="/logo.png" 
      :alt="'Tagsi Logo'" 
      :class="sizeClass"
    />
    <svg 
      v-else
      :class="sizeClass"
      viewBox="0 0 120 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Tag text in yellow -->
      <text 
        x="0" 
        y="30" 
        class="font-display font-bold"
        :font-size="fontSize"
        fill="#FFD600"
      >Tag</text>
      
      <!-- si text in white -->
      <text 
        :x="tagWidth" 
        y="30" 
        class="font-display font-bold"
        :font-size="fontSize"
        fill="#FFFFFF"
      >si</text>
      
      <!-- Curved Arrow (Brand Motif) -->
      <path 
        :d="arrowPath"
        stroke="#FFD600" 
        stroke-width="2.5" 
        stroke-linecap="round"
        fill="none"
      />
      <path 
        :d="arrowHeadPath"
        fill="#FFD600"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  useImage?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  useImage: true
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'h-6'
    case 'md': return 'h-8'
    case 'lg': return 'h-10'
    case 'xl': return 'h-14'
    default: return 'h-8'
  }
})

const fontSize = computed(() => {
  switch (props.size) {
    case 'sm': return 20
    case 'md': return 28
    case 'lg': return 36
    case 'xl': return 44
    default: return 28
  }
})

const tagWidth = computed(() => {
  switch (props.size) {
    case 'sm': return 36
    case 'md': return 50
    case 'lg': return 65
    case 'xl': return 80
    default: return 50
  }
})

const arrowPath = computed(() => {
  const scale = props.size === 'xl' ? 1.3 : props.size === 'lg' ? 1.1 : props.size === 'sm' ? 0.7 : 1
  const baseX = 90 * scale
  const baseY = 15
  return `M ${baseX} ${baseY + 10} Q ${baseX + 15} ${baseY - 5} ${baseX + 25} ${baseY + 8}`
})

const arrowHeadPath = computed(() => {
  const scale = props.size === 'xl' ? 1.3 : props.size === 'lg' ? 1.1 : props.size === 'sm' ? 0.7 : 1
  const baseX = 90 * scale + 25
  const baseY = 23
  return `M ${baseX - 2} ${baseY - 5} L ${baseX + 4} ${baseY} L ${baseX - 2} ${baseY + 5} Z`
})
</script>
