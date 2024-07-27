<template>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{menu}}</a>
  </div>
  <br/>
  <div v-for="(item, i) in products" :key="i" class="product-item">
    <h4>{{products[i]}}</h4>
    <p>100만원</p>
    <button @click="increase(i)">신고</button>
    <span>신고수 : {{reports[i]}}</span>
  </div>
</template>

<script>
export default {
  name : 'App',
  data(){
    return {
      products: ['A', 'B', 'C'],
      prices: [100, 200, 300],
      menus: ['Home', 'Shop', 'About'],
      reports : [0, 0, 0]
    }
  },

  methods : {
    increase(i) {
      this.reports[i] += 1;
    }
  }
}

</script>

<style scoped>
.product-item {
  margin-bottom: 16px; /* 원하는 간격으로 조정 */
}

.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
