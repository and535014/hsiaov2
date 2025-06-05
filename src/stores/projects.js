import { PROJECT_LIST } from '@/database/projects'

export const useProjectsStore = defineStore('projects', () => {
  const projectList = ref(PROJECT_LIST)

  return { projectList }
})
