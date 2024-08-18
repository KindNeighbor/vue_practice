<template>
  <div>
<!--    <div class="start" :class="{ end : modalCheck }">-->
<!--      <Modal-->
<!--          :show="modalCheck"-->
<!--          :product="products[selectedData]"-->
<!--          @close="modalCheck = false"-->
<!--      />-->
<!--    </div>-->
    <Transition name="fade">
      <Modal
          v-if="modalCheck && selectedData !== -1"
          :show="modalCheck"
          :product="products[selectedData]"
          @close="modalCheck = false"
      />
    </Transition>
    <div class="center">
      <button @click="$emit('priceSort')">가격순 정렬</button>
      <button @click="$emit('sortBack')">되돌리기</button>
    </div>
    <br/>
    <div v-for="(item, i) in products" :key="i" class="product-item">
      <img @click="showModal(i)" :src="products[i].image" class="room-img">
      <h4 @click="showModal(i)">{{ products[i].title }}</h4>
      <p>{{ products[i].price }} 원</p>
      <br/>
      <button @click="increase(i)">신고</button>
      <span>신고수: {{ reports[i] }}</span>
    </div>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: 'Product',
  components: {
    Modal
  },
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
    },
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

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}

.center {
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