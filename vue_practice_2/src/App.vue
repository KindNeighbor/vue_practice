<script>
import Menu from './components/Menu.vue'
import Home from './components/Home.vue'
import List from './components/List.vue'
import data from './assets/blog.js'

export default {
  name: 'App',
  data() {
    return {
      posts: data,
      menus: [
        { name: 'Home', path: '/' },
        { name: 'List', path: '/list' }
      ]
    }
  },
  components: {
    List,
    Home,
    Menu
  }
}
</script>

<template>

  <Menu :menus="menus"></Menu>

  <Home></Home>

  <router-view :posts="posts"></router-view>

<!--  <List :posts="posts"></List>-->
</template>

<style scoped>

</style>
