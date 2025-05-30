<template>
  <ul>
    <li ref="refList" v-for="(content, index) in items" :key="index" class="flex">
      <div class="bar dot date">
        <h2 class="date-animation leading-none">{{ content.year }}</h2>
        <h3 class="date-animation leading-none text-gray-500 delay-75">
          {{ content.month }}
        </h3>
      </div>
      <div class="content content-animation bg-white hover:bg-primary-100">
        <h2 class="content-animation text-primary-800 delay-75">
          {{ content.title }}
        </h2>
        <p v-html="content.description" class="content-animation text-lg delay-100"></p>
        <ul
          class="content-animation flex list-outside list-disc flex-col gap-1 pl-6 text-gray-500 delay-150"
        >
          <li v-for="(item, itemIndex) in content.items" :key="itemIndex">
            {{ item }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
  },
})

const refList = ref([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-show')
        } else if (entry.boundingClientRect.top >= 0) {
          entry.target.classList.remove('is-show')
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  refList.value.forEach((item) => observer.observe(item))
})
</script>

<style lang="postcss" scoped>
.date {
  @apply relative flex flex-col items-end gap-1 pr-6;
}

.date-animation {
  @apply -translate-x-6 opacity-0 transition-all duration-1000;
}

.is-show .date-animation {
  @apply translate-x-0 opacity-100;
}

.content {
  @apply mb-12 ml-8 flex flex-1 flex-col gap-3 overflow-hidden rounded-md border-l-8 border-primary-200 px-3 pb-4 pt-3 opacity-0 shadow-[0_0px_25px_rgba(0,0,0,0.20)];
}

.content-animation {
  @apply translate-x-16 opacity-0 transition-all duration-1000;
}

.is-show .content-animation {
  @apply translate-x-0 opacity-100;
}

.dot {
  @apply after:absolute after:right-0 after:top-1 after:size-5 after:translate-x-1/2 after:rounded-full after:bg-gray-500 after:opacity-0 after:transition-opacity after:duration-1000 after:content-[''];
}

.is-show .dot {
  @apply after:opacity-100;
}

.bar {
  @apply before:absolute before:right-0 before:top-2 before:block before:h-full before:w-2 before:origin-top before:translate-x-1/2 before:scale-y-0 before:rounded-md before:bg-gray-400 before:opacity-0 before:transition-all before:delay-75 before:duration-1000 before:content-[''];
}

.is-show .bar {
  @apply before:scale-y-100 before:opacity-100;
}
</style>
