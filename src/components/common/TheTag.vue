<template>
  <span class="bg-primary-200 px-2 py-1 text-sm leading-tight" :class="classes">
    {{ showContent }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: String,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  formatter: {
    type: Function,
  },
})

const showContent = computed(() => {
  return props.formatter?.(props.value) || props.value
})

const classes = computed(() => {
  return {
    'rounded-full': props.rounded,
  }
})
</script>
