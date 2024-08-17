<template>
  <div>
    <Menu :menus="menus"/>
    <br/>
    <Discount/>
    <br/>
    <Product :products="products" @priceSort="priceSort" @sortBack="sortBack"/>
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
      originalProducts: [...roomData],
      menus: ['Home', 'Shop', 'About']
    }
  },
  methods: {
    sortBack() {
      this.products = [...this.originalProducts];
    },
    priceSort() {
      this.products.sort((a, b) => {
        return a.price - b.price;
      });
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
