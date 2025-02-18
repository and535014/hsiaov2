export const useLayoutStore = defineStore('layout', () => {
  const wrapperStyle = ref({
    padding: '0px',
  })

  const scrollY = ref(0)

  return { wrapperStyle, scrollY }
})
