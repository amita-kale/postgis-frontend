// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ["mapbox-gl/dist/mapbox-gl.css", "v-mapbox/dist/v-mapbox.css"],
  js: ["https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js"],
});
