import TheIcon from '@/components/common/TheIcon.vue'
import TheTag from '@/components/common/TheTag.vue'
import TheButton from '@/components/common/TheButton.vue'

function components(app) {
  app.component('Icon', TheIcon)
  app.component('Tag', TheTag)
  app.component('Button', TheButton)
}

export default components
