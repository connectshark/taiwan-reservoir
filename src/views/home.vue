<template>
  <main class="list-group">
    <Item v-for="item in data" :key="item.id"
      :percent="item.percent"
      :name="item.name"
      :time="item.time"
    />
  </main>
</template>

<script>
import { ref } from 'vue'
import Item from '../components/item.vue'
export default {
  components: {
    Item
  },
  setup () {
    const data = ref([])
    fetch('https://www.taiwanstat.com/waters/latest')
      .then(res => res.json())
      .then(res => {
        data.value = Object.values(res[0]).map(item => {
          return {
            id: item.id,
            name: item.name,
            time: item.updateAt,
            volumn: parseInt(item.volumn),
            percent: item.percentage
          }
        })
      })
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/media.scss';
.list-group{
  padding: 20px 0 0;
  display: grid;
  margin: auto;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  width: 1000px;
  grid-template-rows: auto;
  @include desktops {
    grid-template-columns: repeat(2, 1fr);
    width: 500px;
  }
  @include mobile {
    grid-template-columns: 1fr;
    width: 250px;
  }
}
</style>