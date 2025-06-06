<template>
  <section class="mx-auto grid max-w-screen-xl gap-8 px-4 pb-6" :style="wrapperStyle">
    <Post v-for="project in projectList" :key="project.id" v-bind="project" />
  </section>
</template>

<script setup>
import { useLayoutStore } from '@/stores/layout'
import { useProjectsStore } from '@/stores/projects'

const { wrapperStyle } = storeToRefs(useLayoutStore())
const { projectList } = storeToRefs(useProjectsStore())
</script>

<style></style>
