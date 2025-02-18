<template>
  <footer class="bg-primary-100 text-sm">
    <div class="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 pb-8 pt-4">
      <div class="mb-8 flex flex-col gap-4">
        <p class="text-xs">{{ $t('footer.skill_hint') }}</p>
        <div class="flex gap-2">
          <Tag v-for="skill in SKILL_LIST" :key="skill" :value="skill" rounded />
        </div>
      </div>
      <div>
        <span>{{ `${$t('label.email')}: ` }}</span>
        <a :href="`mailto:${EMAIL}`" class="underline">{{ EMAIL }}</a>
      </div>

      <hr class="border-slate-300" />

      <div class="flex items-center justify-between text-slate-600">
        <span>
          {{ $t('footer.copyright', { year }) }}
        </span>
        <span>v{{ version }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { EMAIL, SKILL_LIST } from '@/constant/common'

import moment from 'moment'

const version = __APP_VERSION__
const year = moment().year()
</script>
