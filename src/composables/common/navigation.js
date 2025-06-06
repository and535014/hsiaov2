export default function useNavigation() {
  const router = useRouter()

  function navigateTo(path) {
    router.push(path)
  }

  function openUrl(url) {
    window.open(url, '_blank')
  }

  return { navigateTo, openUrl }
}
