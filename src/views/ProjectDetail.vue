<template>
  <div :style="wrapperStyle">
    <template v-if="project">
      <div :style="coverStyle" class="h-72"></div>
      <div class="mx-auto grid max-w-screen-xl gap-4 px-4 pb-6">
        <header class="grid grid-cols-2 gap-4 border-b-2 border-gray-200 px-4 py-6">
          <div class="flex flex-col gap-4">
            <h1>{{ project.title }}</h1>
            <div class="flex flex-wrap gap-2">
              <Tag v-for="tag in project.tags" :key="tag" :value="tag" />
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-xl">{{ project.subtitle }}</p>
            <div class="flex justify-end gap-2">
              <Button
                v-if="project.url"
                :label="$t('button.forward')"
                :severity="BUTTON_SEVERITY.Primary"
                @click="openUrl(project.url)"
              />
              <Button
                v-if="project.github"
                :label="$t('button.github')"
                :severity="BUTTON_SEVERITY.Neutral"
                @click="openUrl(project.github)"
              />
            </div>
          </div>
        </header>
        <p class="text-lg">{{ project.description }}</p>
        <div v-if="project.video" class="mx-auto aspect-video w-full max-w-screen-lg">
          <iframe :src="project.video" frameborder="0" allowfullscreen class="h-full w-full" />
        </div>
        <img
          v-for="img in project.images"
          :src="img.path"
          alt="project image"
          :key="img"
          class="w-full"
        />
      </div>
    </template>
    <div v-else>找不到資料</div>
  </div>
</template>

<script setup>
import useNavigation from '@/composables/common/navigation'
import { BUTTON_SEVERITY } from '@/constant/form'
import { useLayoutStore } from '@/stores/layout'
import { useProjectsStore } from '@/stores/projects'

const { wrapperStyle } = storeToRefs(useLayoutStore())
const { getProjectById } = useProjectsStore()
const { openUrl } = useNavigation()
const route = useRoute()

const id = route.params.id
const project = ref(null)

const coverStyle = computed(() => ({
  backgroundImage: `url('${project.value.cover}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
}))

function loadData() {
  project.value = getProjectById(id)
}

loadData()
</script>

<style></style>
