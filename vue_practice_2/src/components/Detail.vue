<script>
export default {
  props: {
    posts : Array
  }
}
</script>

<template>
  <div>
    <h4>상세 페이지</h4>
    <h5>{{ posts[$route.params.id].title }}</h5>
    <p>{{ posts[$route.params.id].content }}</p>
  </div>

</template>

<style scoped>

</style>