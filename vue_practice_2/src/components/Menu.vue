<script>
export default {
  name: 'Menu',
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
<!--  <div class="menu">-->
<!--    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>-->
<!--  </div>-->
  <div class="menu">
    <router-link
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.path"
    >
      {{ menu.name }}
    </router-link>
  </div>
</template>

<style scoped>

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

</style>