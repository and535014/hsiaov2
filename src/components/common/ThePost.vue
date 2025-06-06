<template>
  <article
    class="flex min-h-96 justify-end rounded-lg bg-white p-4 shadow-md"
    :style="wrapperStyle"
  >
    <Card class="max-w-md">
      <template #title>{{ title }}</template>
      <template #content>
        <p class="mb-3">{{ subtitle }}</p>
        <div class="flex flex-wrap gap-1">
          <Tag v-for="(tag, index) in tags" :key="index" :value="tag" rounded />
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2">
          <Button
            :label="$t('button.more_info')"
            :severity="BUTTON_SEVERITY.Primary"
            class="flex-1"
            @click="goDetailPage"
          />
          <Button
            v-if="url"
            :label="$t('button.forward')"
            :severity="BUTTON_SEVERITY.Neutral"
            class="flex-1"
            @click="openUrl(url)"
          />
        </div>
      </template>
    </Card>
  </article>
</template>

<script setup>
import useNavigation from '@/composables/common/navigation'
import { BUTTON_SEVERITY, BUTTON_SIZE } from '@/constant/form'

const props = defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  cover: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  url: {
    type: String,
  },
})

const { navigateTo, openUrl } = useNavigation()

const wrapperStyle = computed(() => ({
  backgroundImage: `url('${props.cover}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
}))

function goDetailPage() {
  navigateTo(`/projects/${props.id}`)
}
</script>
