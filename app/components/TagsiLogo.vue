<template>
  <div class="flex items-center">
    <img 
      src="/logo.svg" 
      alt="Tagsi Logo" 
      :class="sizeClass"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
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
</script>
