import { EXPERIENCE_LIST } from '@/database/experiences'
import { ABOUT_SKILL_LIST } from '@/database/skills'

export const useAboutStore = defineStore('about', () => {
  const skillList = ref(ABOUT_SKILL_LIST)
  const experienceList = ref(EXPERIENCE_LIST)

  return { skillList, experienceList }
})
