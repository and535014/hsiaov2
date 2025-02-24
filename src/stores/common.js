import { LINKS } from '@/constant/common'

export const useCommonStore = defineStore('common', () => {
  const openResumeFile = () => {
    window.open(LINKS.RESUME, '_blank')
  }

  return { openResumeFile }
})
