<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
const colorMode = useColorMode()
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500) // simulate loading for 1.5s
})
</script>

<template>
  <section class="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
    <div class="text-center max-w-2xl w-full">
      <!-- Heading -->
      <div class="mb-6">
        <Skeleton v-if="loading" class="h-12 md:h-16 w-full max-w-md mx-auto rounded-xl" />
        <h1
          v-else
          class="text-4xl md:text-6xl font-bold mb-2 tracking-tight"
        >
          Nuxt, Tailwind & <span class="text-emerald-600">shadcn-vue</span>
        </h1>
      </div>

      <!-- Subtext -->
      <div class="mb-8">
        <Skeleton v-if="loading" class="h-5 w-full max-w-sm mx-auto rounded-md" />
        <p v-else class="text-lg text-muted-foreground">
          Nuxt 3 Blank Template using the latest styling and UI component tech.
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex justify-center gap-4 flex-wrap">
        <template v-if="loading">
          <Skeleton class="h-10 w-32 rounded-md" />
          <Skeleton class="h-10 w-32 rounded-md" />
        </template>
        <template v-else>
          <NuxtLink to="/dashboard">
            <Button>
              Dashboard
            </Button>
          </NuxtLink>
          <NuxtLink to="/auth">
            <Button variant="outline">
              Login
            </Button>
          </NuxtLink>
         
        </template>
      </div>
    </div>
  </section>
</template>