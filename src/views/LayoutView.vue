<template>
  <div class="flex h-screen flex-col">
    <nav class="flex gap-3">
      <div @click="toPathHandler('about')">About</div>
      <div @click="toPathHandler('others')">Others</div>
    </nav>
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <transition mode="out-in" name="router" class="flex-1">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { PAGE_TITLE } from '@/constant/common'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function loadPageTitle() {
  document.title = route.meta?.title || PAGE_TITLE
}

function toPathHandler(path) {
  router.push(path)
}

watch(route, () => {
  loadPageTitle()
})

loadPageTitle()
</script>
