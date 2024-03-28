import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const language = ref(
    navigator.language.startsWith('pt') || navigator.userLanguage.startsWith('pt') ? 'pt' : 'en'
  ) // Default language is English

  function setLanguage(lang) {
    language.value = lang
  }

  return { language, setLanguage }
})
