<template>
  <div v-if="show" class="black-bg">
    <div class="white-bg">
      <img :src="product.image" class="room-img2">
      <h4>{{ product.title }}</h4>
      <p>{{ product.content }}</p>
      <input v-model="month">
<!--      <input @input="month = $event.target.value">-->
      <p>{{ month }} 개월 선택함 : {{ product.price * month}} 원</p>
      <button @click="$emit('close')">닫기</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  data() {
    return {
      month: 1
    }
  },
  watch : {
    month(a) {
      if (a > 12 || a <= 0) {
        alert('1 ~ 12 사잇값만 입력해주세요.');
        this.month = 1;
      }

      if (isNaN(a) == true) {
        alert('숫자만 입력해주세요.');
        this.month = 1;
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  }
}

</script>

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

.room-img2 {
  width: 256px;
  height: 128px;
  object-fit: cover;
}

</style>