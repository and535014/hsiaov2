import TheIcon from '@/components/common/TheIcon.vue'
import TheTag from '@/components/common/TheTag.vue'
import TheButton from '@/components/common/TheButton.vue'
import TheCard from '@/components/common/TheCard.vue'

function components(app) {
  app.component('Icon', TheIcon)
  app.component('Tag', TheTag)
  app.component('Button', TheButton)
  app.component('Card', TheCard)
}

export default components
