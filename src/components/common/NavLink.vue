<template>
  <RouterLink :to="to" class="relative px-4 py-3">
    <div
      :class="[
        'text-center text-xl font-bold tracking-wide hover:text-primary-800',
        {
          'hover:text-primary-800': isActive,
          'text-slate-600 opacity-60 hover:text-primary-800': !isActive,
        },
      ]"
    >
      {{ label }}
    </div>
    <transition name="slide" mode="out-in">
      <div
        v-show="isActive"
        class="absolute inset-x-4 bottom-1.5 h-1 rounded-full bg-primary-800 opacity-60"
      ></div>
    </transition>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<style lang="postcss" scoped>
.slide-enter-active,
.slide-leave-active {
  @apply origin-left scale-100 transition-all duration-300;
}
.slide-enter-from,
.slide-leave-to {
  @apply scale-0;
}
</style>
