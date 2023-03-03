<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { LAYOUT_DEFAULT } from './constants'

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout || LAYOUT_DEFAULT)
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>>