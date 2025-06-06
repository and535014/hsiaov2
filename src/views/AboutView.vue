<template>
  <div class="mx-auto max-w-screen-xl px-4">
    <section class="h-screen-check relative flex flex-col items-start justify-center gap-10">
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
      <Button
        :label="$t('button.more')"
        :severity="BUTTON_SEVERITY.Subtle"
        icon="common-angle_down"
        class="absolute bottom-0 left-1/2 mb-6 inline-flex -translate-x-1/2 animate-bounce flex-col-reverse items-center gap-1 p-2 opacity-60 hover:text-primary-800"
        @click="scrollToSkills"
      />
    </section>
    <section ref="skillRef" class="min-h-screen-check">
      <h1 class="mb-8">{{ $t('about.skills.title') }}</h1>
      <div class="grid grid-cols-2 grid-rows-2 gap-8">
        <SkillCard
          v-for="skill in localeSkillList"
          :key="skill.title"
          :title="skill.title"
          :items="skill.items"
          class="auto-cols-fr transition-all duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>
    </section>
    <section class="min-h-screen-check">
      <h1 class="mb-8 text-center">{{ $t('about.experiences.title') }}</h1>
      <Timeline :items="experienceList" />
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
import SkillCard from '@/components/SkillCard.vue'
import Timeline from '@/components/common/Timeline.vue'

const { locale } = useI18n()
const { navigateTo } = useNavigation()
const { openResumeFile } = useCommonStore()
const { skillList, experienceList } = storeToRefs(useAboutStore())

const skillRef = ref(null)
const isEnglish = computed(() => locale.value === LOCALES.EN)

const localeSkillList = computed(() => {
  return skillList.value.map((skill) => ({
    title: isEnglish.value ? skill.title_en : skill.title,
    items: skill.items.map((item) => (isEnglish.value ? item.description_en : item.description)),
  }))
})

function scrollToSkills() {
  if (skillRef.value) {
    skillRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="postcss" scoped>
:deep(.text-highlight) {
  @apply mx-1 rounded-sm bg-primary-100 px-1 py-0.5 font-semibold;
}

section {
  @apply border-b border-gray-100 pb-12 pt-10;
}
</style>
