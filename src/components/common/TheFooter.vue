<template>
  <footer class="fixed inset-x-0 bottom-0 bg-primary-100 text-sm text-slate-900">
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

      <div class="text-slate-600">{{ $t('footer.copyright', { year }) }}</div>
    </div>
  </footer>
</template>

<script setup>
import { EMAIL, SKILL_LIST } from '@/constant/common'

import moment from 'moment'

const year = moment().year()
</script>
