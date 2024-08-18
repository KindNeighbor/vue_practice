<script>
export default {
  name: "List",
  props: {
    posts: Array
  }
}
</script>

<template>
  <div v-for="(item, i) in posts" :key="i">
    <h5>{{ posts[i].title }}</h5>
    <p>{{ posts[i].content }}</p>
    <p>{{ posts[i].date }}</p>
    <br/>
  </div>
</template>

<style scoped>

</style>