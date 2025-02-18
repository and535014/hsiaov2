<template>
  <nav
    ref="navRef"
    class="fixed inset-x-0 top-0 z-10 rounded-full bg-white p-4 transition-all duration-500"
    :class="{ 'mx-4 my-3 shadow-lg': scrollY > 0 }"
  >
    <div class="mx-auto flex max-w-screen-xl items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-4">
        <img
          :src="IMAGES.LOGO"
          class="hover:outline-primary-800/40 aspect-square w-10 rounded-full hover:outline hover:outline-[3px] hover:outline-offset-0"
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

import NavLink from '@/components/common/NavLink.vue'

const { t } = useI18n()
const { wrapperStyle, scrollY } = storeToRefs(useLayoutStore())

const navRef = ref(null)

const routes = computed(() => {
  return ROUTE_LIST.map((route) => ({
    to: `/${route}`,
    label: t(`routes.${route}`),
  }))
})

const openResumeFile = () => {
  window.open(LINKS.RESUME, '_blank')
}

const updateWrapperStyle = () => {
  if (navRef.value) {
    wrapperStyle.value = { paddingTop: `${navRef.value.clientHeight}px` }
  }
}

onMounted(() => {
  updateWrapperStyle()
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>
