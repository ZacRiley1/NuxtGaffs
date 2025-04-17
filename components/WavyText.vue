<template>
  <div class="ml-2 relative">
    <span class="absolute inset-0 text-light wave-text">{{ text }}</span>
    <span class="absolute inset-0 wave-overlay">{{ text }}</span>
  </div>
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
  font-size: 4rem; /* Adjust as needed */
  font-weight: bold;
  color: var(--primary); /* Ensure text color is primary */
  background:
    url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 200 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q25 0 50 20 T100 20 T150 20 T200 20 V40 H0 Z' fill='oklch(0.57 0.2192 6.83' /%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 200 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 25 Q25 5 50 25 T100 25 T150 25 T200 25 V40 H0 Z' fill='oklch(0.57 0.2192 6.83' /%3E%3C/svg%3E"),
    url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 200 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q25 10 50 30 T100 30 T150 30 T200 30 V40 H0 Z' fill='oklch(0.57 0.2192 6.83' /%3E%3C/svg%3E");
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: waveSlide 8s ease-in-out infinite;
  opacity: 1;
}

.wave-text {
  font-size: 4rem; /* Adjust as needed */
  font-weight: bold;
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
