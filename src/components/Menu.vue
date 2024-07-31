<script>
export default {
  name: 'MenuComponent',
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
</template>

<style scoped>

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}

.menu a {
  color: white;
  padding: 10px;
}

</style>