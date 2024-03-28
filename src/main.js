import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import enMessages from '@/assets/locale/en'
import ptMessages from '@/assets/locale/pt'

const i18n = createI18n({
  legacy: false,
  locale:
    navigator.language.startsWith('pt') || navigator.userLanguage.startsWith('pt') ? 'pt' : 'en',
  messages: {
    en: enMessages,
    pt: ptMessages
  }
})

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)

app.mount('#app')
