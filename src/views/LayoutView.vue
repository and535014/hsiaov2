<template>
  <div class="flex h-screen flex-col">
    <Navbar />
    <main class="flex-1" :style="wrapperStyle">
      <RouterView v-slot="{ Component }">
        <transition mode="out-in" name="router" class="flex-1">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { PAGE_TITLE } from '@/constant/common'
import { useLayoutStore } from '@/stores/layout'

import TheFooter from '@/components/common/TheFooter.vue'
import Navbar from '@/components/common/Navbar.vue'

const route = useRoute()
const { wrapperStyle } = storeToRefs(useLayoutStore())

function loadPageTitle() {
  document.title = route.meta?.title || PAGE_TITLE
}

watch(route, () => {
  loadPageTitle()
})

loadPageTitle()
</script>
