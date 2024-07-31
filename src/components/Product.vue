<script>
export default {
  name: 'ProductComponent',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      reports: Array(this.products.length).fill(0),
      modalCheck: false,
      selectedData: -1
    }
  },
  methods: {
    increase(i) {
      this.reports[i] += 1;
    },
    showModal(i) {
      this.selectedData = i;
      this.modalCheck = true;
    }
  }
}
</script>

<template>
  <div>
    <div v-if="modalCheck" class="black-bg">
      <div class="white-bg">
        <img :src="products[selectedData].image" class="room-img2">
        <h4>{{ products[selectedData].title }}</h4>
        <p>{{ products[selectedData].content }}</p>
        <p>{{ products[selectedData].price }}</p>
        <button @click="modalCheck = false">닫기</button>
      </div>
    </div>
    <div v-for="(item, i) in products" :key="i" class="product-item">
      <img @click="showModal(i)" :src="products[i].image" class="room-img">
      <h4 @click="showModal(i)">{{ products[i].title }}</h4>
      <p>{{ products[i].price }}</p>
      <br/>
      <button @click="increase(i)">신고</button>
      <span>신고수: {{ reports[i] }}</span>
    </div>
  </div>
</template>

<style scoped>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.product-item {
  margin-bottom: 100px;
  text-align: center;
}

.room-img {
  width: 512px;
  height: 256px;
  object-fit: cover;
}

.room-img2 {
  width: 256px;
  height: 128px;
  object-fit: cover;
}
</style>