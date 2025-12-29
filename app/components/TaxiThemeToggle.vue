<template>
  <button
    @click="toggleTheme"
    class="taxi-lamp-toggle"
    :class="{
      'lamp-on': isDark,
      'lamp-off': !isDark,
      'flickering': isFlickering
    }"
    :aria-label="isDark ? 'Gündüz moduna geç' : 'Gece moduna geç'"
  >
    <!-- Lamp Base (3D mount) -->
    <div class="lamp-base"></div>
    
    <!-- Main Lamp Body -->
    <div class="lamp-body">
      <span class="lamp-text">TAGSİ</span>
    </div>
    
    <!-- Lamp Top -->
    <div class="lamp-top"></div>
  </button>
</template>

<script setup lang="ts">
const { isDark, isFlickering, toggleTheme } = useTheme()
</script>

<style scoped>
.taxi-lamp-toggle {
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
  transition: transform 0.3s ease;
}

.taxi-lamp-toggle:hover {
  transform: translateX(-50%) scale(1.05);
}

.taxi-lamp-toggle:active {
  transform: translateX(-50%) scale(0.98);
}

/* Base mount - the bottom dark part */
.lamp-base {
  width: 100px;
  height: 12px;
  background: linear-gradient(to bottom, #2a2a2a 0%, #1a1a1a 100%);
  border-radius: 0 0 8px 8px;
  position: relative;
  z-index: 1;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Main lamp body - trapezoid shape */
.lamp-body {
  width: 120px;
  height: 45px;
  background: linear-gradient(
    180deg, 
    #FFE44D 0%, 
    #FFD600 30%, 
    #FFC107 70%,
    #FFAB00 100%
  );
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 
    inset 0 2px 4px rgba(255, 255, 255, 0.5),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);
}

/* Lamp text */
.lamp-text {
  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.15em;
  color: #1A1A1A;
  text-shadow: none;
  transition: all 0.3s ease;
  user-select: none;
}

/* Top accent bar */
.lamp-top {
  width: 90px;
  height: 8px;
  background: linear-gradient(to bottom, #FFAB00 0%, #FF8F00 100%);
  border-radius: 8px 8px 0 0;
  position: relative;
  z-index: 3;
  transform: translateY(1px);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
}

/* === LAMP ON STATE (Dark Mode - Night) === */
.lamp-on .lamp-body {
  background: linear-gradient(
    180deg, 
    #FFF59D 0%, 
    #FFEE58 20%,
    #FFD600 50%, 
    #FFC107 80%,
    #FFB300 100%
  );
  box-shadow: 
    0 0 30px rgba(255, 214, 0, 0.8),
    0 0 60px rgba(255, 214, 0, 0.5),
    0 0 100px rgba(255, 214, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.7),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.lamp-on .lamp-text {
  color: #1A1A1A;
  text-shadow: 
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 214, 0, 0.6);
}

.lamp-on .lamp-top {
  background: linear-gradient(to bottom, #FFD600 0%, #FFC107 100%);
  box-shadow: 
    0 0 20px rgba(255, 214, 0, 0.6),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
}

.lamp-on .lamp-base {
  box-shadow: 
    0 0 15px rgba(255, 214, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* === LAMP OFF STATE (Light Mode - Day) === */
.lamp-off .lamp-body {
  background: linear-gradient(
    180deg, 
    #E8D54A 0%, 
    #D4C23A 30%, 
    #C4B030 70%,
    #B8A428 100%
  );
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.lamp-off .lamp-text {
  color: #4A4A4A;
  text-shadow: none;
}

.lamp-off .lamp-top {
  background: linear-gradient(to bottom, #C4B030 0%, #A89020 100%);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);
}

.lamp-off .lamp-base {
  background: linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 100%);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* === FLICKER ANIMATION === */
.flickering .lamp-body {
  animation: flicker 0.4s ease-in-out;
}

.flickering .lamp-text {
  animation: textFlicker 0.4s ease-in-out;
}

@keyframes flicker {
  0% { opacity: 1; }
  10% { opacity: 0.4; }
  20% { opacity: 0.8; }
  30% { opacity: 0.3; }
  40% { opacity: 0.9; }
  50% { opacity: 0.5; }
  60% { opacity: 1; }
  70% { opacity: 0.6; }
  80% { opacity: 0.95; }
  90% { opacity: 0.7; }
  100% { opacity: 1; }
}

@keyframes textFlicker {
  0% { opacity: 1; }
  10% { opacity: 0.3; }
  20% { opacity: 0.7; }
  30% { opacity: 0.2; }
  40% { opacity: 0.8; }
  50% { opacity: 0.4; }
  60% { opacity: 1; }
  70% { opacity: 0.5; }
  80% { opacity: 0.9; }
  90% { opacity: 0.6; }
  100% { opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .taxi-lamp-toggle {
    bottom: 1.5rem;
  }
  
  .lamp-body {
    width: 100px;
    height: 38px;
  }
  
  .lamp-text {
    font-size: 0.95rem;
  }
  
  .lamp-base {
    width: 85px;
    height: 10px;
  }
  
  .lamp-top {
    width: 75px;
    height: 6px;
  }
}
</style>
