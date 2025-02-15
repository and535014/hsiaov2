<template>
  <div :class="{ dark: isDarkMode }">
    <RouterView v-slot="{ Component }">
      <transition mode="out-in" name="router" class="flex-1">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
const isDarkMode = ref(false)
</script>

<style>
.router-enter-from,
.router-leave-to {
  opacity: 0;
}

.router-enter-active {
  transition: opacity 150ms ease-out;
}

.router-leave-active {
  transition: opacity 150ms ease-in;
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
}
</style>
