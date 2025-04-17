<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Skeleton } from '@/components/ui/skeleton';
import HeroSection from '@/components/landing/HeroSection.vue';
import FeaturesSection from '@/components/landing/FeaturesSection.vue';
import DiscoverSection from '@/components/landing/DiscoverSection.vue';
import CallToActionSection from '@/components/landing/CallToActionSection.vue';
import FooterSection from '@/components/landing/FooterSection.vue';
</script>

<template>
  <div class="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen">
    <HeroSection />
    <FeaturesSection />
    <DiscoverSection />
    <CallToActionSection />
    <FooterSection />
  </div>
</template>
