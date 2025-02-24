<template>
  <nav
    ref="navRef"
    class="fixed inset-x-0 top-0 z-10 mx-4 transition-all duration-500"
    :class="{ 'top-3': scrollY > 0 }"
  >
    <div
      class="mx-auto flex max-w-screen-xl items-center justify-between rounded-full bg-white px-4 py-2.5 transition-all duration-500"
      :class="{ 'shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)]': scrollY > 0 }"
    >
      <RouterLink to="/" class="group flex items-center gap-4">
        <img
          :src="IMAGES.LOGO"
          class="aspect-square w-10 rounded-full group-hover:outline group-hover:outline-4 group-hover:outline-offset-0 group-hover:outline-primary-200"
          placeholder
        />
        <div class="text-primary-950 text-xl font-bold">{{ $t('general.logo') }}</div>
      </RouterLink>
      <div class="flex items-center gap-3">
        <div class="flex items-center">
          <NavLink v-for="{ to, label } in routes" :key="to" :to="to" :label="label" />
        </div>
        <Button
          :label="$t('button.resume')"
          rounded
          :severity="BUTTON_SEVERITY.Neutral"
          icon="common-external_link"
          :icon-pos="DIRECTION.Right"
          @click="openResumeFile"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { DIRECTION, IMAGES, LINKS } from '@/constant/common'
import { ROUTE_LIST } from '@/constant/routes'
import { BUTTON_SEVERITY } from '@/constant/form'
import { useLayoutStore } from '@/stores/layout'
import { useCommonStore } from '@/stores/common'

import NavLink from '@/components/common/NavLink.vue'

const { t } = useI18n()
const { wrapperStyle, scrollY } = storeToRefs(useLayoutStore())
const { openResumeFile } = useCommonStore()

const navRef = ref(null)

const routes = computed(() => {
  return ROUTE_LIST.map((route) => ({
    to: `/${route}`,
    label: t(`routes.${route}`),
  }))
})

const updateWrapperStyle = () => {
  if (navRef.value) {
    wrapperStyle.value = { paddingTop: `${navRef.value.clientHeight + 32}px` }
  }
}

onMounted(() => {
  updateWrapperStyle()
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>
