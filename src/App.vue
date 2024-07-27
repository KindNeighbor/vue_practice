<template>
  <div class="black-bg" v-if="modalCheck === true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="modalCheck = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{menu}}</a>
  </div>
  <br/>
  <div v-for="(item, i) in products" :key="i" class="product-item">
    <img :src="products[i].image" class="room-img">
    <h4 @click="modalCheck = true">{{products[i].title}}</h4>
    <p>{{products[i].price}} 원</p>
    <div>{{products[i].content}}</div>
    <br/>
    <button @click="increase(i)">신고</button>
    <span>신고수 : {{reports[i]}}</span>
  </div>
</template>

<script>
import roomData from './assets/roomdata.js';

export default {
  name : 'App',
  data(){
    return {
      products: roomData,
      prices: [100, 200, 300],
      menus: ['Home', 'Shop', 'About'],
      reports : [0, 0, 0],
      modalCheck : false
    }
  },

  methods : {
    increase(i) {
      this.reports[i] += 1;
    },
    // getImageSrc(index) {
    //   return new URL(`./assets/room${index}.jpg`, import.meta.url).href;
    // }
  }
}

</script>

<style scoped>

body {
  margin : 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.product-item {
  margin-bottom: 100px;
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

.room-img {
  width: 512px;
  height: 256px;
  object-fit: cover;
}

</style>
