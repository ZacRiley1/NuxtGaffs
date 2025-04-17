<template>
  <footer class="bg-muted text-muted-foreground py-12 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo + About -->
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-foreground">HallSwap</h3>
        <p>
          Swapping student halls made easy. Simple, transparent, and
          trustworthy.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-semibold text-foreground mb-2">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-primary">Home</a></li>
          <li><a href="#" class="hover:text-primary">How it Works</a></li>
          <li><a href="#" class="hover:text-primary">FAQ</a></li>
          <li><a href="#" class="hover:text-primary">Contact</a></li>
        </ul>
      </div>

      <!-- Social / Contact -->
      <div>
        <h4 class="font-semibold text-foreground mb-2">Follow Us</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-primary">Instagram</a></li>
          <li><a href="#" class="hover:text-primary">Twitter</a></li>
          <li><a href="#" class="hover:text-primary">LinkedIn</a></li>
        </ul>
      </div>
    </div>

    <div class="text-center text-xs mt-12 text-muted-foreground/60">
      &copy; {{ new Date().getFullYear() }} HallSwap. All rights reserved.
    </div>
  </footer>
</template>
