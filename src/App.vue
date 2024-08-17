<template>
  <div>
    <Menu :menus="menus"/>
    <br/>
    <Discount/>
    <br/>
    <Product :products="products"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Product from './components/Product.vue';
import Discount from "./components/Discount.vue";
import roomData from './assets/roomdata.js';

export default {
  name: 'App',
  components: {
    Menu,
    Discount,
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
