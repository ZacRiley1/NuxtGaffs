<template>
  <header class="inset-0 flex justify-between p-4 w-100vw h-15 z-30 fixed">
    <NuxtLink to="/" class="flex align-middle gap-1">
      <NuxtImg src="/Logo_img.svg" width="20px" />
      <!-- <h1 class="text-lg inline align-middle font-semibold">
        HallSwap
      </h1> -->
    </NuxtLink>
    <nav class="flex align-middle justify-center gap-3">
      <ColourSwitcher />
      <NuxtLink to="/login" class="flex align-middle gap-1">
        <Avatar class="h-8 w-8 rounded-2xl">
          <AvatarImage :src="user.avatar" :alt="user.name" />
          <AvatarFallback class="rounded-lg"> IR </AvatarFallback>
        </Avatar>
      </NuxtLink>
    </nav>
  </header>
</template>
<script setup lang="ts">
const user = {
  avatar: 'test',
  name: 'Zac',
};
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ColourSwitcher from '@/components/ColourSwitcher.vue';
</script>
