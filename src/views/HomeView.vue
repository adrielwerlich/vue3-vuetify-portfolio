<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { projects } from '@/assets/Projects.js'
// console.log('projects', projects)

import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// console.log('locale', locale.value)
</script>

<template>
  <main>
    <HelloWorld :msg="$t('message.hello')" />

    <v-container>
      <v-row>
        <template v-for="(project, index) in projects" :key="index">
          <v-col cols="12" sm="6" md="4" v-show="locale === project.fields.language">
            <v-card
              height="200"
              style="
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
              "
            >
              <img
                :src="project.fields.Image"
                alt="Project Image"
                height="100"
                style="position: relative; width: fit-content; align-self: center; bottom: 25px"
              />

              <v-tooltip :text="project.fields.Body" location="bottom">
                <template v-slot:activator="{ props }">
                  <h4 v-bind="props">{{ project.fields.Title }}</h4>
                </template>
              </v-tooltip>

              <v-btn :href="project.fields.link" target="_blank" color="primary">
                {{ $t('message.seeMore') }}
              </v-btn>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </main>
</template>
