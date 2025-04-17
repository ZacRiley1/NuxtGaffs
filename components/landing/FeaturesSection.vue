<template>
  <section class="snap-start px-6 py-24 bg-muted text-foreground">
    <div class="max-w-6xl mx-auto text-center">
      <div
        v-motion
        :initial="itemVariants.initial"
        :visible="itemVariants.visible"
        :variants="itemVariants"
        :duration="700"
      >
        <h2 class="text-4xl font-bold mb-6">Why HallSwap?</h2>
      </div>
      <div
        v-motion
        :initial="itemVariants.initial"
        :visible="itemVariants.visible"
        :variants="itemVariants"
        :delay="0.2"
        :duration="700"
      >
        <p class="text-muted-foreground mb-12">
          Everything you need to find or swap your student accommodation with
          confidence.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-motion
          :initial="itemVariants.initial"
          :visible="itemVariants.visible"
          :variants="itemVariants"
          :delay="0.3"
          :duration="800"
          class="p-6 bg-background rounded-2xl shadow"
        >
          <h3 class="text-xl font-semibold mb-2">Instant Search</h3>
          <p class="text-sm text-muted-foreground">
            Powerful filters to help you find a place that fits your needs and
            budget.
          </p>
        </div>
        <div
          v-motion
          :initial="itemVariants.initial"
          :visible="itemVariants.visible"
          :variants="itemVariants"
          :delay="0.6"
          :duration="800"
          class="p-6 bg-background rounded-2xl shadow"
        >
          <h3 class="text-xl font-semibold mb-2">Trust & Safety</h3>
          <p class="text-sm text-muted-foreground">
            Verified listings, user reviews, and smart matching to ensure peace
            of mind.
          </p>
        </div>
        <div
          v-motion
          :initial="itemVariants.initial"
          :visible="itemVariants.visible"
          :variants="itemVariants"
          :delay="0.9"
          :duration="800"
          class="p-6 bg-background rounded-2xl shadow"
        >
          <h3 class="text-xl font-semibold mb-2">Seamless Swapping</h3>
          <p class="text-sm text-muted-foreground">
            Looking to switch rooms? Use our swap feature to find a perfect
            trade.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const itemVariants = {
  initial: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};
</script>
