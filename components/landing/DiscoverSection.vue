<template>
  <section class="py-24 px-6 bg-background text-foreground">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="700"
      >
        <NuxtImg
          src="/discover.jpg"
          alt="Students using app"
          class="rounded-2xl shadow-lg"
        />
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :visible="{ opacity: 1, x: 0 }"
        :delay="0.2"
        :duration="700"
      >
        <h2 class="text-3xl font-semibold mb-4">
          Discover Better Student Living
        </h2>
        <p class="text-muted-foreground mb-6">
          With HallSwap, explore available student accommodations, read real
          reviews, and list your own room with ease.
        </p>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li>✅ Verified Listings</li>
          <li>✅ Built-in Chat & Applications</li>
          <li>✅ Location-based Filtering</li>
        </ul>
      </div>
    </div>
  </section>
</template>
