<template>
<div class="item">
  <Wave :percent="percent"/>
  <h4 class="title">{{name}}</h4>
  <p class="time">{{time}}</p>
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
.item{
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  color: #333;
  text-align: center;
  background-color: #EFF6FF;
  .title{
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
  }
  .time{
    font-size: 18px;
    line-height: 1.1;
  }
}
</style>