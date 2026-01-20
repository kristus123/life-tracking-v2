import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  build: {
    transpile: ['chart.js']
  },

  css: [
    '~/assets/main.css',
  ],

  server: {
    host: '0' // default: localhost
  },

  compatibilityDate: '2025-05-07',
})