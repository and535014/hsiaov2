import { PROJECT_LIST } from '@/database/projects'

export const useProjectsStore = defineStore('projects', () => {
  const projectList = ref(PROJECT_LIST)

  function getProjectById(id) {
    return projectList.value.find((project) => project.id == id)
  }

  return { projectList, getProjectById }
})
