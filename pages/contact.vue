<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const colorMode = useColorMode();
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1500); // simulate loading for 1.5s
});
</script>

<template>
  <section
    class="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16"
  >
    <div class="text-center max-w-2xl w-full">
      <!-- Heading -->
      <div class="mb-6">
        <Skeleton
          v-if="loading"
          class="h-12 md:h-16 w-full max-w-md mx-auto rounded-xl"
        />
        <h1 v-else class="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
          🏠
        </h1>
      </div>
    </div>
  </section>
</template>
