<template>
  <div class="overflow-hidden rounded-lg bg-white shadow-md">
    <h2 class="bg-primary-100 px-4 py-2.5 text-primary-800">
      {{ title }}
    </h2>
    <div>
      <ul class="list-inside list-disc px-3 pb-4 pt-1">
        <li v-for="(item, index) in items" :key="index" class="p-1">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  items: {
    type: Array,
  },
})
</script>
