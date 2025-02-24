import { ABOUT_SKILL_LIST } from '@/database/skills'

export const useAboutStore = defineStore('about', () => {
  const skillList = ref(ABOUT_SKILL_LIST)

  return { skillList }
})
