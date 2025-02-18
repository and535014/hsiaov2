export default function useNavigation() {
  const router = useRouter()

  const navigateTo = (path) => {
    router.push(path)
  }
  return { navigateTo }
}
