<template>
  <div class="mx-auto max-w-screen-lg">
    <section id="intro" class="h-screen-check flex flex-col items-start justify-center gap-10">
      <div>
        <h1 class="mb-3 text-4xl">{{ $t('about.intro.greeting') }}</h1>
        <p class="text-2xl text-slate-700" v-html="$t('about.intro.description')"></p>
      </div>
      <div class="flex gap-2">
        <Button
          :label="$t('button.resume')"
          :severity="BUTTON_SEVERITY.Primary"
          icon="common-external_link"
          :icon-pos="DIRECTION.Right"
          @click="openResumeFile"
        />
        <Button
          :label="$t('button.contact_me')"
          :severity="BUTTON_SEVERITY.Neutral"
          @click="navigateTo(ROUTES.CONTACT)"
        />
      </div>
      <a
        href="#skills"
        class="mx-auto inline-flex animate-bounce flex-col items-center gap-1 p-2 opacity-60 hover:text-primary-800"
      >
        <span>
          {{ $t('button.more') }}
        </span>
        <Icon name="common-angle_down" size="24" />
      </a>
    </section>
    <section id="skills" class="min-h-screen-check pb-8" :style="wrapperStyle">
      <h1 class="mb-4">{{ $t('about.skills.title') }}</h1>
      <div class="grid grid-cols-2 grid-rows-2 gap-8">
        <Card
          v-for="skill in localeSkillList"
          :key="skill.title"
          :title="skill.title"
          :items="skill.items"
          class="auto-cols-fr transition-all duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ROUTES } from '@/constant/routes'
import { DIRECTION, LOCALES } from '@/constant/common'
import { BUTTON_SEVERITY } from '@/constant/form'
import { useCommonStore } from '@/stores/common'
import { useAboutStore } from '@/stores/about'

import useNavigation from '@/composables/common/navigation'
import { useLayoutStore } from '@/stores/layout'

const { locale } = useI18n()
const { navigateTo } = useNavigation()
const { openResumeFile } = useCommonStore()
const { wrapperStyle } = storeToRefs(useLayoutStore())
const { skillList } = storeToRefs(useAboutStore())

const isEnglish = computed(() => locale.value === LOCALES.EN)

const localeSkillList = computed(() => {
  return skillList.value.map((skill) => ({
    title: isEnglish.value ? skill.title_en : skill.title,
    items: skill.items.map((item) => (isEnglish.value ? item.description_en : item.description)),
  }))
})
</script>

<style lang="postcss" scoped>
:deep(.text-highlight) {
  @apply mx-1 rounded-sm bg-primary-100 px-1 py-0.5 font-semibold;
}

section {
  @apply border-b border-gray-100;
}
</style>
