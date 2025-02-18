<template>
  <button :type="type" :disabled="disabled" :class="btnClass">
    <div v-if="loading || icon || $slots.icon" class="flex size-6 items-center justify-center">
      <IconLoading v-if="loading" :class="loadingIconClass" />
      <Icon v-else-if="icon" :name="icon" :size="iconSize" />
      <slot v-else name="icon" />
    </div>
    {{ label }}
  </button>
</template>

<script setup>
import { BUTTON_SIZE, BUTTON_SEVERITY } from '@/constant/form'
import { DIRECTION } from '@/constant/common'

import IconLoading from '@/components/icons/IconLoading.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  label: {
    type: String,
  },
  severity: {
    type: String,
    default: BUTTON_SEVERITY.Primary,
    validator: (value) => Object.values(BUTTON_SEVERITY).includes(value),
  },
  size: {
    type: String,
    default: BUTTON_SIZE.Medium,
    validator: (value) => Object.values(BUTTON_SIZE).includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  danger: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  iconPos: {
    type: String,
    default: DIRECTION.Left,
    validator: (value) => Object.values(DIRECTION).includes(value),
  },
  iconSize: {
    type: [String, Number],
  },
})

const slots = useSlots()

const iconSize = computed(() => {
  if (props.iconSize) return props.iconSize
  return props.label ? 16 : 22
})
const loadingIconClass = computed(() => {
  if (props.iconSize) {
    return `size-[${props.iconSize}px]`
  }
  const sizeClass = props.label ? 'size-6' : 'size-4'
  return ['fill-green-500', sizeClass]
})
const btnClass = computed(() => {
  const sizeClass = !props.label
    ? `btn-${props.size}-icon`
    : props.icon || props.loading || slots.icon
      ? `btn-${props.size}-icon-${props.iconPos}`
      : `btn-${props.size}`
  const severityClass = props.danger ? `btn-${props.severity}-danger` : `btn-${props.severity}`
  const iconPosClass = `btn-icon-${props.iconPos}`
  return [
    'btn',
    sizeClass,
    iconPosClass,
    { 'cursor-not-allowed btn-disabled': props.disabled },
    { [severityClass]: !props.disabled },
    { 'rounded-full': props.rounded },
    { 'rounded-lg': !props.rounded },
  ]
})
</script>

<style lang="postcss" scoped>
.btn {
  @apply flex items-center justify-center gap-1 leading-none;
}

.btn-icon-right {
  direction: rtl;
}

.btn-icon-top {
  @apply flex-col;
}

.btn-icon-bottom {
  @apply flex-col-reverse;
}

.btn-medium {
  @apply px-3 py-2;
}

.btn-medium-icon,
.btn-medium-icon-top,
.btn-medium-icon-bottom {
  @apply p-2;
}

.btn-medium-icon-left {
  @apply py-2 pl-1.5 pr-3;
}

.btn-medium-icon-right {
  @apply py-2 pl-3 pr-1.5;
}

.btn-small {
  @apply px-2.5 py-1.5;
}

.btn-small-icon,
.btn-small-icon-top,
.btn-small-icon-bottom {
  @apply p-1;
}

.btn-small-icon-left {
  @apply py-1 pl-1.5 pr-2.5;
}

.btn-small-icon-right {
  @apply py-1 pl-2.5 pr-1.5;
}

.btn-primary {
  @apply border border-primary-800 bg-primary-800 text-white hover:border-primary-800 hover:bg-primary-900;
}

.btn-primary-danger {
  @apply border border-red-600 bg-red-500 text-red-100 hover:border-red-700 hover:bg-red-600;
}

.btn-neutral {
  @apply border border-slate-600 bg-white hover:bg-slate-300;
}

.btn-subtle {
  @apply border border-transparent hover:text-primary-800 hover:opacity-60;
}

.btn-subtle-danger {
  @apply border border-transparent text-red-700 hover:border-red-700 hover:bg-red-200;
}

.btn-disabled {
  @apply border border-primary-300 bg-primary-200 text-primary-300;
}
</style>
