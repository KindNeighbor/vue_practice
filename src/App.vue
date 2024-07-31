<template>
  <div>
    <Menu :menus="menus"/>
    <br/>
    <Product :products="products"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Product from './components/Product.vue';
import roomData from './assets/roomdata.js';

export default {
  name: 'App',
  components: {
    Menu,
    Product
  },
  data() {
    return {
      products: roomData,
      menus: ['Home', 'Shop', 'About']
    }
  }
}
</script>

<style scoped>

body {
  margin: 0;
}

div {
  box-sizing: border-box;
  place-items: center;
}

</style>
