<template>
  <div class="w-full max-w-4xl mx-auto mt-6">
    <form
      @submit.prevent="handleSearch"
      class="flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg"
    >
      <!-- Location Input -->
      <div class="relative flex-1">
        <input
          v-model="location"
          type="text"
          id="location"
          class="peer w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-muted-foreground focus:outline-none p-4 pt-6 placeholder-transparent"
          placeholder="Location"
        />
        <label
          for="location"
          class="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
        >
          Location
        </label>
      </div>

      <!-- Price Range Select -->
      <div class="relative flex-1">
        <select
          v-model="price"
          id="price"
          class="peer w-full rounded-xl border border-gray-500 focus:ring-2 focus:ring-muted-foreground focus:outline-none p-4 pt-6 appearance-none"
        >
          <option value="" disabled selected hidden></option>
          <option value="">Any</option>
          <option value="500-1000">£500 - £1,000</option>
          <option value="1000-1500">£1,000 - £1,500</option>
          <option value="1500+">£1,500+</option>
        </select>
        <label
          for="price"
          class="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
        >
          Price Range
        </label>
      </div>

      <!-- Search Button -->
      <div class="md:w-auto w-full flex">
        <button
          type="submit"
          class="bg-primary cursor-pointer text-white rounded-xl px-6 py-3 font-semibold hover:bg-primary-darker transition w-full md:h-auto md:min-h-full"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const location = ref('');
const price = ref('');

const handleSearch = () => {
  console.log('Searching for:', {
    location: location.value,
    price: price.value,
  });
  // Emit or integrate with your backend/API logic here
};
</script>
