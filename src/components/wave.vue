<template>
<div class="wave-container" :title="percent + '%'">
  <div class="wave" :style="{ bottom: percent + '%' }"></div>
  <p class="percent">{{percent.toFixed(0)}}%</p>
</div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 50
    }
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/anims.scss';
$wave: 500px;
.wave-container {
  position: relative;
  background-color: #2A73FE;
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 60px;
  overflow: hidden;
  .wave {
    position: absolute;
    left: 0;
    bottom: 90%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    &:before {
      content: "";
      background-color: #fff;
      opacity: 0.5;
      border-radius: 45%;
      position: absolute;
      left: -75%;
      bottom: 5%;
      width: $wave;
      height: $wave;
      animation: spin 8s linear infinite;
    }
    &:after {
      content: "";
      background-color: #fff;
      opacity: 0.5;
      border-radius: 45%;
      position: absolute;
      left: -75%;
      bottom: 5%;
      width: $wave;
      height: $wave;
      animation: spin 10s linear infinite;
    }
  }
  .percent{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    font-weight: bold;
    color: #DBEAFE;
  }
}
</style>