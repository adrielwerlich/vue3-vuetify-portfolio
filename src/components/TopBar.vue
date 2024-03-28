<template>
  <v-app-bar>
    <v-app-bar-title>Vue 3 + Vuetify app</v-app-bar-title>
    <v-spacer></v-spacer>
    <span>
      {{ $t('message.translate') }}
    </span>
    <ArrowsSlidingAnimation />
    <v-btn icon @click="toggleLanguage">
      <v-icon>
        <img v-if="locale === 'pt'" src="@/assets/images/flag-brazil.png" alt="Your Image" />
        <img v-else src="@/assets/images/flag-usa.png" alt="Your Image" />
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ArrowsSlidingAnimation from '@/components/ArrowsSlidingAnimation.vue'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'pt' : 'en'
}
</script>
