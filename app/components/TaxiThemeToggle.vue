<template>
  <button
    @click="toggleTheme"
    class="taxi-lamp-container"
    :class="{ 'lamp-on': isDark, 'lamp-off': !isDark }"
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
const { isDark, isFlickering, toggleTheme } = useTheme()
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
  transition: transform 0.3s ease;
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

/* === LAMP ON STATE (Dark Mode - Night) === */
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

/* === LAMP OFF STATE (Light Mode - Day) === */
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

/* Responsive adjustments */
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
