<template>
  <div class="flex flex-col rounded-lg bg-white p-5 shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)]">
    <div class="flex flex-1 flex-col gap-4">
      <h1>
        <slot name="title" />
      </h1>
      <div class="flex-1">
        <slot name="content" />
      </div>
    </div>
    <slot name="footer" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
})
</script>
