<template>
  <span class="ml-2 relative wave-overlay text-primary">{{ text }}</span>
</template>
<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
  layers: { type: Number, default: 3 },
});
</script>
<style scoped>
.wave-overlay {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.4) 40%,
    rgba(255, 255, 255, 0.2) 60%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: waveSlide 3s ease-in-out infinite;
  opacity: 0.2;
}

@keyframes waveSlide {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
