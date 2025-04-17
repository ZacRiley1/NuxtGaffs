<template>
  <section
    class="snap-start bg-primary text-primary-foreground py-20 px-6 text-center"
  >
    <div class="max-w-4xl mx-auto space-y-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="700"
      >
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight">
          Find Your Perfect Student Home
        </h2>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :delay="0.2"
        :duration="700"
      >
        <p class="text-lg md:text-xl text-primary-foreground/80">
          Browse, match, and swap student halls with ease. It’s never been this
          simple.
        </p>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :visible="{ opacity: 1, scale: 1 }"
        :delay="0.3"
        :duration="700"
        class="flex justify-center gap-4 flex-wrap"
      >
        <Button size="lg" class="bg-background text-primary hover:bg-accent"
          >Get Started</Button
        >
        <Button
          size="lg"
          variant="outline"
          class="border-background text-primary dark:text-background hover:bg-primary/10 hover:text-background"
          >Learn More</Button
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>
