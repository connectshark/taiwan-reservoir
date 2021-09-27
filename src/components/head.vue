<template>
<header class="header">
  <h1 class="title">
    <router-link to="/" class="link">{{title}}</router-link>
  </h1>
  <nav>
    <ul class="link-group">
      <li v-for="link in nav" :key="link.path" class="link-item">
        <router-link :to="link.path" class="link">{{link.name}}</router-link>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  setup () {
    return {
      title: '台灣水庫即時水情',
      nav: [
        {
          path: '/about',
          name: '作者'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  background-color: #831843;
  .title{
    text-align: center;
    .link{
      font-size: 36px;
      line-height: 2;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
  }
  .link-group{
    text-align: center;
    .link-item{
      display: inline-block;
      .link{
        font-size: 20px;
        text-decoration: none;
        color: #fff;
        line-height: 1.1;
        font-weight: 500;
      }
      &:hover{
        .link{
          text-decoration: underline;
        }
      }
    }
  }
}
</style>