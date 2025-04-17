<template>
  <section
    class="snap-start relative min-h-screen flex items-center justify-center text-center px-6"
    ref="heroRef"
  >
    <NuxtImg
      src="/landing-splash.jpg"
      alt="Student halls"
      class="absolute inset-0 w-full h-full object-cover z-0"
      preload
    />

    <div class="absolute inset-0 bg-black/30 z-10"></div>
    <div class="max-w-2xl z-20">
      <div
        v-motion
        :initial="{ opacity: 0, y: -200 }"
        :visible="{ opacity: 1, y: 0, scale: 1 }"
        :duration="700"
      >
        <h1
          class="text-4xl md:text-6xl font-bold tracking-tight text-left text-white leading-tight"
        >
          <span class="block">No Hassle. No Stress.</span>
          <span class="block relative">
            Just <span class="text-primary">Hall Swap</span>.
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>
