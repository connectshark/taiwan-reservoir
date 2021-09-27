<template>
<div class="item">
  <h4>{{name}}</h4>
  <Wave :percent="percent"/>
  <p>{{time}}</p>
</div>
</template>

<script>
import Wave from './wave.vue'
export default {
  components: {
    Wave
  },
  props: {
    name: {
      type: String
    },
    percent: {
      type: Number,
      default: 50
    },
    time: {
      type: String
    }
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>