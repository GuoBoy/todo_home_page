import { defineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/global.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-cmn-Hans"
      },
      bodyAttrs: {
        class: "body"
      },
      title: "ToDo"
    }
  },
  ssr: false,
})
