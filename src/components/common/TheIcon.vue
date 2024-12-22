<template>
  <svg :width="size" :height="height || size" viewBox="0 0 1024 1024">
    <use :href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup>
import 'virtual:svg-icons-register'

defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: '1rem',
  },
  height: {
    type: [String],
  },
})
</script>
