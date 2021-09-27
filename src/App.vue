<template>
  <Head/>
  <router-view></router-view>
</template>

<script>
import Head from './components/head.vue'
export default {
  name: 'App',
  components: {
    Head
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Mono', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
