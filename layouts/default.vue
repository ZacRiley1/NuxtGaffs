<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>
<template>
  <div class="min-h-screen bg-background text-foreground transition-colors">
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
